/*
!NORMALIZACIÓN:
Son reglas formales:
1) Campos atómicos: no hay que repetir campos o atributos.
Ejemplo: materia 1 y materia 2. Deben ser solo un campo: materias

2) cada campo de la tabla debe depender de una clave única.
Ejemplo: si tengo una tabla de alumnos y otra de materias, no puedo poner el nombre de la materia en la tabla de alumnos.
Debo poner el id de la materia y hacer una relación entre las dos tablas.

3) Los campos que no son clave no deben tener dependencias. Es decir, no deben depender de otros campos. Deben depender de la clave única. Si no dependen de la clave única, se debe crear otra tabla.
Ejemplo: si tengo una tabla de alumnos y otra de materias, no puedo poner el nombre de la materia en la tabla de alumnos.

4) Los campos multivaluados se identifican por una clave única. Se crea una tabla aparte para los campos multivaluados.

*/
