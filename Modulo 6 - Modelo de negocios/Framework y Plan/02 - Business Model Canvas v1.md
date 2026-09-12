# 02 · Business Model Canvas v1 · Scala

**Diseñado para:** Scala, coach de inteligencia artificial para atletas · **Diseñado por:** Nico Karagozian y Benjamín Mackinnon · **Fecha:** 12 de septiembre de 2026 · **Versión:** 1 (borrador en texto, base para el canvas en Figma)

Convención para el pasaje a Figma: cada viñeta es un post-it. Color **A** para el frente con wearable (Fede), color **B** para el frente sin wearable (Flor), color **AB** para lo que es común a los dos. Cuando un post-it aplica a un solo frente lleva la letra entre corchetes; si no la lleva, es común. Los post-its marcados con ⏳ son hipótesis que todavía no tienen evidencia de campo.

El canvas se lee de derecha a izquierda: segmentos, propuesta de valor, relación con el cliente, canales, fuentes de ingresos, y después actividades, recursos, aliados y costos.

---

## 1. Segmentos de clientes

Atletas amateurs comprometidos que entrenan dos o más veces por semana con un objetivo concreto o de bienestar, en Argentina primero y en América Latina en español después. Un solo segmento con dos frentes, como quedó definido en el Módulo 4, más una variante transversal.

- **[A] Atleta con wearable (Fede, cerca del 35% del segmento).** Corre, pedalea, nada o entrena fuerza con reloj. *Job:* decidir cada día si entrenar fuerte o descansar, qué comer y cómo recuperarse. *Pain:* tiene los datos y no sabe accionarlos; integrarlos a mano es fricción. *Gain:* una capa de interpretación real, no otro tablero. Es el frente de adopción más rápida y con más disposición a pagar, porque ya paga un dispositivo y quiere sacarle valor.
- **[B] Atleta sin wearable (Flor, cerca del 65% del segmento).** Gimnasio, deportes de raqueta, fútbol, running sin reloj. *Job:* sostener un objetivo sin saber de entrenamiento. *Pain:* no tiene plan ni estructura propia; decide por sensación y duda de forma recurrente. *Gain:* que le digan qué hacer hoy, simple. Es el frente más grande y el menos disputado: casi nadie lo atiende porque las alternativas venden hardware o dependen de él.
- **Variante transversal: la mujer atleta**, que necesita una planificación sensible al ciclo menstrual y está históricamente desatendida por la oferta.

Tipo de mercado: **segmentado**, un producto con dos configuraciones de comunicación y onboarding. No es multi-sided: el atleta es el único cliente que paga.

## 2. Propuesta de valor

El statement del Módulo 4, transcripto al canvas:

- **Un coach personal de inteligencia artificial, conversacional y agéntico**, que interpreta el contexto del atleta y ejecuta por él: arma y ajusta el entrenamiento, la nutrición y los hábitos día a día contra un objetivo con fecha.
- **La conversación es la interfaz principal.** Todo se actualiza hablando: una lesión, una restricción alimentaria o un cambio de agenda se cuentan una vez y el coach los recuerda.
- **Funciona con o sin dispositivo.** Si hay reloj, la biometría entra sola; si no, entra por el teléfono (foto de la comida, nota de voz, lo que se le cuenta al coach).
- **Entrenamiento, nutrición y hábitos en un solo lugar**, atados entre sí y al objetivo, en lugar de tres aplicaciones que no se hablan.
- **El plan sale solo al reloj** y las sesiones se dan por cumplidas sin tildar nada. [A]
- **Estructura sin fricción para quien no la tiene:** el plan se arma y se reajusta conversando, sin necesidad de saber de entrenamiento. [B]
- **Planificación sensible al ciclo menstrual**, integrada al coach y a la nutrición, sin pudor porque se habla.
- **A una fracción del precio de un coach humano:** US$10 por mes contra US$100 a 400 mensuales de un entrenador más un nutricionista.

Lo que la propuesta no cubre y el canvas no promete: corrección técnica presencial, aval médico individual y comunidad. Scala convive con la entrenadora de gimnasio, no compite por ese gasto.

## 3. Relación con el cliente: la máquina de ventas

El módulo pide diseñar el funnel get-keep-grow con foco en el get. Para un producto digital el embudo es corto: interesar, adquirir, activar. La primera versión de esta máquina ya corrió en el Módulo 5 y se midió.

### Get: cómo conseguimos clientes

| Etapa | De quién a quién | Estrategia | Instrumento | Lo que ya sabemos |
|---|---|---|---|---|
| Awareness | Extraño → visitante | Contenido en video sobre historias reales de atletas usando el producto, publicado en colaboración con atletas de referencia e influencers del ambiente deportivo. Cadencia propia de la cuenta de marca. | Instagram y TikTok (@scala.fit), reels de colaboración, cuenta personal de Benja (embajador de Ironman). | 7.266 reproducciones en 48 horas con una sola pieza; las piezas sin colaboración quedaron en 365 y 508. El alcance prestado es lo que mueve el tope del embudo. CTR al enlace 2,5%. |
| Interés y consideración | Visitante → lead | Landing que construye el problema antes de mostrar la solución, expone el precio antes de pedir nada y cierra con un solo campo. Una versión por frente, cada una en el idioma de su arquetipo. ⏳ versión B | scala.fit, lista de espera, referencia explícita al precio y a la alternativa (coach humano). | 179 visitantes, 62,0% dejó el correo, 84,1% de los que leyeron el precio. La landing actual habla el idioma de Fede; la espejada para Flor es el próximo experimento. |
| Adquisición | Lead → usuario | Invitación a instalar la aplicación desde la lista de espera, en tandas, con prueba gratuita antes del cobro. ⏳ | Correo a la lista de espera, App Store, prueba gratuita. | 111 inscriptos esperando; los primeros con seis meses sin costo por la promoción del lanzamiento. |
| Activación | Usuario → usuario activo | El onboarding termina en un objetivo definido y en la primera semana armada sola; el coach habla primero. Es la condición del pago post-prueba: demostrar valor en los primeros días. | Onboarding por objetivo, primera semana generada, plan al reloj [A], primera comida registrada por foto [B]. | Riesgo declarado en el Módulo 4: el 63% gasta cero hoy y paga después de ver valor. |
| Compra | Usuario activo → cliente | Al terminar la prueba, suscripción mensual o anual desde la aplicación. | Suscripción por App Store (o por web para evitar la comisión de tienda). ⏳ | Aceptación del precio validada (2,3% de caída entre precio y formulario); el cobro real es lo que falta medir. |

### Keep: cómo los retenemos

- **El coach vuelve todos los días:** briefing de la mañana, cierre del día a la noche, semana que se rearma sola cuando el cuerpo o la agenda cambian. La relación es de asistencia personal automatizada, no de autoservicio.
- **El objetivo con fecha y fases** es el motivo para volver: el avance se mide contra algo, no contra una racha vacía.
- **Hábitos con racha** y sesiones que se tildan solas desde el reloj: cero fricción de registro.
- **Memoria del coach:** cuanto más se usa, más sabe del atleta y más cuesta irse (costo de cambio construido con uso, no con candado).
- **Soporte por el mismo canal:** la sugerencia o la queja se dicen en el chat y quedan registradas.
- Métrica de control: retención al día 7 y al día 30 de la cohorte de prueba; churn mensual contra el benchmark de apps de fitness. ⏳

### Grow: cómo crecemos

- **Referidos con incentivo en tiempo de suscripción** (un mes para el que invita y para el invitado). ⏳
- **Contenido generado por los propios atletas:** el plan al reloj y el objetivo cumplido son compartibles; el video del Módulo 5 mostró que la historia real se comparte (46 compartidos sobre 136 me gusta).
- **Plan anual con descuento** para convertir retención en caja anticipada. ⏳
- **Comunidades y clubes** (running, triatlón, natación) como canal de adquisición en bloque, con el atleta de referencia como puerta de entrada. ⏳

## 4. Canales

Por fase del canal, como pide el canvas:

- **Awareness:** Instagram y TikTok (cuenta de marca y colaboraciones con atletas de referencia). Un post-it por red.
- **Evaluación:** landing scala.fit con video, precio y lista de espera. Una landing por frente.
- **Compra y entrega:** **App Store** (plataforma en app store, en la categoría del módulo). La aplicación es para iPhone; Android queda fuera de esta etapa por foco de recursos y porque el frente con wearable de mayor disposición a pagar está concentrado en iOS y Garmin. ⏳ revisar con datos de la lista de espera.
- **Compra alternativa:** suscripción por web para los que llegan desde la landing, que evita la comisión de tienda. ⏳
- **Posventa:** la conversación con el coach dentro de la aplicación y el correo a la base.

Sin canal físico, sin ecommerce propio, sin agregadores ni social commerce: el producto es digital y la relación es directa.

## 5. Fuentes de ingresos

**Modelo de ingresos: suscripción recurrente.** Es el modelo más virtuoso según el módulo (un esfuerzo de venta, ingresos recurrentes) y el que se corresponde con un servicio que se usa todos los días. Un solo modelo de ingresos, siguiendo la advertencia de no mezclar.

- **Plan único: US$10 por mes** (o el equivalente en moneda local), con **opción anual a US$96** (20% de descuento, dos meses gratis). ⏳ el anual es hipótesis.
- **Pago después de probar:** prueba gratuita de 14 días con el producto completo. ⏳ la duración es hipótesis; la alternativa es "el primer objetivo corto" como período de prueba.
- **Precio fijo por valor percibido (value pricing).** La lógica: el precio se ancla contra la alternativa que el segmento reconoce como la buena, el coach humano, que cuesta entre US$100 y 400 por mes, y se ubica en el rango de las alternativas digitales (Garmin US$6,99, Google US$9,99, Strava US$11,99, Bevel US$15, MyFitnessPal US$19,99), por debajo del competidor directo más cercano. Es también el precio que el 72% del segmento declaró que pagaría o tal vez pagaría en la encuesta del Módulo 3.

**Evidencia empírica de disposición a pagar (Módulo 5).** Con el precio expuesto antes del formulario, 111 de 132 personas que lo leyeron dejaron su correo (84,1%), y entre el precio y el formulario abandonó el 2,3%. Es aceptación del precio medida por comportamiento, no por declaración. Lo que no mide es el acto de pago, porque la promoción de lanzamiento ofrecía seis meses sin costo.

**Modelos descartados y por qué.** *Freemium:* regalaría el valor central (el coach que ejecuta) y lo que la evidencia pide es probar y pagar, no usar gratis para siempre. *Publicidad:* exige volumen de tráfico que una startup no tiene, y el módulo lo marca como error en los inicios. *Fee de intermediación con marcas de suplementación:* el contacto inbound del Módulo 5 muestra que la oportunidad existe, pero es un segundo modelo de ingresos y mezclarlo confunde el negocio; queda anotado como opción futura y la marca entra hoy como aliado de co-marketing. *Licenciamiento a coaches humanos (B2B):* fuera del alcance del NBL; posible línea del TFG individual.

## 6. Actividades clave

Las que, si se hacen mal, la propuesta de valor no llega:

- **Desarrollar y mejorar el coach:** que la recomendación de hoy sea correcta, específica y explicada. Es la actividad de I+D y producción a la vez, porque el producto es el coach.
- **Controlar la calidad y la seguridad de las recomendaciones:** revisión sistemática de lo que el coach dice frente a fatiga, lesión, nutrición y ciclo, con criterio de profesionales de entrenamiento y nutrición. Es la respuesta a la barrera de confianza que el campo identificó como principal.
- **Producir contenido y sostener la comunidad:** cadencia de publicación de la cuenta de marca, colaboraciones con atletas de referencia, gestión de la lista de espera y de las cohortes de prueba. Es la actividad de marketing y es la que ataca la restricción del negocio, la distribución.
- **Mantener las integraciones con las plataformas de salud y con los relojes:** sin ellas el frente A pierde su pain reliever central.
- **Atender al usuario y cerrar el circuito de feedback:** lo que se dice en el chat vuelve como mejora del producto.

## 7. Recursos clave

- **Intelectual: el coach y el producto.** La lógica de orquestación, las reglas de entrenamiento y nutrición que lo gobiernan y el diseño de la conversación. No es una patente; es know-how acumulado y difícil de replicar porque el producto entero está armado alrededor de la conversación, no con un chat al costado.
- **Intelectual: la marca Scala y la audiencia.** La cuenta @scala.fit con 76 seguidores desde cero, la base de 111 inscriptos y el video de lanzamiento son el primer activo comercial del proyecto.
- **Humano: el equipo fundador.** Nico (producto, tecnología, operación y análisis) y Benja (atleta de referencia, embajador de Ironman, audiencia propia en el ambiente deportivo). Son a la vez el cliente al que apuntamos.
- **Humano: la red de atletas de referencia e influencers**, como recurso de distribución que no se compra con pauta.
- **Tecnológico: el acceso a los modelos de inteligencia artificial** de un proveedor en la nube, que es el insumo de producción del coach.
- **Datos: el historial de uso de cada atleta**, que hace que el coach conozca al usuario y que el producto mejore con el tiempo. Es el recurso que crece solo con la operación.
- **Financiero: créditos de programas para startups** de los proveedores de nube e inteligencia artificial, que cubren el costo de inferencia en la etapa de lanzamiento. ⏳ vigencia y monto a confirmar.

## 8. Aliados clave

| Aliado | Tipo de relación | Qué recibimos | Qué damos | Por qué no in-house |
|---|---|---|---|---|
| Proveedor de modelos de inteligencia artificial en la nube | Proveedor estratégico (con programa de créditos para startups) | El insumo de producción del coach, con mejora continua de los modelos | Consumo recurrente; caso de uso vertical de referencia | Entrenar modelos propios está fuera de toda escala; el valor está en la orquestación, no en el modelo |
| Apple (App Store y Apple Health) | Plataforma | Distribución, cobro, y el acceso a los datos de salud del usuario que alimentan el frente A | Comisión sobre las suscripciones; una aplicación nativa que enriquece su ecosistema | Es el canal de entrega y el repositorio de salud del teléfono; no hay alternativa en iOS |
| Garmin (ecosistema del reloj) | Plataforma / integración | Los entrenamientos llegan al reloj y las actividades vuelven solas | Casos de uso que dan valor al dispositivo | El reloj es del usuario; la integración oficial es la vía sostenible y hay que acceder a ella |
| Atletas de referencia e influencers del ambiente deportivo | Embajadores (colaboración de contenido, con contraprestación en producto y, a escala, en participación sobre suscripciones referidas) ⏳ | Alcance en el tope del embudo y credibilidad | Producto, historia real que contar, incentivo por referidos | Es la forma de distribución que el Módulo 5 mostró que funciona y que no se compra con pauta |
| Profesionales de entrenamiento y nutrición | Red de asesores y aval | Criterio para el control de calidad del coach, aval profesional frente a la barrera de confianza | Participación en el diseño de las reglas, visibilidad, eventualmente honorarios ⏳ | El aval no se puede fabricar in-house; es lo que el segmento pidió en el campo |
| Marcas de nutrición y suplementación deportiva | Co-marketing | Alcance cruzado y contenido conjunto; opcionalmente producto para la comunidad | Acceso a un segmento calificado; recomendación contextual dentro del producto sólo si es coherente con el plan ⏳ | Es una oportunidad que llegó inbound en el Módulo 5; se explora sin convertirla en modelo de ingresos |
| Pasarela de pagos para la suscripción por web (Mercado Pago o equivalente) | Proveedor | Cobro en moneda local, sin la comisión de tienda | Comisión por transacción | Infraestructura de pagos regulada; no se construye |

Riesgo que arrastra esta caja: la dependencia de plataformas (Apple, Garmin). El diseño lo acota porque el wearable es opcional: una restricción de acceso degrada el frente A, no el negocio.

## 9. Estructura de costos

Orientada al valor (no a los costos): la propuesta se defiende por la calidad del coach, no por ser la más barata. Los costos que, si se desmadran, se llevan la rentabilidad:

**Variables (por usuario y por mes):**
- **Inferencia de inteligencia artificial:** el costo de cada conversación, plan generado y foto analizada. Es el costo variable clave y el que más depende del diseño del producto. Sobre el modelo del Documento 3: US$1,2 en uso liviano, **US$2,3 en uso medio**, US$5,4 en uso pesado. ⏳ actualizar con precios de lista vigentes y con el uso real de la cohorte de prueba.
- **Comisión de tienda:** 15% del precio en la App Store (programa para pequeños desarrolladores), es decir US$1,50; alrededor de 5% si el cobro es por web.
- **Infraestructura prorrateada** (hosting, base de datos, almacenamiento): del orden de US$0,10 por usuario a 10.000 usuarios; despreciable a escala.

**Fijos (por mes):**
- **Equipo:** el costo principal en cuanto el proyecto pase de fundadores sin sueldo a un equipo mínimo (desarrollo, contenido, soporte). ⏳ dimensionar en el Módulo 7.
- **Contenido y comunidad:** producción de video y colaboraciones; hoy es tiempo de los fundadores, a escala es presupuesto.
- **Infraestructura base y herramientas:** del orden de US$150 a 300 por mes antes de escala.
- **Legales, contables y de plataforma:** constitución de la sociedad, cuenta de desarrollador, términos y privacidad.

**Números básicos (caso base, uso medio, cobro por App Store):** precio US$10,00 · inferencia US$2,33 · comisión de tienda US$1,50 · infraestructura US$0,10 · **margen bruto US$6,07 por usuario y mes, 61%**. Con cobro por web sube a cerca del 71%; en uso liviano llega al 73% y en uso pesado baja al 31%. La conclusión que importa para el módulo: el negocio es rentable por unidad en todos los escenarios salvo el de uso pesado por tienda, y la palanca de rentabilidad es el costo de inferencia por usuario, que se controla con diseño de producto y con el uso de caché de contexto. ⏳ todos los números se recalculan en el Excel antes del borrador.

**Punto de equilibrio orientativo:** con costos fijos mínimos de US$1.500 por mes (sin sueldos), unos 250 suscriptores pagos; con un equipo mínimo de US$6.000 por mes, unos 1.000. Contra un SAM argentino del orden de 2,3 millones de usuarios potenciales (Documento 3), son cifras alcanzables en el primer año de venta. ⏳ orden de magnitud, no proyección.

---

## 10. La historia del modelo (post-it por post-it)

Scala existe para el atleta amateur que entrena varias veces por semana y no sabe qué entrenar, qué comer ni cómo progresar. Dos tercios de ellos no tienen reloj y casi nadie los atiende; el tercio restante tiene datos y no los acciona. Para los dos, Scala es un coach de inteligencia artificial con el que se habla: define un objetivo, arma la semana, la manda al reloj si lo hay, ordena la nutrición con una foto y da por cumplidos los hábitos sin tildar nada, a diez dólares por mes cuando un coach humano cuesta más de cien.

Los conocemos por video: un atleta de referencia cuenta cómo preparó su carrera con el coach, la pieza se comparte, y quien la ve llega a una landing que le explica el problema, le muestra el precio y le pide sólo el correo. Cuando entra, prueba el producto completo dos semanas; el coach le habla primero, le arma la primera semana y le muestra valor antes de cobrarle. Después paga una suscripción mensual o anual desde la aplicación, y se queda porque el coach vuelve todos los días y cada día lo conoce mejor. Trae a otros porque la historia se comparte y porque invitar tiene premio.

Para que eso pase, hay que hacer bien cuatro cosas: mejorar el coach todos los días, controlar que lo que recomienda sea correcto y seguro con criterio de profesionales, producir contenido con atletas de referencia sin descanso, y mantener vivas las integraciones con el teléfono y el reloj. Lo hacemos con un equipo fundador que es atleta y cliente, con una marca que ya tiene audiencia y una lista de espera, con los modelos de inteligencia artificial de un proveedor que además financia los primeros meses de cómputo, y con aliados que no podríamos reemplazar: Apple y Garmin como plataformas, atletas y profesionales como aval y distribución, marcas del deporte como amplificación.

Cuesta poco por usuario, y eso es lo que hace al negocio: el costo de cada atleta es lo que el coach consume en conversaciones más la comisión de la tienda, y deja seis de cada diez dólares como margen bruto en el caso base. Lo que cuesta en serio es el equipo y el contenido, y por eso el punto de equilibrio se mide en cientos de suscriptores, no en decenas de miles. El modelo funciona si se cumplen tres condiciones que todavía hay que probar: que el costo de inferencia por usuario se quede donde lo estimamos, que la distribución deje de depender de la red personal de los fundadores, y que los que prueban se queden.

## 11. Chequeo de coherencia (sin huérfanos)

- Cada segmento tiene propuesta de valor: A (biometría accionada, plan al reloj), B (estructura por conversación sin dispositivo), transversal (ciclo).
- Cada propuesta tiene actividad y recurso: el coach ← desarrollar y controlar calidad ← know-how, modelos de IA, profesionales; el plan al reloj ← mantener integraciones ← Apple y Garmin; el precio bajo ← costo variable bajo ← inferencia y caché.
- Cada canal tiene su aliado y su costo: App Store ← Apple ← comisión 15%; redes ← atletas de referencia ← producto y referidos.
- Cada ingreso tiene su evidencia: suscripción a US$10 ← Módulo 5 (aceptación) y Módulo 3 (declaración); anual y prueba de 14 días ← ⏳ hipótesis.
- Costos huérfanos: ninguno. Ingresos huérfanos: el co-marketing con marcas no produce ingreso y así se declara.

## 12. Lo que queda abierto para la v2 (Figma) y la mentoría

1. Duración de la prueba gratuita: 14 días o "el primer objetivo corto".
2. Plan anual: incluirlo desde el lanzamiento o esperar retención medida.
3. Cobro por tienda contra cobro por web: qué proporción asumir en el margen.
4. Android: fuera de esta etapa, con qué argumento y hasta cuándo.
5. Contraprestación a los atletas de referencia: producto, comisión por referidos o participación.
6. Marcas de suplementación: sólo co-marketing en el NBL, o abrir la puerta a un ingreso secundario en el TFG individual.
7. Recalcular los números básicos en el Excel del Documento 3 con precios vigentes y con la comisión de tienda.
