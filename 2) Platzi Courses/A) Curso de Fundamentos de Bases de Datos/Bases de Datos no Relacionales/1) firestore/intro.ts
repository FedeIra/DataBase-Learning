/*
!FIREBASE(FIRESTORE)

Firebase (Firestore). Es una plataforma muy utilizada para el desarrollo de aplicaciones web y aplicaciones móviles.
Como usa un conjunto de herramientas multiplataforma es compatible con grandes plataformas, como IOS, Android, aplicaciones web, Unity y C++. Es muy recomendable para desarrollos.

Firestore es una base de datos no relacional, basada en documentos. Es una base de datos orientada a documentos, que se basa en colecciones y documentos.

* Jerarquía de datos en Firestore:

1) Base de datos: va a contener todos los datos.
2) Colecciones: son grupos de documentos.
3) Documentos: son objetos que contienen los datos. Es la información que queremos guardar. Se guarda en un formato similar al json.


El modelo de datos es más cercano al mundo real en las bases de datos no relacionales. Es más fácil de entender y de trabajar.

*Top level collections: colecciones que tenemos de inmediato en un proyecto.

Tipos de datos en Firestore:

*String: Cualquier tipo de valor alfanumérico

*Number: Soporta enteros y flotantes.

*Boolenan: Los clásicos valores True y False

*Map: Permite agregar un documento dentro de otro. Es el equivalente a un objeto en javascript.

*Array: Permite agregar un conjunto de datos (soporte multi type) sin nombre e identificador.

*Null: Indica que no se ha definido un valor.

*Timestamp: Permite almacenar fechas (guarda el año, mes, día y hora).

*Geopoint: Guarda una localización geográfica (coordenadas latitud-longitud).

*Reference: Permite referencia un documento (relaciona dos documentos, no importa su colección).


Un top level collection se utilizaria para relaciones de tipo “agregacion”. Mientras que una sub collection se utilizaria para relaciones tipo “composicion”.

Por ejemplo:

Tenemos Estudiantes, Cursos y Notas. Los estudiantes tiene cursos y los cursos tiene estudiantes. Si se elimina un curso los estudiantes no deben ser eliminados. Lo mismo si se elimina un estudiante los cursos no deben ser elimiandos. Esto es una relacion de agregacion. Aqui se usaria top level collection para estudiantes y cursos.

Los estudiantes tienen notas y las notas pertenecen a un estudiante. Si se elimina un estudiante, tiene sentido eliminar las notas. Esto es una relacion de composicion. Aqui se usarian las subcollections. El estudiante tendría una subcollection de notas.

Las bases de datos no relacionales están pensadas para mantener el estado de tu aplicación y no para realizar queries.

!Colecciones y subcolecciones:
Emplear colecciones de nivel cero para entidades fuertes, que mas adelante se empleen para realizar busquedas exhaustivas.
Emplear subcolecciones para entidades débiles, que solo permitan plasmar información relacionada, pero que dicha data no sea una fuente de consulta primaria para nuestra aplicación.
*/
