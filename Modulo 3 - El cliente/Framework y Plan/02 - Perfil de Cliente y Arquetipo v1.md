# Perfil de Cliente y Arquetipo — v1 (intuitivo) · Scala

> Primera versión **intuitiva** (hipótesis del equipo), a validar y corregir con las entrevistas. Tras el campo se reemplaza por la v2 "final". Construir el perfil **desde el cliente**, no desde la solución (error común del VPC).
> Segmento: **Atleta amateur comprometido** (B2C, cliente = usuario = quien paga).

---

## 1. Perfil de Cliente (lado derecho del Value Proposition Canvas)

### Jobs to be Done

**Funcionales**
- Decidir cada día si entrenar fuerte, suave o descansar.
- Saber qué y cuándo comer para sostener el rendimiento y el objetivo (bajar grasa, ganar músculo, aguantar una carrera).
- Recuperarse bien entre sesiones para no lesionarse ni estancarse.
- Progresar de forma medible hacia un objetivo concreto (una carrera, una marca, un peso).
- Interpretar los datos del wearable y convertirlos en acción.

**Sociales**
- Sentirse y mostrarse como "alguien que entrena en serio / se cuida".
- Compartir logros y pertenecer a una comunidad (running club, box, Strava).

**Emocionales**
- Sentir control y confianza en que "lo está haciendo bien".
- Reducir la ansiedad de no saber si está sobre o sub-entrenando.
- Mantener la motivación y la constancia.

### Pains (dolores)

- Tiene **muchos datos** (HRV, sueño, pasos, FC) y **no sabe qué hacer con ellos**.
- Usa **varias apps fragmentadas** que no se comunican; carga lo mismo dos veces.
- Un **coach humano es caro** (US$100–400+/mes) y queda fuera de alcance.
- Miedo a **lesionarse, sobreentrenar o estancarse** por decidir mal.
- Los planes genéricos **no se adaptan** a su contexto (cansancio, viaje, lesión, ciclo menstrual).
- **Pierde la motivación** y abandona (el churn de fitness apps es altísimo).
- Las apps **informan pero no le dicen qué hacer** (dashboard, no entrenador).

### Gains (beneficios esperados)

- Saber, cada día, **exactamente qué hacer** (entrenar/descansar, qué comer).
- Un plan que **se ajusta solo** a cómo viene su semana y su cuerpo.
- Acompañamiento personalizado **a un precio accesible**.
- Progreso visible hacia el objetivo, sin lesiones.
- Sentir que tiene "un coach en el bolsillo" que lo conoce y lo recuerda.
- Una sola herramienta en lugar de cinco.

> **Priorización — actualización de campo (19 jun, 7 entrevistas + encuesta n=60, avalada por el mentor):** el pain dominante **no** es "tengo datos pero no sé accionarlos" sino **la falta de una guía personalizada y accionable** (no sé qué entrenar ni qué comer), con o sin wearable. "Datos sin accionar" pasa a ser un sub-caso del segmento que sí tiene dispositivo (11 de 21 con wearable lo puntúan alto). El gain dominante se sostiene: *"que me diga qué hacer hoy"*. Al construir la v2 final, reordenar pains poniendo **"falta de estructura/guía"** arriba de "datos sin accionar". Detalle en `../Entrega/Resultados provisorios entrevistas y encuesta.docx`.

> **Definiciones del VPC según el mentor (no confundir):** *Jobs* = lo que el cliente **hace hoy** para arreglárselas. *Pains* = sus dolores frente al problema. *Gains* = beneficios que espera **más allá** de la mera respuesta a los pains (los "pain relievers" son del lado izquierdo del VPC → Módulo 4, no van acá). Este módulo trabaja **solo el lado derecho** (customer profile).

---

## 2. Arquetipo de Persona (v1)

> Representación ficticia construida con (por ahora) datos intuitivos. Dos bloques: el personaje + su relación con el problema. Tras el campo, ajustar con citas y datos reales.

### El personaje — "Martín, el amateur con objetivo"

| Atributo | Descripción |
|---|---|
| **Nombre** | Martín, 32 años |
| **Demografía** | Vive en Buenos Aires, profesional (relación de dependencia o freelance), nivel socioeconómico medio / medio-alto, smartphone-first. |
| **Deporte** | Corre 4 veces por semana, entrena un objetivo (un 21k en 5 meses). Hizo algo de gym. |
| **Psicografía** | Disciplinado pero con poco tiempo. Le gusta medir y mejorar. Consume contenido de fitness en redes. Dispuesto a gastar en su salud y rendimiento. Quiere resultados pero no quiere "estudiar" fisiología. |
| **Tecnología** | Tiene un Garmin (o Apple Watch). Usa Strava, una app de nutrición, notas del cel. Mira los números pero no los entiende del todo. |

### Su relación con el problema

| Dimensión | Detalle |
|---|---|
| **Jobs** | Cumplir su plan hacia el 21k sin lesionarse; comer acorde; saber cuándo forzar y cuándo aflojar. |
| **Pains** | "Tengo el Garmin lleno de datos y no sé si entrenar hoy o descansar." Coach humano caro. Apps que no se hablan. |
| **Gains** | Que algo le diga, cada mañana, qué hacer hoy — ajustado a cómo durmió y cómo viene la semana. |
| **Drivers (movilizadores de compra)** | Quiere lograr el objetivo; miedo a lesionarse; ya gasta en fitness; le seduce la personalización; precio accesible vs. coach humano. |
| **Inhibidores** | Desconfianza de que una IA "lo conozca" de verdad; ya probó apps que abandonó; dudas de privacidad de datos de salud; "¿no me alcanza con lo que ya tengo gratis?". |

> **Variante a contemplar — "Sofía, la atleta que entrena con su ciclo":** mismo núcleo, pero suma el job de planificar entrenamiento/nutrición sensible al ciclo menstrual, hoy subatendido. No es arquetipo separado en esta entrega; se documenta como sub-segmento en el comparativo.

---

## 3. Mapa de Empatía (template — completar con datos de campo)

> Una entrada por cuadrante, citando entrevistas (E1, E2…). Ahora va con hipótesis; tras el campo, con evidencia.

| Cuadrante | Hipótesis v1 (reemplazar con citas reales) |
|---|---|
| **¿Qué PIENSA y SIENTE?** | "No sé si estoy entrenando bien." Ansiedad por lesionarse. Orgullo cuando cumple. |
| **¿Qué VE?** | Otros con relojes y apps; influencers con rutinas; amigos que contratan coach; dashboards llenos de números. |
| **¿Qué OYE?** | Recomendaciones contradictorias de redes; "tenés que descansar más"; su grupo de running; podcasts de fitness. |
| **¿Qué DICE y HACE?** | Sube entrenamientos a Strava; se queja de no tener tiempo; prueba apps y las abandona; pregunta en foros qué significa su HRV. |
| **PAINS** | Datos sin acción; fragmentación; costo del coach; miedo a lesión/estancamiento. |
| **GAINS** | Saber qué hacer hoy; plan que se adapta; progreso sin lesión; coach accesible. |

---

## 4. Customer Journey Map (template — completar con datos de campo)

> Recorrido del atleta con el **problema** (no con Scala). Marca dónde duele más — ahí está la oportunidad.

| Etapa | Qué hace el atleta | Qué piensa/siente | Pain points | Oportunidad |
|---|---|---|---|---|
| **1. Se fija un objetivo** | Se anota en una carrera / decide bajar de peso | Motivado, ambicioso | No sabe cómo estructurar el camino | Guía inicial personalizada |
| **2. Arma un plan** | Busca planes genéricos, copia de redes, o paga coach | Abrumado por opciones | Plan genérico no se adapta; coach caro | Plan a medida accesible |
| **3. Entrena día a día** | Decide cada día qué hacer, mira el reloj | Duda: ¿fuerte o descanso? | Datos sin interpretar; decisiones a ciegas | "¿Qué hago hoy?" accionable |
| **4. Come / se recupera** | Improvisa nutrición; carga comidas en otra app | Inseguro de si come bien | Apps fragmentadas; sin vínculo entreno-nutrición | Nutrición integrada al plan |
| **5. Mide progreso** | Mira Strava, la balanza, el espejo | Frustrado si no ve avance | No sabe si va bien; sin feedback experto | Feedback y ajuste continuo |
| **6. Se estanca / lesiona / aburre** | Baja la frecuencia, abandona la app | Desmotivado, culpable | Churn: deja todo | Coach que sostiene la motivación |

---

## 5. Segmentos potenciales (mapa completo — para el entregable)

> El entregable pide mapear **todos** los grupos que tienen el problema, y luego justificar el target.

| Segmento | Tiene el problema | ¿Target? | Nota |
|---|---|---|---|
| **Atleta amateur comprometido** (con wearable) | Alto | ✅ **Target principal** | Núcleo: datos sin accionar. Cliente = usuario = paga. |
| **Atleta amateur sin wearable** | Medio-alto | ✅ Dentro del target | Entra por la interfaz conversacional; aporta el input él mismo. |
| **Mujer atleta (ciclo)** | Alto, subatendido | 🟡 Sub-segmento | Diferencial femtech; funcionalidad en desarrollo. |
| **Atleta profesional / élite** | Bajo | ❌ No | Ya tiene equipo humano; uso complementario a lo sumo. |
| **Sedentario que quiere arrancar** | Distinto problema | ❌ No (por ahora) | Necesita motivación/hábito, no optimización. |
| **Influencer / atleta-referente** | N/A (oferta) | ❌ No es cliente | Canal de GTM (anexo Doc 3), no segmento a monetizar. |

**Justificación del target (atleta amateur comprometido):** es donde el problema es más popular, frecuente y con disposición a pagar demostrada (ya gasta en apps y coaches); cliente y usuario coinciden (adopción simple); y es el perfil que ya usa Scala en producción, lo que permite triangular entrevistas con comportamiento real.

---

## 6. Comparativo: potenciales vs. target vs. clientes que la empresa ya alcanza

> Punto 5 del entregable. Scala YA tiene usuarios reales en producción — usar esa data.

| Dimensión | Segmentos potenciales | Target seleccionado | Usuarios reales actuales de Scala |
|---|---|---|---|
| Amplitud | Todo el que entrena | Amateur comprometido con objetivo | *(completar con datos de la app)* |
| Tiene wearable | Mixto | Mayoría sí, algunos no | *(% real de usuarios con Garmin)* |
| Cómo llegó | — | — | *(orgánico, referidos, etc.)* |
| Qué usa más | — | Coach + plan + nutrición | *(features más usadas reales)* |
| Aprendizaje | — | — | *(qué nos dicen los usuarios reales vs. lo que esperábamos)* |

> Acción: extraer de la base de Scala (con cuidado de privacidad) el perfil agregado de los usuarios reales y contrastarlo con el target intuitivo. Si difieren, eso es un insight de primer orden para el entregable.
