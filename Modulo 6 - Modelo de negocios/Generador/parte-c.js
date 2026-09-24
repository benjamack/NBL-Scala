const H = require('./helpers');
const { bodyP: p, tituloSeccion: S, tituloPrincipal: T,
        epigrafe, celda: c, tabla, fila, AlignmentType } = H;
const der = { align: AlignmentType.RIGHT };

module.exports = [
  S('4. La cadena de valor interna'),
  p('El módulo pide no listar todo lo que el negocio necesita para operar, sino sólo lo clave: lo que, si se hace mal o a medias, impide que la propuesta de valor llegue al cliente. El insumo principal de producción es la inferencia de inteligencia artificial, porque cada conversación, cada plan y cada foto analizada consumen cómputo. El otro insumo son los datos que el atleta aporta desde el teléfono, el reloj o la conversación.'),

  T('4.1 Actividades clave'),
  p('La primera es desarrollar y mejorar el coach: en Scala el producto es el coach, así que esta actividad es a la vez investigación, producción y servicio, y que la recomendación de hoy sea correcta y específica es lo que el cliente paga. La segunda es controlar la calidad y la seguridad de esas recomendaciones frente a la fatiga, la lesión, la nutrición y el ciclo. Es la respuesta a la barrera de confianza que identificó el Módulo 4 y es también la puerta de entrada al canal del entrenador: en una encuesta de 2026 a entrenadores en actividad, el 54% declaró que su principal preocupación con la inteligencia artificial es que dé un consejo impreciso o inseguro, muy por encima del 20% que teme por el vínculo con su cliente. La objeción que hay que atender para abrir el canal no es el reemplazo, es la seguridad.'),
  p('La tercera es producir contenido y sostener la comunidad, que es la actividad que ataca la restricción del negocio. La cuarta es nueva: **dar de alta y acompañar a los entrenadores**, lo que incluye la venta uno a uno, la migración de su cartera y, sobre todo, construir la superficie que el entrenador necesita para revisar y aprobar el trabajo de sus atletas. Sin ella, Scala se suma a lo que ya paga en vez de reemplazarlo y el canal no cierra. La quinta es mantener las integraciones con el teléfono y el reloj, sin las cuales el frente con wearable pierde su pain reliever central.'),

  T('4.2 Recursos clave'),
  p('El recurso intelectual central es el coach, que no es una patente sino el conocimiento acumulado sobre cómo conversar con un atleta y reajustar su plan cada día. Le sigue la marca, que después del Módulo 5 ya es un activo concreto: la cuenta @scala.fit, la lista de 111 inscriptos y el video de lanzamiento. A partir de esta versión se suma un tercero, todavía inexistente pero decisivo, que es la red de entrenadores, difícil de replicar porque se arma de a una relación por vez.'),
  p('El recurso humano es el equipo fundador: Nicolás Karagozian lleva el producto y la operación, y Benjamín Mackinnon es atleta de referencia y embajador de Ironman, con audiencia propia y acceso directo a entrenadores en actividad, que es lo que hace viable el canal nuevo. Los dos son, además, el cliente al que apunta el producto. Los recursos tecnológicos son el acceso a los modelos de inteligencia artificial, hoy pago con créditos para startups, y el historial de uso de cada atleta.'),

  S('5. Los aliados clave'),
  p('Ningún negocio hace todo adentro. Los aliados de Scala cubren lo que el proyecto no puede ni debe construir: el cómputo, las plataformas donde el atleta ya está, la distribución y el aval profesional. La Tabla 3 detalla para cada uno el tipo de alianza, los recursos que se intercambian y por qué no se resuelve in-house.'),

  tabla([
    fila([
      c('Aliado', { head: true }), c('Tipo de alianza', { head: true }),
      c('Qué aporta', { head: true }), c('Qué recibe', { head: true }), c('Por qué no in-house', { head: true }),
    ]),
    fila([c('Proveedor de modelos de IA'), c('Proveedor estratégico'), c('El insumo de producción del coach'), c('Consumo recurrente'), c('Entrenar modelos propios está fuera de escala')]),
    fila([c('Apple'), c('Plataforma'), c('Distribución, cobro y datos de salud'), c('Comisión del cobro directo'), c('Único canal de entrega en iPhone')]),
    fila([c('Wearables'), c('Integración'), c('El plan llega al reloj y la actividad vuelve sola'), c('Valor agregado a su dispositivo'), c('El reloj es del usuario')]),
    fila([c('Atletas de referencia'), c('Embajadores'), c('Alcance y credibilidad en el tope del embudo'), c('Producto sin costo y visibilidad'), c('No se compra con pauta')]),
    fila([c('Entrenadores con cartera'), c('Canal de distribución y cobro'), c('Veinte a cuarenta atletas por acuerdo y el vínculo que retiene'), c('Capacidad, con el plan bajo su nombre. Paga US$9 por atleta'), c('Su techo es el tiempo por atleta, no su habilidad')]),
    fila([c('Profesionales del deporte'), c('Red de asesores'), c('Criterio de control de calidad y aval'), c('Participación en las reglas y visibilidad'), c('El aval no se fabrica adentro')]),
    fila([c('Marcas de nutrición'), c('Co-marketing'), c('Alcance cruzado'), c('Acceso a un segmento calificado'), c('Llegó como inbound; no se convierte en ingreso')]),
  ], { anchos: [1700, 1700, 2300, 2100, 2200] }),
  epigrafe('Tabla 3. Aliados clave de Scala, tipo de alianza y recursos intercambiados.'),

  p('El aliado nuevo es el entrenador, y entra como aliado y no como cliente por una razón de tamaño: los entrenadores de triatlón certificados de los Estados Unidos son del orden de 2.330 y ganan en promedio US$47.226 al año, de modo que venderles una herramienta es un mercado chico y ya repartido, mientras que esos mismos entrenadores siguen del orden de 57.000 atletas y cada acuerdo es una puerta a veinticinco suscripciones. Lo que recibe a cambio no es dinero sino capacidad.'),
  p('**Con el aliado nuevo el riesgo de esta caja cambia de naturaleza.** Con las plataformas es de dependencia, acotado en los wearables porque el dispositivo es opcional y asumido con el App Store por ser el único canal de venta directa. Con los entrenadores es de conflicto de canal, porque Scala le vende al atleta un coach que hace lo que hace un entrenador. El antecedente conocido es Intuit, que vende su software a los contadores y su producto de impuestos al consumidor final desde hace décadas sin problema, hasta que lanzó una campaña con el lema de romper con el contador: las asociaciones profesionales reaccionaron, la campaña se levantó y su máxima autoridad pidió disculpas en público. **La regla que adopta Scala es explícita: no interviene en la relación económica entre el entrenador y su atleta, y no se comunica nunca como el reemplazo de nadie.**'),

  S('6. Los números básicos'),
  p('El módulo no pide proyectar ventas ni detallar todos los costos, sino números a grandes rasgos que confirmen que el negocio es rentable: costos variables, costos fijos y margen bruto. Los que siguen son estimaciones sobre precios de lista, que parten del modelo de unit economics del Documento 3 y le suman el costo de cobrar como costo variable.'),
  p('El costo variable principal es la inferencia de inteligencia artificial, que en el caso base suma US$2,22 por usuario y por mes con un uso medio de 90 intercambios y 45 fotos de comida, y no depende de quién pague. Lo que sí depende del pagador es el costo de cobrar: el atleta directo paga por la App Store, que retiene el 15% para desarrolladores pequeños, mientras que el entrenador paga por web una sola factura mensual por toda su cartera, cuyo procesamiento ronda el 3%. La Tabla 4 compara los dos casos.'),

  tabla([
    fila([
      c('Concepto', { head: true }),
      c('Atleta directo', { head: true, ...der }),
      c('Vía entrenador', { head: true, ...der }),
    ]),
    fila([c('Precio de la suscripción'), c('10,00', der), c('9,00', der)]),
    fila([c('Inferencia de inteligencia artificial'), c('2,22', der), c('2,22', der)]),
    fila([c('Comisión de la App Store (15%)'), c('1,50', der), c('—', der)]),
    fila([c('Procesamiento del pago por web (3%)'), c('—', der), c('0,30', der)]),
    fila([c('Infraestructura prorrateada'), c('0,06', der), c('0,06', der)]),
    fila([c('Costo variable total'), c('3,78', der), c('2,58', der)]),
    fila([c('**Margen bruto**'), c('**6,22 · 62%**', der), c('**6,42 · 71%**', der)]),
  ], { anchos: [5000, 2500, 2500] }),
  epigrafe('Tabla 4. Números básicos por suscriptor y por mes en el caso base, en dólares.'),

  p('El resultado más relevante de la tabla es contraintuitivo: **el atleta que llega por un entrenador paga un dólar menos y deja veinte centavos más de margen**, porque la comisión de la tienda es mayor que el descuento. La decisión de que pague el entrenador, tomada para sacarle una barrera de fricción al atleta, no cuesta rentabilidad sino que la mejora. El margen depende sobre todo de la intensidad de uso: con uso liviano sube al 73% en el cobro directo y con uso pesado baja al 36% en el cobro directo y al 42% en el cobro por entrenador. El negocio es rentable por unidad en todos los escenarios, y la palanca es el costo de inferencia por usuario, que se controla con el diseño del producto.'),
  p('Mientras los fundadores no cobren sueldo, el costo fijo ronda los US$1.500 por mes entre infraestructura, herramientas, cuenta de desarrollador y servicios contables, y con un equipo mínimo sube a unos US$6.000. El punto de equilibrio es de unos 240 suscriptores pagos hoy y de cerca de 1.000 con ese equipo, y prácticamente no se mueve con la mezcla de canales: con un 40% de las altas entrando por entrenadores baja a 238 y a 952. Es una fracción mínima del mercado que estimó el Documento 3.'),
  p('Falta un número que el modelo todavía no tiene y que conviene declarar, porque es el que convierte un margen mensual en un negocio: **cuánto dura un suscriptor**. El churn mensual mediano de una aplicación de fitness está entre el 10% y el 13%, así que la vida media es de unos diez meses y cada suscriptor deja alrededor de US$62 de margen bruto en toda su vida, que es el techo de lo que se puede gastar en adquirirlo. Esa es además la razón económica principal para sumar al entrenador como canal, porque un atleta acompañado por su entrenador tiene una relación y no sólo una suscripción: en el análogo más cercano con dato público, la permanencia de un socio de gimnasio con un vínculo que lo sostiene pasa de 4,7 a 14,2 meses. La contracara es la concentración, porque un entrenador que se va lo hace con su cartera, de modo que el diseño prevé que el atleta pueda continuar por su cuenta con la tarifa directa.'),
];
