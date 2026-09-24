# Generador del entregable

Scripts que producen `Entrega/Doc - Modulo 6 - El Modelo de Negocios (v2) - Scala.docx`
con el formato del Anexo E, portado de `Contexto General/Guia/nbl-template.js`.

```bash
npm install docx@9
node build.js "../Entrega/Doc - Modulo 6 - El Modelo de Negocios (v2) - Scala.docx"
```

| Archivo | Qué tiene |
|---|---|
| `helpers.js` | El formato: Arial 12, interlineado 1,5, justificado, márgenes 3 cm y 2,5 cm, A4, negro. Títulos de sección 16 bold con salto de página, principales 14 bold, secundarios 12 bold. Paginado abajo a la derecha, sin número en la carátula. Soporta `**negrita**` e `_itálica_` dentro del cuerpo. |
| `parte-a.js` | Carátula, Resumen, §1 y §2 (con la Tabla 1, el canvas). |
| `parte-b.js` | §3 completa: máquina de ventas, canales, modelo de ingresos y evidencia. |
| `parte-c.js` | §4 cadena de valor, §5 aliados (Tabla 3) y §6 números (Tabla 4). |
| `parte-d.js` | §7 indicadores, §8 conclusión y el anexo de declaración de IA. |

**El PDF no lo genera esto.** No hay LibreOffice ni Word en la máquina: se exporta
abriendo el `.docx` en Word y guardando como PDF, que además es la forma de
confirmar el conteo de páginas real antes de subir al campus.

**Si se edita el texto**, editar el `.js` y regenerar, no el `.docx`: así el
documento y su fuente no se separan.
