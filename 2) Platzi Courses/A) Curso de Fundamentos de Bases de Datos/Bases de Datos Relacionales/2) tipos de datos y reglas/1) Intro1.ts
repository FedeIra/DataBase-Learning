/*
!Tipos de datos:

CHAR: toma pedazito de memoria y lo reserva

VARCHAR: lo hace de manera dinámica y solo toma el espacio que necesita

TEXT: es para textos muy largos. el limite de char es de 245. Si necesito más uso este tipo de datos.

INTEGER: numero entero.

BIGINT: numero entero muy grande.

SMALLINT: numero entero pequeño. De esta manera se hace más eficente la base de datos. Ocupa el espacio mínimo que tiene que ocupar.

DECIMAL: numero decimal.

NUMERIC: numero decimal (n, s).

DATE: fecha

TIME: la hora del dia

DATETIME o TIMESTAP: fecha y hora

BOOLEAN: true or false (1 o 0)

!REGLAS:
Not null: valor por defecto es nulo. Con esta regla, no se puede dejar el campo vacio.

Unique: no se puede repetir el valor. Ejemplo, email o nombre de usuario.

Primary key: ayuda a hacer las relaciones entre entidades. Le hacemos un indice al asignarle una. Es un identificador único. No se puede repetir.

Foreign key: cuando queremos juntar dos tablas. La identificación de una tabla se agrega a la otra con foreign key. No tiene que ser única pq la tabla puede tener varias relaciones.

Check: se le asigna un valor y solo puede tomar ese valor. Ejemplo, sexo: hombre o mujer.

Default: se le asigna un valor por defecto. Ejemplo, si no se le asigna un valor a un campo, se le asigna un valor por defecto.

Index: permite hacer búsquedas más rápidas en nuestras tablas de datos. Se le asigna un indice a un campo. Se le asigna a campos que se usan mucho para hacer búsquedas.

*/
