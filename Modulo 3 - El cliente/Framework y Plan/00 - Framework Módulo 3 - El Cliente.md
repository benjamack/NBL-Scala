# Framework Módulo 3 — El Cliente · Scala

> Plan de trabajo para resolver el Módulo 3 del NBL. Documento maestro de la dupla (Nico + Benja). Working doc, no es el entregable final.
> Fecha de armado: 9 de junio de 2026 · Mentor: Esteban Balduzzi
> **Actualizado: 19 de junio de 2026** — incorpora el feedback de la reunión de mentoría (ver §10). Cambios clave: deadline real **3 de julio**, checklist oficial de evaluación, alcance del VPC (solo customer profile), reglas de cuerpo/anexo, reframe del problema validado en campo y criterio de split Nico/Benja.

---

## 0. En una frase

El Módulo 3 nos pide **dejar de hablar de nosotros y salir a validar empíricamente con atletas reales** que el problema que describimos en el Doc 3 (tengo datos pero no sé qué hacer con ellos) existe, duele y vale la pena resolverlo. El entregable es el **Punto I del Anexo B — El Cliente**: necesidad, segmentos, arquetipo, validación de campo (mínimo **15 entrevistas B2C**), mapa de empatía y customer journey.

La trampa a evitar (error #1 del Módulo 1): no salir a *vender* Scala ni a confirmar nuestra solución. Salimos a **aprender del problema**. El que valida es el atleta, no nosotros.

---

## 1. Qué pide exactamente el entregable (Punto I — Anexo B)

El documento Word/PDF que subimos a fin de mes debe cubrir, en este orden:

1. **Descripción de la necesidad / problema** que se pretende resolver.
2. **Segmentos de clientes potenciales** que tienen el problema (mapear *todos*).
3. **Segmento target seleccionado**, descripto en profundidad: demografía, psicografía, *Jobs to be Done*, *pains*, *gains*, comportamiento de compra, movilizadores de compra. Con **arquetipo de persona (B2C)** y justificación de por qué lo elegimos.
4. **Proceso de validación**: cómo validamos la necesidad y los segmentos, qué experimentos hicimos (entrevistas, observación, encuestas), cuántos, sus **insights y conclusiones**. Con **mapa de empatía** y **customer journey map**.
5. **Análisis comparativo** entre segmentos potenciales, target y los clientes que la empresa ya alcanza (los usuarios reales que Scala ya tiene en producción).

**Formato de entrega:** Word/PDF obligatorio + PPT opcional con los hallazgos (sirve de soporte para el pitch). El doc final sigue el formato académico Anexo E (Arial, negro sobre blanco, sin marca Scala) — eso lo armamos al final, sobre los datos de campo.

### Decisiones ya tomadas para Scala

| Decisión | Definición |
|---|---|
| **Tipo de modelo** | **B2C de un solo lado.** Cliente = usuario = quien paga (el atleta). |
| **Mínimo de entrevistas** | **15 entrevistas** (regla B2C del NBL). Apuntamos a 15–18 para tener margen. |
| **Influencers** | NO son un segmento obligatorio. Son **estrategia de go-to-market**, no parte del producto. Sumamos **2 entrevistas extra** a influencers/atletas-referentes como exploración del canal viral, fuera del cómputo de las 15. |
| **Segmento target a perfilar en profundidad** | **Atleta amateur comprometido** (running, ciclismo, triatlón, gym, deportes de raqueta). Un único arquetipo profundo. |
| **Mujer atleta / ciclo** | Se trata como **sub-segmento / variante** dentro del target, no como arquetipo separado (es funcionalidad en desarrollo, no el core). Mencionar en segmentos potenciales y en el comparativo. |
| **Split Nico / Benja (TFG individual)** | Se define **después del Módulo 3** (todo lo de este módulo es trabajo común y sirve a ambos). **Criterio recomendado por el mentor (19 jun):** mantener **la misma propuesta de valor** y distinguir los dos TFG por **segmentación de clientes** — es lo más simple y robusto. Geografía (local vs LATAM) queda como alternativa secundaria. |

---

## 2. La secuencia de la etapa (Lean Startup como columna vertebral)

El Módulo 3 abre la **Etapa 2 del NBL (Diseño)** — la más larga, ~8 meses y mínimo 6 reuniones de mentor. La metodología base es **Lean Startup** (Eric Ries). El módulo es el primer paso de esta secuencia:

1. **Lean Startup** — metodología base ← *estamos acá, arrancando*
2. **Conocimiento profundo del cliente y su problema** ← **Módulo 3 (entregable de este mes)**
3. Diseño de la propuesta de valor (Módulo 4)
4. Construcción del MVP y experimento de validación (Módulo 5)
5. Modelo de negocios completo: LTV, CAC, TAM/SAM/SOM (Módulo 6–7)
6. Pitch para el Demo Day (Módulo 8)

### El loop de Lean Startup que aplicamos este mes

```
diseñar hipótesis → inventar experimento → correr experimento → obtener datos → aprender → decidir (perseverar o pivotear)
```

- **Aprendizaje validado:** decidimos con datos de entrevistas, no con suposiciones.
- **Fracasar rápido y barato:** si una hipótesis del cliente no se sostiene, la descartamos ya — antes de invertir en propuesta de valor (Módulo 4).
- **Ventaja de Scala:** ya tenemos producto en producción con usuarios reales. Eso nos deja **triangular**: lo que dicen las entrevistas (atletas que aún no son clientes) vs. lo que hacen los usuarios reales que ya tenemos. Ese contraste es oro para el punto 5 del entregable (comparativo).

---

## 3. Las hipótesis que vamos a testear

Antes de entrevistar, dejamos explícitas las hipótesis. Las entrevistas existen para confirmarlas o romperlas. (Ver detalle y registro de evidencia en el Tracker.)

| # | Hipótesis | Cómo la testeamos | Qué la rompería |
|---|---|---|---|
| H1 | El atleta amateur comprometido **siente** que tiene datos pero no sabe accionarlos. | Preguntas abiertas sobre qué hace con los datos del wearable / cómo decide entrenar. | Que no perciba ningún gap: "miro el dato y ya sé qué hacer". |
| H2 | Hoy resuelve el gap con **apps fragmentadas + (a veces) coach humano**. | Mapear su stack actual de apps y gasto. | Que use una sola app que ya le resuelve todo. |
| H3 | Es un problema **frecuente** (decisiones diarias: entrenar fuerte/descansar, qué comer, cómo recuperar). | Indagar la rutina de decisión día a día. | Que las decisiones sean esporádicas o irrelevantes para él. |
| H4 | Hay **disposición a pagar** por asesoramiento personalizado. | Indagar qué pagó/pagaría y por qué (coach, apps premium). | Que no pague nada y no piense pagar. |
| H5 | El **wearable es opcional**: los que no tienen también quieren estructura. | Incluir 2–3 entrevistados sin wearable. | Que sin wearable no haya interés ni problema percibido. |
| H6 | La **conversación** (hablar con un coach) sería una forma natural de gestionar todo. | Indagar cómo le gustaría recibir la guía; reacción al concepto al final. | Que prefiera dashboards/autoservicio y rechace lo conversacional. |

> Regla de oro al entrevistar: **las hipótesis son nuestras, no del entrevistado.** No las mencionamos. Buscamos hechos del pasado, no opiniones sobre el futuro.

### Estado provisorio de las hipótesis (al 19 jun · 7 entrevistas + encuesta n=60)

El cruce de campo —detallado en `Entrega/Resultados provisorios entrevistas y encuesta.docx`, avalado por el mentor el 19 jun— deja este tablero:

| # | Estado | Lectura |
|---|---|---|
| H1 (datos sin accionar) | **Matizada** | Cierto entre usuarios de wearable (11 de 21 puntúan alto la frase), pero la mayoría **no tiene datos**: es un sub-caso del problema más amplio. |
| H2 (apps fragmentadas + coach) | **Ajustada** | La estructura llega del **coach humano o de la autogestión**; las apps casi no aparecen (58% usa cero). |
| H3 (problema frecuente) | **Validada** | 60% decide por sensación; 50% duda de forma recurrente. |
| H4 (disposición a pagar) | **Parcial** | 72% pagaría o "tal vez", pero 63% hoy gasta US$0; el pago se ata a **probar y ver valor** primero. |
| H5 (wearable opcional) | **Validada (fuerte)** | 65% no usa wearable; el producto debe funcionar sin reloj. |
| H6 (conversación natural) | **Validada** | 73% lo ve natural; objeciones: fatiga de IA, sesgo de complacencia, falta de aval profesional. |

> **Reframe del problema (insight central, avalado por el mentor):** el dolor dominante **no** es "tengo demasiados datos y no sé qué hacer", sino **la ausencia de una guía personalizada y accionable** (qué entrenar, qué comer, cómo progresar) — con o sin wearable. Esto **agranda el mercado** (incorpora al 65% sin dispositivo) y refuerza que el wearable sea opcional. El reframe se traslada a la propuesta de valor del Módulo 4. *Nota: tiene implicancias aguas arriba (tesis central del One Pager / `CLAUDE.md`), a decidir si se propaga.*

---

## 4. Plan de campo (cómo hacemos las entrevistas)

### 4.1. A quién entrevistar — cuotas de muestreo

Objetivo: **15 entrevistas B2C** del segmento target + **2 extra** a influencers/atletas-referentes (GTM). Buscamos variedad para no sesgar:

| Eje | Cuota sugerida (de 15) |
|---|---|
| Deporte | ~5 running · ~3 ciclismo/triatlón · ~4 gym/fuerza · ~3 raqueta/otros |
| Wearable | ~11 con wearable (Garmin, Apple, etc.) · ~4 sin wearable |
| Género | mínimo 5–6 mujeres (para nutrir el sub-segmento ciclo) |
| Nivel | amateur comprometido (entrena 3+ veces/semana con objetivo). Evitar sedentarios y profesionales puros |
| Relación con Scala | mayoría que NO conoce Scala. 2–3 que ya sean usuarios reales (para el comparativo del punto 5) |

Reclutar desde: redes propias del deporte (running clubs, boxes de crossfit, grupos de ciclismo, club de tenis), gimnasios, contactos de la maestría, y los usuarios reales que ya tiene Scala.

### 4.2. Reglas de oro de la entrevista (de *Talking to Humans* + material del módulo)

- **Approach de principiante:** entrar sin ideas previas, con curiosidad genuina.
- **Hechos, no opiniones:** "¿Qué hiciste la última vez que…?" en lugar de "¿Usarías una app que…?".
- **No mencionar la solución.** El objetivo es aprender, no vender. (El concepto de Scala, si se muestra, va *al final*.)
- **5 Whys:** ante cada respuesta interesante, preguntar "¿por qué?" varias veces hasta llegar al motivo real.
- **Parafrasear** para confirmar comprensión ("Entonces, si entiendo bien, vos…").
- **Silencio:** dejar que el entrevistado llene los silencios; ahí aparece lo bueno.
- **Duración:** 20–30 minutos máximo.
- **Grabar y desgrabar** (con permiso) para análisis posterior.
- **Roles en la dupla:** uno conduce, el otro toma notas y vigila el tiempo. Rotar.

### 4.3. Métodos complementarios (opcionales, no reemplazan entrevistas)

- **Observación:** mirar a un atleta usar su app/wearable después de entrenar — qué mira, qué ignora, dónde se frustra.
- **Encuesta cuantitativa:** un formulario corto (Google Forms) para validar a escala los patrones que salgan de las entrevistas (ej. cuántas apps usa, cuánto gasta, qué tan decepcionado estaría si su app desapareciera — la pregunta de PMF de Sean Ellis: ≥40% "muy decepcionado" = señal de PMF). Ver banco de preguntas en la guía de entrevistas.
- **Focus group:** opcional, si conseguimos juntar 4–6 atletas.

---

## 5. Proceso de síntesis (qué hacemos con las entrevistas)

Después del trabajo de campo, el material crudo se convierte en insights. Este es el flujo (usar Miro o el Tracker):

1. **Separar y limpiar** observaciones relevantes — una observación = un post-it/fila.
2. **Encontrar patrones** — temas que se repiten entre entrevistados.
3. **Identificar insights** — lo no obvio escondido en los patrones (no es "muchos usan Strava", es "usan Strava para *competir socialmente*, no para entrenar mejor").
4. **Priorizar** jobs / pains / gains según: relevancia, tangibilidad, nivel de insatisfacción y volumen (cuántos lo mencionan).
5. **Actualizar** el perfil de cliente y el arquetipo con la información validada (la v2, "final").

> Flujo completo del módulo: (1) perfil + arquetipo **intuitivos** → (2) entrevistas → (3) ordenar, limpiar, patrones, insights, priorizar → (4) perfil + arquetipo **finales** → (5) revisar con el mentor antes de pasar a propuesta de valor (Módulo 4).

---

## 6. Herramientas que el entregable exige (y dónde las armamos)

| Herramienta | Para qué | Dónde |
|---|---|---|
| **Perfil de cliente (VPC, lado derecho)** | Jobs / pains / gains del atleta | `02 - Perfil de Cliente y Arquetipo v1.md` (intuitivo) → versión final post-campo |
| **Arquetipo de persona** | Personaje + relación con el problema | mismo archivo |
| **Mapa de empatía** | Qué piensa/siente/ve/oye/dice/hace | mismo archivo (template) → completar con datos |
| **Customer journey map** | Recorrido del atleta con el problema | mismo archivo (template) → completar con datos |
| **Guía de entrevistas** | Script de preguntas | `01 - Guía de Entrevistas - Atleta Amateur.md` |
| **Tracker de entrevistas + síntesis** | Registro, patrones, insights, priorización | `Tracker de Entrevistas y Síntesis.xlsx` |

### Dónde va cada herramienta en el documento (criterio del mentor, 19 jun)

El entregable es texto en prosa (Anexo E); las herramientas no se entregan como Figma. Regla de ubicación:

- **En el cuerpo del trabajo:** el **VPC / customer profile** (jobs, pains, gains) y **todos los insights y resultados estadísticos** de entrevistas y encuesta. Es lo más enriquecedor y debe leerse en el desarrollo. Las herramientas se *desarrollan* en prosa en el cuerpo, no solo se adjuntan.
- **En el anexo:** el **arquetipo**, el **mapa de empatía**, la **estructura de la entrevista/encuesta** (guion) y **2–3 transcripciones de entrevistas** como ejemplo. Se referencian desde el cuerpo para no cortar el flujo de lectura.
- **Formato aceptable:** bullets numerados alcanzan; no hace falta diagrama elaborado. Lo que se adelante ahora (diagramas incluidos) sirve igual para el Demo Day y el TFG.

---

## 7. Timeline (mes del módulo)

> **Deadline real de entrega: 3 de julio de 2026** (confirmado por el mentor el 19 jun — hay margen cómodo). La entrega se sube al campus, módulo Tareas NBL. La reunión de mentoría ya ocurrió (19 jun, ver §10); **nosotros la agendamos** (es responsabilidad de la dupla). Si hiciera falta, el mentor puede extender hasta 7 días vía acuerdo + mail a coordinación (FAQ de la consigna), pero no lo necesitamos.

| Semana | Foco | Output |
|---|---|---|
| **Sem 1 (9–15 jun)** ✅ | Ver videos del Módulo 3. Cerrar hipótesis, perfil + arquetipo **intuitivos**, guía de entrevistas. Armar lista de candidatos. Agendar reunión con Esteban. | Perfil v1 + guía listas. Encuesta lanzada (60 respuestas). |
| **Sem 2 (16–22 jun)** ✅ | **Reunión de mentoría (19 jun)** — feedback incorporado (§10). 7 entrevistas hechas + Resultados provisorios redactados. | Feedback del mentor en este framework + 7/15 entrevistas |
| **Sem 3 (23–29 jun)** | Completar las 15 entrevistas (faltan ~8) + 2 de influencers. Re-difundir encuesta con la pregunta Android/iOS. Síntesis (patrones, insights). | 15+ entrevistas en el tracker + encuesta cerrada |
| **Sem 4 (30 jun–3 jul)** | Síntesis final, perfil + arquetipo **finales**, mapa de empatía + journey, comparativo con usuarios reales. Redacción del entregable (Word/PDF Anexo E) + PPT opcional. (Opcional: pedir a Esteban revisión previa por WhatsApp.) **Subir al campus antes del 3 jul.** | Entregable Punto I cargado |

> ⚠️ Recordatorio NBL: dos incumplimientos de entregables → el Director da por finalizada la tarea (desaprobados). El primer semáforo rojo obliga a re-presentar el módulo junto con el siguiente. Mantener el ritmo clase a clase.

---

## 8. Preparación de la reunión de mentoría (mediados de junio)

> ✅ **Reunión realizada el 19 jun 2026.** El resultado y todas las indicaciones del mentor están en **§10**. Esta sección queda como registro de lo que se preparó.

El mentor evalúa el **diseño de los experimentos** antes de que salgamos a campo. Llevar:

1. Hipótesis (sección 3) — qué creemos y qué lo rompería.
2. Perfil de cliente + arquetipo **intuitivos** (v1).
3. Guía de entrevistas — para que la critique antes de usarla.
4. Plan de muestreo (a quién, cuántos, cómo reclutamos).
5. Pregunta concreta para Esteban: *¿el segmento "atleta amateur comprometido" está bien acotado o lo estamos abriendo demasiado?* y *¿la guía evita preguntas que inducen la respuesta?*

Checklist del mentor que tenemos que satisfacer (de la consigna): vimos/aplicamos los videos; segmentos identificados; pains y gains identificados; mapa de empatía y journey incorporados; entrevistas realizadas; entregable subido con los hallazgos principales.

---

## 9. Archivos de este framework

- `00 - Framework Módulo 3 - El Cliente.md` — este documento (plan maestro).
- `01 - Guía de Entrevistas - Atleta Amateur.md` — script de entrevistas + banco de encuesta + preguntas a influencers.
- `02 - Perfil de Cliente y Arquetipo v1.md` — perfil VPC intuitivo, arquetipo, templates de empatía y journey.
- `Tracker de Entrevistas y Síntesis.xlsx` — registro de entrevistas, patrones, insights, priorización, hipótesis.

> Cuando el campo esté hecho, el entregable formal (Word, formato Anexo E) se arma duplicando el `nbl-template.js` de `/NBL/Guia/` y volcando los datos validados.

---

## 10. Feedback de la reunión de mentoría — 19 jun 2026

> Reunión con Esteban (mentor). Estado que le mostramos: 7 entrevistas hechas + encuesta con 60 respuestas. Veredicto general: **vamos muy bien y muy adelantados**; este es, intencionalmente, el módulo de mayor esfuerzo del NBL y el resto va a fluir más rápido. Lo que sigue es lo accionable.

### 10.1. Calendario y alcance

- **Deadline real: 3 de julio** (no fin de junio). Hay margen cómodo dado el avance.
- **Entrevistas: 15 mínimo** (regla B2C, no negociable; las encuestas **no** las reemplazan). Vamos 7 → faltan ~8. Aprovechar el círculo de deportistas y el gimnasio como pecera de reclutamiento (grabar con consentimiento).
- **Encuesta: 50–60 respuestas alcanzan.** Ya tenemos 60 ✓. Pendiente: **re-difundir agregando la pregunta Android/iOS** (faltó). Decisión de producto: **iOS primero** (es lo que ya tenemos y lo estándar de la industria).
- **Hay un checklist oficial nuevo** (consigna del módulo, ver §10.4). Antes la evaluación era solo por videos + guía; ahora hay checklist de alumnos + checklist de mentores. **Mantenernos sincronizados con él.**
- **Revisión previa opcional:** Esteban se ofrece a revisar el trabajo antes de subirlo. Coordinamos por WhatsApp si lo queremos.

### 10.2. Qué cubre el Módulo 3 dentro del VPC (aclaración clave)

El Value Proposition Canvas tiene dos mitades. **Este módulo trabaja solo la derecha: el customer profile.** La izquierda (value map / propuesta de valor) es el Módulo 4. Definiciones tal como las quiere el mentor:

- **Jobs to be done** = lo que el cliente **hace hoy** para arreglárselas con la problemática (cómo se las ingenia actualmente).
- **Pains** = los **dolores** del cliente en relación con el problema/solución.
- **Gains** = los **beneficios que espera obtener, *más allá* de la simple respuesta a los pains.** Ojo: no confundir gains con "pain relievers" (eso es del lado izquierdo, Módulo 4).

Resultado esperado al cerrar el capítulo: **necesidad/problema bien definido y validado** + **customer profile** con jobs/pains/gains claros + **insights de campo**. Funciona como filtro: recién con el problema validado se pasa a diseñar la propuesta de valor.

### 10.3. Estructura y formato del entregable (= base de la tesis)

Orden recomendado del capítulo (todo en prosa, estilo Anexo E):

1. **Segmentación de clientes.**
2. **Customer profile** (jobs, gains, pains).
3. **Arquetipo** de persona.
4. **Mapa de empatía.**
5. **Customer journey** + **insights/resultados** de entrevistas y encuesta.

Cuerpo vs. anexo (ver también §6):

- **Cuerpo:** VPC/customer profile + insights y resultados estadísticos (lo más valioso, va desarrollado en prosa).
- **Anexo:** arquetipo, mapa de empatía, estructura del guion de entrevista/encuesta y **2–3 transcripciones** de ejemplo.
- Bullets numerados son aceptables; no hace falta diagrama elaborado. Lo que se adelante ahora sirve para el Demo Day y el TFG.

### 10.4. Insights de campo que el mentor avaló

- **65% de los entrevistados/encuestados no usa wearable** → segmento amplio y casi sin competencia. Si lo capturamos bien, expande mucho el mercado.
- **El pain real no es el exceso de datos, es la falta de guía accionable** ("no sé qué entrenar / qué comer"). El problema de "datos sin accionar" es un sub-caso. → **Reframe del problema** (ver §3) que se traslada a la propuesta de valor del Módulo 4.
- El mentor remarca: el valor de las entrevistas/encuestas es exactamente esto — descubrir cosas que uno presuponía distintas. Volcar los insights en el cuerpo del trabajo.

### 10.5. Split Nico / Benja (post-módulo)

Todo el trabajo del Módulo 3 es común y sirve a ambos. Cuando se divida el TFG: **mantener la misma propuesta de valor y distinguir por segmentación de clientes** (lo más simple y lo que recomienda el mentor). Geografía (local vs LATAM) es alternativa secundaria.

### 10.6. Horizonte

- **Demo Day: octubre/noviembre 2026.** Meta del track: llegar con **~70% del TFG ya hecho** (el NBL está diseñado para eso). Este módulo es el más pesado; los siguientes (propuesta de valor, modelo de negocio, GTM) van más rápido.
- Aprendizaje del mentor: no perder el ritmo clase a clase — retomar la tesis "en frío" después de cursar cuesta el triple.

### 10.7. Checklist oficial a satisfacer (de la consigna)

**Checklist alumnos (Punto I):** definición de necesidad · segmentos potenciales (mapear todos) · segmento target en profundidad (demo/psico, jobs/pains/gains, conductas y motivadores) con mapa de empatía · arquetipos justificados · validación de campo paso a paso (entrevistas, observación, cantidad, insights, conclusiones) · mapa de empatía + customer journey adjuntos · análisis comparativo con la cartera de usuarios reales de Scala (sinergia corporativa).

**Checklist mentores:** videos aplicados · segmentos identificados · pains y gains identificados · empatía + journey incorporados · entrevistas realizadas · entregable subido con los hallazgos principales · semáforo verde/amarillo · comentarios del mentor incorporados · ritmo clase a clase · sin dos incumplimientos.
