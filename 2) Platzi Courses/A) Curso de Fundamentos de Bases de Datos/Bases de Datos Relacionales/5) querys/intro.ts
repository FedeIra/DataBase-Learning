/*
! De pregunta a query:

Quiero obtener todos los post creados por edgar@com:

*SELECT: Los datos que quieres mostrar: Nickname y Titulo del post
*FROM: De dónde voy a tomar los datos: Tabla usuarios y post
*WHERE: Los filtros de los datos que quieres mostrar: Deben de ser de edgar@com
*GROUP BY: Los rubros por los que me interesa agrupar la información: No deseo agrupar
*ORDER BY: El orden en que quiero presentar mi información: por fecha de publicación
*HAVING: Los filtros que quiero que mis datos agrupados tengan

SELECT u.nickname, p.titulo
FROM usuarios
where u.email="edgar@com"
ORDER BY p.fecha_publicacion;

cuantas tags tiene un blog post:
SELECT COUNT(*) AS numero_tags FROM tags WHERE post_id=1;
Queries:
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

*ON: es que cada campo de cada tabla los une.

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

* ASC Y DESC también ordenan alfabeticamente, númericamente, por fecha, por cantidad:
SELECT *
FROM posts
order by title desc;

* LIMIT:
Limita la cantidad de registros que devuelve la consulta. Ejemplo:
SELECT *
FROM posts
order by title desc
limit 2;
-- trae los dos primeros registros ordenados alfabeticamente por título de manera descendiente.

* HAVING:
Permite filtrar registros de una consulta agrupada. Ejemplo:

SELECT MONTHNAME(publish_date) AS post_month, status, count(*) AS post_quantity
FROM posts
group by status, post_month
HAVING post_quantity > 2
order by post_month;
-- having sirve para una vez que agrupamos y tenemos campos dinamicos. Si lo intentas con where no podes. Having siempre va después de group by. Primero agrupa, después filtra y finalmente lo ordena.

El having se puede usar con cualquier campo que se haya creado en la consulta. Se usa para filtrar por campos dinámicos. No se puede usar con campos estáticos. Para campos estáticos usamos where..

Ejercicio:
SELECT teachers.name as teacher,
SUM (courses.n_reviews) AS total_reviews
FROM courses
INNER JOIN teachers ON courses.teacher_id = teachers.id
GROUP BY teachers.name
ORDER BY total_reviews DESC;

Otro ejercicio:
-- cuantos tags hay en cada post
SELECT posts.title, COUNT(*) AS numero_tags
FROM posts
INNER JOIN posts_tags ON post_id = posts.id_post
INNER JOIN tags ON id_tag = posts_tags.tag_id
GROUP BY posts.id_post
ORDER BY numero_tags DESC;

* GROUP CONCAT:
Toma resultado del query y en lugar de ponerlo en un row tras otro lo pone en un campo por comas.

SELECT posts.title, group_concat(name_tag) AS nombre_de_tags
FROM posts
INNER JOIN posts_tags ON post_id = posts.id_post
INNER JOIN tags ON id_tag = posts_tags.tag_id
GROUP BY posts.id_post;

SELECT *
FROM tags
LEFT JOIN posts_tags ON tag_id = tags.id_tag
WHERE posts_tags.tag_id IS NULL;
-- trae los tags que no están asociados a ningún post.

SELECT c.name_category, COUNT(*) AS cantidad_de_posts
FROM categories AS c
INNER JOIN posts AS p ON c.idcategories = p.category_id
GROUP BY c.idcategories
ORDER BY cantidad_de_posts DESC
LIMIT 1;
-- trae la categoría con más posts.

SELECT u.nickname, COUNT(*) AS cantidad_de_posts, group_concat(name_category)
FROM users AS u
INNER JOIN posts AS p ON u.id_user = p.user_id
INNER JOIN categories AS c ON c.idcategories = p.category_id
GROUP BY u.id_user
ORDER BY cantidad_de_posts DESC;
-- trae  usuario con  posts en orden descendiente y las categorías de esos posts.

SELECT *
FROM users AS u
LEFT JOIN posts AS p ON p.user_id = u.id_user
WHERE p.user_id IS NULL;
-- trae los usuarios que no tienen posts.


SELECT cuerpo_comentario AS comentario, login AS usuario, titulo AS post
FROM comentarios
INNER JOIN usuarios ON comentarios.usuario_id = usuarios.id
INNER JOIN posts ON comentarios.post_id = posts.id
WHERE comentarios.usuario_id = 1;
-- trae los comentarios de un usuario en particular.
*/
