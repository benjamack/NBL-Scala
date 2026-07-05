# NBL — New Business Launchpad · MIA · Universidad de San Andrés

> Contexto principal para Claude en este workspace. Leer antes de cualquier trabajo relacionado con el NBL.

---

## Qué es esto

El **New Business Launchpad (NBL)** es la etapa final del MIA (Maestría en Inteligencia Artificial) de la Universidad de San Andrés. Es el Trabajo Final de Graduación en formato emprendedor: diseñar, validar y pitchear un nuevo negocio ante un panel de jurados.

El proyecto que se desarrolla en este NBL es **Scala** — una app personal de fitness conectada a Garmin con AI Coach, biométrica y nutrición. El código ya existe y está en producción. El NBL es el ejercicio académico-empresarial que rodea y formaliza ese proyecto.

---

## Proyecto: Scala

**Antes de cualquier trabajo creativo, leer `design.md`** en esta carpeta. Contiene el sistema de marca completo.

Resumen rápido de marca:
- **Nombre:** Scala (del italiano: escalera, ascenso). Funciona igual en es/en/it/pt.
- **Tagline:** *Subí tu escala.*
- **Símbolo:** 5 barras ascendentes con base común, esquinas superiores redondeadas.
- **Colores:** Primary Lime `#F3FFCA` sobre Ink `#0A0A0C`. Nunca al revés para fondos grandes.
- **Tipografía:** Lexend 700 (display) · Inter (body) · JetBrains Mono (labels uppercase).
- **Tono:** Coach que conoce al atleta. Frases cortas, verbos directos, sin motivacional vacío.

Para contexto técnico completo de la app (stack, arquitectura, rutas, DB), ver **`CLAUDE-scala-app-summary.md`** en esta misma carpeta. El código fuente completo vive en el repo separado **App-garmin** (desarrollo de producto) — este repo (**NBL-Scala**) es solo contexto académico del NBL/TFG, no se toca para features de la app.

### La idea del proyecto (fuente canónica: One Pager — 17 mayo 2026)

> Esta es la formulación oficial de la idea para el NBL. Tomar de acá, no parafrasear de memoria. La dupla es Nico Karagozian y Benjamín Mackinnon.

**Problema / Necesidad.** El atleta amateur tiene cada vez más datos biométricos gracias a los wearables, pero no recibe asesoramiento personalizado para traducir esos datos en decisiones concretas de entrenamiento, nutrición y recuperación. Hoy resuelve ese gap con varias apps fragmentadas y, cuando puede, con un coach humano que queda fuera del alcance de la mayoría.

**Cliente — Segmentos.** Atletas amateurs comprometidos —running, ciclismo, triatlón, gym, deportes de raqueta— que entrenan varias veces por semana con objetivos concretos, tengan o no wearable. La interfaz conversacional permite incorporar también a quienes todavía no usan dispositivo pero buscan estructura y guía personalizada. Segmento secundario: la mujer atleta que necesita planificación sensible al ciclo menstrual, históricamente subatendida.

**Relevancia del problema.** Es un problema frecuente y diario: el atleta toma decisiones repetidas sobre si entrenar fuerte o descansar, qué comer y cómo recuperarse. Hoy las resuelve mal porque las apps disponibles son loggers, no entrenadores, y los datos del wearable quedan sin interpretar. El costo de no resolverlo es real: sobreentrenamiento, lesiones, estancamiento y frustración. Para la mujer atleta hay además un costo de salud cuando la planificación no contempla el ciclo. La convergencia entre LLMs y wearables de consumo masivo abre una ventana de oportunidad precisa: la tecnología acaba de madurar, los dispositivos ya están en las muñecas de millones de atletas y el problema sigue sin resolverse a escala.

**Solución de alto nivel.** Una app con coach personal de IA y una interfaz principalmente conversacional. La mayoría de las apps de fitness se centran en agregar y mostrar datos que el usuario después no sabe cómo accionar; Scala invierte el modelo: el atleta habla con un coach agéntico que interpreta su contexto y ejecuta por él —arma y ajusta el plan de entrenamiento, actualiza nutrición y recuperación, contempla el ciclo menstrual, registra comidas, recuerda contexto entre sesiones. Si el usuario tiene wearable, el coach se nutre de la biometría continua; si no, el propio usuario aporta el input día a día a través de la conversación, de modo que nadie queda afuera. La conversación es la UI principal para actualizar todo, no un chat agregado al costado. Scala ya cuenta con una versión funcional en producción con usuarios reales, lo que valida la factibilidad técnica del modelo y permite iterar sobre retroalimentación concreta desde el primer día.

**Por qué nos interesa.** Somos atletas amateurs y usuarios activos de wearables: vivimos el problema en primera persona. Tenemos los datos pero nos faltan las decisiones, y creemos que es el momento ideal para resolverlo en el cruce de IA, wearables y salud personal. Es un dominio donde podemos aportar criterio propio porque somos el cliente al que apuntamos.

**Tesis central (no perder de vista):** el diferencial de Scala no es mostrar datos, es *accionarlos*. Coach agéntico que ejecuta > dashboard que informa. La conversación es la UI. El wearable es opcional, no requisito.

> **Evolución validada en campo (Módulo 3 — El Cliente · jun 2026).** El One Pager de arriba es la formulación canónica original (17 may). El trabajo de campo (7+ entrevistas + encuesta n=60, avalado por el mentor el 19 jun) **afinó el encuadre del problema** y se arrastra hacia adelante (Módulo 4 en adelante y TFG):
> - **El problema dominante no es "tengo datos y no sé accionarlos", sino la falta de una guía personalizada y accionable** (qué entrenar, qué comer, cómo progresar) — con o sin wearable. "Datos sin accionar" pasa a ser un **sub-caso** del segmento que sí tiene dispositivo.
> - Esto **refuerza** dos pilares ya existentes —*accionar > mostrar* y *wearable opcional*— y **agranda el mercado**: ~65% de los relevados no usa wearable y casi no hay competencia atacando ese espacio.
> - La interfaz conversacional queda validada (73% la ve natural). Barreras de adopción a trabajar: confianza (fatiga de IA, sesgo de complacencia, falta de aval profesional) y pago post-prueba (se paga tras ver valor, no de entrada).
> - Detalle y evidencia: `Modulo 3 - El cliente/Entrega/Resultados provisorios entrevistas y encuesta.docx` y el framework del módulo (§3 y §10). El One Pager y el Doc 3 ya entregados **no se re-suben** (regla NBL); el aprendizaje se incorpora al TFG.

---

## Arquitectura y features de Scala (estado real del código)

### Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19 + TypeScript · Vite 8 · Tailwind CSS · Recharts · react-router-dom v7 |
| Backend | Express 4 · Node.js · TypeScript · tsx (dev) |
| Base de datos | Neon Postgres (serverless) · Drizzle ORM |
| Auth | Better Auth 1.6 — email/password + Google OAuth opcional |
| AI | Claude API (Anthropic SDK) · Gemma vía Ollama · OpenRouter (nuevo) |
| Wearable | `@gooin/garmin-connect` — sync cada 15 min vía OAuth1/OAuth2 |
| Deploy | Render · PWA (vite-plugin-pwa) |
| Observabilidad | LangSmith tracing (opcional) |

### Estructura de carpetas

```
App garmin/
├── src/                        ← Frontend React
│   ├── pages/                  ← Vistas principales
│   ├── components/             ← UI reutilizable (brand/, cycle/, layout/, profile/, ui/)
│   ├── hooks/                  ← Data fetching y estado
│   ├── api/client.ts           ← apiFetch() centralizado
│   ├── context/AuthContext.tsx ← Auth global
│   └── i18n/locales/{es,en}    ← Internacionalización
├── server/src/                 ← Backend Express
│   ├── routes/                 ← 15+ routers REST
│   ├── ai/                     ← Lógica AI (prompts, context, tools, providers)
│   ├── db/schema/              ← Esquemas Drizzle (11 archivos)
│   ├── insights/               ← Motor de insights (stats + reglas)
│   ├── lib/                    ← Helpers (macros, cycle, int-pk, etc.)
│   └── sync.ts                 ← Sync Garmin (initial + periódico)
└── landing/                    ← Landing page estática
```

### Features implementados

**Dashboard biométrico**
Consume datos de Garmin en tiempo real: actividades, sueño, HRV, estrés, steps, heart rate. Readiness Score propio (Sleep 40% + Inverse Stress 30% + HRV 30%) como proxy al Body Battery que Garmin no expone por API.

**AI Coach agéntico (única superficie de chat)**
Loop tool_use nativo con 12 herramientas: `update_profile`, `create/update/delete_memory`, `generate_training_plan`, `generate_nutrition_plan`, `generate_goal_plan`, `log_meal`, `get_daily_briefing`, `enable_cycle_tracking`, `log_cycle_day`, `navigate_to`. Soporte multi-proveedor: Claude API, Gemma/Ollama, OpenRouter.

**Memoria persistente del coach**
`memory_cards` en DB — el coach recuerda entre sesiones cosas no estructuradas (rutinas, constraints, contexto). 5 tipos: `goal | preference | constraint | routine | context`.

**Planes de entrenamiento con AI**
Generados con streaming SSE. Contexto: 30 días de actividades, 14 días de sueño, 7 días HRV/estrés, profile completo. `session_type` semántico por sesión (long_ride, threshold, recovery, etc.).

**Nutrición con análisis foto AI**
Log por foto (vision stream), heatmap mensual de adherencia, planes AI con estrategia (cut/bulk/recomp/maintain/endurance), suplementación contextual con triggers semánticos. Vinculación bidireccional con training plans.

**Ciclo menstrual matizado por anticonceptivo**
4 modos: natural, pill_pack, mini_pill estimado, symptom_only. `computeCycleState()` resuelve el modo según el anticonceptivo declarado. Contexto inyectado al coach y ajuste de macros de nutrición por fase.

**Goals con milestones**
Generados con AI, timeline hasta fecha objetivo, milestones semanales con workouts sugeridos.

**Onboarding adaptativo**
Formulario multi-step (`Assessment.tsx`) o conversacional vía AI Coach — ambos escriben a `user_profile`. Macros auto-calculadas con Mifflin-St Jeor.

**i18n completo**
Español / inglés. Lingua franca sincronizada entre frontend (localStorage) y backend (user_profile.locale). Los planes y goals guardan su idioma para regeneración consistente.

**PWA**
Instalable en iOS/Android. No cachea `/api/*` para evitar respuestas autenticadas cross-user.

---

## Estructura del programa NBL

### Fases
| Fase | Período | Foco |
|------|---------|------|
| **IDEACIÓN** | MAR – MAY | Problema, cliente, oportunidad |
| **DISEÑO** | JUN – NOV | Propuesta de valor, MVP, modelo de negocios, mercado |
| **PLAN** | NOV – DIC | Demo Day + TFG individual |

### Roadmap completo (Año 2)

| Mes | Hitos clave |
|-----|-------------|
| MAR | Release Módulo Bienvenida · Kick off Programa NBL · Formación de duplas |
| ABR | (Sin entregas formales — preparación) |
| MAY | Release Módulo #1: Ideación · **Doc #1: One Pager — 17 mayo** · Release Módulo #2: Evaluación de la oportunidad · Asignación de mentores y Ronda de validación |
| JUN | Release Módulo #3: El Cliente · Reunión mentor #3 · Entrega Módulo #3 · Entrega Doc #2: Selección del proyecto · Parcial: Entrega Doc #3: Evaluación de la oportunidad de negocios |
| JUL | Release Módulo #4: Propuesta de valor · Reunión mentor #4 · Entrega Módulo #4 |
| AGO | Release Módulo #5: El MVP · Reunión mentor #5 · Entrega Módulo #5 |
| SEP | (Sin entregas específicas) |
| OCT | Release Módulo #6: El modelo de negocios · Reunión mentor #6 · Entrega Módulo #6 |
| NOV | Release Módulo #7: Tamaño de mercado, Unit Economics, competencia · Release Módulo #8: Pitch & Storytelling · Reunión mentor #7 · Entrega Módulo #7 · Preparación Demo Day · **DEMO DAY** |
| DIC | Feedback Demo Day · Planeamiento Entrega TFG (con mentor) |

### Estado actual
**Mayo 2026** — Módulo 1 (Ideación) en curso. Primera entrega: Doc #1 (One Pager) el **17 de mayo 2026**. Todavía sin respuestas completadas — a trabajar con Benja tras ver los videos del NBL.

> ⚠️ **FECHA CRÍTICA: el proyecto debe estar aprobado por el mentor antes del 31 de mayo de 2026.** Sin esa aprobación no se puede continuar el proceso y hay que esperar al próximo ciclo.

---

## Entregables del programa

### Hasta el Demo Day (trabajo conjunto con la dupla)
- Problema / Solución / Oportunidad
- Cliente + validación de mercado
- Propuesta de Valor + MVP + Product-Market Fit
- Competencia / industria
- Modelo de Negocios
- Go-to-Market Strategy
- Tamaño de mercado (TAM, SAM, SOM)
- Unit Economics

### TFG individual (post Demo Day)
- Plan de Implementación (operaciones + milestones)
- Equipo Emprendedor y plan organizacional
- Modelo económico (P&L proyectado, cash flow)
- Decisión de inversión (TIR, payback)
- Análisis de riesgos y sensibilidad
- Aspectos legales y regulatorios

### Criterios de aprobación Demo Day
El Demo Day es la instancia formal donde queda aprobado el proyecto de TFG. Sin aprobación no se puede iniciar la escritura del TFG. Las presentaciones se evalúan en base a: Atractividad · Factibilidad · Viabilidad · Time to market · Alineación estratégica · Impacto social y ambiental.

---

## Requisitos formales del TFG (Guía oficial)

### Hitos del proceso (6 pasos)
| Hito | Descripción | Responsable |
|------|-------------|-------------|
| Hito 1 | Selección de modalidad (NBL) | ✅ Alumno |
| Hito 2 | Asignación de Director de TFG | Dirección |
| Hito 3 | Entrega de Propuesta de TFG aprobada + inscripción SIGEDU | ✅ Alumno |
| Hito 4 | Entrega del TFG con preaprobación del Director | ✅ Alumno |
| Hito 5 | Designación de jurados | Dirección |
| Hito 6 | Defensa oral y pública | Dirección |

### Reglas críticas del proceso
- **Si un equipo incumple entregables en 2 encuentros → el Director da por finalizada la tarea y los alumnos son desaprobados.**
- El TFG es **individual**: Nico y Benja escriben trabajos separados sobre el mismo proyecto. No pueden compartir el 100% de hallazgos. Diferencias posibles: distinto segmento de mercado, distinto mercado geográfico (ej. local vs. LATAM), o distintos aspectos del modelo de negocios.
- Al entregar el TFG, cada uno también entrega un **documento de diferencias** (Anexo C) explicando al jurado qué aportó distinto respecto de su compañero.
- **Turnitin obligatorio** — los resultados los ve el jurado.
- Plazo máximo para graduarse: 4 años desde el inicio de la cursada.

### Track de Scala: Entrepreneurship (Startup VC)
Para ser elegible, la idea debe derivar en un modelo de negocios con **innovación en el cuadrante derecho del Business Canvas Model** (Propuesta de Valor, Relación con Cliente, Canales, Segmento → nuevo esquema de ingresos).

### Criterios de validación del proyecto (rondas con el mentor)
1. Existencia de demanda — problema real y relevante para un segmento.
2. Tamaño de mercado — facturación potencial considerable.
3. Timing — momento oportuno de implementación.
4. Competencia — análisis del entorno competitivo.
5. Diferenciación — qué hace distinto al negocio de los existentes.
6. Contribución social y/o impacto ambiental — sustentabilidad.

### Documentos de la etapa de Ideación (los 3 que hay que entregar)

**Doc 1 — One Pager (×3 ideas):** responder para cada idea:
1. ¿Cuál es el problema/necesidad que resolverá el proyecto?
2. ¿Quién tiene ese problema? (segmento/s)
3. ¿Es relevante el problema para el cliente target? ¿Por qué?
4. Solución de alto nivel que ataca el problema.
5. ¿Por qué les interesa realizar un proyecto sobre este problema/idea?

**Doc 2 — Selección de Proyecto:** nombre del proyecto, integrantes, descripción en un párrafo, categoría (startup VC / emprendimiento personal / intrapreneurship / impacto social).

**Doc 3 — Evaluación de la Oportunidad** (máx. 10 páginas, un tercio por idea):
- **Existencia de demanda:** problema, cliente, disposición a pagar, clasificación (popular/creciente/urgente/obligatorio/frecuente).
- **Mercado:** TAM en MUSD, tasa de crecimiento, fuentes.
- **Industria:** estructura (monopolio/oligopolio/fragmentada), etapa (inicios/desarrollo/madura), tendencias 10 años, riesgos, rentabilidades.
- **Competencia:** mínimo 3 competidores con ventas, market share, empleados, antigüedad, propuesta de valor, fortalezas y debilidades.
- **Fit con los emprendedores:** habilidades del equipo, interés personal.
- **Conclusión:** elevator pitch de 2 minutos justificando que es una buena oportunidad.

### Índice del TFG individual (contenidos mínimos — Anexo B)
Carátula · Índice · Agradecimientos · Introducción · Resumen Ejecutivo (1 página máx.)

I. El Cliente — segmentos, validación, customer journey, mapa de empatía.
II. La Propuesta de Valor — producto/servicio, diferenciación, VPC.
III. El Product Market Fit — construcción del MVP, experimentos de validación.
IV. Tamaño de oportunidad, competencia, contexto e industria — TAM/SAM/SOM, 5 fuerzas Porter, PESTLE.
V. El Modelo de Negocios — Business Canvas, socios clave, modelo de ingresos, pricing.
VI. Go to Market Plan — entrada al mercado, pricing, funnel (get-keep-grow), canales.
VII. Implementación del Negocio — proceso productivo, contenido técnico, plan de crecimiento 3 años, metas a 2 y 5 años.
VIII. Equipo Emprendedor — composición, aportes, red de asesores.
IX. Resultados Económico-Financieros — contexto macro/micro, unit economics, costos, key drivers.
X. Impacto Social y Ambiental (si aplica).
XI. Aspectos Legales y Regulatorios — tipo de sociedad, impuestos, patentes, permisos.
XII. Fuentes y Bibliografía.
XIII. Anexos.

### Requisitos formales del documento (Anexo E)
- **Extensión:** 80 páginas (bibliografía y anexos NO cuentan).
- **Fuente:** Arial 12, interlineado 1,5.
- **Márgenes:** izquierdo y derecho 3 cm · superior e inferior 2,5 cm.
- **Paginación:** margen inferior derecho en todas (excepto carátula).
- **Secciones:** cada una comienza en página nueva.
- **Títulos:** sección Arial 16 bold · principales Arial 14 bold · secundarios Arial 12 bold · subtítulos Arial 12 itálica.
- **Carátula:** Universidad de San Andrés · Título al que se aspira · Título de la tesis · Autor + DNI/Legajo · Director/Mentor · Lugar y fecha.

### Criterios de evaluación del jurado (Anexo D — 8 dimensiones)
a. Análisis de la oportunidad de negocio · b. Mercado objetivo y competencia · c. Propuesta de valor y relación con el cliente · d. Modelo de negocios y estrategia competitiva · e. Plan de implementación · f. Componente técnico · g. Resultados del negocio · h. Fortalezas/debilidades del equipo emprendedor.

Cada dimensión se califica: Muy Bueno / Bueno / Regular / Malo. Dictamen: *A revisión* o *Aprobado* (Regular/Bien/Muy Bien/Sobresaliente).

---

## Conceptos clave del Módulo 1 (Ideación)

- **Error frecuente #1:** Empezar con la solución, no con el problema.
- **Error frecuente #2:** Creer que se necesita una idea brillante para empezar.
- **Innovación = Invención × Comercialización** (Scott D. Anthony). El entrepreneur lleva la comercialización; el inventor lleva la invención.
- **Pensamiento exponencial:** La tecnología crece de forma no lineal. Scala vive en esa curva.
- **6D de la Exponencialidad** (Diamandis & Kotler): Digitalización → Decepción → Disrupción → Desmonetización → Desmaterialización → Democratización.
- **Tecnologías disruptivas relevantes para Scala:** IA & robótica, Big Data, IoT (wearables Garmin).

### One Pager — estructura base
Cualquier presentación de idea de negocio arranca con estas 5 preguntas:
1. **PROBLEMA:** ¿Qué problema/necesidad queremos resolver?
2. **CLIENTE:** ¿Quién tiene el problema?
3. **RELEVANCIA:** ¿Por qué es importante para ese cliente?
4. **SOLUCIÓN:** Idea de alto nivel para resolverlo.
5. **INTERÉS:** ¿Por qué nos interesa resolverlo?

---

## Cómo usar Claude en este workspace

### Para materiales académicos del NBL
- Documentos de entrega (One Pagers, evaluaciones, análisis): usar estilo profesional académico, español argentino, tono directo.
- Presentaciones para el programa: **no usar el sistema de marca Scala** — los materiales académicos usan el sistema institucional NBL (ver subsección debajo).
- Análisis de negocio: responder siempre desde la perspectiva de Scala como caso real, no hipotético.

#### Estilo de documentos NBL — académico sobrio (Anexo E)

> **Regla general:** todo entregable escrito del NBL —One Pagers, Docs de evaluación, propuestas, anexos, TFG— sigue el formato académico definido en el Anexo E de la Guía TFG. **Sin colores, sin bandas decorativas, sin logos, sin elementos de diseño.** Negro sobre blanco, Arial. Aplica también a documentos cortos como el One Pager: el "diseño" del NBL es el rigor tipográfico, no la decoración.

**Especificaciones formales (Anexo E):**

| Elemento | Especificación |
|----------|---------------|
| Tipografía | **Arial** en toda la jerarquía. Color **negro `#000000`**. |
| Cuerpo | Arial 12, interlineado **1,5**, justificado. |
| Títulos de sección | Arial **16 bold**, precedidos por 1 línea en blanco, seguidos por 2 líneas en blanco. |
| Títulos principales | Arial **14 bold**, precedidos por 1 línea en blanco, texto debajo sin espacio. |
| Títulos secundarios | Arial **12 bold**. |
| Subtítulos | Arial **12 itálica**. |
| Márgenes | Izquierdo y derecho **3 cm** · superior e inferior **2,5 cm**. |
| Página | A4. Cada sección comienza en página nueva (aplica al TFG; para One Pager/docs cortos se omite). |
| Paginación | Margen inferior derecho, todas excepto carátula. |
| Listados y gráficos | Toda tabla, listado o figura (aun como anexo) requiere explicación narrativa en el cuerpo. |

**Estructura típica de la carátula/encabezado:** Universidad de San Andrés · Maestría · Programa NBL · Módulo · Título del documento (Arial 16 bold, centrado) · Subtítulo en itálica · Dupla (autores) · Lugar y fecha.

**Reglas anti-error:**
- **Sin colores.** Cero. Ni en títulos, ni en bandas, ni en líneas, ni en hipervínculos llamativos. Todo negro sobre blanco.
- **Sin elementos decorativos** (bandas de fondo, iconos, emoji, logos institucionales en el cuerpo del documento, líneas de color).
- **No mezclar con la marca Scala** (lime, Lexend, etc.) — Scala vive solo en pitch decks comerciales y producto, nunca en entregables académicos.
- **Justificar el cuerpo**, no alinear a la izquierda — convención académica.
- **Una nueva línea entre párrafos** dentro de cada sección, no sangría de primera línea.
- **Citas y referencias** siguen el sistema bibliográfico que indique la Guía (no improvisar formato).

**Referencia:** el template canónico vive en `/NBL/Guia/nbl-template.js` — script docx-js que aplica todas estas reglas (helpers `bodyP`, `tituloPrincipal`, `tituloSeccion`, `subtituloItalica`, `metaLine`). Para nuevos entregables (Doc #2 Selección de Proyecto, Doc #3 Evaluación de Oportunidad, anexos, TFG) duplicar y adaptar el contenido manteniendo la estructura y el formato.

### Para materiales de Scala (marca, producto, pitch)
- **Siempre leer `design.md` primero.**
- Aplicar el sistema de marca: Ink + Lime, Lexend display, Inter body.
- Tono coach/atleta: concreto, medible, sin relleno motivacional.
- Tagline de referencia: *Subí tu escala.*

### Para trabajo técnico en la app
- Leer **`CLAUDE scala.md`** para contexto completo de arquitectura, stack y reglas críticas.
- Stack: React + TS (Vite) frontend, Express + Neon Postgres (Drizzle) backend, Claude API / Gemma via Ollama.

---

## Archivos en este workspace

```
/NBL
├── CLAUDE.md              ← este archivo
├── CLAUDE scala.md        ← contexto técnico completo de la app Scala
├── design.md              ← sistema de marca Scala (leer antes de trabajar creativamente)
├── Guia/
│   ├── Roadmap MIA.pdf    ← timeline completo del programa año 2
│   ├── Handbook Mentores 2025.pdf  ← estructura, criterios y entregables
│   ├── Guía TFG MIA.pdf   ← guía del trabajo final
│   └── nbl-template.js    ← template docx-js con sistema visual NBL oficial (reusar para todo entregable)
└── Modulo 1 - Ideacion/
    ├── PPT Modulo 1 - MIA.pdf     ← slides del módulo de ideación
    └── Screenshot ...             ← contenidos mínimos módulo 1
```

---

## Notas de contexto

- La **dupla** es Nico (Karagozian) y **Benja (Benjamín Mackinnon)**. Trabajan sobre la misma oportunidad. Pueden converger en un modelo de negocios único o divergir en dos modelos distintos.
- El **mentor** actúa como thought partner: desafía las variables del modelo, controla avances contra el calendario.
- El **Demo Day** es en **diciembre 2026**. El TFG individual se defiende dentro de los 12 meses de la última clase regular.
- Scala ya tiene un producto real funcionando — eso es una ventaja enorme para validación y para demostrar tracción en el Demo Day.

---

*CLAUDE.md NBL — generado mayo 2026*
