# 00 · Framework Módulo 5 — El MVP

**Proyecto:** Scala · **Dupla:** Nico Karagozian + Benjamín Mackinnon · **Mentor:** Esteban Balduzzi
**Período:** agosto 2026 · **Entrega:** fin de mes, campus virtual (Tareas NBL)
**Entregable:** Punto III del Anexo B de la Guía TFG — *El product-market fit*

---

## 1. Dónde estamos en el arco del programa

Los Módulos 3 y 4 cerraron la **fase de diseño**: el Módulo 3 definió y validó el problema y el perfil del cliente (lado derecho del Value Proposition Canvas), y el Módulo 4 diseñó el mapa de valor y verificó el *fit* **en el papel**. El Módulo 5 es la bisagra: se sale del edificio a testear ese diseño contra el mercado.

El método que el módulo pide es explícito y tiene cinco pasos que se repiten en ciclo:

1. Formular la **hipótesis** de diseño que se quiere poner a prueba.
2. Inventar un **experimento** rápido y barato que la testee.
3. Definir el **criterio de éxito** *antes* de correrlo.
4. **Correr** el experimento y recoger evidencia.
5. **Aprender**: analizar, concluir y decidir el próximo paso.

Los dos objetivos declarados de testear son reducir el riesgo de incertidumbre del diseño y producir evidencia —débil o fuerte— que soporte o refute las hipótesis. Si la hipótesis se valida, se sigue refinando la propuesta de valor con un experimento nuevo; si no se valida, se repiensa la propuesta.

## 2. Qué es (y qué no es) un MVP en este módulo

El marco del módulo es el de Eric Ries: el MVP es *la versión de un nuevo producto que permite recoger, con el mínimo esfuerzo, la máxima cantidad de conocimiento validado acerca de los consumidores*. El error más común —y el que el módulo advierte explícitamente— es pensar que el MVP es la primera versión del producto definitivo.

En realidad el MVP es **una serie de prototipos** dentro de un proceso iterativo de aprendizaje, con cuatro hitos:

| Hito | Qué es | Estado en Scala |
|---|---|---|
| 1 | Idea de producto diseñada, lista para experimentar | Cerrado con el Módulo 4 |
| 2 | Prueba de concepto publicada y presentada | **Objeto de este módulo** |
| 3 | Primera versión codificada | Disponible como prototipo funcional |
| 4 | Producto maduro que se empieza a vender | Fuera de alcance del NBL |

La advertencia central del módulo es que los emprendedores suelen gastar dinero en una versión con código *antes* de pasar las primeras pruebas del MVP. Scala llega al Módulo 5 con esa secuencia invertida: la versión codificada existe. Eso **no exime** de correr el hito 2 —la propuesta de valor sigue sin evidencia de mercado—, pero convierte al código en un **activo del experimento** en vez de un sustituto de la validación. El prototipo funcional permite grabar el equivalente al video demo de Dropbox sin producirlo con maquetas: es el mismo experimento del hito 2, con mejor material.

Cada iteración se cierra con la pregunta que ordena todo el módulo: **¿qué estoy tratando de aprender y cómo puedo aprenderlo con la menor inversión de tiempo?**

## 3. Los tipos de experimento que habilita el módulo

- **Análisis de tendencias.** Volumen y evolución de búsquedas para leer interés agregado. Barato, evidencia débil, sirve de contexto.
- **Mailing.** Campaña a una base con un CTA. Mide *open rate* y CTR. Benchmarks del ejemplo IMUV: OR ~20%, CTR ~3%.
- **Landing page.** Página con propuesta de valor y un formulario. Mide tasa de conversión visitante→lead. Benchmark de referencia: ~3% con tráfico frío.
- **Video MVP (tipo Dropbox).** Un video que muestra el concepto en vez de construirlo. Drew Houston pasó de 5.000 a 75.000 inscriptos en la lista de espera en 24 horas.
- **Wizard of Oz.** Se simula la funcionalidad principal con un humano detrás de la cortina. Zappos vendía zapatos que iba a comprar a mano a la tienda de la esquina. Es el experimento que mejor mide demanda real, disposición a pagar y confianza.
- **Fake door / prueba de precio.** Se ofrece el pago antes de que el pago exista y se mide cuántos hacen clic. El ejemplo del posteo en X con la página de Notion a US$25: 100.000 vistas, 50 pagos el primer día.
- **Entrevistas de cierre.** No reemplazan al experimento cuantitativo, pero explican el *por qué* de un resultado y son el paso natural cuando la muestra es chica o aparece un subsegmento inesperado.

Nota metodológica que conviene tener presente: el artículo *Do Things That Don't Scale*, de Paul Graham, es lectura sugerida del módulo y es la justificación teórica de que un experimento manual, de mano en mano y con n chico, sea metodológicamente correcto en esta etapa.

## 4. Las hipótesis a testear

Las hipótesis no se inventan en este módulo: salen de la §8 del entregable del Módulo 4, que dejó los supuestos que sostienen la propuesta y explicitó que serían la agenda de experimentos del Módulo 5. Reordenadas por prioridad:

**H1 · Valor: accionar por sobre mostrar.**
*Creemos que* el atleta amateur comprometido percibe más valor en un coach que decide e interpreta por él que en una app que le muestra datos, y por eso está dispuesto a dejar sus datos de contacto para probarlo.
Es la hipótesis básica de la propuesta de valor y la que el módulo pide validar como mínimo. Sin ella, todo lo demás sobra.

**H2 · Alcance: el wearable es opcional.**
*Creemos que* el frente sin wearable (Flor, ~65% del segmento) muestra un interés comparable al del frente con wearable (Fede, ~35%), y que por lo tanto el mercado desatendido es real y no un consuelo del diseño.
Es el diferencial más grande de la propuesta y el menos probado. También resuelve la pregunta estratégica de si conviene priorizar un frente o sostener los dos.

**H3 · Captura de valor: disposición a pagar.**
*Creemos que* el atleta que probó el producto está dispuesto a pagar del orden de US$10 por mes.
Ataca el riesgo más serio del Módulo 4 en términos de negocio: el 72% del segmento pagaría o tal vez pagaría, pero el 63% gasta cero hoy. El pago es post-prueba, con lo cual la hipótesis sólo se puede testear después de una experiencia de uso, no antes.

**H4 · Confianza.**
*Creemos que* el atleta confía en la recomendación de un coach de inteligencia artificial cuando es específica, está explicada y se sostiene en el tiempo, y que esa confianza se construye con el uso.
El campo identificó la confianza como la principal barrera de adopción, con tres objeciones: fatiga de inteligencia artificial, sesgo de complacencia del modelo y falta de aval profesional. Es la hipótesis más difícil de medir con una métrica sola; se mide por comportamiento sostenido (¿vuelve al día siguiente?) y por lo que dicen en las entrevistas de cierre.

**Fuera del alcance experimental.** Dos riesgos del Módulo 4 no se testean con experimentos de mercado y se declaran como tales en el entregable: la dependencia de las interfaces de Garmin y Apple Health (riesgo técnico y de plataforma) y el hecho de que el vínculo humano y la corrección técnica presencial quedan fuera del producto (límite de alcance ya declarado en la §3.3 del Módulo 4).

## 5. Criterios de éxito: cómo se fijan

El módulo es terminante en esto: sin una hipótesis y un criterio de éxito claramente definidos **antes** de correr el experimento, no se sabe qué se está aprendiendo. Los criterios de este módulo se fijan sobre tres fuentes:

- Los benchmarks del ejemplo IMUV, que es la vara con la que el mentor va a leer los resultados (OR 20%, CTR 3%, conversión de landing 3%).
- La corrección por tipo de tráfico: los benchmarks de IMUV corresponden a tráfico frío comprado o a una base de datos pública. Scala va a difundir sobre red personal, que es tráfico tibio y convierte varias veces mejor; por eso los umbrales se fijan más altos y se declara explícitamente el sesgo en el entregable.
- La honestidad del corte: el criterio se escribe antes, no se ajusta después. Si el resultado queda por debajo, el aprendizaje es igual de válido y así se reporta.

Un criterio adicional que atraviesa todos los experimentos: **excluir a los conocidos del cómputo principal**. IMUV lo hizo (reportó 3 interesados desconocidos sobre 37 visitantes, excluyendo 9 conocidos) y es lo que le da credibilidad al número. Con difusión sobre red personal esta separación es imprescindible: se reportan las dos cifras y la conclusión se apoya en la de desconocidos.

## 6. Instrumentos: las dos cards

El módulo entrega dos plantillas y el entregable se estructura alrededor de ellas. Se completa una **card de experimento** antes de correr cada test y una **card de aprendizaje** después.

**Card de experimento** — 1. Tipo y nombre del experimento · 2. Hipótesis: *creemos que…* · 3. Test: explicación del test y del target · 4. Métrica: cómo se van a medir los resultados · 5. Éxito: cómo definimos si fue exitoso.

**Card de aprendizaje** — 1. Tipo y nombre del experimento · 2. Hipótesis: *creíamos que…* · 3. Observación: explicación de la evidencia observada · 4. Aprendizajes / insights · 5. Decisiones y acciones: qué haremos.

Entre una card y otra va el **flow del experimento**, que es como IMUV documentó el diseño: público, contenido, canal, CTA y resultado esperado, en cinco pasos encadenados. Es la pieza que hace legible el experimento y conviene replicarla.

## 7. Restricciones de esta corrida

- **Canal disponible:** redes personales orgánicas (Instagram, LinkedIn, WhatsApp). Sin pauta paga y sin base de mails propia.
- **Ventana:** dos semanas antes de la entrega, lo que habilita una secuencia de dos experimentos encadenados —el segundo corriendo sobre los interesados que deja el primero, exactamente como en IMUV— y no sólo un test suelto.
- **Presupuesto:** cero. Toda la producción es propia.
- **Activo diferencial:** el prototipo funcional, que permite grabar demos reales y ofrecer una experiencia de uso verdadera en el segundo experimento.

Esa combinación descarta el mailing masivo como experimento principal (no hay base) y empuja hacia el par **video + landing** para el primer paso y hacia un **Wizard of Oz con prueba de precio** para el segundo. Las tres opciones desarrolladas están en `01 - Opciones de experimento.md`.

## 8. Plan de trabajo · agosto 2026

| Paso | Foco | Estado |
|---|---|---|
| 1 | Ver los videos del módulo y leer la consigna | ✅ |
| 2 | Armar el framework, las hipótesis y las opciones de experimento | ✅ (este documento) |
| 3 | Elegir el experimento y completar las cards de experimento | ⏳ |
| 4 | Producir los assets: video demo, landing y formulario | ⏳ |
| 5 | Reunión de mentoría con Esteban (obligatoria, a mediados de mes) | ⏳ agendar |
| 6 | Correr el experimento 1 y medir | ⏳ |
| 7 | Correr el experimento 2 sobre los leads del 1 | ⏳ |
| 8 | Completar las cards de aprendizaje y redactar el entregable | ⏳ |
| 9 | Incorporar el feedback del mentor y subir al campus | ⏳ |

## 9. Qué tiene que quedar demostrado al cierre

El checklist del módulo pide siete hitos acumulados de los Módulos 3, 4 y 5. Los cinco primeros están cubiertos por los módulos anteriores; los dos últimos son responsabilidad de este:

- Se construyó o definió un MVP.
- Se explicaron los experimentos de validación realizados.
- Se argumentó el product-market fit.

Y el checklist específico del Punto III agrega cuatro exigencias de contenido: el fit explicado con el mapa de valor y el perfil del cliente del VPC; la arquitectura del MVP descripta conceptual y técnicamente; la evidencia empírica de validación con métricas concretas; y los principales puntos de validación —porcentaje de aceptación, disposición a pagar, frecuencia de compra, cantidades—. Scala no es un proyecto de impacto social o ambiental, con lo cual el quinto punto del checklist no aplica y así se deja constancia.

---

*Documentos relacionados:* `01 - Opciones de experimento.md` · `02 - Estructura del entregable.md` · `03 - Cards (plantillas).md`
