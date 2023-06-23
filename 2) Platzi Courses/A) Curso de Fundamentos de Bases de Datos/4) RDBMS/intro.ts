/*
!RDBMS:
Relational database managment system. Es un programa q se encarga de administrar la base de datos, es decir, de crearla, modificarla, eliminarla, etc.
Un ejemplo es postegreSQL y mySQL.

!SQL:
Structured Query Language. Es un lenguaje de programación q nos permite comunicarnos con la base de datos, es decir, crear tablas, modificarlas, eliminarlas, etc.

!NoSQL:
Not only structured query language. No solo utiliza SQL. Es un tipo de base de datos q no utiliza tablas, sino q utiliza documentos, grafos, etc. Un ejemplo es MongoDB. 
Como base siguen teniendo sql muchas veces. Ejemplo: cassandra.

!DDL:
Data definition language. Es un lenguaje de programación q nos permite crear tablas, modificarlas, eliminarlas, etc.
Tiene los siguientes comandos:
- CREATE: crea una tabla.
- ALTER: modifica una tabla.
- DROP: elimina una tabla.

*Create:
Database
Table
View: ofreces la proyección de la base de datos. Es decir, una vista de la base de datos.

Ejemplo:
CREATE DATABASE test_db;

USE DATABASE test_db;

CREATE VIEW v_madrid_customers AS
SELECT person_id, last_name, first_name
FROM people
WHERE city = "Madrid";

SELECT * FROM v_madrid_customers;

ALTER TABLE people
ADD COLUMN date_of_birth DATE;

ALTER TABLE people
DROP COLUMN address;

!DML:
Data manipulation language. Es un lenguaje de programación q nos permite insertar datos, modificarlos, eliminarlos, etc.

Comandos:
- INSERT: inserta datos.
- UPDATE: modifica datos.
- DELETE: elimina datos.
- SELECT: selecciona datos.

Example:
INSERT INTO people (person_id, last_name, first_name, city)
VALUES (1, "Garcia", "Juan", "Madrid");

Insert:
INSERT INTO people (last_name, first_name, address, city) VALUES("Irarrazaval", "Federico", "Roosevelt 1929", "Buenos Aires");

Update:
UPDATE people SET last_name = "Miguens" WHERE person_id = 4;

Delete:
DELETE FROM people
WHERE
    person_id = 3;

Select:
SELECT * FROM people;

SELECT last_name FROM people
WHERE
    last_name = "Irarrazaval";

SELECT last_name AS apellido, first_name AS nombre FROM people
WHERE
    last_name = "Irarrazaval";

SELECT last_name FROM people
WHERE
    person_id = 4;

SELECT * FROM people
WHERE
    person_id = 4;

*/
