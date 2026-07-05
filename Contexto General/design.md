# Scala — Sistema de Marca

> Leer antes de cualquier trabajo creativo: landings, presentaciones, assets, UI nueva, copy, o cualquier material visual.

---

## Nombre

**Scala** — del italiano: escalera. También escala musical y ascenso. El nombre funciona igual en español, inglés, italiano y portugués.

---

## La marca

### El símbolo

Cinco barras verticales que comparten una base común y crecen escalonadamente de izquierda a derecha. Es la única forma de la marca — no hay versión simplificada para app icon ni ningún otro contexto.

**SVG master (copiar exacto en cualquier implementación):**

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g fill="#f3ffca">
    <path d="M6 94 L6 75 Q6 72 9 72 L19 72 Q22 72 22 75 L22 94 Z"/>
    <path d="M24 94 L24 61 Q24 58 27 58 L37 58 Q40 58 40 61 L40 94 Z"/>
    <path d="M42 94 L42 47 Q42 44 45 44 L55 44 Q58 44 58 47 L58 94 Z"/>
    <path d="M60 94 L60 33 Q60 30 63 30 L73 30 Q76 30 76 33 L76 94 Z"/>
    <path d="M78 94 L78 19 Q78 16 81 16 L91 16 Q94 16 94 19 L94 94 Z"/>
  </g>
</svg>
```

Para usar sobre fondo claro o primary, cambiar `fill="#f3ffca"` por `fill="#0a0a0c"`.

### Especificaciones de construcción

| Propiedad | Valor |
|-----------|-------|
| Barras | 5, ancho 16X cada una |
| Separación entre barras | 2X |
| Alturas (barra 1→5) | 22X · 36X · 50X · 64X · 78X |
| Incremento por barra | 14X |
| Esquinas superiores | Redondeadas 3X (solo arriba) |
| Esquinas inferiores | Rectas (tocan la base) |
| Base | Todas alineadas en y=94 |

### Reglas inquebrantables

- **No separar** las barras entre sí
- **No redondear** todas las esquinas (solo las superiores)
- **No rotar** la marca
- **No aplicar gradientes** a la marca
- **No aplicar sombras ni glow** a la marca
- **No usar versión outline** (siempre fill sólido)

### Clearspace

El espacio mínimo alrededor de la marca equivale a la altura de la barra más baja (22X). Nada — texto, otra marca, foto — puede invadir esa zona.

### Lockups

**Horizontal (primario):** símbolo a la izquierda + wordmark a la derecha, alineados al centro vertical, gap 24px.

**Vertical (secundario):** símbolo arriba + wordmark centrado abajo, gap 14px.

**Wordmark:** tipografía Lexend 700, tracking -4%, lowercase `scala`.

### App icon

La forma de la marca se aplica directamente, centrada, ocupando el **64% del área del icono**. Fondo plano sin gradientes ni efectos. Esquinas iOS estándar (squircle 22%).

Colorways disponibles:
- **Primary (principal):** fondo `#f3ffca`, marca `#0a0a0c`
- **Dark (alterno):** fondo `#0a0a0c`, marca `#f3ffca`
- **Cream (accesibilidad):** fondo `#f5f3ed`, marca `#0a0a0c`

---

## Animación de la marca

Cuando la marca aparece (loader, splash, hero), las barras crecen de izquierda a derecha desde la base.

| Propiedad | Valor |
|-----------|-------|
| Duración total | 800ms |
| Duración por barra | 400ms |
| Stagger entre barras | 80ms |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Origen | Base (crece hacia arriba) |
| Loop | No |

La animación es siempre hacia arriba — nunca cae ni rebota. Si la marca aparece más de una vez simultáneamente, solo la primera anima.

---

## Colores

### Paleta principal

| Nombre | HEX | Uso |
|--------|-----|-----|
| **Primary Lime** | `#F3FFCA` | El acento. La marca. Nunca para fondos grandes. |
| **Ink** | `#0A0A0C` | Fondo principal (bg) |
| **Graphite** | `#16161A` | Surface low, cards, sidebar |
| **Cream** | `#F5F3ED` | Variante light / accesibilidad |

### Superficies (UI)

| Token | HEX | Descripción |
|-------|-----|-------------|
| `--bg` | `#0A0A0C` | Fondo principal (Ink) |
| `--surface` | `#0E0E10` | Cards primarias / hero |
| `--surface-low` | `#16161A` | Graphite — surfaces secundarias |
| `--surface-high` | `#1E1E22` | Hover raise / glass base |
| `--text` | `#F5F3ED` | Texto primario |
| `--muted` | `#8A8A8A` | Texto secundario / labels |

### Acentos secundarios — uso restringido

Solo para chips de datos, zonas de entrenamiento, badges semánticos. **Nunca para fondos ni marca.**

| Nombre | HEX |
|--------|-----|
| Sky | `#6A9CFF` |
| Mint | `#22D3A5` |
| Ember | `#FF7439` |
| Sun | `#FFB547` |
| Alert | `#FF5D5D` |

### Regla de color

Una sola decisión cromática define a Scala: **lime eléctrico (`#F3FFCA`) sobre negro profundo (`#0A0A0C`)**. Todo lo demás vive subordinado a esta combinación.

---

## Tipografía

Tres familias. No se usan otras.

### Lexend — Display

Titulares, números grandes, wordmark. Peso 700. Tracking -4%.

```css
font-family: 'Lexend', sans-serif;
font-weight: 700;
letter-spacing: -0.04em;
```

### Inter — Body

Cuerpo de texto, UI, forms. Pesos 400 / 500 / 600.

```css
font-family: 'Inter', sans-serif;
```

### JetBrains Mono — Labels

Metadatos, datos crudos, labels uppercase. Pesos 500 / 700. Tracking +18%.

```css
font-family: 'JetBrains Mono', monospace;
font-size: 11px;
letter-spacing: 0.18em;
text-transform: uppercase;
```

---

## Voz y tono

Scala habla como un coach que conoce a su atleta. Frases cortas. Verbos directos. Cero relleno motivacional. La data lleva la voz.

### Es
- Directo · concreto · medible
- Personal · le habla a vos
- Técnico cuando hace falta
- Humilde · sabe que no sabe todo

### No es
- Inspiracional vacío ni grandilocuente
- Genérico · "para todos"
- Jerga sin explicar · tono de gimnasio rudo
- Promete milagros · "cambiá tu vida"

### Copy — ejemplos correctos

> "El entrenamiento que piensa por vos."

> "Hoy no descansaste bien. Bajamos un punto."

> "Subí proteína a 180g. Mañana largo — más carbo esta noche."

### Copy — evitar

> ~~"Liberá tu mejor versión hoy. ¡Vos podés!"~~

> ~~"Una experiencia personalizada de fitness inteligente."~~

---

## Taglines candidatas

- *Subí tu escala.*
- *Cada escalón cuenta.*
- *Tu próximo nivel.*
- *One step up.*

La preferida actual: **"Subí tu escala."**

---

## Aplicaciones

### Poster
Fondo dark con grid sutil, tipografía display grande en dos colores (text + primary), marca pequeña en esquina inferior izquierda.

### Redes sociales (IG square)
Fondo primary, texto dark. Número o stat grande en display, copy corto en body, marca en esquina inferior.

### Splash de app
Fondo `#0A0A0C`, marca centrada 80px, wordmark debajo. Sin efectos.

---

*Manual de marca Scala v1.0 · Abril 2026 · Estudio interno*
