/*
Hay varios tipos de bases de datos no relacionados:

* Clave-valor:
Son ideales para almacenar y extraer datos con una clave única. Manejan los diccionarios de manera excepcional. Es más díficil para preguntas complejas. Se basan en algoritmos de datos o índices hash. Ejemplo: Redis, DynamoDB, Cassandra, Riak, BerkeleyDB (Oracle).

Ejemplo: DynamoDB, Cassandra, Riak, BerkeleyDB (Oracle).

*Documentales o basadas en documentos:
Son una implementación de clave valor que varía en la forma semiestructurada en que se trata la información.
Ideal para almacenar datos JSON y XML.

No responden bien para queries o preguntas complejas. Pero son muy eficientes para estados de aplicaciones web y móviles.

Ejemplo:MongoDB, Firestore (se ofrece en la nube), CouchDB, RethinkDB.

* Basados en Grafos:
Basadas en teorías de grafos sirven para entidades que se encuentran interconectadas por múltiples relaciones. Ideales para almacenar relaciones complejas. Los grafos ayudan a mapear estructuras complejas. Son muy eficientes para consultas complejas.

Ejemplos: Neo4j, titan, OrientDB.

*Basados en memoria:
Pueden ser de estrctura variada, pero su ventaja radica en la velocidad, ya que al vivir en memoria la extracción de datos es casi inmediata. Son volatiles y no son recomendables para datos que no se pueden perder. Es un gran trabajo sincronizar lo guardado en memoria con lo que se guarda en disco.

Ejemplos: Memcached, Redis

*Basados u optimizadas para búsquedas:
Pueden ser de diversas estructuras, su ventaja radica en que se pueden hacer queries y búsquedas complejas de manera sencilla.
Utilizadas mucho en machine learning y business intelligence.

Ejemplos: ElasticSearch, BigQuery.



*/
