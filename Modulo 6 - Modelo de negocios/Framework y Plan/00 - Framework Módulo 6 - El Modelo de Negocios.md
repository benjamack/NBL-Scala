# 00 · Framework Módulo 6 · El Modelo de Negocios

**Proyecto:** Scala · **Dupla:** Nico Karagozian + Benjamín Mackinnon · **Mentor:** Esteban Balduzzi
**Período:** septiembre 2026 · **Entrega:** antes de fin de mes, campus virtual (Tareas NBL)
**Entregable:** Punto V del Anexo B de la Guía TFG, *El modelo de negocios*

---

## 1. Dónde estamos en el arco del programa

Los Módulos 3 y 4 cerraron la fase de diseño de la propuesta de valor, y el Módulo 5 la puso contra el mercado con un experimento: el video de lanzamiento y la landing con el precio antes del formulario dejaron 111 inscriptos sobre 179 visitantes, y el precio de US$10 por mes hizo abandonar al 2,3% de quienes lo leyeron. La conclusión que quedó escrita es que hay problem-solution fit sólido y señales tempranas de product-market fit, y que el cuello de botella del negocio no está en el valor sino en la distribución.

El Módulo 6 pide completar las partes que faltan para que ese producto sea un negocio: cómo lo hacemos llegar al cliente, cómo cobramos por él, qué necesitamos operar para producirlo y venderlo, y con qué números cierra. La herramienta es el Business Model Canvas de Osterwalder y el resultado tiene que ser una historia coherente que se pueda contar post-it por post-it.

Dos precisiones del módulo que ordenan el trabajo. La primera es la definición de modelo de negocios que adopta el curso: la lógica que describe el valor que una organización ofrece a sus clientes y las capacidades y recursos requeridos para crear, vender y entregar ese valor y generar fuentes de ingresos rentables y sostenibles. Dicho en forma directa, cómo gana o pretende ganar dinero. La segunda es que el modelo de ingresos no es el modelo de negocios: es una de sus nueve cajas, y confundirlos es el error que el módulo advierte explícitamente.

## 2. Las tres dimensiones y qué ya tenemos

El módulo organiza el modelo de negocios en tres dimensiones, y conviene mapear contra ellas lo que los módulos anteriores ya resolvieron.

**Modelo de creación de valor.** Quiénes son los clientes y qué problema resolvemos (Módulo 3), cuál es la propuesta de valor y cómo genera valor (Módulo 4), cuál es la estrategia de go-to-market y cuál es la cadena de valor de la industria. Las dos primeras preguntas están respondidas; las dos últimas son de este módulo.

**Modelo de rentabilidad.** Cuáles son las fuentes de ingresos, cómo es la estructura de costos y cuáles son los economics de una unidad. Hay una base cuantitativa en el anexo del Documento 3 (Módulo 2), con un modelo de unit economics a US$10 por mes y un margen bruto estimado del orden del 77% en el caso de uso medio. Este módulo lo retoma, lo actualiza con lo aprendido y lo convierte en los números básicos que pide el checklist: costos variables principales, costos fijos principales y margen bruto esperado.

**Operaciones.** Los recursos, actividades y aliados necesarios para producir, vender y ganar dinero. Es la parte menos trabajada hasta ahora y la que este módulo tiene que construir desde cero.

La cuarta pieza, la lógica general del negocio (por qué y bajo qué condiciones tiene altas probabilidades de éxito), es la historia que cierra el documento.

## 3. El Business Model Canvas: las nueve cajas y cómo se leen para Scala

El canvas se completa de derecha a izquierda. Las cajas del centro y de la derecha explican la creación de valor, las de la izquierda la operación, y las dos de abajo la rentabilidad.

**Segmentos de clientes.** Ya definida: equivale al perfil del cliente del Value Proposition Canvas. Un post-it por segmento con sus jobs, pains y gains. Para Scala son los dos frentes del Módulo 4, el atleta con wearable (Fede, cerca del 35%) y el atleta sin wearable (Flor, cerca del 65%), más la variante transversal de la mujer atleta. La práctica del módulo es diferenciarlos por color y usar el mismo color en la propuesta de valor correspondiente.

**Propuesta de valor.** Ya definida: equivale al mapa de valor del VPC. Va el producto y sus beneficios para cada segmento. El núcleo es el statement del Módulo 4: un coach de inteligencia artificial conversacional y agéntico que interpreta el contexto del atleta y ejecuta por él, con o sin dispositivo, a una fracción del precio de un coach humano.

**Relación con el cliente.** Es la caja que el módulo más desarrolla y la que más trabajo nuevo exige. Tres preguntas: cómo se adquiere un cliente, cómo se lo fideliza y cómo se hace crecer la base (get, keep, grow). Para un proyecto nuevo el foco está en el get, que el módulo llama el diseño de la máquina de ventas: con qué estrategias se generan leads y por qué etapas se los hace pasar (awareness, interés, consideración, compra). Con un producto digital el embudo es más corto: se lo interesa, se lo hace adquirir y se lo activa. El Módulo 5 ya nos dio la primera versión de esta máquina funcionando: contenido con un atleta de referencia, landing con precio, lista de espera. Acá hay que diseñarla completa y decir qué estrategia va en cada etapa, como en el ejemplo del módulo que transforma extraños en visitantes, leads, clientes y promotores.

**Canales.** Por dónde le llega el producto al cliente. Para un producto digital el módulo lista: ecommerce dedicado, plataforma en app store, agregador, social commerce y flash sale. Scala es una aplicación para iPhone, de modo que el canal de entrega es la App Store, y el canal de descubrimiento y evaluación son las redes y la landing.

**Fuentes de ingresos.** Dos preguntas: cuál es el modelo de ingresos y cuál es el precio con su lógica. El módulo enumera nueve modelos (venta de activos, suscripción, freemium, publicidad, franquicia, fee de uso, renta, licencia, intermediación) y los ordena por virtud respecto del esfuerzo de venta: el ingreso recurrente es el más virtuoso y el que buscan los inversores. Advertencias explícitas del módulo: la publicidad es un error para una app en sus inicios porque exige volumen de tráfico que una startup no tiene, y elegir varios modelos de ingresos a la vez confunde el modelo de negocios. Para el precio, puede ser fijo (por costos o por valor percibido) o dinámico. Scala ya tiene una hipótesis probada en campo: suscripción a US$10 por mes, con pago después de probar.

**Actividades clave.** Las que, si se hacen mal o a medias, la propuesta de valor no se materializa ni llega al cliente. El módulo insiste en no listar todas las actividades del negocio sino sólo las clave, en las áreas de I+D, producción, marketing, ventas y servicio. Para un producto digital B2C, el desarrollo y la mejora del producto y el marketing son casi siempre clave.

**Recursos clave.** Financieros, físicos, intelectuales o humanos. En un producto digital el equipo de desarrollo y la plataforma son recursos clave; la marca también. Para Scala se suman el activo que dejó el Módulo 5 (una cuenta de marca con audiencia y una base de inscriptos) y la figura de un fundador que es atleta de referencia.

**Aliados clave.** Ningún negocio hace todo in-house. Qué proveedores y socios potencian el modelo, qué tipo de relación se mantiene con cada uno, qué recursos se intercambian y por qué. El checklist pide justificar estratégicamente cada decisión.

**Estructura de costos.** No todos los costos: los que, si se desmadran, hacen que la rentabilidad disminuya o no exista. En un negocio B2C con marketing potente, el marketing es un costo clave; en un producto sobre inteligencia artificial, el costo de inferencia por usuario es el costo variable clave.

## 4. Reglas de uso del canvas que el módulo pide respetar

1. No escribir sobre el lienzo: post-its (o un canvas digital en Miro, Mural o Figma), para poder mover, poner y sacar.
2. Una idea por post-it. Dos canales distintos son dos post-its.
3. Completar de derecha a izquierda.
4. Agregar todos los elementos relevantes para crear, entregar y capturar valor.
5. Comprobar integridad y coherencia: sin elementos huérfanos. Cada segmento tiene su propuesta de valor; cada propuesta de valor tiene sus recursos y actividades; cada aliado y cada actividad tienen su costo.
6. Contar una historia: una vez completo, el modelo se tiene que poder narrar post-it por post-it y sonar coherente. El módulo pide construir esa historia como cierre del desafío.

## 5. Las limitaciones del canvas y cómo las cubrimos

El módulo cierra con las críticas que se le hacen a la herramienta, y conviene mencionarlas en el entregable para mostrar que se conocen. El canvas no evalúa la competencia ni la diferenciación (lo cubren la Sección 7 del Módulo 4 y el Documento 3), no considera el contexto y los factores externos (lo cubrirá el PESTEL del Módulo 7), no incorpora la misión, la visión ni las ambiciones del emprendedor, y limita los objetivos a la rentabilidad sin las otras dos dimensiones del triple impacto. Esta última se cubre con la consigna de indicadores sociales y ambientales, que el checklist pide aunque Scala no sea un proyecto del vertical de impacto.

## 6. Qué pide el entregable (Punto V del Anexo B)

Ocho consignas escritas, que el documento tiene que cubrir una por una:

1. Explicar cómo es el modelo de negocios con el Business Model Canvas, integrando y detallando los nueve bloques con consistencia sistémica.
2. Describir la cadena de valor interna: los insumos, recursos y actividades que se necesitan para diseñar, producir y vender la propuesta de valor.
3. Identificar los socios clave, definir el tipo de alianza, los recursos que se intercambian, y justificar estratégicamente la decisión.
4. Explicar el modelo de ingresos y el pricing propuesto, con la lógica de la fijación del precio.
5. Indicar los números básicos del modelo (operativos, comerciales, económicos y financieros): principales costos variables, principales costos fijos y margen bruto esperado. El FAQ es explícito en que no se proyectan ventas ni se detallan todos los costos; eso es del Módulo 7 en adelante.
6. Indicar los experimentos realizados para validar la disposición a pagar y el modelo de ingresos. El checklist de mentores lo llama evidencia empírica de validación de la disposición a pagar: es el experimento del Módulo 5.
7. Indicar los indicadores sociales y ambientales que el modelo va a considerar. La consigna sobre negocios de impacto (cómo el producto previene, mejora, compensa o resuelve el problema social o ambiental) aplica sólo al vertical, y se deja constancia de que Scala no pertenece a él.
8. Incluir las sinergias y modificaciones con el modelo de negocios existente. Es la consigna de intrapreneurship (adaptación corporativa); para una startup nueva no aplica y así se declara.

**Lo que el mentor va a chequear:** BMC completo, modelo de ingresos, números base (costos fijos, variables y margen bruto) y evidencia empírica de disposición a pagar. Con eso califica verde o amarillo.

## 7. Decisiones de diseño que arrastramos de los módulos anteriores

Estas definiciones ya están tomadas y el canvas tiene que respetarlas, no reabrirlas:

- **Un solo producto, dos configuraciones.** El mismo producto atiende a Fede y a Flor; lo que cambia es la comunicación y el onboarding, no el modelo de negocios.
- **Accionar por sobre mostrar.** La propuesta es un coach que ejecuta, no un tablero. Ningún elemento del canvas puede depender de vender datos o de mostrar más métricas.
- **El wearable es opcional.** Ningún aliado ni canal puede ser una condición de entrada al producto. Apple y Garmin potencian el frente A, no gatean el negocio.
- **US$10 por mes, pago post-prueba.** El precio quedó validado en aceptación (no en cobro) y el patrón del segmento es probar primero. El modelo de ingresos tiene que honrar las dos cosas.
- **La restricción es la distribución.** El Módulo 5 lo dejó escrito: cuando la propuesta se entiende, convierte. El diseño de la máquina de ventas es el trabajo nuevo más importante del módulo.
- **Foco Argentina y América Latina en español**, con crecimiento apoyado en atletas de referencia e influencers, como quedó en el Documento 3 y en la Sección 6 del Módulo 4.

## 8. Encuadre temporal

Después del Módulo 5 el MVP existe y se puede describir; lo que todavía no existe es el negocio en marcha. El documento diseña el modelo con el que Scala va a salir a vender, no reporta uno que ya funciona: no hay usuarios pagos, no hay cobro real, no hay costos ejecutados. Los números básicos son estimaciones fundadas en precios de lista y en el modelo del Documento 3, y así se declaran. Lo que sí hay es un activo comercial concreto que el módulo anterior dejó y que el canvas usa: la cuenta de marca con 76 seguidores desde cero, los 111 inscriptos y el contacto inbound de una marca de suplementación.

## 9. Plan de trabajo · septiembre 2026

| Paso | Foco | Estado |
|---|---|---|
| 1 | Ver los videos del módulo y leer la consigna | ✅ |
| 2 | Armar el framework y el plan de entrega | ✅ (este documento) |
| 3 | Primera iteración del Business Model Canvas en texto | ✅ (`02 - Business Model Canvas v1.md`) |
| 4 | Revisar el canvas con Benja y pasarlo a Figma (post-its, un color por segmento) | ⏳ |
| 5 | Actualizar los números básicos sobre el modelo del Documento 3 | ⏳ |
| 6 | Reunión de mentoría con Esteban (obligatoria, a mediados de mes) | ⏳ agendar ya |
| 7 | Borrador 1 del entregable | ⏳ |
| 8 | Incorporar el feedback del mentor y subir al campus antes del 30 de septiembre | ⏳ |

El detalle de fechas y de la estructura del documento está en `01 - Plan de entrega y estructura del entregable.md`.

---

*Documentos relacionados:* `01 - Plan de entrega y estructura del entregable.md` · `02 - Business Model Canvas v1.md`
