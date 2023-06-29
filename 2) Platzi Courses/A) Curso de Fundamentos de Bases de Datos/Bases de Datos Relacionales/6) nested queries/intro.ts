/*
Generalmente se ocupa cuando tnenes un problema q no se puede solucionar consultando tablas por separado.

De query padre a query hijo. Se puede hacer un query dentro de otro query.

Hay que evitarlo porque cuando tenes muchisimos datos se vuelve muy lento. Haces una adinación de consultas que se puede volver muy pesado. Como caracteristica general, no escala.

Las consultas anidadas son la mejor opción cuando los valores dependen de otras tablas, y estas no se encuentran relacionadas entre si.

Las consultas anidadas son la mejor opción para casos de INSERT, DELETE, UPDATE, cuya condición dependa del esenario explicado en el punto anterior

Los JOINS son la mejor opción para casos de SELECT

Ejemplo:
SELECT new_table_projection.date, COUNT(*) AS posts_count
FROM(
SELECT DATE(MIN(publish_date)) AS date, YEAR(publish_date) AS post_year
FROM posts
GROUP BY post_year
) AS new_table_projection
GROUP BY new_table_projection.date
ORDER BY new_table_projection.date;

SELECT *
FROM posts
WHERE publish_date = (
	SELECT max(publish_date)
    FROM posts
);
-- quiero seleccionar todo de la tabla post, pero la condición es que la fecha de publicación sea la misma que la fecha máxima de publicación que nos va a dar el segundo query (2024-08-25 16:18:31)

*/
