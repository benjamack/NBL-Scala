# Formato estándar — Entrevistas de cliente (transcripts en Notion)

> Guía para que **todas** las entrevistas del Módulo 3 queden cargadas igual. Cuando le pidas a Claude "pasá la entrevista X de Granola a Notion", seguir este formato al pie.

## Dónde vive todo

- **Notion → MIA → NBL → Módulo 3 — El Cliente → Entrevistas** (página índice).
  - URL Entrevistas: https://app.notion.com/p/38023e73764c81a4b882c02a614da45e
  - URL Módulo 3: https://app.notion.com/p/37a23e73764c816182a1ceefa1d4eea0
- Cada entrevista es una **subpágina** de "Entrevistas", titulada `NN · Nombre Apellido` (ej. `01 · Federico Golberg`), icono 👤.
- La página "Entrevistas" tiene una **tabla de Registro**: sumar una fila por entrevista (#, Entrevistado, Fecha, Deporte, Wearable, Entrevistador).
- **Copia local en .md:** `Modulo 3 - El cliente/Entrega/Entrevistas - Transcripts/` — un `.md` por entrevista, mismo número y contenido que en Notion. Mantener ambos en sync.
- **Entrevistador:** la dupla reparte las entrevistas. Federico (01) la hizo Nico; las 02–06 las hizo Benja. Anotarlo en la Ficha y en el Registro.

## Fuente

- El transcript sale de **Granola** (tool `get_meeting_transcript` por `meeting_id`; buscar el meeting con `list_meetings`).
- Granola etiqueta `Me:` = entrevistador (Nico) y `Them:` = entrevistado.

## Estructura de cada subpágina

1. **`## Ficha`** — tabla Campo/Dato con: Entrevistado, Fecha, Entrevistador, Profesión, Deportes, Wearable, Entrenador/nutri, Paga por fitness. (Adaptar campos a lo que surja.)
2. **Nota de fuente** (callout `>`): aclara que es transcript de Granola limpiado y el relabel de hablantes.
3. **`## Transcript`** — diálogo con `**Nico:**` / `**Nombre:**` en negrita, un turno por línea.
4. **`## Notas rápidas (señales sobre las hipótesis)`** — bullets mapeando lo dicho contra H1–H6 + riesgos/objeciones + jobs emocionales. Estas notas SE DEJAN (no es transcript puro). Son el insumo crudo antes de pasar al Tracker.

## Reglas de limpieza del transcript

- **Relabel:** `Me:` → `**Nico:**`, `Them:` → `**<Nombre>:**`.
- **Recortar la apertura:** sacar el chit-chat previo (saludos, prueba de grabación, "¿estás usando Granola?", charla de producto/testers, etc.). **Arrancar en el consentimiento** — la línea donde Nico dice "Gracias por tu tiempo… ¿te molesta si te grabo?" — o en la primera pregunta real si no hubo consentimiento explícito.
- **Recortar el cierre:** sacar la charla off-topic del final (despedidas largas, temas personales). **Cerrar en el agradecimiento final** de Nico.
- **Arreglar la auto-transcripción** con criterio: corregir palabras mal escuchadas evidentes, puntuación y ortografía, sin inventar ni cambiar el sentido. Mantener el español rioplatense y el tono coloquial real (no "neutralizar").
- **No resumir el cuerpo de la entrevista** — es transcript, va completo entre el arranque y el cierre definidos arriba.

## Checklist al cargar una entrevista nueva

- [ ] Subpágina `NN · Nombre` creada bajo Entrevistas, icono 👤
- [ ] Ficha completa
- [ ] Nota de fuente
- [ ] Transcript limpiado (apertura + cierre recortados, relabel, ortografía)
- [ ] Notas rápidas vs hipótesis
- [ ] Fila agregada a la tabla Registro de la página Entrevistas

---

## Hipótesis a validar (referencia rápida, Módulo 3)

- **H1** — Tiene datos pero no sabe accionarlos
- **H2** — Resuelve con apps fragmentadas + (a veces) coach humano
- **H3** — Es un problema frecuente (decisiones diarias)
- **H4** — Hay disposición a pagar por personalización
- **H5** — El wearable es opcional
- **H6** — La conversación sería forma natural de gestionar todo

## Entrevistas cargadas

| # | Entrevistado | Entrevistador | Subpágina |
|---|---|---|---|
| 01 | Federico Golberg | Nico | https://app.notion.com/p/38023e73764c810487b0d2a0f9a97e0e |
| 02 | Rocío Gil Colombo | Benja | https://app.notion.com/p/38323e73764c810faf8ae4e27113add0 |
| 03 | Nicolás Mackinnon | Benja | https://app.notion.com/p/38323e73764c81e8a237ebb2ccb9aedc |
| 04 | Paz Colombo | Benja | https://app.notion.com/p/38323e73764c816b845ad4f0f2b843d2 |
| 05 | Santos Mackinnon | Benja | https://app.notion.com/p/38323e73764c811fa187f5d2902f3e89 |
| 06 | Anita Gil | Benja | https://app.notion.com/p/38323e73764c8134a5c2eff0b69de51a |
| 07 | Tobías Polacek | Nico | https://app.notion.com/p/38323e73764c818bb72cca0f0f7ac535 |
| 08 | Matías Tahta | Nico | https://app.notion.com/p/38723e73764c81198aa7dec770c29533 |
| 09 | Hernán de la Cárcova | Nico | https://app.notion.com/p/39023e73764c81bda3c1d25d1c735f48 |
| 10 | Maitena Galíndez | Nico | https://app.notion.com/p/39323e73764c81a0ad36c6c464b28eb9 |
