/*
!Entidad:
similar a un objeto. Representa algo en el mundo real. Se dibujan con un rectangulo.

!Atributos: caracteristicas de la entidad. Se dibujan con un ovalo.

*Multivaluado: Cuando tiene doble ovalo significa que es un atributo multivaluado, es decir, tiene mas de un valor. Sería como un array.

*Compuestos: algunos atributos tienen a su vez sus propios atributos.

* Atributo especial: ejemplo: antiguedad. Es un atributo que se calcula a partir de otro atributo que sería la fecha que se creo. Se dibuja con un ovalo punteado.

!Identificador: es un atributo que identifica a la entidad. Se dibuja con una linea subrayando el atributo. Permite que no se repita la entidad.

Entidades debiles: se representan con forma de cuadrado pero con doble línea. Son entidades que no pueden existir sin la entidad fuerte.
Por ejemplo, una entidad fuerte sería un cliente y una entidad debil sería una cuenta bancaria. La cuenta bancaria no puede existir sin el cliente. Si le agregas
identificadores a las entidades debiles, siguen siendo debiles pero por existencia y no por identidad también.

*/
