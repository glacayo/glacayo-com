---
title: Endurecer SSH en tu homelab en diez minutos
description: Llaves ed25519, contraseñas desactivadas, fail2ban y una alternativa con Tailscale SSH para no exponer el puerto 22.
date: 2026-09-14
category: security
translationKey: hardening-ssh
sample: true
---

Un servidor con SSH abierto a internet recibe intentos de acceso a los pocos minutos de encenderse. Estos son los cambios mínimos que aplico a cada máquina nueva.

## 1. Llaves en lugar de contraseñas

Genera una llave moderna en tu equipo y cópiala al servidor:

```bash
ssh-keygen -t ed25519 -C "laptop-2026"
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor
```

## 2. Configuración del servidor

Edita `/etc/ssh/sshd_config.d/10-hardening.conf`:

```bash
PasswordAuthentication no
PermitRootLogin no
KbdInteractiveAuthentication no
MaxAuthTries 3
AllowUsers usuario
```

Antes de cerrar la sesión actual, valida la configuración y abre **otra** terminal para comprobar que puedes entrar:

```bash
sudo sshd -t && sudo systemctl reload ssh
```

> Nunca cierres la única sesión abierta después de cambiar la configuración de SSH.

## 3. fail2ban

| Opción | Valor | Efecto |
| --- | --- | --- |
| `maxretry` | 3 | Intentos antes del bloqueo |
| `findtime` | 10m | Ventana de conteo |
| `bantime` | 1h | Duración del bloqueo |

```yaml
# /etc/fail2ban/jail.d/sshd.local (formato INI, mostrado como referencia)
sshd:
  enabled: true
  maxretry: 3
  findtime: 10m
  bantime: 1h
```

## 4. Mejor aún: no exponer el puerto

Si todos tus dispositivos están en Tailscale, puedes cerrar el puerto 22 en el firewall y usar `tailscale up --ssh`. El acceso queda ligado a tu identidad y no a una llave copiada en cualquier lado.
