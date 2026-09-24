// Helpers de formato Anexo E (Guía TFG MIA), portados de Contexto General/Guia/nbl-template.js
// Arial · negro · interlineado 1,5 · cuerpo justificado · sin colores ni decoración.
const {
  Paragraph, TextRun, AlignmentType, PageBreak,
  Table, TableRow, TableCell, WidthType, BorderStyle, VerticalMergeType,
} = require('docx');

const FONT = 'Arial';
const BLACK = '000000';

const bodyP = (text, opts = {}) => new Paragraph({
  spacing: { after: 160, line: 360 },
  alignment: AlignmentType.JUSTIFIED,
  children: runs(text),
  ...opts,
});

// Partes en **negrita** y _itálica_ dentro del cuerpo.
function runs(text, size = 24) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|_[^_]+_)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), font: FONT, size, color: BLACK }));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(new TextRun({ text: tok.slice(2, -2), font: FONT, size, bold: true, color: BLACK }));
    else out.push(new TextRun({ text: tok.slice(1, -1), font: FONT, size, italics: true, color: BLACK }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), font: FONT, size, color: BLACK }));
  return out;
}

// Título de sección: Arial 16 bold, en página nueva.
const tituloSeccion = (text, { salto = true } = {}) => new Paragraph({
  spacing: { before: 0, after: 240, line: 360 },
  keepNext: true,
  children: [
    ...(salto ? [new PageBreak()] : []),
    new TextRun({ text, font: FONT, size: 32, bold: true, color: BLACK }),
  ],
});

// Título principal: Arial 14 bold.
const tituloPrincipal = (text) => new Paragraph({
  spacing: { before: 240, after: 60, line: 360 },
  keepNext: true,
  children: [new TextRun({ text, font: FONT, size: 28, bold: true, color: BLACK })],
});

// Título secundario: Arial 12 bold.
const tituloSecundario = (text) => new Paragraph({
  spacing: { before: 180, after: 60, line: 360 },
  keepNext: true,
  children: [new TextRun({ text, font: FONT, size: 24, bold: true, color: BLACK })],
});

const subtituloItalica = (text) => new Paragraph({
  spacing: { after: 60, line: 280 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text, font: FONT, size: 24, italics: true, color: BLACK })],
});

const metaLine = (text) => new Paragraph({
  spacing: { after: 0, line: 280 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text, font: FONT, size: 24, color: BLACK })],
});

const tituloCaratula = (text) => new Paragraph({
  spacing: { before: 0, after: 120, line: 320 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text, font: FONT, size: 32, bold: true, color: BLACK })],
});

const vacio = (n = 1) => Array.from({ length: n }, () => new Paragraph({
  spacing: { after: 0, line: 240 }, children: [new TextRun({ text: '' })],
}));

// Epígrafe de tabla: Arial 10 itálica, centrado. Anexo E pide que toda tabla
// lleve además explicación narrativa en el cuerpo.
const epigrafe = (text) => new Paragraph({
  spacing: { before: 120, after: 240, line: 280 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text, font: FONT, size: 20, italics: true, color: BLACK })],
});

const BORDE = { style: BorderStyle.SINGLE, size: 4, color: BLACK };
const BORDES = { top: BORDE, bottom: BORDE, left: BORDE, right: BORDE };

// Celda de tabla. `head` la pone en negrita; `size` por defecto Arial 10.
function celda(lineas, { head = false, colSpan, rowSpan, size = 20, align = AlignmentType.LEFT } = {}) {
  const arr = Array.isArray(lineas) ? lineas : [lineas];
  return new TableCell({
    borders: BORDES,
    columnSpan: colSpan,
    rowSpan,
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
    children: arr.map((l) => new Paragraph({
      spacing: { after: 40, line: 240 },
      alignment: align,
      children: l === '' ? [new TextRun({ text: '' })]
        : runs(l, size).map((r) => (head ? new TextRun({ ...r.options, bold: true }) : r)),
    })),
  });
}

const tabla = (filas, { anchos } = {}) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  columnWidths: anchos,
  rows: filas,
});

const fila = (celdas) => new TableRow({ children: celdas });

module.exports = {
  FONT, BLACK, AlignmentType, VerticalMergeType,
  bodyP, tituloSeccion, tituloPrincipal, tituloSecundario, subtituloItalica,
  metaLine, tituloCaratula, vacio, epigrafe, celda, tabla, fila, runs,
};
