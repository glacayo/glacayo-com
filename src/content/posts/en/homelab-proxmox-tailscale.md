---
title: My homelab with Proxmox, Tailscale and a 150-dollar mini PC
description: Inventory, networking, backups and the mistakes I made before a small, quiet homelab became stable.
date: 2026-10-12
updated: 2026-10-20
updateNote: fixed the Tailscale firewall rule and added the backups section.
category: homelab
translationKey: homelab-proxmox-tailscale
sample: true
---

I wanted a place at home to try services without paying a cloud bill for every experiment. The requirement was simple: **low power, quiet and reachable from anywhere** without opening ports on the router.

## Inventory

| Device | Spec | Role |
| --- | --- | --- |
| Mini PC | N100, 16 GB RAM, 512 GB NVMe | Proxmox VE |
| External drive | 2 TB USB 3 | Backups |
| Router | Stock firmware | DHCP only |

The mini PC idles at around 8 W. Over a year that is less than one month of a mid-size virtual machine.

## Networking without open ports

Tailscale builds a private network between my devices. Installing it on the Proxmox host takes a minute:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --ssh --advertise-routes=192.168.1.0/24
```

With `--advertise-routes` I can reach the local virtual machines from my phone without installing Tailscale on each of them.

### The rule I was missing

In the first version I forgot to approve the route in the admin console, and nothing worked. The minimal policy I use now:

```yaml
acls:
  - action: accept
    src: ["autogroup:member"]
    dst: ["192.168.1.0/24:*"]
ssh:
  - action: check
    src: ["autogroup:member"]
    dst: ["autogroup:self"]
    users: ["autogroup:nonroot"]
```

## Backups

> A homelab without backups is just a slow way to lose data.

Proxmox ships `vzdump`. I schedule a nightly backup to the external drive and keep seven copies:

```bash
vzdump --all --mode snapshot --compress zstd \
  --storage usb-backup --prune-backups keep-last=7
```

## Mistakes I made

1. Installing everything on the host instead of using LXC containers.
2. Not tagging the virtual machines; two weeks later I had no idea what each one was.
3. Trusting the USB drive to always be mounted.

The result is a book-sized box running my agent experiments, a local DNS and this blog in preview mode.
