const H = require('./helpers');
const { bodyP: p, tituloSeccion: S, tituloPrincipal: T,
        epigrafe, celda: c, tabla, fila, AlignmentType } = H;
const der = { align: AlignmentType.RIGHT };

module.exports = [
  S('4. La cadena de valor interna'),
  p('El módulo pide no listar todo lo que el negocio necesita para operar, sino sólo lo clave: lo que, si se hace mal o a medias, impide que la propuesta de valor llegue al cliente. El insumo principal de producción es la inferencia de inteligencia artificial, porque cada conversación, cada plan y cada foto analizada consumen cómputo. El otro insumo son los datos que el atleta aporta desde el teléfono, el reloj o la conversación.'),

  T('4.1 Actividades clave'),
  p('La primera actividad es desarrollar y mejorar el coach. En Scala el producto es el coach, así que esta actividad es a la vez investigación, producción y servicio. Que la recomendación de hoy sea correcta y específica es lo que el cliente paga. La segunda es controlar la calidad y la seguridad de esas recomendaciones: revisar, con criterio de profesionales, lo que el coach responde frente a la fatiga, la lesión, la nutrición y el ciclo. Es la respuesta a la barrera de confianza, el riesgo más serio que identificó el Módulo 4.'),
  p('Es también la puerta de entrada al canal del entrenador. En una encuesta de 2026 a entrenadores en actividad, el 54% dijo que su principal preocupación con la inteligencia artificial es que dé un consejo impreciso o inseguro, contra un 20% que teme por el vínculo con su cliente. La objeción que hay que atender para abrir el canal no es el reemplazo, es la seguridad.'),
  p('La tercera es producir contenido y sostener la comunidad: publicar con cadencia en la cuenta de marca, colaborar con atletas de referencia y gestionar la lista de espera. Es la actividad que ataca la restricción del negocio. La cuarta es nueva: dar de alta y acompañar a los entrenadores. Incluye la venta uno a uno, la migración de su cartera y, sobre todo, construir la vista donde el entrenador revisa y aprueba el trabajo de sus atletas. Sin esa vista, Scala se suma a lo que el entrenador ya paga en vez de reemplazarlo, y el canal no cierra. La quinta es mantener las integraciones con el teléfono y el reloj, porque sin ellas el frente con wearable pierde su pain reliever central.'),

  T('4.2 Recursos clave'),
  p('El recurso intelectual central es el coach. No es una patente sino el conocimiento acumulado sobre cómo conversar con un atleta y cómo reajustar su plan cada día. Le sigue la marca, que después del Módulo 5 ya es un activo concreto: la cuenta @scala.fit, la lista de 111 inscriptos y el video de lanzamiento. Desde esta versión se suma un tercer recurso, que todavía no existe pero es decisivo: la red de entrenadores.'),
  p('El recurso humano es el equipo fundador. Nicolás Karagozian lleva el producto y la operación. Benjamín Mackinnon es atleta de referencia y embajador de Ironman, con audiencia propia en el ambiente deportivo y acceso directo a entrenadores en actividad, que es lo que hace viable el canal nuevo. Los dos son, además, el cliente al que apunta el producto. Los recursos tecnológicos son el acceso a los modelos de inteligencia artificial, que hoy se paga con créditos para startups de un proveedor de nube, y el historial de uso de cada atleta.'),

  S('5. Los aliados clave'),
  p('Ningún negocio hace todo adentro. Los aliados de Scala cubren lo que el proyecto no puede ni debe construir: el cómputo, las plataformas donde el atleta ya está, la distribución y el aval profesional. La Tabla 3 detalla para cada uno el tipo de alianza, los recursos que se intercambian y por qué no se resuelve in-house.'),

  tabla([
    fila([
      c('Aliado', { head: true }), c('Tipo de alianza', { head: true }),
      c('Qué aporta a Scala', { head: true }), c('Qué recibe', { head: true }), c('Justificación', { head: true }),
    ]),
    fila([c('Proveedor de modelos de inteligencia artificial'), c('Proveedor estratégico'), c('El insumo de producción del coach'), c('Consumo recurrente'), c('Entrenar modelos propios está fuera de escala')]),
    fila([c('Apple'), c('Plataforma'), c('Distribución, cobro y datos de salud'), c('Comisión del cobro directo'), c('Único canal de entrega en iPhone')]),
    fila([c('Wearables'), c('Integración'), c('El plan llega al reloj y la actividad vuelve sola'), c('Valor agregado a su dispositivo'), c('El reloj es del usuario')]),
    fila([c('Atletas de referencia'), c('Embajadores'), c('Alcance y credibilidad en el tope del embudo'), c('Producto sin costo y, a escala, una participación sobre sus referidos'), c('No se compra con pauta')]),
    fila([c('Entrenadores con cartera'), c('Canal de distribución y cobro'), c('Veinte a cuarenta atletas por acuerdo y el vínculo que retiene'), c('Capacidad, con el plan bajo su nombre. Paga US$9 por atleta'), c('Su techo es el tiempo por atleta, no su habilidad')]),
    fila([c('Profesionales del deporte'), c('Red de asesores'), c('Criterio de control de calidad y aval'), c('Participación en las reglas y visibilidad'), c('El aval no se fabrica adentro')]),
    fila([c('Marcas de nutrición'), c('Co-marketing'), c('Alcance cruzado'), c('Acceso a un segmento calificado'), c('Llegó como inbound; no se convierte en ingreso')]),
  ], { anchos: [1700, 1700, 2300, 2100, 2200] }),
  epigrafe('Tabla 3. Aliados clave de Scala, tipo de alianza y recursos intercambiados.'),

  p('El aliado nuevo es el entrenador, y entra como aliado y no como cliente por una razón de tamaño. En los Estados Unidos hay del orden de 2.330 entrenadores de triatlón certificados, que ganan en promedio US$47.226 al año. Venderles una herramienta es un mercado chico y ya repartido. Pero esos mismos entrenadores siguen a unos 57.000 atletas, y cada acuerdo es una puerta a veinticinco suscripciones.'),
  p('El riesgo de esta caja es la dependencia de plataformas que pueden cambiar sus condiciones de acceso o de comisión. En el caso de los wearables, el diseño del producto lo acota: el wearable es opcional, así que una restricción sobre el reloj degrada un frente pero no el negocio. El App Store, en cambio, es el único canal de venta directa. Esa dependencia se asume, porque la aplicación es nativa de iPhone. La contraprestación a los atletas de referencia queda como hipótesis hasta los primeros acuerdos.'),
  p('Con el entrenador aparece un riesgo de otra naturaleza, el conflicto de canal: Scala le vende al atleta un coach que hace lo que hace un entrenador. El antecedente conocido es Intuit, que vende su software a los contadores y su producto de impuestos al consumidor final desde hace décadas sin problema. Cuando lanzó una campaña con el lema de romper con el contador, las asociaciones profesionales reaccionaron, la campaña se levantó y la empresa pidió disculpas en público. La regla que adopta Scala es explícita: no interviene en la relación económica entre el entrenador y su atleta, y nunca se comunica como el reemplazo de nadie.'),

  S('6. Los números básicos'),
  p('El módulo no pide proyectar ventas ni detallar todos los costos. Pide números a grandes rasgos que confirmen que el negocio es rentable: costos variables, costos fijos y margen bruto esperado. Los números que siguen son estimaciones sobre precios de lista. Parten del modelo de unit economics del Documento 3 y le suman el costo de cobrar como costo variable.'),
  p('El costo variable principal es la inferencia de inteligencia artificial. En el caso base suma US$2,22 por usuario y por mes, con un uso medio de 90 intercambios con el coach y 45 fotos de comida, y no depende de quién pague. Lo que sí depende de quién paga es el costo de cobrar. El atleta directo paga por la App Store, que retiene el 15% para desarrolladores pequeños. El entrenador paga por web una sola factura mensual por toda su cartera, con un costo de procesamiento cercano al 3%. La Tabla 4 compara los dos casos.'),

  tabla([
    fila([
      c('Concepto', { head: true }),
      c('Atleta directo', { head: true, ...der }),
      c('Vía entrenador', { head: true, ...der }),
    ]),
    fila([c('Precio de la suscripción'), c('10,00', der), c('9,00', der)]),
    fila([c('Inferencia de inteligencia artificial'), c('2,22', der), c('2,22', der)]),
    fila([c('Comisión de la App Store (15%)'), c('1,50', der), c('0,00', der)]),
    fila([c('Procesamiento del pago por web (3%)'), c('0,00', der), c('0,30', der)]),
    fila([c('Infraestructura prorrateada'), c('0,06', der), c('0,06', der)]),
    fila([c('Costo variable total'), c('3,78', der), c('2,58', der)]),
    fila([c('Margen bruto'), c('6,22 (62%)', der), c('6,42 (71%)', der)]),
  ], { anchos: [5000, 2500, 2500] }),
  epigrafe('Tabla 4. Números básicos por suscriptor y por mes en el caso base, en dólares.'),

  p('El resultado más relevante de la tabla va contra la intuición. El atleta que llega por un entrenador paga un dólar menos y deja veinte centavos más de margen, porque la comisión de la tienda es mayor que el descuento. La decisión de que pague el entrenador se tomó para sacarle fricción al atleta, y además mejora la rentabilidad.'),
  p('El margen depende sobre todo de la intensidad de uso. Con uso liviano (30 intercambios y 10 fotos por mes) sube al 73% en el cobro directo. Con uso pesado (200 y 90) baja al 36% en el cobro directo y al 42% en el cobro por entrenador. El caso base queda por debajo del 77% del Documento 3 porque ahora incluye el costo de cobrar. El negocio es rentable por unidad en todos los escenarios, y la palanca es el costo de inferencia por usuario, que se controla con el diseño del producto.'),
  p('Mientras los fundadores no cobren sueldo y el contenido sea tiempo propio, el costo fijo ronda los US$1.500 por mes: infraestructura, herramientas, cuenta de desarrollador y servicios contables. Con un equipo mínimo de desarrollo, contenido y soporte, sube a unos US$6.000. Con el margen del caso base, el punto de equilibrio es de unos 240 suscriptores pagos hoy y de cerca de 1.000 con el equipo mínimo. La mezcla de canales casi no lo mueve: si el 40% de las altas entra por entrenadores, baja a 238 y a 952. En todos los casos es una fracción mínima del mercado que estimó el Documento 3.'),
  p('Falta un número que el modelo todavía no tiene: cuánto dura un suscriptor. El churn mensual mediano de una aplicación de fitness está entre el 10% y el 13%. Con un 10%, la vida media es de unos diez meses y cada suscriptor deja alrededor de US$62 de margen bruto. Ese es el techo de lo que se puede gastar para adquirirlo.'),
  p('Es también la razón económica principal para sumar al entrenador. Un atleta acompañado por su entrenador tiene una relación, no sólo una suscripción. En el caso comparable más cercano con datos públicos, la permanencia de un socio de gimnasio con un vínculo que lo sostiene pasa de 4,7 a 14,2 meses. La contracara es la concentración: si un entrenador se va, se lleva su cartera. Por eso el diseño prevé que el atleta pueda seguir por su cuenta con la tarifa directa.'),
];
