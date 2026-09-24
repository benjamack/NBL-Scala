// Genera el entregable del Módulo 6 en formato Anexo E (Guía TFG MIA).
// A4 · Arial 12 · interlineado 1,5 · justificado · márgenes 3 cm L/R y 2,5 cm T/B
// Negro sobre blanco, sin colores ni decoración. Paginado abajo a la derecha.
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType, Footer, PageNumber } = require('docx');

const cuerpo = [
  ...require('./parte-a.js'),
  ...require('./parte-b.js'),
  ...require('./parte-c.js'),
  ...require('./parte-d.js'),
];

const FONT = 'Arial', BLACK = '000000';

const pie = new Footer({
  children: [new Paragraph({
    alignment: AlignmentType.RIGHT,
    children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 20, color: BLACK })],
  })],
});

const doc = new Document({
  creator: 'Nicolás Karagozian + Benjamín Mackinnon',
  title: 'Scala — El modelo de negocios (Módulo 6, NBL)',
  description: 'Entrega del Módulo 6 · New Business Launchpad · MIA · UdeSA',
  styles: { default: { document: { run: { font: FONT, size: 24, color: BLACK } } } },
  sections: [{
    properties: {
      titlePage: true, // la carátula no lleva número de página
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1417, right: 1701, bottom: 1417, left: 1701 },
      },
    },
    footers: { default: pie, first: new Footer({ children: [new Paragraph({ children: [] })] }) },
    children: cuerpo,
  }],
});

const salida = process.argv[2] || 'Doc - Modulo 6 - El Modelo de Negocios - Scala.docx';
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(salida, buf);
  console.log(`OK · ${salida} · ${(buf.length / 1024).toFixed(0)} KB · ${cuerpo.length} elementos`);
});
