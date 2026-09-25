# Generador del entregable

Produce el `.docx` y el `.pdf` de `Entrega/Doc - Modulo 6 - El Modelo de Negocios (v2) - Scala.docx`
con el formato del Anexo E, portado de `Contexto General/Guia/nbl-template.js`.

```bash
npm install docx@9
node build.js "../Entrega/Doc - Modulo 6 - El Modelo de Negocios (v2) - Scala.docx"

# PDF (no hay Word ni LibreOffice en la maquina: se pagina con Chrome)
python3 a-html.py "../Entrega/Doc - Modulo 6 - El Modelo de Negocios (v2) - Scala.docx" > doc.html
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="../Entrega/Doc - Modulo 6 - El Modelo de Negocios (v2) - Scala.pdf" \
  "file://$PWD/doc.html"
```

| Archivo | Qué tiene |
|---|---|
| `helpers.js` | El formato: Arial 12, interlineado 1,5, justificado, márgenes 3 cm y 2,5 cm, A4, negro. Títulos de sección 16 bold, principales 14 bold, secundarios 12 bold. Paginado abajo a la derecha, sin número en la carátula. Soporta `**negrita**` e `_itálica_` dentro del cuerpo y de las celdas. |
| `parte-a.js` | Carátula, Resumen, §1 y §2 (con la Tabla 1, el canvas). |
| `parte-b.js` | §3 completa: máquina de ventas, canales, modelo de ingresos y evidencia. |
| `parte-c.js` | §4 cadena de valor, §5 aliados (Tabla 3) y §6 números (Tabla 4). |
| `parte-d.js` | §7 conclusión y el anexo de declaración de IA. |
| `a-html.py` | Convierte el `.docx` a HTML con el mismo formato, para imprimirlo a PDF en A4. |

## Dos cosas para no romper

**Cada sección empieza en página nueva**, igual que en la v1: la carátula, el
resumen y cada sección van en su propia página. Así el documento da **18 páginas**.
La consigna del módulo no fija un límite; el rango de 12 a 16 era un objetivo
propio de `Framework y Plan/01`. Para generarlo sin saltos:

```bash
SALTOS_DE_SECCION=0 node build.js "../Entrega/..."
```

**El texto se edita acá, no en el `.docx`.** Si se abre el Word y se escribe
encima, la próxima regeneración pisa los cambios.
