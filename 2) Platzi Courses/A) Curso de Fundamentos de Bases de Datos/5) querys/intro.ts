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

*AVG Calcula el promedio
*COUNT Cuenta los registros de un campo
*SUM Suma los valores de un campo
*MAX Devuelve el maximo de un campo
*MIN Devuelve el mínimo de un campo

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

!WHERE NULL / NOT NULL:
*null: es por defecto cuando no se guarda una especificación en el campo. Se pueden consultar los valores de tipo nulo. El nulo no es mayor ni menor a nada por lo que no funciona ocmo número, cadena ni fecha.
Hay que consultarlo con una sentencia particular:
SELECT *
FROM comments
WHERE post_id IS NULL;

*not null:
SELECT *
FROM comments
WHERE post_id IS NOT NULL;

* AND:
Otro ejemplo de not null con filtro adicional:
SELECT *
FROM posts
WHERE user_id IS NOT NULL
AND status = "active";

SELECT *
FROM posts
WHERE user_id IS NOT NULL
AND status = "active"
AND id_post < 5
AND category_id = 2
AND YEAR(publish_date) = "2023";

!GROUP BY:
Agregar una agrupación a la consulta. Indica criterios para agrupar los registros.

Ejemplo:
SELECT status, COUNT(*) post_quantity
FROM posts
GROUP BY status;
En este caso agrupa por status (active o inactive) y cuenta los registros de cada status.

SELECT YEAR(publish_date) AS post_year, COUNT(*) AS post_quantity
FROM posts
GROUP BY post_year;
En este caso agrupa por año y cuenta los registros de cada año.

SELECT MONTHNAME(publish_date) AS post_month, COUNT(*) AS post_quantity
FROM posts
GROUP BY post_month;
En este caso agrupa por mes y cuenta los registros de cada mes.

SELECT status, MONTHNAME(publish_date) AS post_month, COUNT(*) AS post_quantity
FROM posts
GROUP BY status, post_month;
En este caso agrupa por status y mes y cuenta los registros de cada status y mes.
Resultado:
status	  post_month	post_quantity
active	  August	    1
inactive  August     1


!ORDER BY:
* Default:
SELECT *
FROM posts
order by publish_date;
-- por default lo ordena de manera ascendente

*ASC:
SELECT *
FROM posts
order by publish_date ASC;
-- explicitamente de manera ascendente

*DESC:
SELECT *
FROM posts
order by publish_date desc;
-- de manera descendiente
*/
