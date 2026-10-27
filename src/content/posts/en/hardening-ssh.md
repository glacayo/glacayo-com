---
title: Hardening SSH on your homelab in ten minutes
description: ed25519 keys, passwords disabled, fail2ban and a Tailscale SSH alternative that avoids exposing port 22.
date: 2026-09-14
category: security
translationKey: hardening-ssh
sample: true
---

A server with SSH open to the internet gets login attempts within minutes of booting. These are the minimum changes I apply to every new machine.

## 1. Keys instead of passwords

Generate a modern key on your machine and copy it to the server:

```bash
ssh-keygen -t ed25519 -C "laptop-2026"
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server
```

## 2. Server configuration

Edit `/etc/ssh/sshd_config.d/10-hardening.conf`:

```bash
PasswordAuthentication no
PermitRootLogin no
KbdInteractiveAuthentication no
MaxAuthTries 3
AllowUsers user
```

Before closing the current session, validate the config and open **another** terminal to check you can still log in:

```bash
sudo sshd -t && sudo systemctl reload ssh
```

> Never close your only open session after changing the SSH configuration.

## 3. fail2ban

| Option | Value | Effect |
| --- | --- | --- |
| `maxretry` | 3 | Attempts before a ban |
| `findtime` | 10m | Counting window |
| `bantime` | 1h | Ban duration |

```yaml
# /etc/fail2ban/jail.d/sshd.local (INI format, shown for reference)
sshd:
  enabled: true
  maxretry: 3
  findtime: 10m
  bantime: 1h
```

## 4. Even better: do not expose the port

If all your devices are on Tailscale, you can close port 22 in the firewall and use `tailscale up --ssh`. Access is then tied to your identity instead of a key copied anywhere.
