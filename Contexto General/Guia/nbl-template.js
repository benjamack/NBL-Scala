// One Pager Scala — Doc #1 NBL · MIA · Universidad de San Andrés
// Formato académico sobrio según Anexo E (Guía TFG MIA):
//   Arial · 1.5 interlineado · márgenes 3cm L/R y 2.5cm T/B
//   Títulos sección Arial 16 bold · principales Arial 14 bold · subtítulos Arial 12 itálica
//   Texto negro · sin colores ni decoraciones.
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun,
  AlignmentType, BorderStyle
} = require('docx');

const FONT = "Arial";
const BLACK = "000000";

// ── Helpers ──────────────────────────────────────────────────────────────────

// Cuerpo: Arial 12, justificado, interlineado 1.5 (line: 360 = 1.5x).
function bodyP(text) {
  return new Paragraph({
    spacing: { after: 160, line: 360 },
    alignment: AlignmentType.JUSTIFIED,
    children: [new TextRun({ text, font: FONT, size: 24, color: BLACK })] // 12pt
  });
}

// Título principal (Arial 14 bold) para cada una de las 5 preguntas del One Pager.
// Anexo E: precedido por un espacio, seguido por el texto sin espacio.
function tituloPrincipal(numero, titulo) {
  return new Paragraph({
    spacing: { before: 240, after: 60, line: 360 },
    keepNext: true,
    children: [
      new TextRun({ text: `${numero}. ${titulo}`, font: FONT, size: 28, bold: true, color: BLACK }) // 14pt bold
    ]
  });
}

// Título de sección (Arial 16 bold) para el bloque que abre el documento.
function tituloSeccion(text) {
  return new Paragraph({
    spacing: { before: 0, after: 60, line: 320 },
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text, font: FONT, size: 32, bold: true, color: BLACK }) // 16pt bold
    ]
  });
}

// Subtítulo en cursiva (Arial 12 itálica).
function subtituloItalica(text) {
  return new Paragraph({
    spacing: { after: 60, line: 280 },
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text, font: FONT, size: 24, italics: true, color: BLACK }) // 12pt italic
    ]
  });
}

// Línea de metadata centrada (Arial 12 regular, compacta).
function metaLine(text) {
  return new Paragraph({
    spacing: { after: 0, line: 280 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, font: FONT, size: 24, color: BLACK })]
  });
}

// ── Encabezado académico ────────────────────────────────────────────────────
const encabezado = [
  metaLine("Universidad de San Andrés  ·  Maestría en Inteligencia Artificial Aplicada"),
  metaLine("New Business Launchpad — Módulo 1: Ideación"),
  new Paragraph({ spacing: { after: 0, line: 240 }, children: [new TextRun({ text: "" })] }),
  tituloSeccion("One Pager — Scala"),
  subtituloItalica("Documento #1 — Entrega del Módulo 1"),
  metaLine("Nico Karagozian  ·  Benjamín Mackinnon   |   Buenos Aires, 17 de mayo de 2026")
];

// ── Cuerpo: las 5 preguntas ─────────────────────────────────────────────────
const cuerpo = [
  tituloPrincipal("1", "Problema / Necesidad"),
  bodyP("El atleta amateur tiene cada vez más datos biométricos gracias a los wearables, pero no recibe asesoramiento personalizado para traducir esos datos en decisiones concretas de entrenamiento, nutrición y recuperación. Hoy resuelve ese gap con varias apps fragmentadas y, cuando puede, con un coach humano que queda fuera del alcance de la mayoría."),

  tituloPrincipal("2", "Cliente — Segmentos"),
  bodyP("Atletas amateurs comprometidos —running, ciclismo, triatlón, gym, deportes de raqueta— que entrenan varias veces por semana con objetivos concretos, tengan o no wearable. La interfaz conversacional permite incorporar también a quienes todavía no usan dispositivo pero buscan estructura y guía personalizada. Como segmento secundario, la mujer atleta que necesita planificación sensible al ciclo menstrual, históricamente subatendida."),

  tituloPrincipal("3", "Relevancia del problema"),
  bodyP("Es un problema frecuente y diario: el atleta toma decisiones repetidas sobre si entrenar fuerte o descansar, qué comer y cómo recuperarse. Hoy las resuelve mal porque las apps disponibles son loggers, no entrenadores, y los datos del wearable quedan sin interpretar. El costo de no resolverlo es real: sobreentrenamiento, lesiones, estancamiento y frustración. Para la mujer atleta hay además un costo de salud cuando la planificación no contempla el ciclo."),

  tituloPrincipal("4", "Solución de alto nivel"),
  bodyP("Una app con coach personal de IA y una interfaz principalmente conversacional. La mayoría de las apps de fitness se centran en agregar y mostrar datos que el usuario después no sabe cómo accionar; nosotros invertimos el modelo: el atleta habla con un coach agéntico que interpreta su contexto y ejecuta por él —arma y ajusta el plan de entrenamiento, actualiza nutrición y recuperación, contempla el ciclo menstrual, registra comidas, recuerda contexto entre sesiones. Si el usuario tiene wearable, el coach se nutre de la biometría continua; si no, el propio usuario aporta el input día a día a través de la conversación, de modo que nadie queda afuera. La conversación es la UI principal para actualizar todo, no un chat agregado al costado."),

  tituloPrincipal("5", "Por qué nos interesa"),
  bodyP("Somos atletas amateurs y usuarios activos de wearables: vivimos el problema en primera persona. Tenemos los datos pero nos faltan las decisiones, y creemos que es el momento ideal para resolverlo en el cruce de IA, wearables y salud personal. Es un dominio donde podemos aportar criterio propio porque somos el cliente al que apuntamos.")
];

// ── Documento ───────────────────────────────────────────────────────────────
// Anexo E: márgenes izquierdo y derecho 3 cm, superior e inferior 2.5 cm.
// A4 = 11906 x 16838 DXA · 1 cm ≈ 567 DXA.
const doc = new Document({
  creator: "Nico Karagozian + Benjamín Mackinnon",
  title: "Scala — One Pager NBL",
  description: "Doc #1 — Módulo 1: Ideación · NBL · MIA · UdeSA",
  styles: {
    default: { document: { run: { font: FONT, size: 24, color: BLACK } } }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1417, right: 1701, bottom: 1417, left: 1701 } // 2.5cm / 3cm
      }
    },
    children: [
      ...encabezado,
      ...cuerpo
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/sessions/hopeful-adoring-mendel/mnt/outputs/Scala-OnePager-NBL.docx", buffer);
  console.log("OK: Scala-OnePager-NBL.docx generado (formato académico Anexo E)");
});
