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
*/
