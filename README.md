# Pequeño script para simplificar la configuración del mega-menu vtex

1- Instalar dependencias

2- Reemplazar todo el contenido de categoryTree.json por la respuesta obtenida
   al hacer un GET al siguiente endpoint:
   'https://{tienda}.myvtex.com/api/catalog_system/pub/category/tree/3'

3- Correr el script. se va a levantar en http://localhost:3000/ , desde ahí es
   simplemente copiar y pegar el texto que aparezca en la última columna del CSV
   de armado del mega-menu (en caso de no encontrarse documentación de este CSV,
   se puede hacer uno de prueba con categorías falsas, y descargar ese CSV, que
   ya vendría con la estructura necesaria. Replicar esa estructura con la info
   real).


   TIP: hacer triple click sobre el texto a copiar, y te selecciona todo.

