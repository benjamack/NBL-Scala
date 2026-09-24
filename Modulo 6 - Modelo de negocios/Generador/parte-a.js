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
  p('El modelo de ingresos es una suscripción recurrente y hay un solo producto, sin escalones de funcionalidad. Lo que tiene dos formas es el cobro: el atleta que llega por su cuenta paga US$10 por mes por la App Store después de una prueba gratuita de catorce días, y el que llega a través de su entrenador no le paga nada a Scala porque lo paga él, US$9 por atleta y por mes, fuera de la tienda. Sigue habiendo un solo modelo de ingresos, porque la unidad es la misma en los dos casos y lo que se agrega no es una fuente nueva sino un segundo canal de cobro.'),
  p('El precio al atleta tiene respaldo empírico propio: en el experimento del Módulo 5, 111 de las 132 personas que leyeron cuánto cuesta Scala dejaron su correo, una aceptación del 84,1%. El precio al entrenador se ancla en lo que las plataformas del sector ya le cobran, entre US$9 y US$12 por atleta y por mes.'),
  p('Cada suscriptor deja un margen bruto estimado de US$6,22 por mes cuando paga el atleta y de US$6,42 cuando paga su entrenador, mayor a pesar del precio menor porque no soporta la comisión de la tienda. Según la intensidad de uso, el margen va del 36% al 73%. El costo que decide la rentabilidad es la inferencia por usuario, y la variable que decide si el negocio cierra es la retención.'),
];

const seccion1 = [
  S('1. Del product-market fit al modelo de negocios'),
  p('El Módulo 3 estableció que el problema dominante del atleta amateur es la falta de una guía personalizada que le diga qué entrenar, qué comer y cómo progresar, tenga o no un wearable. El Módulo 4 diseñó la propuesta de valor para los dos frentes del segmento: el atleta con reloj, cerca del 35%, y el que no lo usa, cerca del 65%. El Módulo 5 la puso a prueba contra el mercado con un video y una landing, y de 179 visitantes, 111 dejaron su correo después de leer el precio. La conclusión fue que hay evidencia sólida de problem-solution fit y señales tempranas de product-market fit. Para afirmarlo falta volumen, retención y cobro real.'),
  p('El módulo adopta la definición de Osterwalder: un modelo de negocios es la lógica que describe el valor que una organización ofrece a sus clientes, los recursos que necesita para crearlo, venderlo y entregarlo, y las fuentes de ingresos que genera. El módulo lo organiza en tres dimensiones: creación de valor, rentabilidad y operación. De la primera, los módulos anteriores ya respondieron quién es el cliente y cuál es la propuesta. Lo que faltaba es el resto: la estrategia para llegar al mercado, la forma de cobrar, la operación que sostiene el producto y los números que muestran que el negocio puede ser rentable.'),
  p('Este documento describe el modelo con el que Scala va a salir a vender, no uno que ya esté funcionando: el MVP existe, pero no hay usuarios pagos ni costos ejecutados. La tesis es que Scala es un negocio de suscripción de bajo costo marginal cuya viabilidad depende de tres cosas que todavía hay que probar: un costo de inteligencia artificial por usuario bajo control, una máquina de ventas que deje de depender de la red personal de los fundadores, y una retención que confirme el fit con cobro real. La segunda es la que este documento trabaja con más detalle, porque es el cuello que identificó el Módulo 5, y la respuesta que propone el modelo es incorporar al entrenador humano como canal de distribución: una decisión que se toma acá por primera vez y que ordena buena parte de lo que sigue.'),
];

const seccion2 = [
  S('2. El Business Model Canvas de Scala'),
  p('La Tabla 1 presenta el canvas completo con la disposición del lienzo: cada bloque ocupa su lugar y cada línea es un post-it. Como el documento va sin colores, los dos frentes del segmento se distinguen con las marcas (A) para el atleta con wearable y (B) para el que no lo usa. Lo que no lleva marca es común a los dos. Después de la tabla va la historia que se cuenta al recorrer el canvas de derecha a izquierda.'),

  tabla([
    fila([
      c(['Aliados clave', '', '· Proveedor de modelos de IA', '· Apple (App Store y Salud)', '· (A) Wearables', '· Atletas de referencia', '· Entrenadores con cartera', '· Profesionales del deporte', '· Marcas de nutrición'], { head: false, rowSpan: 2, size: 18 }),
      c(['Actividades clave', '', '· Desarrollo del coach', '· Control de calidad y seguridad', '· Contenido y comunidad', '· Alta y soporte de entrenadores', '· (A) Integraciones con el reloj'], { rowSpan: 1, size: 18 }),
      c(['Propuesta de valor', '', '· Coach de IA con el que se habla', '· Objetivo con fases y fecha', '· Entrenamiento, nutrición y hábitos juntos', '· (A) Biometría interpretada y plan al reloj', '· (B) Estructura sin dispositivo', '· Sensible al ciclo menstrual', '· US$10 contra US$150 a 250 de un entrenador', '· Al entrenador: más atletas, mismo tiempo'], { rowSpan: 2, size: 18 }),
      c(['Relación con clientes', '', '· Atraer: video con atletas de referencia', '· Convertir: landing con precio', '· Cerrar: prueba gratuita y activación', '· Deleitar: coach diario con memoria', '· Retener: el entrenador como vínculo', '· Viral: referidos y clubes'], { size: 18 }),
      c(['Segmentos de clientes', '', '· (A) Con wearable, ~35%', '· (B) Sin wearable, ~65%', '· Transversal: la mujer atleta', '· Argentina primero', '· Un beneficiario, dos pagadores'], { rowSpan: 2, size: 18 }),
    ]),
    fila([
      c(['Recursos clave', '', '· El coach como know-how propio', '· Marca: @scala.fit y 111 inscriptos', '· Equipo fundador', '· Acceso a los modelos', '· Historial de uso de cada atleta', '· La red de entrenadores'], { size: 18 }),
      c(['Canales', '', '· Instagram y TikTok', '· Landing scala.fit', '· App Store: cobro al atleta directo', '· Cobro por web al entrenador', '· El entrenador como puerta en bloque', '· El coach como posventa'], { size: 18 }),
    ]),
    fila([
      c(['Estructura de costos', '', '· Inferencia de IA: el costo variable clave', '· Comisión de la App Store (15%), sólo cobro directo', '· Procesamiento por web en el cobro al entrenador', '· Equipo y contenido: los fijos principales', '· Infraestructura'], { colSpan: 2, size: 18 }),
      c(['Fuentes de ingresos', '', '· Suscripción mensual por atleta, modelo único', '· US$10 si paga el atleta; US$9 si paga su entrenador', '· Opción anual de US$96 en el cobro directo', '· Prueba gratuita de catorce días', '· Margen bruto del 62% al 71% según el pagador'], { colSpan: 3, size: 18 }),
    ]),
  ]),
  epigrafe('Tabla 1. Business Model Canvas de Scala, versión 2, septiembre de 2026.'),

  p('Scala existe para el atleta amateur que entrena varias veces por semana y no sabe qué entrenar, qué comer ni cómo progresar. Dos tercios de ese segmento no tienen reloj y casi nadie los atiende; el tercio restante tiene datos y no los acciona. La mujer atleta, que necesita una planificación sensible al ciclo menstrual, atraviesa los dos frentes.'),
  p('El segmento que recibe el valor es uno solo, el atleta, pero desde esta versión del canvas hay dos pagadores posibles: el atleta mismo o el entrenador que lo trae. Eso no convierte a Scala en un negocio multi-sided en el sentido de Osterwalder, porque la plataforma no intermedia entre dos lados que se buscan entre sí: los atletas de un entrenador ya son sus clientes antes de llegar, y Scala no los pone en contacto. La figura correcta es la de un canal que además factura, como el consultor que compra licencias para sus clientes. Pasaría a ser multi-sided sólo si Scala mediara el encuentro entre entrenadores y atletas que no se conocen, algo que queda explícitamente fuera de esta etapa.'),
  p('A los dos frentes se les ofrece el mismo producto con distinta puerta de entrada: un coach de inteligencia artificial con el que se habla. El usuario define un objetivo y el coach arma la semana, ordena la nutrición y da por cumplidos los hábitos sin que haga falta tildar nada. Si hay reloj, le manda el plan al dispositivo e interpreta la biometría; si no lo hay, arma la estructura con lo que el atleta le cuenta, una foto de la comida o una nota de voz. Todo eso cuesta US$10 por mes, cuando un entrenador de triatlón online cobra entre US$150 y US$250. El atleta llega por dos caminos: un video de un atleta de referencia que lo lleva a la landing y de ahí a la aplicación, o su propio entrenador, que ya lo sigue e incorpora a Scala a su forma de trabajar. En los dos casos prueba el producto completo antes de que nadie le cobre.'),
  p('Para que eso pase hay que hacer bien cinco cosas: mejorar el coach, controlar que lo que recomienda sea correcto y seguro, producir contenido con atletas de referencia, dar de alta y acompañar a los entrenadores, y mantener vivas las integraciones. Eso lo sostienen un equipo fundador que es a la vez atleta y cliente, una marca con audiencia y lista de espera, y el acceso a los modelos. Los aliados cubren el resto: Apple y los wearables como plataformas, los atletas de referencia y los entrenadores como distribución, los profesionales como aval y las marcas del deporte como amplificación. Entre la inteligencia artificial y el costo de cobrar se van entre tres y cuatro de cada diez dólares, y lo que cuesta en serio es el equipo y el contenido: por eso el punto de equilibrio se mide en cientos de suscriptores.'),
];

module.exports = [...caratula, ...resumen, ...seccion1, ...seccion2];
