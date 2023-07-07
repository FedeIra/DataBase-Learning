/*
1.- Determinar el problema a solucionar, la finalidad y los requerimientos.
Antes de comenzar un proyecto de Base de datos, es importante, determinar el eje a seguir para el diseño, ya que estas nos marcarán las pautas para tener un buen resultado.

2.- Modelado de Entidades
La idea es que se identifiquen los objetos de la base de datos, llamadas entidades.
Para el modelado de la base de datos se propone utilizar el “modelado de objetos”, ya que, la técnica propone una forma abstracta de pensamiento acerca de problemas a resolver, empleando conceptos del mundo real, y no conceptos técnicos informáticos.
En el proyecto se pueden identificar varios objetos que se relacionan y establecen un flujo de información, estos objetos se llegaran a transformar en tablas bidimensionales, las cuales son el fundamento de este tipo de base de datos relacional.

A.- Definir entidades.
Recordemos que las Entidades, son objetos o cosas que existen en nuestro alrededor, pensando en el proyecto ¿qué objetos intervienen en el proceso del proyecto?
Estos objetos surgen identificando todos los actores que tienen el proceso, posteriormente identifique las relaciones que tiene cada uno, sus responsabilidades, y el papel que tiene en el proceso.

B.- Definir los atributos
Recordemos que los objetos tienen apartados que son: identificador, atributos y métodos. Productos
Toda entidad tiene atributos que la describen, siendo el atributo las características de la Entidad.
.
3.- Modelado Relacional. Prototipo de BD sin normalizar.
Ahora bien, para el modelado ER, vamos a retomar las entidades, con sus respectivos atributos. En este paso hacemos énfasis en las relaciones de las entidades, mediante la cardinalidad, entendida por la cantidad de relaciones que tienen los objetos.
Para comprender la necesidad del proyecto se debe leer detenidamente y ver cómo interactúan los objetos y relaciones de conjuntos, delimitando la asociación.
Además, en el modelo ER, se utilizan figuras de relación y se hace uso de las claves principales y las claves foráneas.

A) Diagrama E/R
Diagrama de entidad- interrelación (E/R) perite representar gráficamente la estructura lógica de una base de datos. Para poder guiarnos y entender de mejor forma la base de datos a realizar.
Figuras:
• Rectángulos: entidades
• Elipsis: Atributos
• Rombos: Interrelaciones
• Líneas: enlazan los atributos a entidades, atributos a interrelaciones y entidades a interrelaciones.

B) Cardinalidades
La razón de cardinalidad, expresa el numero de entidades a las que otra entidad puede estar asociada por medio de una interrelación. Existen los siguientes tipos:

• Uno a uno (1:1).
• Uno a varios (1:N).
• Varios a uno (N:1) o la simétrica de la anterior.
• Varios a varios o muchos a muchos (N:M).

**4.- Base de datos Normalizada **
Continuamos con el paso de normalizar, ¿pero ¿qué es normalizar?
Para mejorar el desempeño de una base de datos, así como evitar redundancia en la información que contiene y en consecuencia, generar condiciones para un mejor diseño, se debe conocer las formas de normalización.
La normalización de datos es el proceso que permite refinar la construcción de modelos relacional con el objetivo de minimizar la redundancia de datos mediante ciertas normas y restricciones con el fin de evitar futuros problemas cuando nuestra base de datos sea mayor.
Su principal objetivo es reducir la redundancia de datos y simplificar las dependencias entre columnas, aplicándose de manera acumulativa.

Aplicación de Normalización
a) Convertirlas en Tablas
El modelado relacional, se deberá convertir en tablas, la siguiente imagen muestra las partes que la integran.

tablas.PNG
b) Realizar algunos registros
Para ayudarse a visualizar mejor los casos en los que estamos cayendo en redundancias, sirve hacer ejemplos de los registros, de esta manera nos podemos percatar en las situaciones donde tendremos problemas con la estructura de nuestra base de datos.

c) Aplicaremos las reglas de Normalización
----1FN: El valor de una columna debe ser una entidad atómica, indivisible, excluyendo así las dificultades que podría conllevar el tratamiento de un dato formado de varias partes.

----2FN: Una tabla se encuentra en 2FN cuando está en 1FN y no contiene dependencias parciales. Por consiguiente, una tabla 1FN automáticamente está en 2FN si su clave primaria está basada solamente en un atributo simple. Una tabla en 2FN aún puede contener dependencias transitivas.

----3FN: Cumple con la 1FN y 2FN y los campos que NO son clave, NO deben tener dependencias. Se debe seguir analizando la estructura de las tablas, para evitar que no haya registros con campos no dependientes.

----4FN: Cumple 1FN, 2FN, 3FN y los campos multivaluados se identifican por una clave única.


*Bases de datos en la vida real:
Hoy en dia, se utilizan diversos tipos de bases de datos segun el problema que se quiera resolver:
Las bases de datos relacionales, durante mucho tiempo, fueron utilizadas para resolver todo tipo de situaciones, pero al aumentar enormemente el numero de datos a manejar, se volveron ineficientes en muchos casos.
Firestore o MongoDB nos permiten obtener los datos actuales de la aplicacion de manera simple. Sin embargo, no nos permite hacer, por ejemplo, queries muy complejos.
En una misma disciplina, es probable que haya que utilizar mas de un tipo de bases de datos.

*Big dada:
la definición ahora muy popular del big data como las tres Vs:

Volumen. Las organizaciones recopilan datos de diversas fuentes, incluyendo transacciones comerciales, medios sociales e información de sensores o que se transmite de una máquina a otra. En el pasado, almacenarlos habría sido un problema – pero nuevas tecnologías (como Hadoop) han aligerado la tarea.

Velocidad. Los datos se transmiten a una velocidad sin precedentes y se deben distribuir de manera oportuna. Etiquetas FID, sensores y la medición inteligente crean la necesidad de distribuir torrentes de datos casi en tiempo real.

Variedad. Los datos vienen en toda clase de formatos – desde datos numéricos estructurados en bases de datos tradicionales hasta documentos de texto no estructurados, correo electrónico, video, audio, datos de teletipo bursátil y transacciones financieras.

Los datos de la actualidad provienen de múltiples fuentes, lo que hace difícil vincular, empatar, depurar y transformar datos entre diferentes sistemas. Sin embargo, es necesario conectar y correlacionar relaciones, jerarquías y múltiples vínculos de datos o sus datos se pueden salir de control en un segundo.

*Data warehouse:
En primer lugar, DW no es un producto que pueda ser comprado en el mercado, sino más bien un concepto que debe ser construido. DW es una combinación de conceptos y tecnología que cambian significativamente la manera en que es entregada la información a la gente de negocios. El objetivo principal es satisfacer los requerimientos de información internos de la empresa para una mejor gestión, con eficiencia y facilidad de acceso.

El DW puede verse como una bodega donde están almacenados todos los datos necesarios para realizar las funciones de gestión de la empresa, de manera que puedan utilizarse fácilmente según se necesiten.

Trata de guardar cantidades masivas de datos. No es lo mismo que big data, sino que mucho más. Entran muchos cada segundo. No queda en la base de datos principal. Cuando no son recurrentes se guarda el dato en data wahrehouse. Es como archivos muertos, pero que queremos no perder y tenerlos ordenados.

Pueden almacenar muchísimos datos.

Por ejemplo, google utiliza big table que tiene como particularidad una gran tabla. No sirve tanto para hacer consultas.

La información ingresada al Data Warehouse debe pasar por el proceso ETL (Extract, Transform and Load). Este proceso que se explica con más detalle en otro artículo. Como se comenta más arriba la información ingresada al Data Warehouse debe ser integrada y limpia, objetivo que se logra a través del proceso ETL.

*Data mining:
Se dedica a minar datos. Sea que hay data wharehouse u otro sistema de guarda data, se dedica a tratar de extraer los datos de donde sea que esten y volver a guardarlos de una forma aprovechable.

EJEMPLOS DE APLICACIONES DE LA MINERÍA DE DATOS
La capacidad predictiva del data mining ha cambiado el diseño de las estrategias empresariales. Ahora se puede entender el presente para anticiparse al futuro. Estos son algunos ejemplos de data mining en la industria actual:

Marketing: La minería de datos se utiliza para explorar bases de datos cada vez mayores y mejorar la segmentación del mercado. Analizando las relaciones entre parámetros como edad de los clientes, género, gustos, etc., es posible adivinar su comportamiento para dirigir campañas personalizadas de fidelización o captación. El data mining en marketing predice también qué usuarios pueden darse de baja de un servicio, qué les interesa según sus búsquedas o qué debe incluir una lista de correo para lograr una tasa de respuesta mayor.

Comercio minorista: Los supermercados, por ejemplo, emplean los patrones de compra conjunta para identificar asociaciones de productos y decidir cómo situarlos en los diferentes pasillos y estanterías de los lineales. El data mining detecta además qué ofertas son las más valoradas por los clientes o incrementa la venta en la cola de caja.

Banca: Los bancos recurren a la minería de datos para entender mejor los riesgos del mercado. Es habitual que se aplique a la calificación crediticia (rating) y a sistemas inteligentes antifraude para analizar transacciones, movimientos de tarjetas, patrones de compra y datos financieros de los clientes. El data mining también permite a la banca conocer más sobre nuestras preferencias o hábitos en internet para optimizar el retorno de sus campañas de marketing, estudiar el rendimiento de los canales de venta o gestionar las obligaciones de cumplimiento de las regulaciones.

Medicina: La minería de datos favorece diagnósticos más precisos. Al contar con toda la información del paciente —historial, examen físico y patrones de terapias anteriores— se pueden prescribir tratamientos más efectivos. También posibilita una gestión más eficaz, eficiente y económica de los recursos sanitarios al identificar riesgos, predecir enfermedades en ciertos segmentos de la población o pronosticar la duración del ingreso hospitalario. Detectar fraudes e irregularidades y estrechar vínculos con los pacientes al ahondar en el conocimiento de sus necesidades son también ventajas de emplear el data mining en medicina.

Televisión y radio: Hay cadenas que aplican la minería de datos en tiempo real a sus registros de audiencia en televisión online (IPTV) y radio. Estos sistemas recaban y analizan sobre la marcha información anónima de las visualizaciones, las retransmisiones y la programación de los canales. Gracias al data mining se pueden emitir recomendaciones personalizadas a los radioyentes y telespectadores, conocer en directo sus intereses y su actividad, y entender mejor su conducta. Las cadenas obtienen, además, conocimiento muy valioso para sus anunciantes, que aprovechan estos datos para llegar con más precisión a sus clientes potenciales.

*ETL:
Muy útil para la disciplina de data mining. Es una técnica o disciplina.
Siglas: Extract, Transform, Load.

Es tomar datos de un lugar, pasarlos por un proceso de transformación (sumatoria, limpieza, etc) y luego guardarlos en otro lugar.

Sirve para 1) data mining, 2) data warehouse. Ahí ya se puede usar esa información.

Otro caso es tomar los datos vivos de una base de datos y pasarlos a otra base de datos. Por ejemplo, de una base de datos de producción a una base de datos de desarrollo.

No está basada en una tecnología en concreto auqnue existen softawres que ayudan a hacerlo. Ejemplo: datapipelines. Es un software que ayuda a hacer ETL.

*Business intelligence:
Sirve como el punto final de la cadena de guardar, transformar, etc. Es el objetivo.

Business intelligence es un conjunto de metodologías, aplicaciones y tecnologías que permiten reunir, depurar y transformar datos de los sistemas transaccionales e información desestructurada (interna y externa a la compañía) en información estructurada, para su explotación directa (reporting, análisis OLTP/OLAP, alertas, etc.) o para su análisis y conversión en conocimiento, dando así soporte a la toma de decisiones sobre el negocio.

Tener los elementos y datos para poder tomar decisiones. Necesita los datos correctos. Business intelligence trata de proveer con los datos e información correcta para tomar buenas decisiones.

Ejemplo: un ejemplo de la vida eral usando business inteligence:

Peluquería local

Una peluquería de Santiago de Compostela llevaba dos años abierta al público. Durante todo ese tiempo, las dueñas, dos chicas jóvenes y emprendedoras, habían trabajado todos los días de la semana (a excepción, naturalmente, de los domingos) para sacar adelante su negocio.

Al haber estabilizado su cartera de clientes decidieron descansar un día más a la semana. Su primera opción fue cerrar los lunes, como las demás peluquerías de la zona. No obstante, decidieron basar su decisión en la información histórica que habían recogido en su pequeña aplicación de citas.

Los resultados obtenidos fueron contudentes, ya que el lunes resultó ser el cuarto día más rentable de la semana (probablemente como consecuencia del cierre de la competencia). Finalmente el día elegido para descansar fue el martes.

*Machine learning:

Son uan serie de técnicas que invlocura IA y detección de patrones.

Tiene una gran aplicación en el manejo de datos. Es un paso más adelante del business intelligence. En BS hay alguien que está buscando darle sentido a los datos. En ML hacemos modelos que van a encontrar patrones en los datos..

Agarra el mar de datos y te dice que hay patrones. Por ejemplo, en el caso de la peluquería, te dice que el lunes es el cuarto día más rentable. Te dice que hay patrones en los datos.

Encuentra patrones en los datos que no encuentran las personas. Los hacen los modelos de machine learning, la mayoría basada en estadisticas.

Una es BIGQUERY: sirve como warehouse y además nos permite hacer queries complejos que ayudan a hacer BS.

Machine Learning tiene dos casos de uso muy particulares: 1) problema de clasificación: procesamiento de lenguaje natural. Empieza a procesarlo y al final te entrega patrones.  2) Problema de predicciones: te dice que va a pasar en el futuro. Ejemplo: te dice que el lunes es el cuarto día más rentable. Te encuentra relaciones que afecta a los datos también. Estos dos casos de uso son los que generalmente vienen a la mente cuando se habla de machine learning.

En resumen:

IA: abarca a machine learning y deep learning y busca eliminar al humano en la creación de algoritmos y que todo ese proceso lo haga una computadora

Machine learning: como dijo Israel, crea modelo y al señarle te encontrada modelos fortuitos, cuando le des una mar de datos él te va encontrar patrones

Deep learning: le busca sentido a los datos.

Una IA es un sistema que es inteligente, usando machine learning puedes buscar en una BBDD cuando tus clientes te compran más y te daras cuenta que es en finales de años y usando deep learning la computadora es capaz de encontrar el porqué te compran más.

*Data Science:
Data science es aplicar todo lo que hemos visto, técnicas de ETL, Data Mining, Business Intelligence, todo junto. Aunque esta más dirigida a personas con background de estadísticas, hoy en día también participan personas con el perfil de Data Engineering. Al hacer Data Science estamos aplicando todo lo visto en los temas anteriores, no solo a nivel técnico sino que desarrollamos la experiencia y conocimientos sobre las distintas tecnologías, en que parte del desarrollo de nuestro proyecto tenemos que utilizarlas, etc. Con lo cual el Data Science juega el papel de manager dentro de un equipo de profesionales de datos.

Es aplicar todo lo que hemos visto, tecnicas de ETL, Data Mining, Business Intelligence. Aunque esta mas dirigida a personas con background de estadisticas, hoy en dia tambien participan personas con el perfil de Data Engineering. Al hacer Data Science estamos aplicando todo lo visto en los temas anteriores, no solo a nivel tecnico sino que desarrollamos la experiencia y conocimientos sobre las distintas tecnologias, en que parte del desarrollo de nuestro proyecto tenemos que utilizarlas, etc. Con lo cual el Data Science juega el papel de manager dentro de un equipo de profesionales de datos.
*/
