# Proyecto de Lenguaje de Marcas

Este proyecto ha sido desarrollado en equipo por Luka, Rubén y Adrián. A continuación, se detalla la contribución de cada miembro del equipo:

## Contribuciones

### Adrián
- **Palmarés**: Desarrollo del HTML y CSS.
- **Calendario**: Desarrollo del HTML y CSS.
- **Formulario Calendario**: Actualizacion del HTML y CSS.

### Luka
- **Inicio**: Desarrollo del HTML y CSS.
- **Formulario Tienda**: Actualizacion del CSS.
- **Añadido de comentarios**: En los HTML y CSS restantes.

### Rubén
- **Tienda**: Desarrollo del HTML y CSS.
- **Plantilla**: Desarrollo del HTML y CSS.
- **Formulario Tienda**: Actualizacion del HTML.

## Descripción del Proyecto

El proyecto consiste en la creación de una página web que incluye varias secciones, cada una desarrollada por un miembro del equipo. La colaboración ha sido fundamental para integrar todas las partes y asegurar la coherencia del diseño y funcionalidad

El proyecto consiste en la creación de la página web del Getafe CF. Los distintos apartados de la página incluyen:
- **Inicio**: Página principal con información general sobre el club y patrocinadores en el pie de página.
- **Palmarés**: Sección que muestra los logros y premios obtenidos por el equipo a lo largo de su historia.
- **Calendario**: Sección con el calendario de eventos y partidos del equipo.
- **Tienda**: Sección para la venta de productos oficiales del club.
- **Plantilla**: Página con la plantilla actual del equipo, incluyendo información sobre los jugadores y el cuerpo técnico.

## Estructura del Proyecto

- **Inicio**: Página principal con información general.
- **Palmarés**: Sección que muestra los logros y premios.
- **Calendario**: Sección con el calendario de eventos.
- **Tienda**: Sección para la venta de productos.
- **Plantilla**: Página con la plantilla del equipo.

## Modificaciones realizadas en los archivos HTML y CSS

Explicación de cada elemento/atributo y de los campos de entrada de datos añadidos para el uso de los formularios tanto en HTML y CSS

**Formulario tienda**

-**HTML**:
![image](https://github.com/user-attachments/assets/8c549d4f-d761-4b28-8725-e2f19fe6faac)

- form: El elemento contenedor del formulario.

- action: Define a dónde se enviarán los datos del formulario (puede ser una URL relativa o absoluta).
  
- method: Especifica cómo se envían los datos:
  
- GET: Los datos se anexan a la URL (menos seguro, adecuado para búsquedas).
  
- POST: Los datos se envían en el cuerpo de la solicitud (más seguro, ideal para formularios que involucran datos sensibles).
  
- input: Elemento para capturar datos.
  
- type: Define el tipo de dato (por ejemplo, text, email, password, checkbox, etc.).
 
- name: Asigna un identificador al dato que se enviará al servidor.
  
- placeholder: Texto que aparece como sugerencia dentro del campo.
  
- required: Indica que este campo debe completarse antes de enviar el formulario.
  
- label: Proporciona una descripción para un campo.
  
- for: Asocia la etiqueta al campo correspondiente mediante el atributo id del campo.
  
- button:
    type="submit": Hace que al hacer clic se envíe el formulario al servidor.
  
- fieldset: Agrupa elementos relacionados dentro de un formulario.

- legend: Proporciona un título al grupo.

- required: Campo obligatorio.
  
- min, max, minlength, maxlength: Restricciones de longitud o valores.
  
- pattern: Expresión regular para validar formatos

    -**CSS**:
  
  ![image](https://github.com/user-attachments/assets/ec174c8e-853b-4184-9349-4cf3a98ac589)
  
  ![image](https://github.com/user-attachments/assets/9205282a-bf8a-4ebb-9eb7-7bfbb9d90757)

-background: #003366;
Establece un color de fondo azul oscuro (#003366) para el elemento aside

-color: white;
Cambia el color del texto dentro del aside a blanco, para que contraste con el fondo.

-padding: 10px;
Añade un espacio interno de 10px entre el contenido y los bordes del aside

-border-radius: 8px;
Redondea las esquinas del borde con un radio de 8px, haciendo que el diseño sea más amigable.

-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
Añade una sombra sutil debajo del aside para darle un efecto de profundidad.

-margin: 20px auto;
Establece un margen de 20px hacia fuera en la parte superior e inferior.

-auto centra el elemento horizontalmente si es posible.

-width: 90%; y max-width: 200px;

-width: 90%;: El ancho ocupa el 90% del contenedor padre.

-max-width: 200px;: Restringe el ancho máximo a 200px para evitar que crezca demasiado.

-text-align: left;
Alinea el texto al margen izquierdo.

-position: fixed;
Fija el elemento aside en una posición específica de la pantalla, incluso al hacer scroll.

-bottom: 0; y left: 87%;
Posiciona el aside cerca del borde inferior de la pantalla (a 0px).
Lo coloca hacia el lado derecho, al 87% del ancho de la pantalla.

-transform: translateX(-50%);
Ajusta la posición horizontal desplazándolo la mitad de su ancho hacia la izquierda, para centrarlo en relación con left: 87%;.

**Formulario Calendario**

-**HTML**:

  ![image](https://github.com/user-attachments/assets/659927ab-6bd5-48ad-b3fc-e33f98688595)

-form: Es el contenedor principal del formulario.

-onsubmit="event.preventDefault(); alert('Formulario enviado');":

-onsubmit: Evento que se activa al enviar el formulario.

-event.preventDefault(): Previene la acción predeterminada del formulario (no se envía a un servidor). Esto se usa comúnmente para manejar el envío mediante JavaScript.

-alert('Formulario enviado');: Muestra un mensaje emergente ("Formulario enviado") cuando el formulario se envía

-label: Proporciona una descripción accesible para el campo de entrada.

-for="nombre": Vincula esta etiqueta al campo con el atributo id="nombre".

-br: Inserta un salto de línea después de la etiqueta para que el campo de entrada aparezca en la siguiente línea.

-input: Campo de entrada para texto.

-type="text": Indica que se espera texto.

-id="nombre": Identificador único para este campo, utilizado para etiquetas y scripts.

-name="nombre": Nombre del campo que se usará para identificar los datos en el servidor.

-required: Hace que este campo sea obligatorio.

-type="email": Específico para direcciones de correo electrónico. Los navegadores validan automáticamente el formato del correo.

-id="correo" y name="correo": Usados para identificar este campo.

-textarea: Campo para introducir texto más largo.

-id="mensaje" y name="mensaje": Identifican este campo.

-rows="4": Especifica el número de filas visibles del área de texto.

-cols="50": Define el ancho visible en caracteres.

-required: Hace que este campo sea obligatorio.

-type="submit": Botón que envía el formulario.

-value="Enviar": Texto que aparece en el botón.

-type="reset": Botón que limpia todos los campos del formulario y los restablece a sus valores iniciales.

-value="Restablecer": Texto que aparece en el botón.

  -**CSS**:
  
![image](https://github.com/user-attachments/assets/af6f599d-a814-484c-90c3-7aca8427d365)

-background-color: white;
Establece un fondo blanco para el formulario, haciéndolo destacar sobre el fondo de la página.

-padding: 20px;
Añade un espacio interno de 20px entre el contenido del formulario y sus bordes.

-border-radius: 10px; 
Redondea las esquinas del formulario, dándole un aspecto más suave y amigable.

-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
Agrega una sombra alrededor del formulario, con un desenfoque de 10px. Esto le da un efecto de profundidad, haciendo que parezca elevado sobre la página.

-width: 85%;
Establece el ancho del formulario al 85% del ancho del contenedor padre.

-margin: 10px;
Añade un margen externo de 10px en todos los lados, separando el formulario de otros elementos cercanos.

-color: #003366;
Cambia el color del texto del formulario a un azul oscuro (#003366).

-font-weight: bold;
Hace que todo el texto del formulario sea negrita (bold), mejorando su legibilidad y haciendo que destaque más.

-text-align: center;
Centra horizontalmente el texto del título (h2) dentro del formulario, dándole un aspecto más equilibrado y profesional.

## Expresiones reguladas usadas para la validación

**Formulario Calendario**
-Campo Nombre (input type="text"):
El campo "Nombre" permite texto libre, pero no tiene restricciones explícitas en cuanto a formato, por lo que cualquier texto puede ser ingresado. Sin embargo, la validación requiere que este campo se complete antes de enviar el formulario gracias al atributo required.

-Campo Correo (input type="email"):
Aquí es donde se usa una expresión regular implícita. El atributo type="email" en el campo de correo electrónico lleva implícita una validación básica para verificar si el valor introducido es un correo electrónico válido. Esto se realiza mediante una expresión regular interna del navegador que comprueba que el formato del texto sea algo como ejemplo@dominio.com.
La validación del correo electrónico suele aceptar:
Al menos un carácter antes del símbolo @.
Un dominio después del @ con al menos un punto.
Ejemplo válido: nombre@dominio.com.
Campo Mensaje (textarea):

El campo Mensaje es solo un área de texto que no tiene ninguna validación específica en cuanto al formato del texto ingresado, pero también tiene el atributo required, lo que asegura que el campo no quede vacío.

**Formulario Tienda**
-Campo Nombre (input type="text"):
Validación: El campo de nombre es de tipo text, lo que significa que no hay una restricción explícita sobre qué tipo de caracteres se pueden introducir. Sin embargo, el atributo required asegura que el campo no pueda enviarse vacío. Si el usuario no llena el campo, el formulario no se enviará y el navegador mostrará una advertencia.

-Campo Correo Electrónico (input type="email"):
Validación: El atributo type="email" activa una validación implícita del correo electrónico, que se realiza mediante una expresión regular interna en el navegador. Esta validación verifica que el formato del correo sea adecuado, es decir, que contenga al menos un @ y un dominio válido.

-Campo Preferencias de Descuentos y Promociones (input type="checkbox"):
Validación: Los campos de casillas de verificación (checkbox) no requieren validación explícita por parte del navegador. Sin embargo, como están dentro de un formulario, se pueden manejar con lógica de JavaScript si se desea hacer una validación adicional (por ejemplo, para asegurarse de que el usuario seleccione al menos una preferencia).

-Campo Frecuencia de Envío (select):
Validación: El campo select no tiene validación basada en expresiones regulares, pero ofrece opciones predefinidas. La validación básica se asegura de que se haya seleccionado una opción antes de enviar el formulario, ya que este campo está incluido en el formulario, pero no tiene el atributo required ni una validación más compleja.
Expresión Regular Implícita: En este caso, no se utiliza ninguna expresión regular, ya que la validación está asociada con el hecho de que el formulario no se enviará sin seleccionar una opción.

## Formularios
En este apartado mostraremos como se verian nuestros distintos formularios dependiendo de la resolución.

- **Formulario para la compra de entradas**

Visualizacion en ordenador:
![image](https://github.com/user-attachments/assets/3d0c501c-f9f3-4dab-8f66-0ca7f5e70d34)

Visualizacion en el movil:
![image](https://github.com/user-attachments/assets/27d308e9-2792-44fd-8159-7d76d9f04ecb)

- **Formulario para la subscripcion al equipo**

Visualizacion en ordenador:
![image](https://github.com/user-attachments/assets/da6bca56-263d-4b77-b1f4-d30450ca3f58)

Visualizacion en el movil:
![image](https://github.com/user-attachments/assets/c13a36b4-55b7-4610-ae95-67e8c3400f14)

## Tecnologías Utilizadas

- HTML
- CSS
- MD

## Agradecimientos

Agradecemos a todos los miembros del equipo por su dedicación y esfuerzo en la realización de este proyecto.
