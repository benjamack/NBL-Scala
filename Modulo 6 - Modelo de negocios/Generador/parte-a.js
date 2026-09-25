const H = require('./helpers');
const { bodyP: p, tituloSeccion: S, tituloPrincipal: T, tituloSecundario: T2,
        subtituloItalica, metaLine, tituloCaratula, vacio, epigrafe,
        celda: c, tabla, fila, AlignmentType } = H;

const caratula = [
  ...vacio(2),
  metaLine('Universidad de San Andrés'),
  metaLine('Maestría en Inteligencia Artificial'),
  metaLine('Programa New Business Launchpad (NBL) · Módulo 6'),
  ...vacio(4),
  tituloCaratula('El modelo de negocios'),
  subtituloItalica('Coach de inteligencia artificial para atletas'),
  ...vacio(4),
  metaLine('Nicolás Karagozian · Benjamín Mackinnon'),
  metaLine('Mentor: Esteban Balduzzi'),
  ...vacio(4),
  metaLine('Buenos Aires, septiembre de 2026'),
];

const resumen = [
  S('Resumen'),
  p('El Módulo 5 dejó una conclusión clara: cuando la propuesta de Scala se entiende, convierte. La restricción del negocio no está en el valor sino en la distribución. Este módulo completa lo que faltaba para que el producto sea un negocio: cómo le llega al cliente, cómo se cobra, qué hace falta para producirlo y venderlo, y con qué números cierra.'),
  p('El modelo de ingresos es una suscripción recurrente, con un solo producto y sin escalones de funcionalidad. Lo que cambia es quién paga. El atleta que llega por su cuenta paga US$10 por mes en el App Store, después de una prueba gratuita de catorce días. El que llega a través de su entrenador no le paga nada a Scala: lo paga el entrenador, US$9 por atleta y por mes, fuera de la tienda. Sigue siendo un solo modelo de ingresos, porque la unidad es la misma. Lo que se agrega es un segundo canal de cobro, no una fuente nueva.'),
  p('El precio al atleta tiene respaldo: en el experimento del Módulo 5, 111 de las 132 personas que leyeron cuánto cuesta Scala dejaron su correo, una aceptación del 84,1%. El precio al entrenador se ancla en lo que ya le cobran las plataformas del sector, entre US$9 y US$12 por atleta y por mes.'),
  p('Cada suscriptor deja un margen bruto estimado de US$6,22 por mes cuando paga el atleta, el 62% del precio. Cuando paga el entrenador deja US$6,42, el 71%: el precio es menor, pero no paga la comisión de la tienda. Según cuánto use el producto, el margen va del 36% al 73%. El costo que decide la rentabilidad es lo que el coach consume en inteligencia artificial por usuario. La variable que decide si el negocio cierra es la retención.'),
];

const seccion1 = [
  S('1. Del product-market fit al modelo de negocios'),
  p('El Módulo 3 estableció que el problema dominante del atleta amateur es la falta de una guía personalizada que le diga qué entrenar, qué comer y cómo progresar, tenga o no un wearable. El Módulo 4 diseñó la propuesta de valor para los dos frentes del segmento: el atleta con reloj, cerca del 35%, y el que no lo usa, cerca del 65%. El Módulo 5 la puso a prueba contra el mercado con un video y una landing, y de 179 visitantes, 111 dejaron su correo después de leer el precio. La conclusión fue que hay evidencia sólida de problem-solution fit y señales tempranas de product-market fit, pero para afirmarlo falta volumen, retención y cobro real.'),
  p('El módulo adopta la definición de Osterwalder: un modelo de negocios es la lógica que describe el valor que una organización ofrece a sus clientes, los recursos que necesita para crearlo, venderlo y entregarlo, y las fuentes de ingresos que genera. El módulo lo organiza en tres dimensiones: creación de valor, rentabilidad y operación. De la primera, los módulos anteriores ya respondieron quién es el cliente y cuál es la propuesta. Lo que faltaba es el resto: la estrategia para llegar al mercado, la forma de cobrar, la operación que sostiene el producto y los números que muestran que el negocio puede ser rentable.'),
  p('Este documento describe el modelo con el que Scala va a salir a vender, no uno que ya esté funcionando. El MVP existe, pero no hay usuarios pagos ni costos ejecutados. La tesis es que Scala es un negocio de suscripción de bajo costo marginal, y que su viabilidad depende de tres cosas que todavía hay que probar: un costo de inteligencia artificial por usuario que se mantenga bajo control, una máquina de ventas que deje de depender de la red personal de los fundadores, y una retención que confirme el fit con cobro real. La segunda es el cuello de botella que identificó el Módulo 5, y este documento la trabaja con más detalle. La respuesta que propone es sumar al entrenador humano como canal de distribución. Es una decisión nueva, y ordena buena parte de lo que sigue.'),
];

const seccion2 = [
  S('2. El Business Model Canvas de Scala'),
  p('La Tabla 1 presenta el canvas completo con la disposición del lienzo: cada bloque ocupa su lugar y cada línea es un post-it. Como el documento va sin colores, los dos frentes del segmento se distinguen con las marcas (A) para el atleta con wearable y (B) para el que no lo usa. Lo que no lleva marca es común a los dos. Después de la tabla va la historia que se cuenta al recorrer el canvas de derecha a izquierda.'),

  tabla([
    fila([
      c(['**Aliados clave**', '', '· Proveedor de modelos de inteligencia artificial', '· Apple (App Store y Salud)', '· (A) Wearables', '· Atletas de referencia', '· Entrenadores con cartera', '· Profesionales del deporte', '· Marcas de nutrición'], { head: false, rowSpan: 2, size: 18 }),
      c(['**Actividades clave**', '', '· Desarrollo del coach', '· Control de calidad y seguridad', '· Contenido y comunidad', '· Alta y soporte de entrenadores', '· (A) Integraciones con el reloj'], { rowSpan: 1, size: 18 }),
      c(['**Propuesta de valor**', '', '· Coach de inteligencia artificial con el que se habla', '· Objetivo con fases y fecha', '· Entrenamiento, nutrición y hábitos juntos', '· (A) Biometría interpretada y plan al reloj', '· (B) Estructura sin dispositivo', '· Sensible al ciclo menstrual', '· US$10 contra US$100 a 400 de un coach humano', '· Al entrenador: más atletas, mismo tiempo'], { rowSpan: 2, size: 18 }),
      c(['**Relación con clientes**', '', '· Atraer: video con atletas de referencia', '· Convertir: landing con precio', '· Cerrar: prueba gratuita y activación', '· Deleitar: coach diario con memoria', '· Retener: el entrenador como vínculo', '· Viral: referidos y clubes'], { size: 18 }),
      c(['**Segmentos de clientes**', '', '· (A) Con wearable, ~35%', '· (B) Sin wearable, ~65%', '· Transversal: la mujer atleta', '· Argentina primero', '· Un beneficiario, dos pagadores'], { rowSpan: 2, size: 18 }),
    ]),
    fila([
      c(['**Recursos clave**', '', '· El coach como know-how propio', '· Marca: @scala.fit y 111 inscriptos', '· Equipo fundador', '· Acceso a los modelos', '· Historial de uso de cada atleta', '· La red de entrenadores'], { size: 18 }),
      c(['**Canales**', '', '· Instagram y TikTok', '· Landing scala.fit', '· App Store: cobro al atleta directo', '· Cobro por web al entrenador', '· El entrenador como puerta en bloque', '· El coach como posventa'], { size: 18 }),
    ]),
    fila([
      c(['**Estructura de costos**', '', '· Inferencia de inteligencia artificial: el costo variable clave', '· Comisión de la App Store (15%), sólo cobro directo', '· Procesamiento por web en el cobro al entrenador', '· Equipo y contenido: los fijos principales', '· Infraestructura'], { colSpan: 2, size: 18 }),
      c(['**Fuentes de ingresos**', '', '· Suscripción mensual por atleta, modelo único', '· US$10 si paga el atleta, US$9 si paga su entrenador', '· Opción anual de US$96 en el cobro directo', '· Prueba gratuita de catorce días', '· Margen bruto del 62% al 71% según el pagador'], { colSpan: 3, size: 18 }),
    ]),
  ]),
  epigrafe('Tabla 1. Business Model Canvas de Scala, versión 2, septiembre de 2026.'),

  p('Scala existe para el atleta amateur que entrena varias veces por semana y no sabe qué entrenar, qué comer ni cómo progresar. Dos tercios de ese segmento no tienen reloj y casi nadie los atiende; el tercio restante tiene datos y no los acciona. La mujer atleta, que necesita una planificación sensible al ciclo menstrual, atraviesa los dos frentes.'),
  p('El segmento que recibe el valor es uno solo, el atleta. Lo que cambia en esta versión del canvas es que hay dos pagadores posibles: el atleta mismo o el entrenador que lo trae. Eso no convierte a Scala en un negocio multi-sided en el sentido de Osterwalder. La plataforma no intermedia entre dos lados que se buscan: los atletas de un entrenador ya son sus clientes antes de llegar, y Scala no los pone en contacto. La figura correcta es la de un canal que además factura, como el consultor que compra licencias para sus clientes.'),
  p('A los dos frentes se les ofrece el mismo producto con distinta puerta de entrada: un coach de inteligencia artificial con el que se habla. El usuario define un objetivo y el coach arma la semana de entrenamiento, ordena la nutrición y da por cumplidos los hábitos sin que haga falta tildar nada. Si hay reloj, le manda el plan al dispositivo e interpreta la biometría. Si no lo hay, arma la estructura con lo que el atleta le cuenta, una foto de la comida o una nota de voz. Todo eso cuesta US$10 por mes, cuando un entrenador más un nutricionista no bajan de US$100.'),
  p('El atleta llega por dos caminos. El primero es un video en el que un atleta de referencia cuenta cómo preparó su entrenamiento con el coach. Del video pasa a una landing que le explica el problema, le muestra el precio y le da el link para descargar la app. El segundo es su propio entrenador, que ya lo sigue y suma a Scala a su forma de trabajar. En los dos casos prueba el producto completo durante dos semanas: el coach le habla primero, le arma la primera semana y le muestra valor antes de cobrarle. El usuario se queda porque el coach vuelve todos los días y cada día lo conoce mejor. Trae a otros porque puede compartir sus logros en historias, y porque invitar tiene premio.'),
  p('Para que eso pase hay que hacer bien cinco cosas: mejorar el coach, controlar que lo que recomienda sea correcto y seguro, producir contenido con atletas de referencia, dar de alta y acompañar a los entrenadores, y mantener vivas las integraciones con el teléfono y el reloj. Eso lo sostienen un equipo fundador que es a la vez atleta y cliente, una marca que ya tiene audiencia y lista de espera, y el acceso a los modelos de inteligencia artificial. Los aliados cubren lo que no se hace adentro: Apple y los wearables como plataformas, los atletas de referencia y los entrenadores como distribución, los profesionales como aval y las marcas del deporte como amplificación.'),
];

module.exports = [...caratula, ...resumen, ...seccion1, ...seccion2];
