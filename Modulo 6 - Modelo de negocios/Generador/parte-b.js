const H = require('./helpers');
const { bodyP: p, tituloSeccion: S, tituloPrincipal: T,
        epigrafe, celda: c, tabla, fila } = H;

module.exports = [
  S('3. La estrategia de go-to-market'),

  T('3.1 La máquina de ventas'),
  p('El módulo plantea la relación con el cliente como un embudo de tres partes: get, keep y grow. Para un proyecto nuevo el foco va en el get, que es el diseño de la máquina de ventas: con qué estrategias se consiguen leads y por qué etapas pasan hasta que compran. En un producto digital el embudo es corto. Una vez que el lead se interesa, lo que se busca es que adquiera el producto, lo active y se quede, y los clientes satisfechos cierran un circuito viral que trae a los siguientes. Scala ya tiene una primera versión de esa máquina, la que se midió en el Módulo 5. La Tabla 2 la completa siguiendo el ejemplo del módulo, que transforma extraños en promotores en cuatro etapas.'),

  tabla([
    fila([
      c('Etapa', { head: true }), c('Estrategia', { head: true }),
      c('Instrumentos', { head: true }), c('Lo que ya sabemos', { head: true }),
    ]),
    fila([
      c('Atraer: de extraño a visitante'),
      c('Contenido en video con historias reales de atletas, en colaboración con atletas de referencia del deporte.'),
      c('Instagram y TikTok, cuenta @scala.fit, reels en colaboración.'),
      c('Una pieza en colaboración sumó 7.266 reproducciones en 48 horas; las piezas sin colaboración, 508 y 365.'),
    ]),
    fila([
      c('Convertir: de visitante a lead'),
      c('Landing que presenta el problema antes que la solución y muestra el precio antes de pedir nada.'),
      c('scala.fit, formulario de lista de espera.'),
      c('El 62,0% de los visitantes dejó el correo; entre quienes leyeron el precio, el 84,1%.'),
    ]),
    fila([
      c('Cerrar: de lead a cliente'),
      c('Invitación por tandas, prueba gratuita con el producto completo y activación por objetivo. Al final de la prueba, la suscripción.'),
      c('Correo a la lista de espera, App Store, onboarding por objetivo.'),
      c('111 inscriptos en espera. A medir: la conversión de prueba a pago.'),
    ]),
    fila([
      c('Deleitar: de cliente a promotor'),
      c('Coach que vuelve todos los días; referidos con un mes de suscripción; clubes de running, triatlón y natación.'),
      c('Conversación con el coach, programa de referidos.'),
      c('46 compartidos sobre 136 me gusta en el video del Módulo 5. A medir: retención y referidos.'),
    ]),
  ], { anchos: [1600, 3400, 2200, 2800] }),
  epigrafe('Tabla 2. La máquina de ventas de Scala, adaptada del ejemplo del módulo.'),

  p('De las estrategias que el módulo enumera para conseguir leads, Scala se apoya casi por completo en earned media, es decir, en alcance que no se paga: marketing viral con atletas de referencia, contenido que los propios usuarios comparten y la landing como sitio propio. El marketing de afiliados entra por la misma vía, porque los atletas de referencia reciben una participación sobre las suscripciones que refieran. La pauta paga queda para cuando se pueda comparar el costo de adquirir un cliente con lo que ese cliente deja en el tiempo.'),
  p('El Módulo 5 mostró que la mitad de abajo del embudo funciona: la landing convierte y el precio no expulsa. La mitad de arriba depende del alcance prestado de una sola cuenta personal, y ahí está la prioridad de esta etapa. Hace falta un tope de embudo propio, con publicación sostenida en la cuenta de marca y una red de atletas de referencia más amplia que la de los fundadores, y una segunda landing para el frente sin wearable, al que la versión actual no le habla en su lenguaje.'),
  p('De ahí sale la decisión central de este módulo: abrir un segundo embudo, mucho más corto, que es el del entrenador. Un entrenador con cartera propia no es un lead. Es un conjunto de leads que ya confían en alguien. El camino directo tiene cuatro etapas y el suyo tiene dos: convencerlo a él y dar de alta a sus atletas. Un entrenador de triatlón sigue entre veinte y cuarenta atletas, así que cada acuerdo vale lo que decenas de conversiones individuales. La contrapartida es una venta uno a uno, con un ciclo más largo y un riesgo de concentración que retoma la Sección 6.'),
  p('El keep se apoya en el uso diario. El coach abre el día con un resumen y lo cierra con una pregunta. La semana se rearma sola cuando cambian el cuerpo o la agenda, y el avance se mide contra un objetivo con fecha, no contra una racha vacía. La memoria del coach construye además un costo de cambio: cuanto más sabe del atleta, más le cuesta irse. El atleta que llega por un entrenador tiene un segundo motivo para quedarse, que es la relación humana que ya existía. La métrica de control es la retención al día 7 y al día 30 de la primera cohorte.'),

  T('3.2 Canales'),
  p('El módulo lista cinco canales posibles para un producto digital: ecommerce dedicado, plataforma en app store, agregador, social commerce y flash sale. Scala usa principalmente uno, la plataforma en app store. Es una aplicación para iPhone que se descarga, se prueba y se paga ahí, así que la App Store concentra la compra, el cobro y la entrega. Instagram, TikTok y la landing sirven para descubrir y evaluar, pero no venden, por lo que no constituyen social commerce. La posventa ocurre en la misma conversación con el coach. Android queda fuera de esta etapa por foco de recursos.'),
  p('El canal del entrenador agrega un segundo punto de cobro. El entrenador contrata fuera de la aplicación, en una relación comercial directa con Scala, y paga una sola factura mensual por toda su cartera. Es el mismo esquema con el que operan TrainingPeaks y Humango. Tiene una consecuencia económica que desarrolla la Sección 6: ese cobro no paga la comisión de la tienda. Antes de abrir el canal hay que confirmar que el esquema encaja en las políticas de la App Store.'),

  T('3.3 Modelo de ingresos y pricing'),
  p('Scala cobra una suscripción recurrente. De los nueve modelos de ingresos que presenta el módulo es el más virtuoso respecto del esfuerzo de venta, porque el cliente se consigue una sola vez y después paga todos los meses. Se adopta uno solo, porque el módulo advierte que apilar modelos de ingresos confunde el negocio. Hay un solo producto y una sola unidad de ingreso, un atleta durante un mes, sin escalones de funcionalidad. Lo que tiene dos formas es quién paga esa unidad.'),
  p('El atleta que llega por su cuenta paga un plan único de US$10 por mes, o su equivalente en moneda local, con una opción anual de US$96 que equivale a un 20% de descuento. Antes del primer cobro hay una prueba gratuita de catorce días con el producto completo. La prueba responde a lo que mostró el campo: el 63% del segmento gasta cero hoy y el patrón dominante es probar primero y pagar después de ver valor.'),
  p('El atleta que llega a través de su entrenador no le paga nada a Scala. Lo paga su entrenador, US$9 por atleta y por mes, y el atleta recibe una sola factura, la del entrenador. La razón es de fricción y no de contabilidad. Ese atleta ya le paga a su entrenador entre US$150 y US$250 por mes. Sumarle una segunda suscripción obliga al entrenador a pedirle plata extra a su propio cliente, justo cuando le propone una herramienta nueva. El precio se ancla en una referencia que el entrenador ya conoce y ya paga: TrainingPeaks le cobra US$9 por atleta, y Humango US$12 por cada atleta por encima del tercero. Para un entrenador con veinticinco atletas son US$225 por mes, el 4,5% de lo que factura.'),
  p('Esto no constituye un segundo modelo de ingresos: la fuente sigue siendo una suscripción recurrente, la unidad sigue siendo el atleta por mes y el producto es el mismo. Lo que cambia es quién paga, como en el software que se vende por usuario, que a veces paga el usuario y a veces su organización.'),
  p('El precio al atleta es fijo y se define por valor percibido (value pricing) y no por costos. Se ancla contra la alternativa que el segmento reconoce como la buena, un entrenador más un nutricionista, que cuesta entre US$100 y 400 por mes. Queda dentro del rango de las alternativas digitales relevadas en el Módulo 4, que va de los US$6,99 de Garmin Connect+ a los US$19,99 de MyFitnessPal, y por debajo de los cerca de US$15 de Bevel. Es además el monto que el 72% del segmento declaró que pagaría o tal vez pagaría en la encuesta del Módulo 3. Contra los competidores directos de coaching con inteligencia artificial, US$10 es el piso de la categoría: Humango va de US$9 a US$29 y TriDot de US$14,99 a US$99. Si el margen se comprime, la primera palanca es el precio, antes que recortar la inferencia.'),
  p('Cinco alternativas se descartaron. El freemium regalaría el valor central del producto, el coach que ejecuta, cuando lo que la evidencia pide es probar y pagar. Además tiene un problema propio de este negocio: cada usuario gratuito consume US$2,22 de inferencia por mes. Cien usuarios gratuitos cuestan US$222 mensuales y devuelven dos o tres suscriptores. La publicidad exige un volumen de tráfico que una startup no tiene, y el módulo la señala como un error en los inicios. Una comisión cobrada a marcas de suplementación sería un segundo modelo de ingresos. La oportunidad existe, porque una marca escribió por interés comercial después del video, pero por ahora entra como aliado de co-marketing. Venderle al entrenador una licencia aparte, además de lo que pagan sus atletas, se descarta por tamaño: captura entre el 4% y el 6% de lo que él factura. Y cobrarle los US$10 al atleta que llega por un entrenador se descarta por la fricción que ya se explicó.'),

  T('3.4 Evidencia de disposición a pagar'),
  p('El experimento del Módulo 5 validó el precio al atleta con comportamiento y no con declaración. El bloque de precio estaba antes del formulario, así que nadie podía dejar su correo sin haber leído que Scala cuesta US$10 por mes. De las 132 personas que llegaron al precio, 111 dejaron su correo, es decir el 84,1%. Entre el precio y el formulario abandonó apenas el 2,3%. La evidencia tiene un límite: la landing ofrecía seis meses sin costo a los primeros inscriptos, así que lo medido es aceptación del precio y no pago. Cuando el producto abra con cobro quedan por validar la conversión de prueba a pago, la duración de la prueba y la adopción del plan anual.'),
  p('El precio al entrenador todavía no tiene evidencia propia, sino de mercado, que es más débil: dos plataformas del sector cobran entre US$9 y US$12 por atleta, y los entrenadores lo pagan. Para convertirla en evidencia propia se diseñó un experimento cualitativo de tres entrevistas con entrenadores de la red del equipo, con un guion cerrado. Las preguntas indagan qué le preocupa más, que la inteligencia artificial se equivoque con un atleta suyo o que lo reemplace; cuántos atletas más podría seguir si el día a día lo hiciera la aplicación; cuánto paga y cuánto cobra hoy por atleta; y qué tiene que quedar bajo su firma para que la use.'),
  p('El criterio de éxito se escribió antes de empezar: al menos dos de los tres aceptan una prueba gratuita con sus atletas, y ninguno pone el reemplazo como su primera preocupación. Es un experimento para decidir y no para probar. Tres entrevistas no son una muestra, y así se declara.'),
];
