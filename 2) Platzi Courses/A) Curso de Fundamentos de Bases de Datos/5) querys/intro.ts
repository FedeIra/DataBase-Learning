/*
Example of querys:

* Select All
-- SELECT *
-- FROM posts;

* Select all with a condition
SELECT *
FROM posts
WHERE publish_date = "2023-06-24 16:18:31";

* Select some columns
SELECT title, publish_date, status
FROM posts;

* Select some columns with different names
SELECT title AS titulo, publish_date AS fecha_de_publicacion, status AS estado
FROM posts;
*/
