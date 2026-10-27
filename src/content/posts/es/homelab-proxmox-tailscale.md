---
title: Mi homelab con Proxmox, Tailscale y un mini PC de 150 dólares
description: Inventario, red, backups y los errores que cometí antes de dejar estable un homelab pequeño y silencioso.
date: 2026-10-12
updated: 2026-10-20
updateNote: corregí la regla de firewall de Tailscale y agregué la sección de backups.
category: homelab
translationKey: homelab-proxmox-tailscale
sample: true
---

Quería un lugar en casa para probar servicios sin pagar una nube por cada experimento. El requisito era simple: **bajo consumo, silencioso y accesible desde cualquier lado** sin abrir puertos en el router.

## Inventario

| Equipo | Especificación | Uso |
| --- | --- | --- |
| Mini PC | N100, 16 GB RAM, NVMe 512 GB | Proxmox VE |
| Disco externo | 2 TB USB 3 | Backups |
| Router | Firmware de fábrica | Solo DHCP |

El mini PC consume alrededor de 8 W en reposo. En un año eso es menos de lo que cuesta un mes de una máquina virtual mediana.

## Red sin abrir puertos

Tailscale crea una red privada entre mis dispositivos. Instalarlo en el host de Proxmox toma un minuto:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --ssh --advertise-routes=192.168.1.0/24
```

Con `--advertise-routes` puedo llegar a las máquinas virtuales de la red local desde el teléfono, sin instalar Tailscale en cada una.

### La regla que me faltaba

En la primera versión olvidé aprobar la ruta en la consola de administración, y nada funcionaba. La política mínima que uso ahora:

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

> Un homelab sin backups es solo una forma lenta de perder datos.

Proxmox trae `vzdump`. Programo un respaldo nocturno al disco externo y conservo siete copias:

```bash
vzdump --all --mode snapshot --compress zstd \
  --storage usb-backup --prune-backups keep-last=7
```

## Errores que cometí

1. Instalar todo en el host en lugar de usar contenedores LXC.
2. No etiquetar las máquinas virtuales; a las dos semanas no sabía qué era cada una.
3. Confiar en que el disco USB siempre estaría montado.

El resultado es una caja del tamaño de un libro donde corren mis pruebas de agentes, un DNS local y este blog en modo de vista previa.
