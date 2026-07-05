# Encuesta Cuantitativa — Atletas Amateurs · Scala (Módulo 3)

> Complemento de las entrevistas. Objetivo: **validar a escala** los patrones que salen del campo (qué tan extendido está el problema, gasto, disposición a pagar, señal de PMF). ~3 minutos, anónima.
> Regla de oro (igual que en las entrevistas): **aprender del problema, no vender Scala.** El bloque de concepto/precio va al final y en tono neutral.
> Mapea a las hipótesis del Framework: [H1] datos sin accionar · [H2] stack fragmentado · [H3] frecuencia · [H4] disposición a pagar · [H5] wearable opcional · [H6] interfaz conversacional.

---

## Título del formulario

**Cómo entrenás y tomás tus decisiones**
*Estudio para una maestría · 3 minutos · anónimo*

## Descripción / intro

> Estamos haciendo un estudio sobre cómo deciden entrenar, comer y recuperarse las personas que entrenan en serio. No hay respuestas correctas ni incorrectas: nos interesa tu experiencia real. Son ~3 minutos y es anónimo. ¡Gracias por el tiempo!

---

## Sección 1 — Sobre vos y tu entrenamiento

**P1. ¿Cuál es tu deporte principal?** *(una opción · requerido)*
- Running
- Ciclismo
- Triatlón
- Gym / Fuerza
- Deportes de raqueta (tenis, pádel)
- Natación
- CrossFit / Funcional
- Otro

**P2. ¿Cuántas veces por semana entrenás, en promedio?** *(una opción · requerido)*
- 1–2
- 3–4
- 5–6
- 7 o más

**P3. ¿Hace cuánto entrenás de forma regular?** *(una opción · requerido)*
- Menos de 1 año
- 1 a 3 años
- Más de 3 años

**P4. ¿Tenés un objetivo concreto ahora mismo?** *(varias opciones)*
- Sí — una carrera o competencia
- Sí — un objetivo de cuerpo / peso
- Sí — una marca o rendimiento
- No, entreno sin un objetivo puntual

**P5. Género** *(una opción · requerido — habilita el bloque de ciclo)*
- Femenino
- Masculino
- Prefiero no decir

**P6. Edad** *(una opción · requerido)*
- Menos de 25
- 25–34
- 35–44
- 45 o más

---

## Sección 2 — Datos y decisiones del día a día

**P7. ¿Usás un wearable / reloj para entrenar?** *(una opción · requerido)* [H5]
- Sí — Garmin
- Sí — Apple Watch
- Sí — otro (Polar, Coros, Whoop, etc.)
- No uso wearable

**P8. "Tengo muchos datos de mi cuerpo (sueño, frecuencia cardíaca, HRV, pasos…) pero no sé bien qué hacer con ellos."** *(escala 1–5 · requerido)* [H1]
`1 = Muy en desacuerdo · 5 = Muy de acuerdo`

**P9. ¿Cuántas apps de fitness / salud usás regularmente?** *(una opción · requerido)* [H2]
- 0
- 1
- 2
- 3 o más

**P10. Cuando te levantás y tenés que decidir si entrenar fuerte, suave o descansar, ¿qué es lo que MÁS pesa?** *(varias opciones)* [H1]
- Cómo me siento ese día
- Lo que dice mi plan
- Un dato del reloj o la app
- Nada en particular, improviso

**P11. ¿Con qué frecuencia dudás sobre si estás entrenando, comiendo o recuperándote "bien"?** *(una opción · requerido)* [H3]
- Casi todos los días
- Algunas veces por semana
- De vez en cuando
- Casi nunca

---

## Sección 3 — Cómo lo resolvés hoy

**P12. ¿Tenés o tuviste entrenador, coach o nutricionista?** *(una opción · requerido)* [H2]
- Tengo ahora
- Tuve en el pasado
- Nunca

**P13. ¿Cuánto gastás por mes hoy en apps, servicios o coaching de fitness / salud?** *(una opción · requerido)* [H4]
*(montos aproximados, en USD o equivalente)*
- US$0
- Menos de US$10
- US$10–30
- US$30–100
- Más de US$100

**P14. Si la app de fitness que más usás dejara de existir mañana, ¿cómo te sentirías?** *(una opción · requerido)* [PMF — Sean Ellis]
- Muy decepcionado/a
- Algo decepcionado/a
- No me importaría
- No uso ninguna app

> *Regla de lectura: ≥40% de "Muy decepcionado/a" = señal de Product-Market Fit.*

---

## Sección 4 — Qué te gustaría

**P15. "Me gustaría una guía personalizada que me diga, según mi contexto, qué entrenar y comer cada día."** *(escala 1–5 · requerido)* [gain dominante]
`1 = Muy en desacuerdo · 5 = Muy de acuerdo`

**P16. ¿Qué es lo que MÁS te frustra hoy de entrenar y cuidarte?** *(respuesta abierta)*
*(la pregunta cualitativa clave — alimenta pains y citas)*

**P17. ¿Te resultaría natural gestionar todo esto conversando (por chat o voz) con un coach que te conoce?** *(una opción · requerido)* [H6]
- Sí, me gustaría
- Me da igual
- No, prefiero ver los datos y decidir yo

**P18. Imaginá un coach de IA con el que hablás y que arma y ajusta tu entrenamiento y nutrición según tu contexto. ¿Pagarías ~US$10/mes por algo así?** *(una opción · requerido)* [H4 / concepto]
- Sí
- Tal vez
- No

---

## Sección 5 — Ciclo menstrual *(opcional)*

**P19. Si menstruás: ¿te gustaría que tu plan de entrenamiento y nutrición tenga en cuenta tu ciclo menstrual?** *(una opción)* [sub-segmento]
- Sí
- No
- No sé
- No aplica

---

## Sección 6 — Cierre

**P20. ¿Estarías dispuesto/a a que te hagamos una entrevista de 20 minutos para contarnos más?** *(respuesta corta · opcional)*
> Si sí, dejanos un mail o teléfono. Nada de spam — solo para coordinar.

*(Esta pregunta también sirve para reclutar entrevistados para las 15 entrevistas del módulo.)*

---

## Notas de diseño

- **20 preguntas, ~3 min.** La mayoría son de un toque (opción única o escala). Solo P16 pide escribir.
- **Anónima** salvo que dejen contacto voluntario en P20.
- **El concepto de Scala recién aparece en P18**, y de forma neutral. Antes, todo es sobre el problema y los hábitos reales — para no contaminar las respuestas.
- **Cruces útiles para el entregable:** P8/P9/P11 (tamaño del problema) × P7 (wearable) · P13/P14/P18 (disposición a pagar y PMF) · P5 × P19 (sub-segmento ciclo) · P16 (citas para pains).
- **Distribución sugerida:** running clubs, boxes de crossfit, grupos de ciclismo, club de tenis, gimnasios, contactos de la maestría y la base de usuarios de Scala. Apuntar a ≥50 respuestas para que los porcentajes tengan algún peso.
