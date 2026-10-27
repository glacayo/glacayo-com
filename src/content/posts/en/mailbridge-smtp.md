---
title: "WordPress Emails Not Showing Up? Meet MailBridge SMTP"
description: Why WordPress emails land in spam or vanish entirely, and how I built a free, simple, and secure SMTP plugin to fix it for good.
date: 2026-10-26
category: wordpress
translationKey: mailbridge-smtp
---

You've probably been there. A client messages you, a little worried: "Hey, I think the contact form is broken." You test it, the "Thanks for reaching out!" message pops up, and everything looks fine. But the email never arrives. Not in the inbox, not in spam, nowhere.

Or maybe it's worse. Your store is making sales, but customers never get their order confirmations. Someone tries to reset their password and the link never shows up. And the most frustrating part? WordPress doesn't tell you a thing. The emails just quietly disappear.

If that sounds familiar, don't worry. It's not your fault, and it's fixable. In this post I'll walk you through why it happens, how I built a tool to solve it, and why I think it might be exactly what you need.

## The real problem: WordPress sends email the old-school way

Out of the box, WordPress sends every email through `wp_mail()`, which hands the message off to PHP's built-in `mail()` function on whatever server hosts your site. Sounds reasonable, but in practice it causes a few headaches:

- **Your emails go out unauthenticated.** To Gmail, Outlook, and friends, a message that doesn't come from an authenticated mail server looks an awful lot like spam. So it either lands in the spam folder or gets rejected outright.
- **Plenty of hosts throttle or disable `mail()`.** They do it to prevent abuse, which means your emails might never leave the server at all.
- **You're flying blind.** When something breaks, WordPress won't tell you what went wrong or why.

The standard fix is to send email over **SMTP**. Instead of letting your server deliver messages however it can, WordPress connects to a real email provider (Gmail, Microsoft 365, SendGrid, or whatever you use), signs in with your credentials, and delivers the message through the front door.

## How MailBridge SMTP came to be

It all started with one very specific problem: a Contact Form 7 form whose messages weren't getting through. The first version of the plugin, back in April 2026, was exactly that: a secure SMTP add-on for Contact Form 7.

But I quickly realized the problem wasn't Contact Form 7. It was every email WordPress sends. Forms, WooCommerce notifications, new user sign-ups, password resets... they all go through the same pipe. So I broadened the plugin and turned it into **MailBridge SMTP**: a bridge between WordPress and your email provider.

### Why I built it: simple, practical, and free

There are some well-known SMTP plugins out there, but a lot of them have gotten bloated: settings pages packed with options, features locked behind a "Pro" tier, and constant nudges to upgrade. I wanted something different, built around three rules:

1. **Simple:** one screen, the fields you actually need, and nothing else.
2. **Practical:** when something breaks, it tells me clearly what's wrong.
3. **Actually free:** no paid version, no hidden features, and open source under the GPL.

## A look under the hood

Here comes the technical part, but I promise it's simpler than it sounds.

### One single hook

Under the hood, WordPress uses a library called PHPMailer to build and send emails. Right before each message goes out, it fires a hook called `phpmailer_init`. MailBridge hooks in at that moment and tells PHPMailer: "Skip `mail()`. Use this SMTP server with these credentials instead."

```php
public function configure_smtp( $phpmailer ) {
	$options = $this->get_options();

	if ( empty( $options['enabled'] ) || empty( $options['host'] ) ) {
		return;
	}

	$phpmailer->isSMTP();
	$phpmailer->Host = sanitize_text_field( $options['host'] );
	$phpmailer->Port = absint( $options['port'] );

	if ( 'none' !== $options['encryption'] ) {
		$phpmailer->SMTPSecure = $options['encryption'];
	}

	if ( ! empty( $options['authentication'] ) ) {
		$phpmailer->SMTPAuth = true;
		$phpmailer->Username = $options['username'];
		$phpmailer->Password = $this->decrypt_password( $options['password'] );
	}
	// ...sender details and debug mode
}
```

The upside? Since everything flows through `wp_mail()`, **there's no per-plugin setup**. Contact Form 7, WPForms, WooCommerce, your theme, or WordPress itself: if it uses `wp_mail()`, it's covered. And it doesn't pull in any extra dependencies, because it relies on the PHPMailer that already ships with WordPress.

### Your password, actually encrypted

This one mattered a lot to me. Many plugins store your SMTP password as plain text in the database. If someone ever gets a look at that table, they've got the keys to your email account.

MailBridge encrypts the password with **AES-256-GCM** before saving it. The key is derived from your WordPress install's unique salts, and every save uses a fresh random initialization vector:

```php
$key        = hash_hmac( 'sha256', wp_salt( 'auth' ), 'mailbridge_smtp_v1', true );
$iv         = random_bytes( openssl_cipher_iv_length( 'aes-256-gcm' ) );
$tag        = '';
$ciphertext = openssl_encrypt( $password, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag );
```

GCM also adds an authentication tag, so if anyone tampers with the stored value, decryption fails instead of quietly handing back garbage.

### Error messages that tell you what to do

This is my favorite part. When a test email fails, the SMTP server replies with something like `535 5.7.8 Authentication failed`. Great if you're an expert, cryptic for everyone else.

MailBridge sorts every failure into a clear category and tells you where to look:

| Category | Typical cause | What to check |
| --- | --- | --- |
| Authentication | Login rejected | Username and password (or app password) |
| Recipient | Server rejected the address | Your test email address |
| Sender | Server rejected the sender | The "From" address and your provider's sender permissions |
| Connection | Timed out or connection refused | Host, port, or firewall |
| TLS/SSL | Encryption handshake failed | Encryption type and certificate |

And it does all that without leaking anything sensitive. Raw server responses, passwords, usernames, email addresses, and auth data are all scrubbed before anything hits the screen.

### Diagnostics built right in

The same screen includes a diagnostics section that checks your server setup: PHP version, whether `mail()` is available, which functions are disabled, and your `sendmail` configuration. You can also fire off a test through plain `wp_mail()`, without SMTP, to compare results and confirm whether your host is the culprit.

And for those of us who live in the terminal, the repo ships with a command-line test suite that checks the connection step by step (DNS, TCP connection, server greeting, EHLO, STARTTLS, and authentication) without loading WordPress at all.

## Why you should use it (and why you can trust it)

Here's what you get:

- **It works with everything.** Any plugin or theme that uses `wp_mail()` is covered automatically.
- **Setup takes two minutes.** Head to **Tools → MailBridge SMTP**, fill in your host, port, encryption, and credentials, and send a test email.
- **It plays nice with the usual providers.** Gmail, Outlook/Microsoft 365, SendGrid, and any standard SMTP server, with or without SSL/TLS.
- **It helps you troubleshoot.** Clear errors, server diagnostics, and a debug mode that only kicks in when WordPress logging is turned on.
- **Free, no strings attached.** No Pro version, no ads, no locked features.

Now, I get it: installing a plugin that handles your email credentials takes some trust. So here's exactly how it's built:

- **Open source.** Everything lives on [GitHub](https://github.com/glacayo/mailbridge-smtp). You can read every line before you install it, and there's nothing hidden.
- **Secure by design.** Only administrators (`manage_options`) can view or change the settings. Every action is protected with nonces, and tests are rate-limited to one every 30 seconds per user.
- **Built to WordPress standards.** The code follows the WordPress Coding Standards and is ready for translation.
- **Automated secret scanning.** Every change to the repo runs through gitleaks so credentials never slip in by accident.
- **Up to date.** Tested with WordPress 7.1 and PHP 8.5. It requires WordPress 5.8+ and PHP 8.2+.
- **Cleans up after itself.** Uninstall it and it removes its settings and temporary data from the database. No leftovers.

And in the spirit of full transparency: for now it's built for single sites, so WordPress Multisite isn't supported yet.

## Give it a try

Grab the ZIP from the [latest release on GitHub](https://github.com/glacayo/mailbridge-smtp/releases/latest), upload it under **Plugins → Add New Plugin → Upload Plugin**, activate it, and set up your provider under **Tools → MailBridge SMTP**. Send a test email and you're done: your emails are back on track.

If you run into a bug or have an idea, open an issue on the repo. I'd love to hear from you. And if it helped you out, a star on GitHub is always appreciated.
