# Convierte el .docx generado a HTML con el formato del Anexo E, para imprimirlo
# a PDF en A4. Lee el XML que nosotros mismos escribimos, así los estilos son
# predecibles: 32=sección, 28=principal, 24=cuerpo, 20=epígrafe.
import zipfile, re, html, sys

XML = zipfile.ZipFile(sys.argv[1]).read('word/document.xml').decode('utf8')
CUERPO = re.search(r'<w:body>(.*)</w:body>', XML, re.S).group(1)

def runs_html(p):
    out = []
    for r in re.finditer(r'<w:r>(.*?)</w:r>', p, re.S):
        s = r.group(1)
        txt = ''.join(re.findall(r'<w:t[^>]*>(.*?)</w:t>', s, re.S))
        if not txt: continue
        txt = html.escape(html.unescape(txt))
        if '<w:b/>' in s: txt = f'<b>{txt}</b>'
        if '<w:i/>' in s: txt = f'<i>{txt}</i>'
        out.append(txt)
    return ''.join(out)

def props(p):
    sz = re.search(r'<w:sz w:val="(\d+)"', p)
    al = re.search(r'<w:jc w:val="(\w+)"', p)
    return (int(sz.group(1)) if sz else 24), (al.group(1) if al else 'left')

def celda_html(tc):
    ps = re.findall(r'<w:p\b[^>]*>.*?</w:p>', tc, re.S)
    filas = [runs_html(p) for p in ps]
    filas = [f for f in filas if f]
    span = re.search(r'<w:gridSpan w:val="(\d+)"', tc)
    vm   = 'w:vMerge w:val="restart"' in tc
    al   = props(ps[0])[1] if ps else 'left'
    attrs = ''
    if span: attrs += f' colspan="{span.group(1)}"'
    if vm:   attrs += ' rowspan="2"'
    if al == 'right': attrs += ' class="der"'
    return f'<td{attrs}>{"<br>".join(filas)}</td>'

partes = []
# recorrer el cuerpo en orden, alternando párrafos sueltos y tablas
for m in re.finditer(r'(<w:tbl>.*?</w:tbl>)|(<w:p\b[^>]*>.*?</w:p>)', CUERPO, re.S):
    if m.group(1):  # tabla
        filas = []
        for tr in re.findall(r'<w:tr\b.*?</w:tr>', m.group(1), re.S):
            celdas = [celda_html(tc) for tc in re.findall(r'<w:tc>.*?</w:tc>', tr, re.S)
                      if 'w:vMerge w:val="continue"' not in tc]
            filas.append('<tr>' + ''.join(celdas) + '</tr>')
        partes.append('<table>' + ''.join(filas) + '</table>')
        continue
    p = m.group(2)
    txt = runs_html(p)
    salto = 'w:type="page"' in p
    sz, al = props(p)
    if not txt:
        partes.append('<p class="vacio">&nbsp;</p>' if not salto else '')
        continue
    cls = []
    if salto: cls.append('salto')
    if sz == 32: tag, base = 'h1', ('caratula' if al == 'center' else 'seccion')
    elif sz == 28: tag, base = 'h2', 'principal'
    elif sz == 20: tag, base = 'p', 'epigrafe'
    elif '<w:b/>' in p.split('</w:t>')[0] and len(txt) < 120 and al == 'left': tag, base = 'h3', 'secundario'
    else:
        tag, base = 'p', {'center': 'centro', 'both': 'cuerpo'}.get(al, 'cuerpo')
    cls.append(base)
    partes.append(f'<{tag} class="{" ".join(cls)}">{txt}</{tag}>')

CSS = """
@page { size: A4; margin: 2.5cm 3cm; }
* { box-sizing: border-box; }
body { font-family: Arial, Helvetica, sans-serif; font-size: 12pt; color: #000;
       line-height: 1.5; margin: 0; text-align: justify; }
p, h1, h2, h3 { margin: 0 0 8pt; }
p.vacio { margin: 0; }
h1.caratula  { font-size: 16pt; font-weight: bold; text-align: center; margin: 0 0 6pt; }
h1.seccion   { font-size: 16pt; font-weight: bold; text-align: left; margin: 0 0 14pt; }
h1.salto     { break-before: page; }
h2.principal { font-size: 14pt; font-weight: bold; text-align: left; margin: 14pt 0 4pt;
               break-after: avoid; }
h3.secundario{ font-size: 12pt; font-weight: bold; text-align: left; margin: 10pt 0 4pt;
               break-after: avoid; }
p.centro     { text-align: center; margin: 0 0 2pt; }
p.epigrafe   { font-size: 10pt; font-style: italic; text-align: center; margin: 6pt 0 14pt; }
table { width: 100%; border-collapse: collapse; font-size: 10pt; margin: 4pt 0 0;
        table-layout: fixed; break-inside: avoid; }
td { border: 1px solid #000; padding: 3pt 4pt; vertical-align: top; text-align: left;
     line-height: 1.25; word-wrap: break-word; }
td.der { text-align: right; }
"""
print(f'<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{CSS}</style></head>'
      f'<body>{"".join(partes)}</body></html>')
