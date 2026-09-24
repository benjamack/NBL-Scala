# 05 · Iteración del entregable: qué cambia, sección por sección

**Fecha:** miércoles 24 de septiembre de 2026 · **Insumo:** `04 - Investigación: el entrenador, canal o cliente` · **Destino:** `Doc - Modulo 6 - El Modelo de Negocios - Scala.docx`

---

## Antes que nada: el calendario aprieta

Según `01`, el borrador final cierra el **sábado 26** y la entrega vence el **miércoles 30**. Quedan dos días de escritura. Por eso esto no es una lista pareja: está ordenada en tres niveles y el nivel 1 es lo único que **cambia la tesis del documento**. Si sólo hay un par de horas, se hace el nivel 1 y nada más; el documento queda consistente igual.

Vale la pena hacerlo: las entrevistas con Mariano, con el entrenador de Andy y con Juan van a ocurrir después de la entrega, así que el módulo puede dejar la hipótesis escrita y el experimento diseñado, que es exactamente lo que un modelo de negocios tiene que hacer con lo que todavía no sabe.

## La tesis nueva, en una línea

> Scala le cobra a un solo cliente, el atleta. El entrenador no paga y no cobra: recibe capacidad. No es un segundo modelo de ingresos, es el canal que baja el costo de adquisición y, sobre todo, el vínculo que baja el churn.

Esto **no rompe** ninguna decisión ya tomada del documento. Al contrario: sostiene «un solo modelo de ingresos» y sostiene «mercado segmentado, no multi-sided», que es lo que el canvas ya afirma.

---

# Nivel 1 · Lo mínimo indispensable

## 1.1 · Sección 3.3, el párrafo que hoy se contradice

Hoy dice: *«La licencia a entrenadores humanos es otro negocio y queda fuera de esta etapa.»*

Esa frase deja al proyecto sin poder hablar de la propuesta a Mariano, que ya está escrita y se va a presentar. Reemplazarla por el argumento de que el entrenador **no es un segundo modelo de ingresos porque no paga**:

> Una quinta alternativa, cobrarle una licencia al entrenador humano, se descarta por una razón de tamaño y no de encaje. Estados Unidos tiene del orden de 2.330 entrenadores de triatlón certificados, que ganan en promedio US$47.226 al año, y las plataformas que les venden capturan entre US$9 y US$12 por atleta y mes, es decir entre el 4% y el 6% de lo que ese entrenador factura. El segmento entero vale unos US$6 millones anuales y ya se lo reparten TrainingPeaks, Final Surge, Humango y TriDot. Esos mismos entrenadores, en cambio, tienen del orden de 57.000 atletas bajo seguimiento: cada uno de ellos es una puerta a veinticinco suscripciones. Por eso el entrenador entra al modelo como canal y no como cliente, y el modelo de ingresos sigue siendo uno solo.

**Por qué es el cambio número uno.** Es la única contradicción real entre el documento y lo que el proyecto está haciendo hoy.

## 1.2 · Sección 6, la línea que falta en los números

La Tabla 4 llega hasta el margen bruto por suscriptor y ahí se detiene. Sin vida del cliente, un margen del 62% no dice si el negocio cierra. Agregar un párrafo después de la tabla:

> El margen por suscriptor sólo se vuelve un negocio cuando se lo multiplica por cuánto dura ese suscriptor. El churn mensual mediano de una aplicación de fitness está entre el 10% y el 13%, con el cuartil superior entre el 4% y el 6%. Con un 10%, la vida media es de diez meses y cada suscriptor deja unos US$62 de margen bruto en toda su vida. Ese número, y no el margen mensual, es el que determina cuánto se puede gastar en adquirir un cliente, y es la variable que todavía no está medida.

Y una frase que conecta con la sección 5:

> La retención es además la razón principal por la que conviene sumar al entrenador como canal: un atleta acompañado por su entrenador dentro de la plataforma tiene una relación y no sólo una suscripción. En el análogo más cercano con dato público, la permanencia de un socio de gimnasio con un vínculo que lo sostiene pasa de 4,7 a 14,2 meses, con 3,7 veces más valor de vida.

**Por qué importa.** Es el hallazgo que el documento no tenía y es el que convierte al entrenador de «idea simpática» en «palanca económica».

## 1.3 · Sección 5, la fila del entrenador en la Tabla 3

La tabla tiene hoy «Profesionales de entrenamiento y nutrición · Red de asesores», cuyo aporte es el aval frente a la barrera de confianza. Eso es otra cosa y conviene que conviva. Agregar una fila nueva:

| Aliado | Tipo de alianza | Qué aporta a Scala | Qué recibe | Justificación |
|---|---|---|---|---|
| Entrenadores con cartera de atletas | Canal de distribución | Entre veinte y cuarenta atletas por acuerdo, y el vínculo humano que sostiene la retención | Capacidad: el día a día de cada atleta lo hace el coach de IA y el plan sigue saliendo con su nombre. No paga y no cobra | El 91% de los entrenadores ya usa IA y su techo no es su capacidad sino el tiempo por atleta. Cobrarle sería quedarse con el 5% de su facturación; usarlo como canal, con el 100% de veinticinco suscripciones |

Y cerrar la sección con la regla que evita el conflicto de canal, porque es el único riesgo verdadero de esta caja:

> El riesgo de sumar al entrenador como canal no es económico sino de mensaje. El caso de referencia es Intuit, que vende su software a los contadores y su producto de impuestos al consumidor final desde hace décadas sin problema, hasta que lanzó una campaña con el lema «rompé con tu contador»: las asociaciones profesionales reaccionaron, la campaña se levantó y su CEO pidió disculpas públicamente. La regla que adopta Scala es explícita: la plataforma no interviene en la relación económica entre el entrenador y su atleta, y no se comunica nunca como el reemplazo de nadie.

---

# Nivel 2 · Lo que mejora el documento si hay un día

## 2.1 · Sección 3.1, la etapa Deleitar de la Tabla 2

La fila de comunidad dice hoy «contenido compartible». Precisarla con lo que la investigación sostiene y lo que no: **el atleta amateur publica logros, no vende planes.** Todo marketplace de planes que funciona (TrainingPeaks reparte 70% al entrenador y lleva más de 70.000 planes vendidos) es de vendedores acreditados, y no hay precedente relevante de amateurs publicando planes con adopción real. Lo que sí está documentado es el logro compartido: Peloton retiene el 92% de sus suscriptores y el 70% de sus usuarios busca comunidad dentro de la app.

## 2.2 · Sección 3.3, el escalón gratuito

Si se decide incorporar el escalón gratuito que discutió el equipo, el argumento tiene que ser el de costo marginal y no el de conversión, porque es el que nos distingue:

> El freemium convierte cinco veces peor que una prueba con fecha (2,1% contra 10,7% de conversión mediana al día 35), pero la razón que decide en el caso de Scala es otra: cada usuario gratuito consume US$2,22 mensuales de inferencia. Cien usuarios gratuitos cuestan US$222 por mes y devuelven dos o tres suscriptores. Por eso el escalón gratuito, si existe, no puede incluir al coach de inteligencia artificial: es una vitrina que conecta el reloj y muestra los datos, no una versión reducida del producto.

## 2.3 · Sección 3.3, el precio contra los competidores directos

El Módulo 4 comparó contra Bevel, Garmin, Strava y MyFitnessPal, pero no contra las plataformas de coaching con IA, que están todas por encima: Humango va de US$9 a US$29, TriDot de US$14,99 a US$99 y su escalón con entrenador está en US$249. Agregar una frase:

> Contra los competidores directos de coaching con inteligencia artificial, US$10 es el piso de la categoría y no su techo. El experimento del Módulo 5 validó que el precio no expulsa, no que sea el precio óptimo, y se midió además ofreciendo seis meses sin costo a los primeros inscriptos. La primera palanca disponible si el margen se comprime es el precio, antes que recortar el uso de inferencia.

## 2.4 · Sección 7, la conclusión

Las tres condiciones abiertas siguen siendo las correctas. Lo que cambia es que la segunda ya tiene un plan y la tercera ahora tiene un número contra el cual medirse. Reescribir el cierre para decir eso, y agregar el experimento del entrenador como el próximo paso concreto.

## 2.5 · Sección 4.1, la actividad de control de calidad

El documento ya dice que controlar la calidad y la seguridad de las recomendaciones es la actividad clave número dos. La investigación la refuerza y conviene citarlo, porque además es lo que el entrenador va a preguntar primero: el 54% de los entrenadores declara que su principal preocupación con la IA es que dé un consejo impreciso o inseguro, muy por encima del 20% que teme por el vínculo con su cliente.

---

# Nivel 3 · Lo que NO entra en este módulo

Escribirlo como decisión, no omitirlo:

- **El gemelo digital del entrenador** (la idea de Dante). Existe comercialmente: TriDot vende una *Mark Allen Edition* con la metodología de un seis veces campeón del mundo de Ironman dentro del algoritmo, y hay plataformas dedicadas a clonar expertos. Pero pedirle a un entrenador que entregue su método antes de que confíe en la herramienta es el orden inverso. Primero la prueba, después el gemelo.
- **La cara del entrenador dentro del producto.** No es una pantalla: es un segundo tipo de usuario, y hoy todo el modelo de datos asume un dueño por fila. Consentimiento por alcance, tabla de vínculos y auditoría son semanas de trabajo, la mitad de diseño de permisos.
- **Cobrarle al entrenador.** Queda identificado como opción futura con su precondición escrita: que los entrenadores entrevistados digan que prefieren pagar ellos.

---

# Cambios en el canvas (`02 - Business Model Canvas v1`)

Para que el Figma y el documento no queden desfasados:

| Bloque | Qué cambia |
|---|---|
| **Aliados clave** | Post-it nuevo: «Entrenadores con cartera de atletas, como canal de distribución» ⏳. El post-it existente de profesionales como red de asesores se queda: son dos roles distintos. |
| **Canales** | Post-it nuevo en awareness y adquisición: «El entrenador como puerta de entrada en bloque» ⏳. Ya existe algo parecido en Grow («comunidades y clubes»); conviene unificarlos. |
| **Relación con clientes** | En Keep, post-it nuevo: «El entrenador humano como ancla de retención» ⏳. |
| **Fuentes de ingresos** | **Sin cambios, y eso es el punto.** Conviene dejar un post-it que lo diga explícito: «Un solo pagador: el atleta. El entrenador no paga ni cobra». |
| **Estructura de costos** | Sin línea nueva por el entrenador (no le pagamos). Si entra el escalón gratuito, sí hace falta un post-it de inferencia de usuarios no pagos. |
| **Segmentos** | Sin cambios. Sigue siendo segmentado y no multi-sided. El matiz honesto para el texto: sigue habiendo un solo pagador, pero dejaría de haber un solo tipo de usuario, y eso tiene costo de producto, no de ingresos. |

---

# El experimento: qué preguntar en las tres entrevistas

Benja habla con Mariano Amoroso la semana que viene y Pipe coordina con el entrenador de Andy y con Juan. Tres entrevistas alcanzan para decidir, no para probar. Que las tres tengan las mismas preguntas y en este orden:

1. **¿Qué te preocupa más: que la IA se equivoque con un atleta tuyo, o que te reemplace?** Testea el hallazgo 1. Si contestan «reemplazo», la hipótesis se cae y el pitch cambia entero.
2. **¿Cuántos atletas tenés hoy y cuántos podrías tener si el día a día lo hiciera la app?** Es la hipótesis de capacidad, que es la moneda con la que se le paga. Si contesta «los mismos», no hay canje posible.
3. **¿Preferís pagar vos por atleta, o que pague tu atleta?** La pregunta que el modelo necesita. Dato para la conversación: TrainingPeaks les cobra US$9 por atleta y lo pagan.
4. **¿Qué tiene que quedar bajo tu firma para que lo uses?** Define dónde termina la IA y dónde empieza el entrenador, que es lo que Humango y TriDot tuvieron que resolver.
5. **¿Cuánto cobrás hoy por atleta y por mes?** Calibra contra el benchmark de US$150 a 250 y dice si la plata en juego es la que suponemos.

**Criterio de éxito escrito antes de empezar**, como en cualquier experimento del programa: la hipótesis se sostiene si al menos dos de los tres aceptan una prueba gratuita con sus atletas y ninguno de los tres pone el reemplazo como su primera preocupación.

## Las tres condiciones que falsan la hipótesis

Conviene que queden escritas en el documento, en la conclusión:

1. Los entrenadores dicen que prefieren pagar ellos y no que pague el atleta. Ahí el modelo es otro y hay que rehacer la sección 3.3.
2. Un atleta con entrenador retiene igual o peor que uno sin entrenador después de tres meses. Ahí el entrenador es sólo un canal de adquisición y vale mucho menos.
3. Menos de uno de cada tres entrenadores acepta una prueba gratuita. Si no entran gratis, no son un canal.

---

# Qué no tocar

Para que la iteración no rompa lo que ya está bien:

- **El modelo de ingresos único.** Es una decisión correcta y esta iteración la refuerza en vez de contradecirla.
- **«Segmentado, no multi-sided».** Sigue siendo cierto: hay un solo pagador.
- **Los US$10, el margen de US$6,22 y el equilibrio en 240 suscriptores.** No los toca nada de esto, porque al entrenador no se le paga.
- **La estructura del documento y su reparto de páginas.** Todos los cambios del nivel 1 son párrafos dentro de secciones que ya existen, más una fila de tabla. No hace falta una sección nueva.
