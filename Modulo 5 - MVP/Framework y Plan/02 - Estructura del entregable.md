# 02 · Estructura del entregable — Módulo 5

Documento `Doc - Modulo 5 - El MVP y el Product-Market Fit - Scala.docx`, formato Anexo E de la Guía TFG, mismo criterio de maquetación que el Módulo 4: A4, márgenes 3 cm laterales y 2,5 cm superior e inferior, Arial 12 negro, interlineado 1,5, cuerpo justificado, títulos de sección Arial 16 bold con salto de página antes, subtítulos Arial 12 bold, epígrafes centrados en itálica Arial 10 debajo del elemento.

Extensión estimada: 18 a 24 páginas con anexos. Registro: prosa académica en español rioplatense, párrafos argumentativos, terminología del framework en inglés (*jobs, pains, gains, pain relievers, gain creators, fit, product-market fit, MVP*).

**Criterio de tablas.** Mismo que en el Módulo 4: prosa por defecto, tablas sólo donde la información es genuinamente tabular. En este documento eso significa las **cards** —que son tabulares por diseño y así las entrega el módulo—, los **flows** de cada experimento y el **cuadro de resultados**. Las cards y los flows son piezas del framework y van con su forma propia; no cuentan como "tablas de relleno".

**Encuadre temporal.** Este es el módulo en el que el MVP existe legítimamente: acá sí se describe el prototipo, se muestran capturas y se habla de lo construido. Lo que hay que cuidar es el otro extremo —no presentar el producto como un negocio en marcha con usuarios pagos, porque el modelo de negocios es el Módulo 6—.

---

## Portada

Universidad de San Andrés · Maestría en Inteligencia Artificial · Programa New Business Launchpad (NBL) · Módulo 5. Título: *El MVP y el product-market fit*. Subtítulo: *Coach de inteligencia artificial para atletas*. Nicolás Karagozian · Benjamín Mackinnon. Mentor: Esteban Balduzzi. Buenos Aires, agosto de 2026.

## Resumen

Media página. Qué hipótesis se testearon, con qué experimentos, qué evidencia se obtuvo y qué se decidió. Se escribe al final, cuando están los números. Cierra anticipando la conclusión sobre el product-market fit para que el mentor sepa desde el primer párrafo cuál es la tesis del documento.

## 1. Del diseño al testeo

Media a una página. Dónde queda el proyecto después del Módulo 4 —el *fit* verificado en el papel, con sus límites declarados— y por qué eso todavía no es validación. El método del módulo en sus cinco pasos: hipótesis, experimento, criterio de éxito, corrida, aprendizaje. Los dos objetivos de testear: reducir incertidumbre y producir evidencia que soporte o refute. Cierra enunciando qué se va a testear y en qué orden.

## 2. El product-market fit desde el Value Proposition Canvas

*Es la primera consigna del Punto III y la primera casilla del checklist: explicar el fit usando el mapa de valor y el perfil del cliente del VPC del Módulo 4.*

Dos a tres páginas. No se repite el canvas entero: se argumenta el fit. Para cada frente, se toma el *pain* dominante y se muestra qué *pain reliever* lo ataca y con qué evidencia de campo. Para Fede, tener los datos y no accionarlos, contra la conversión automática de la biometría en una recomendación diaria. Para Flor, la ausencia de estructura propia, contra el plan armado por conversación sin necesidad de dispositivo. Se retoman las citas del Módulo 3 que ya están integradas en la prosa del Módulo 4.

La sección debe distinguir con claridad **fit de diseño** —el que quedó verificado en el papel— de **product-market fit**, que es lo que este módulo se propone poner a prueba, y anticipar que el documento va a concluir con un fit *parcialmente validado* y no con una declaración de victoria. Se retoman también los tres *pains* que la propuesta declaradamente no resuelve (corrección técnica presencial, aval profesional, vínculo comunitario), porque un fit honesto los incluye.

## 3. El MVP: proceso de construcción y arquitectura

*Segunda consigna del Punto III y segunda casilla del checklist: describir conceptual y técnicamente el proceso de diseño y construcción del MVP.*

Tres a cuatro páginas, en tres subsecciones.

**3.1 Qué es un MVP y qué no.** El marco de Eric Ries, la definición de conocimiento validado con mínimo esfuerzo, y la corrección del error habitual: el MVP no es la primera versión del producto definitivo sino una serie de prototipos dentro de un proceso de aprendizaje. Los cuatro hitos, con el diagnóstico de dónde está Scala en cada uno. Acá va la discusión honesta —y es un punto fuerte del documento si se escribe bien— de que el proyecto llegó con la versión codificada antes de las primeras pruebas de concepto, cuál es el riesgo que eso implica según el propio marco del módulo, y por qué eso no exime de correr la validación de la propuesta de valor sino que la vuelve más urgente. El código deja de ser un atajo y pasa a ser un activo del experimento, del mismo modo que el video de Dropbox fue el producto antes de que hubiera producto.

**3.2 Arquitectura del MVP.** Descripción conceptual y técnica. La superficie principal es el coach conversacional agéntico; alrededor, el dashboard biométrico con el Readiness Score, los planes de entrenamiento, la nutrición con registro por foto, el ciclo menstrual y la memoria persistente. En lo técnico: aplicación web progresiva, frontend en React con TypeScript, backend en Express, base Postgres, modelo de lenguaje con uso nativo de herramientas para la capa agéntica, integración con Garmin Connect, internacionalización español e inglés. Se explica qué queda deliberadamente fuera del MVP y por qué. Acá sí van capturas, con epígrafe.

**3.3 Los artefactos del experimento.** Qué se construyó específicamente para testear: el video demo, la landing, el formulario, la pieza de continuidad con el precio. Se describen como instrumentos de medición, no como producto.

## 4. Diseño de los experimentos

Dos a tres páginas. Las hipótesis derivadas de la §8 del Módulo 4, enunciadas en el formato del módulo (*creemos que…*), con la justificación de por qué esas y no otras, y por qué en ese orden. Los criterios de éxito con su fundamento: de dónde salen los benchmarks, por qué se corrigieron hacia arriba respecto de IMUV y qué sesgo introduce difundir sobre red personal. Acá va también la decisión de separar el cómputo de conocidos y desconocidos, explicada como decisión metodológica y no como disculpa.

Después, una subsección por experimento, cada una con su **card de experimento** y su **flow** en el formato de cinco pasos: público, contenido, canal, CTA y resultado esperado.

## 5. Evidencia empírica de validación

*Tercera casilla del checklist: los experimentos ejecutados, las métricas obtenidas y las evidencias que confirman la aceptación del cliente.*

Tres a cuatro páginas. Por experimento: qué se corrió, en qué fechas, sobre qué audiencia, con qué resultado. El embudo completo en números —alcance, clics, visitas, leads, y en el segundo experimento finalización, interacciones y clics en el botón de precio—. Las capturas de la evidencia van acá, numeradas y con epígrafe, como hizo IMUV: el posteo, la landing, el panel de métricas, la conversación de WhatsApp, la pantalla de precio.

Un cuadro único de resultados contra criterios de éxito, con tres columnas: métrica, criterio definido de antemano, resultado obtenido. Es la tabla que el mentor va a leer primero.

Cada experimento cierra con su **card de aprendizaje**: hipótesis, observación, aprendizajes e insights, decisiones y acciones.

## 6. Principales puntos de validación

*Cuarta casilla del checklist, que el módulo enumera explícitamente: porcentaje de aceptación, disposición a pagar, frecuencia de compra, cantidades compradas.*

Una a dos páginas. Se responde punto por punto, con el número y con su n al lado, y se dice con todas las letras cuáles quedaron validados con evidencia fuerte, cuáles con evidencia débil y cuáles no se pudieron testear en esta corrida. Frecuencia y cantidades, en un modelo de suscripción, se reformulan como frecuencia de uso y permanencia declarada, y así se explicita.

## 7. Aprendizajes e iteración de la propuesta de valor

Una a dos páginas. Qué cambió el experimento en la propuesta de valor del Módulo 4: qué se confirmó, qué se ajustó, qué se descartó. Si aparece un subsegmento no contemplado —como le pasó a IMUV con la franja de 50 a 60 años—, se declara y se explica qué se hace con él. Cierra con el próximo experimento que se correría si el proceso continuara, que es lo que el módulo pide cuando la hipótesis se valida.

## 8. Conclusión: ¿hay product-market fit?

Media a una página. La respuesta argumentada, sin exceso ni falsa modestia. La formulación honesta que este módulo habilita es que hay **evidencia de problem-solution fit y señales tempranas de product-market fit**, con la lista de lo que falta para afirmarlo: volumen, tráfico frío, cohorte de retención y cobro real. Cierra conectando con el Módulo 6, que toma el modelo de negocios sobre esta base.

## Anexos

- **Anexo A.** Cards de experimento y de aprendizaje completas, una por experimento.
- **Anexo B.** Evidencia ampliada: capturas del video, de la landing, del formulario, de los paneles de métricas y de las conversaciones, con su epígrafe.
- **Anexo C.** Guía y síntesis de las entrevistas de cierre.
- **Anexo D.** Declaración de uso de inteligencia artificial, en el mismo formato que el Anexo C del Módulo 4: herramientas utilizadas, motivación, uso reflexivo y enfoque dialógico, con ejemplos de las instrucciones dirigidas.

---

## Mapa consigna → sección

| Requisito del Punto III / checklist | Dónde queda |
|---|---|
| Explicar el fit producto-mercado usando el VPC | §2 |
| Arquitectura del MVP, conceptual y técnica | §3.2 |
| Proceso de construcción del MVP | §3.1 y §3.3 |
| Experimentos de validación llevados a cabo | §4 y §5 |
| Evidencia empírica y métricas de respuesta | §5 y Anexo B |
| % de aceptación, disposición a pagar, frecuencia, cantidades | §6 |
| Proyecto de impacto social o ambiental | No aplica; se deja constancia en §6 |
| Se construyó o definió un MVP | §3 |
| Se explicaron los experimentos de validación | §4 y §5 |
| Se argumentó el product-market fit | §2 y §8 |
