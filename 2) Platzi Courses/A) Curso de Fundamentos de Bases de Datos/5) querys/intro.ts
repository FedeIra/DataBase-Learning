/*
Example of querys:

!SELECT
* Select All:
-- SELECT *
-- FROM posts;

* Select all with a condition:
SELECT *
FROM posts
WHERE publish_date = "2023-06-24 16:18:31";

* Select some columns:
SELECT title, publish_date, status
FROM posts;

* Select some columns with alias:
SELECT title AS titulo, publish_date AS fecha_de_publicacion, status AS estado
FROM posts;

* Select adding a new column counting the rows:
SELECT COUNT(*) AS numero_posts
FROM posts;

!JOIN
Hay distintos tipos de join:

*Left join:
Trae todos los registros de la tabla de la izquierda y los que coincidan de la derecha. Ejemplo:
SELECT *
FROM users LEFT JOIN posts ON id_user = posts.user_id;
-- trae los usuarios tengan o no tengan posts. Después trae los posts relacionados a esos usuarios. Aparecen entonces usuarios sin posts.

SELECT *
FROM users LEFT JOIN posts ON id_user = posts.user_id
where posts.user_id is null;
-- trae usuarios sin posts

Otro ejemplo:
SELECT *
FROM users
LEFT JOIN posts ON id_user = posts.user_id
WHERE posts.user_id IS NULL
UNION
SELECT *
FROM users
RIGHT JOIN posts ON id_user = posts.user_id
WHERE posts.user_id IS NULL;

* Right join:
Trae todos los registros de la tabla de la derecha y los que coincidan de la izquierda. Ejemplo:
SELECT *
FROM users RIGHT JOIN posts ON id_user = posts.user_id;
-- trae los posts tengan o no tengan usuarios. Después trae los usuarios relacionados a esos posts. Aparecen entonces posts sin usuarios.

SELECT *
FROM users RIGHT JOIN posts ON id_user = posts.user_id
where users.id_user is null;
-- trae posts sin usuarios asociados

* Inner join:
Trae todos los registros que coincidan de ambas tablas. Ejemplo:
SELECT *
FROM users
INNER JOIN posts ON id_user = posts.user_id;
-- solo trae los que estan en ambos lados. No trae usuarios sin posts o posts sin usuarios.

* Union:
Une dos consultas. Ejemplo:
SELECT *
FROM users
LEFT JOIN posts ON id_user = posts.user_id
UNION
SELECT *
FROM users
RIGHT JOIN posts ON id_user = posts.user_id;
-- trae todos los usuarios y todos los posts. Si hay usuarios sin posts, trae los posts con null en los campos de usuario. Si hay posts sin usuarios, trae los usuarios con null en los campos de posts.

* Diferencia simétrica:
Trae los registros que no coinciden entre dos consultas. Ejemplo:
SELECT *
FROM users
LEFT JOIN posts ON id_user = posts.user_id
WHERE posts.user_id IS NULL
UNION
SELECT *
FROM users
RIGHT JOIN posts ON id_user = posts.user_id
WHERE posts.user_id IS NULL;

!WHERE:
Te permite filtrar duplas y registros dependiendo de ciertas cáracteristicas tipo criterios de fecha, cantidad, etc.

Ejemplo filtrando por menos o igual:
SELECT *
FROM posts
WHERE id_post<=4;

Ejemplo filtrando por activo:
SELECT *
FROM posts
WHERE status="active";

Ejemplo filtrando con not o negativa:
SELECT *
FROM posts
WHERE status!="inactive";

* LIKE:
Permite filtrar cuando la palabra indicado esta dentro de la cadena de texto. Ejemplo:
SELECT *
FROM posts
WHERE title LIKE "%es%";
-- trae los posts que tengan la palabra "es" en cualquier parte del título.

SELECT *
FROM posts
WHERE content LIKE "%guerra";
-- trae los posts que tengan la palabra "guerra" al final del contenido.

SELECT *
FROM posts
WHERE content LIKE "guerra%";
-- trae los posts que tengan la palabra "guerra" al principio del contenido.

* Between:
Definir un rango entre dos valores. Ejemplo:
SELECT *
FROM posts
WHERE publish_date BETWEEN "2023-07-01" AND "2023-08-25";
-- trae los posts que tengan fecha de publicación entre el 1 de julio y el 25 de agosto de 2023.

SELECT *
FROM posts
WHERE year(publish_date) BETWEEN "2023" AND "2024";
-- trae los posts que tengan fecha de publicación entre el 1 de enero de 2023 y el 31 de diciembre de 2024.
Solo uso el año en este ejemplo.

SELECT *
FROM posts
WHERE MONTH(publish_date) = "08";
-- trae los posts que tengan fecha de publicación en agosto.
*/
