const H = require('./helpers');
const { bodyP: p, tituloSeccion: S, tituloPrincipal: T,
        epigrafe, celda: c, tabla, fila } = H;

module.exports = [
  S('3. La estrategia de go-to-market'),

  T('3.1 La máquina de ventas'),
  p('El módulo plantea la relación con el cliente como un embudo de tres partes: get, keep y grow. Para un proyecto nuevo el foco va en el get, que es el diseño de la máquina de ventas: con qué estrategias se consiguen leads y por qué etapas pasan hasta que compran. Scala ya tiene una primera versión de esa máquina, la que se midió en el Módulo 5, y la Tabla 2 la completa siguiendo el ejemplo del módulo, que transforma extraños en promotores en cuatro etapas.'),

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

  p('Esta primera máquina se apoya casi por completo en earned media: marketing viral con atletas de referencia, contenido que los usuarios comparten y la landing como sitio propio. La pauta paga queda para cuando se pueda comparar el costo de adquirir un cliente con lo que deja en el tiempo. El Módulo 5 mostró que la mitad de abajo del embudo funciona, porque la landing convierte y el precio no expulsa, pero la mitad de arriba depende del alcance prestado de una sola cuenta personal: una pieza hecha en colaboración consiguió catorce veces más alcance que la mejor pieza hecha en soledad, de modo que lo que multiplica el alcance es la persona y no la pieza.'),
  p('De ahí sale la decisión central de este módulo, que es abrir un **segundo embudo mucho más corto: el del entrenador**. Un entrenador con cartera propia no es un lead sino un conjunto de leads que ya confían en alguien, y donde el camino directo tiene cuatro etapas el suyo tiene dos, convencerlo a él y dar de alta a sus atletas. Un entrenador de triatlón sigue entre veinte y cuarenta atletas, así que cada acuerdo vale lo que decenas de conversiones individuales. La contrapartida es una venta uno a uno, con ciclo más largo y un riesgo de concentración que la Sección 6 retoma.'),
  p('El keep se apoya en el uso diario: el coach abre el día con un resumen y lo cierra con una pregunta, y la semana se rearma sola cuando cambian el cuerpo o la agenda. Su memoria construye un costo de cambio, y para el atleta que llega por un entrenador hay un segundo mecanismo de retención, que es la relación humana que ya existía. La métrica de control es la retención al día 7 y al día 30 de la primera cohorte.'),

  T('3.2 Canales'),
  p('De los cinco canales que lista el módulo para un producto digital, Scala usa principalmente la plataforma en app store, porque es una aplicación para iPhone que se descarga, se prueba y se paga ahí. Instagram, TikTok y la landing sirven para descubrir y evaluar pero no venden, por lo que no constituyen social commerce, y la posventa ocurre en la conversación con el coach. Android queda fuera de esta etapa por foco de recursos.'),
  p('El canal del entrenador agrega un segundo punto de cobro: contrata fuera de la aplicación, en una relación comercial con Scala y no con el usuario final, y paga una sola factura mensual por toda su cartera. Es el esquema con el que operan TrainingPeaks y Humango, y tiene una consecuencia económica que la Sección 6 desarrolla, porque ese cobro no soporta la comisión de la tienda. Queda por confirmar el encuadre con las políticas de la App Store antes de abrir el canal.'),

  T('3.3 Modelo de ingresos y pricing'),
  p('Scala cobra una suscripción recurrente, que de los nueve modelos que presenta el módulo es el más virtuoso respecto del esfuerzo de venta, porque el cliente se consigue una sola vez y después paga todos los meses. Se adopta uno solo, porque el módulo advierte que apilarlos confunde el negocio. **Hay un solo producto y una sola unidad de ingreso**, que es un atleta durante un mes, sin escalones de funcionalidad. Lo que tiene dos formas es quién paga esa unidad.'),
  p('El atleta que llega por su cuenta paga **US$10 por mes**, con una opción anual de US$96 y una prueba gratuita de catorce días con el producto completo antes del primer cobro. La prueba responde a lo que mostró el campo: el 63% del segmento gasta cero hoy y el patrón dominante es probar primero y pagar después de ver valor.'),
  p('El atleta que llega a través de su entrenador **no le paga nada a Scala**: lo paga su entrenador, **US$9 por atleta y por mes**, y el atleta recibe una sola factura, la de él. La razón es de fricción y no de contabilidad, porque ese atleta ya le paga a su entrenador entre US$150 y US$250 por mes y sumarle una segunda suscripción obliga al entrenador a pedirle plata extra a su propio cliente justo cuando le propone una herramienta nueva. El precio se ancla en una referencia que el entrenador ya conoce y ya paga: TrainingPeaks le cobra US$9 por atleta y Humango US$12 por encima del tercero. Para uno con veinticinco atletas son US$225 mensuales, el 4,5% de lo que factura.'),
  p('**Esto no constituye un segundo modelo de ingresos**, y conviene dejarlo explícito porque es la advertencia que hace el módulo: la fuente sigue siendo una suscripción recurrente, la unidad sigue siendo el atleta-mes y el valor entregado es el mismo producto. Lo que cambia es quién tiene la tarjeta, que es una decisión de canal de cobro, como el software que se vende por asiento y que a veces compra el usuario y a veces su organización.'),
  p('El precio al atleta se define por valor percibido y no por costos, anclado contra la alternativa que el segmento reconoce como la buena, un entrenador más un nutricionista, entre US$100 y 400 por mes. Queda dentro del rango de las alternativas digitales del Módulo 4, de US$6,99 a US$19,99, y por debajo de los competidores directos de coaching con inteligencia artificial, ya que Humango va de US$9 a US$29 y TriDot de US$14,99 a US$99. Conviene registrar entonces que **US$10 es el piso de la categoría y no su techo**, y que la primera palanca si el margen se comprime es el precio, antes que recortar la inferencia.'),
  p('Cinco alternativas se descartaron. El freemium regalaría el valor central cuando la evidencia pide probar y pagar, y tiene un problema propio de este negocio: cada usuario gratuito consume US$2,22 mensuales de inferencia, de modo que cien usuarios gratuitos cuestan US$222 y devuelven dos o tres suscriptores. La publicidad exige un volumen que una startup no tiene. Una comisión a marcas de suplementación sería un segundo modelo de ingresos, y por ahora entra como co-marketing. Venderle al entrenador una licencia **por encima** de lo que pagan sus atletas se descarta por tamaño, porque captura entre el 4% y el 6% de lo que él factura. Y cobrarle los US$10 al atleta que llega por un entrenador se descarta por la barrera ya explicada.'),

  T('3.4 Evidencia de disposición a pagar'),
  p('El experimento del Módulo 5 validó el precio al atleta con comportamiento y no con declaración: el bloque de precio estaba antes del formulario, así que nadie podía dejar su correo sin haber leído que Scala cuesta US$10 por mes. De las 132 personas que llegaron al precio, 111 dejaron su correo, el 84,1%, y entre el precio y el formulario abandonó apenas el 2,3%. La evidencia tiene un límite conocido: la landing ofrecía seis meses sin costo a los primeros inscriptos, de modo que lo medido es aceptación del precio y no pago.'),
  p('El precio al entrenador todavía no tiene evidencia propia, sino de mercado, que es más débil: dos plataformas del sector cobran entre US$9 y US$12 por atleta y los entrenadores lo pagan. Para convertirla en evidencia propia se diseñó un experimento cualitativo de tres entrevistas con entrenadores de la red del equipo, con guion cerrado. Las preguntas son cinco: qué le preocupa más, que la inteligencia artificial se equivoque con un atleta suyo o que lo reemplace; cuántos atletas tiene hoy y cuántos podría tener si el seguimiento diario lo hiciera la aplicación; cuánto paga hoy por atleta en plataformas y a cuál reemplazaría Scala; qué tiene que quedar bajo su firma para que la use; y cuánto cobra hoy por atleta. **El criterio de éxito, escrito antes de empezar, es que al menos dos de los tres acepten una prueba gratuita con sus atletas y que ninguno ponga el reemplazo como su primera preocupación.** Es un experimento para decidir y no para probar: tres entrevistas no son una muestra, y así se declara.'),
];
