---
title: Orquestar agentes de IA sin perder el control del contexto
description: Cómo dividí un flujo grande en subagentes con memoria persistente, qué límites puse y qué se rompió en el camino.
date: 2026-10-24
category: agents
translationKey: orchestrating-ai-agents
sample: true
---

Cuando un agente de IA tiene que leer veinte archivos, escribir cinco y correr las pruebas, el problema no es la inteligencia del modelo: es el **contexto**. Cada lectura ocupa espacio, y llega un punto en que el agente olvida lo que decidió al principio.

La solución que me funcionó fue tratar al agente principal como un **coordinador** y delegar el trabajo pesado en subagentes con tareas acotadas.

## El patrón coordinador / ejecutor

El coordinador mantiene un hilo corto: entiende la tarea, la divide y sintetiza resultados. Los ejecutores reciben un encargo autocontenido y devuelven un informe breve.

- El coordinador **no** lee archivos para explorar; pide un mapa.
- Cada ejecutor tiene una lista explícita de rutas que puede editar.
- Los resultados vuelven resumidos, nunca como volcados completos.

> Si un subagente necesita todo el historial de la conversación para trabajar, la tarea no estaba bien definida.

## Memoria persistente entre sesiones

Lo que más ayudó fue guardar decisiones en una memoria externa en lugar de confiar en la ventana de contexto. Un registro mínimo se ve así:

```ts
interface Observation {
  title: string;
  type: 'decision' | 'bugfix' | 'discovery';
  what: string;
  why: string;
  where: string[];
}

export async function remember(obs: Observation): Promise<void> {
  await memory.save({ ...obs, savedAt: new Date().toISOString() });
}
```

Al comenzar una sesión nueva, el agente busca primero en esa memoria y recién después explora el repositorio.

## Límites que conviene fijar

| Límite | Valor que uso | Motivo |
| --- | --- | --- |
| Archivos leídos en línea | 3 | Más que eso es exploración: se delega |
| Escritores en paralelo | 1 | Evita conflictos en el mismo árbol |
| Rondas de corrección | 1 | Obliga a especificar mejor la tarea |

## Qué se rompió

El primer intento falló porque le pedí a un solo subagente que construyera todo un sitio. Se quedó sin presupuesto a mitad de camino y no devolvió nada. Partir el trabajo en unidades más pequeñas lo resolvió:

```bash
# Mal: una tarea gigante
agent run worker "construye el blog completo"

# Mejor: unidades con un entregable verificable
agent run worker "base del sitio y páginas estáticas"
agent run worker "funciones interactivas"
```

La lección es la misma que en cualquier equipo humano: **una tarea bien definida vale más que un modelo más grande**.
