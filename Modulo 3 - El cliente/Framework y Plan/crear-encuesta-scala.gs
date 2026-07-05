/**
 * Crea la encuesta cuantitativa del Módulo 3 (Scala) como Google Form.
 *
 * CÓMO USARLO (toma ~1 minuto):
 *  1. Andá a https://script.google.com  →  "Nuevo proyecto".
 *  2. Borrá todo y pegá este archivo completo.
 *  3. Clic en "Ejecutar" (▶). La primera vez te pide autorizar tu cuenta: aceptá.
 *  4. Abrí el menú "Ver → Registro de ejecución" (o "Execution log"):
 *     ahí aparecen el LINK PARA EDITAR y el LINK PARA COMPARTIR del formulario.
 *
 * El form queda en tu Google Drive. Después podés editarlo a mano como cualquier Form.
 */
function crearEncuestaScala() {
  var form = FormApp.create('Cómo entrenás y tomás tus decisiones')
    .setDescription(
      'Estamos haciendo un estudio sobre cómo deciden entrenar, comer y recuperarse ' +
      'las personas que entrenan en serio. No hay respuestas correctas ni incorrectas: ' +
      'nos interesa tu experiencia real. Son ~3 minutos y es anónimo. ¡Gracias por el tiempo!'
    )
    .setCollectEmail(false)
    .setProgressBar(true)
    .setShowLinkToRespondAgain(false);

  // ---------- Sección 1 — Sobre vos y tu entrenamiento ----------
  form.addMultipleChoiceItem()
    .setTitle('¿Cuál es tu deporte principal?')
    .setChoiceValues(['Running', 'Ciclismo', 'Triatlón', 'Gym / Fuerza',
      'Deportes de raqueta (tenis, pádel)', 'Natación', 'CrossFit / Funcional', 'Otro'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Cuántas veces por semana entrenás, en promedio?')
    .setChoiceValues(['1–2', '3–4', '5–6', '7 o más'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Hace cuánto entrenás de forma regular?')
    .setChoiceValues(['Menos de 1 año', '1 a 3 años', 'Más de 3 años'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('¿Tenés un objetivo concreto ahora mismo?')
    .setChoiceValues(['Sí — una carrera o competencia', 'Sí — un objetivo de cuerpo / peso',
      'Sí — una marca o rendimiento', 'No, entreno sin un objetivo puntual']);

  form.addMultipleChoiceItem()
    .setTitle('Género')
    .setChoiceValues(['Femenino', 'Masculino', 'Prefiero no decir'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Edad')
    .setChoiceValues(['Menos de 25', '25–34', '35–44', '45 o más'])
    .setRequired(true);

  // ---------- Sección 2 — Datos y decisiones del día a día ----------
  form.addPageBreakItem().setTitle('Datos y decisiones del día a día');

  form.addMultipleChoiceItem()
    .setTitle('¿Usás un wearable / reloj para entrenar?')
    .setChoiceValues(['Sí — Garmin', 'Sí — Apple Watch',
      'Sí — otro (Polar, Coros, Whoop, etc.)', 'No uso wearable'])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('"Tengo muchos datos de mi cuerpo (sueño, frecuencia cardíaca, HRV, pasos…) pero no sé bien qué hacer con ellos."')
    .setBounds(1, 5)
    .setLabels('Muy en desacuerdo', 'Muy de acuerdo')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Cuántas apps de fitness / salud usás regularmente?')
    .setChoiceValues(['0', '1', '2', '3 o más'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Cuando te levantás y tenés que decidir si entrenar fuerte, suave o descansar, ¿qué es lo que MÁS pesa?')
    .setChoiceValues(['Cómo me siento ese día', 'Lo que dice mi plan',
      'Un dato del reloj o la app', 'Nada en particular, improviso']);

  form.addMultipleChoiceItem()
    .setTitle('¿Con qué frecuencia dudás sobre si estás entrenando, comiendo o recuperándote "bien"?')
    .setChoiceValues(['Casi todos los días', 'Algunas veces por semana',
      'De vez en cuando', 'Casi nunca'])
    .setRequired(true);

  // ---------- Sección 3 — Cómo lo resolvés hoy ----------
  form.addPageBreakItem().setTitle('Cómo lo resolvés hoy');

  form.addMultipleChoiceItem()
    .setTitle('¿Tenés o tuviste entrenador, coach o nutricionista?')
    .setChoiceValues(['Tengo ahora', 'Tuve en el pasado', 'Nunca'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Cuánto gastás por mes hoy en apps, servicios o coaching de fitness / salud? (montos aproximados, en USD o equivalente)')
    .setChoiceValues(['US$0', 'Menos de US$10', 'US$10–30', 'US$30–100', 'Más de US$100'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Si la app de fitness que más usás dejara de existir mañana, ¿cómo te sentirías?')
    .setChoiceValues(['Muy decepcionado/a', 'Algo decepcionado/a',
      'No me importaría', 'No uso ninguna app'])
    .setRequired(true);

  // ---------- Sección 4 — Qué te gustaría ----------
  form.addPageBreakItem().setTitle('Qué te gustaría');

  form.addScaleItem()
    .setTitle('"Me gustaría una guía personalizada que me diga, según mi contexto, qué entrenar y comer cada día."')
    .setBounds(1, 5)
    .setLabels('Muy en desacuerdo', 'Muy de acuerdo')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('¿Qué es lo que MÁS te frustra hoy de entrenar y cuidarte?');

  form.addMultipleChoiceItem()
    .setTitle('¿Te resultaría natural gestionar todo esto conversando (por chat o voz) con un coach que te conoce?')
    .setChoiceValues(['Sí, me gustaría', 'Me da igual',
      'No, prefiero ver los datos y decidir yo'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Imaginá un coach de IA con el que hablás y que arma y ajusta tu entrenamiento y nutrición según tu contexto. ¿Pagarías ~US$10/mes por algo así?')
    .setChoiceValues(['Sí', 'Tal vez', 'No'])
    .setRequired(true);

  // ---------- Sección 5 — Ciclo menstrual (opcional) ----------
  form.addPageBreakItem().setTitle('Ciclo menstrual (opcional)')
    .setHelpText('Si no aplica para vos, podés saltear esta sección.');

  form.addMultipleChoiceItem()
    .setTitle('Si menstruás: ¿te gustaría que tu plan de entrenamiento y nutrición tenga en cuenta tu ciclo menstrual?')
    .setChoiceValues(['Sí', 'No', 'No sé', 'No aplica']);

  // ---------- Sección 6 — Cierre ----------
  form.addPageBreakItem().setTitle('Una última cosa');

  form.addTextItem()
    .setTitle('¿Estarías dispuesto/a a que te hagamos una entrevista de 20 minutos para contarnos más? Si sí, dejanos un mail o teléfono.')
    .setHelpText('Opcional. Nada de spam — solo para coordinar.');

  // ---------- Links ----------
  Logger.log('✅ Formulario creado.');
  Logger.log('✏️  EDITAR: ' + form.getEditUrl());
  Logger.log('🔗 COMPARTIR (para responder): ' + form.getPublishedUrl());
}
