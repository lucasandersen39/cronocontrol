# TUDAI - UNICEN

## **SEMINARIO ANGULAR 2024. PROYECTO FINAL.**

## Datos del alumno: 
  - Apellido y nombre: Andersen, Lucas.
  - DNI: 31495389
  - email: lucas.andersen39@gmail.com
  - Sede: Quequén.
  - Link StackBlitz: https://stackblitz.com/~/github.com/lucasandersen39/cronocontrol

## cronocontrol

**cronocontrol** Es una aplicación online que te permite tener un registro detallado del tiempo trabajado en las diferentes cards de tus sistemas. 
Con **cronocontrol** tendrás la posibilidad de:
  - Agregar cards
  - Seleccionar una card para iniciar el contador diario
  - Detener el contador cuando desees terminar
  - Ver el detalle de las horas trabajadas

En el menú de la aplicación podemos encontrar las siguientes funcionalidades:

#### Home
En esta sección podremos encontrar nuestra lista de cards ingresadas en la aplicación con el detalle de las horas acumuladas que llevamos con cada tarjeta, los datos y el estado de dicha card. 
También disponemos en cada una de las card, de un botón **Seleccionar** que nos permite seleccionar la card para iniciar un contador de tiempo transcurrido en caso que queramos trabajar en dicha card. Al presionar en el botón se nos desplegará en la parte derecha de la pantalla una sección con los datos de la tarjeta y un reloj en el cual, presionando el botón play, daremos inicio al cronómetro. Cuando queramos finalizar, presionamos en botón de stop. 
Al iniciar el cronómetro podremos observar que nuestra card cambia el estado a "En curso" y nuestra lista de cards no nos permite seleccionar una card diferente. Esto es porque este sistema solo nos permite trabajar de a una card a la vez.
Al detener el cronómetro, se nos acumulará el tiempo que hemos trabajado en esta sesión al tiempo total que ya habíamos trabajado anteriormente.

#### Reportes
En esta sección podemos encontrar un listado detallado de las sesiones de trabajo que hemos realizado. Podremos ver un listado con fecha y hora del inicio de la sesión, fecha y hora de finalización, el tiempo que trabajamos y la card correspondiente.

#### Cards
Nos permite agregar nuevas cards a nuestra aplicación. En la izquierda de la pantalla veremos un formulario donde debemos ingresar un nombre, nombre del proyecto y, si lo deseamos, una descripción.
Esto nos generará una nueva card en estado pendiente y se agrega a nuestra lista de cards ya registradas.


# Conceptos aplicados
- Creación de proyecto angular
- Ruteo
- Componentes
- Servicios
- Inyección de dependencias
- Comunicación entre componentes mediante data binding y servicios
- Conexión a la api mediante Http con GET, POST y PUT
- Formularios
- Pipe personalizados

