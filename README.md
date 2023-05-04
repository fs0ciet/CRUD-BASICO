# CRUD BASICO

_El proyecto tratá de un CRUD Básico realizado con módulos Express, File System y Axios_
_Con este proyecto se pueden agregar, modificar y buscar usuarios en una base de datos_

## Comenzando 

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

```
$ git clone https://github.com/fs0ciet/CRUD-BASICO.git

```

### Pre-requisitos 

_Cosas que tenes que instalar antes de comenzar a probar la aplicación_

```
Node.JS 20.1.0 (Actual versión)
Postman

```

### Instalación 

_Aca te voy a dejar una serie de pasos sobre como instalar lo que necesitas para probar la aplicación_

_Instalación de Node_

```
Ingresas a la página oficial de Node.JS: 'https://nodejs.org/es'.
Descargas la última versión (Actualmente 20.1.0).
Finalmente ejecutas el instalador.
```

_Instalación de Postman_

```
Ingresas a la página oficial de Postman para descargarlo: 'https://www.postman.com/downloads/'.
Descargas el instalador.
Lo ejecutas, y una vez instalado, aparecera un icono de Postman en el escritorio.
(Más adelante te enseño como usarlo)
```

## Instalando Express 

_Para el correcto funcionamiento de la aplicación, necesitamos del Express, para instalarlo, haremos lo siguiente_

```
1° Abriremos una terminal en Visual Studio Code (CTRL+SHIFT+Ñ).
2° Pondremos 'npm install express --save'.
3° Listo, ya tendremos instalado Express, y los modulos de Node.
```

## Instalación de AXIOS

_Al igual que el Express, es necesario para el correcto funcionamiento_

```
$ npm install axios
```

## Probando la aplicación

_Lo primero que haremos sera empezar a correr el servidor en el puerto 3000, para lograr esto pondremos lo siguiente en la consola de Visual_

```
$ npx nodemon index.mjs
```
_Una vez hagamos esto, bastara con guardar cambios(CTRL+S) para que el servidor comience a correr automaticamente_
_Cuando veamos el mensaje por consola que diga_

```
!Mi aplicación esta corriendo correctamente en el puerto 3000¡
```
_Iremos a Postman que descargamos anteriormente, nos registraremos, y una vez ya hayamos iniciado sesión, haremos lo siguiente_

```
1° Iremos a la pestaña 'Workspaces'.
2° Crearemos uno nuevo con el boton 'Create Workspace'.
3° Le daremos un nombre y marcaremos la opción 'Personal'.
4° Abriremos una nueva pestaña con el simbolo de '+' y ya estamos listos para empezar a usar la aplicación.
```

## Para crear un usuario

_Seleccionaremos el metodo 'POST' y pondremos la siguiente URL 'http://localhost:3000/create' y apretamos el boton que dice 'SEND'.
Una vez hecho esto, debajo de donde pusimos la URL, iremos a la pestaña 'Body', selecionaremos la opción 'raw', y donde dice 'text', lo cambiaremos por 'JSON' y ya podremos cargar usuarios en el recuadro de abajo, para hacerlo basta con poner las siguientes lineas_

```
{
    "nombre": "Fulano",
    "apellido": "Detal",
    "edad": 20
}
```
_Apretamos nuevamente el botón 'SEND' y ya tendriamos cargado en nuestra base de datos, un nuevo usuario_

## Para actualizar un usuario

_Seleccionaremos el metodo 'PUT' y pondremos la siguiente URL 'http://localhost:3000/update' y apretamos el boton que dice 'SEND'.
Una vez hecho esto, debajo de donde pusimos la URL, iremos a la pestaña 'Body', selecionaremos la opción 'raw', y donde dice 'text', lo cambiaremos por 'JSON' y ya podremos modificar usuarios en el recuadro de abajo, para hacerlo basta con poner las siguientes lineas_

```
{
    "id": 1,
    "nombre": "Homero",
    "apellido": "Simpson",
    "edad": 40
}
```

## Autores 

* **Lautaro González**
* **Máximo Álvarez**

