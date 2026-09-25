const H = require('./helpers');
const { bodyP: p, tituloSeccion: S, tituloPrincipal: T } = H;

module.exports = [
  S('7. Conclusión: la lógica general del negocio'),
  p('Scala es un negocio de suscripción con costo marginal bajo. Cada suscriptor deja un margen bruto estimado del 62% cuando paga el atleta y del 71% cuando paga su entrenador, positivo incluso en el escenario de uso más intensivo. El punto de equilibrio se mide en cientos de suscriptores, no en decenas de miles. El precio al atleta tiene evidencia de comportamiento, porque casi nadie abandonó al leerlo. El precio al entrenador tiene evidencia de mercado, porque es el que ya paga en otras plataformas.'),
  p('La decisión estructural de este módulo es que el entrenador entra como canal de distribución y de cobro, no como un segundo cliente ni como un segundo modelo de ingresos. El atleta sigue siendo el único que recibe el producto y la unidad de ingreso sigue siendo la misma. Lo único que cambia es quién paga. Se decidió que pague el entrenador para que el atleta no pague dos veces por la misma semana de entrenamiento.'),
  p('El modelo funciona si se cumplen tres condiciones que todavía hay que probar. La primera es que el costo de inferencia por usuario se quede donde lo estimamos. La segunda es que la distribución deje de depender de la red personal de los fundadores. A diferencia de la versión anterior, esta condición ya tiene un plan, el canal del entrenador, y un experimento diseñado, las tres entrevistas de la Sección 3.4. La tercera es que los que prueban el producto paguen y se queden, y eso sólo lo va a medir el cobro real sobre las primeras cohortes.'),
  p('A esas tres se suma un riesgo que trae el canal nuevo, y que es de producto y no de mercado. Hasta que exista la vista donde el entrenador revisa y aprueba el trabajo de su cartera, Scala se suma a lo que ya paga en vez de reemplazarlo. Por eso construir esa vista es la condición previa del canal, no un agregado posterior. Sobre estas condiciones se apoya lo que sigue: el tamaño de mercado, la proyección de ventas y costos y los unit economics completos, que son materia del Módulo 7.'),

  S('Anexo A · Declaración de uso de inteligencia artificial'),
  p('En línea con las pautas de la Maestría, se detallan a continuación las herramientas de inteligencia artificial empleadas en este trabajo, el propósito de su uso y la forma en que interactuamos con ellas.'),

  T('Herramientas utilizadas'),
  p('Para elaborar este trabajo se hizo uso de Claude, de Anthropic, como espacio de trabajo compartido donde se centralizó el contexto del proyecto: los documentos de los módulos anteriores, el modelo de unit economics del Documento 3 y los resultados del experimento del Módulo 5. Para la investigación de la Sección 3.3 y de la Sección 5 se usó además su capacidad de búsqueda web.'),

  T('Motivación'),
  p('El propósito principal fue sostener la coherencia entre los nueve bloques del canvas y la trazabilidad de cada número del entregable. El margen bruto y el punto de equilibrio se recalcularon a partir de los supuestos del Documento 3, y cada cifra de evidencia se contrastó con los registros del Módulo 5, para que ningún número quedara separado de su fuente. En esta segunda iteración se sumó verificar contra fuentes externas los supuestos sobre el canal del entrenador.'),

  T('Uso reflexivo y enfoque dialógico'),
  p('La interacción con la inteligencia artificial fue la de un copiloto de pensamiento y no la de un generador pasivo de texto. Claude se usó para ordenar las consignas del módulo, revisar la coherencia del canvas bloque por bloque, buscar y contrastar evidencia externa y producir primeros borradores, que luego fueron revisados, corregidos y reescritos. Las decisiones sobre el modelo de negocios, la interpretación de la evidencia y la redacción final son nuestra responsabilidad. Por ejemplo, la decisión de que el entrenador pague la suscripción de sus atletas fue del equipo, y corrigió una recomendación previa de la herramienta, que proponía que el atleta pagara en los dos canales.'),
  p('A modo de ejemplo, algunas de las instrucciones dirigidas que se utilizaron fueron:'),
  p('_Recorré el canvas de derecha a izquierda y marcá cada elemento huérfano: segmentos sin propuesta, propuestas sin actividad o recurso, aliados o actividades sin costo._'),
  p('_Buscá qué le cobran al entrenador las plataformas del sector y con qué evidencia, y decime si lo que encontrás contradice lo que estamos suponiendo._'),
  p('_Señalá cada afirmación sobre el precio que no se apoye en un dato del Módulo 3, del Módulo 5 o de una fuente citada._'),
];
