![Tutorial de promesas en Javascript Imagen 1](https://raw.githubusercontent.com/sergiecode/secuencialidad-tutorial-js/master/secuencialidad.png)

# Tutorial de Secuencialidad en JavaScript usando Promesas y Async/Await

En este tutorial, aprenderás cómo trabajar con promesas y async/await en JavaScript para hacer que tu código asíncrono se ejecute de manera secuencial.

## Introducción

Cuando trabajamos con código asíncrono en JavaScript, a menudo encontramos el problema de que las operaciones se ejecutan de manera simultánea y no sabemos en qué orden se completarán. La secuencialidad es importante en muchos casos, especialmente cuando queremos asegurarnos de que una operación se complete antes de realizar otra.

## Promesas

Las promesas son una forma de manejar operaciones asíncronas en JavaScript. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca. Puedes usar una promesa para encadenar operaciones asíncronas y asegurarte de que se ejecuten en orden.

Aquí hay un ejemplo de cómo crear una promesa:

    const myPromise = new Promise((resolve, reject) => {
      // Hacer alguna tarea asíncrona
      if (/* la tarea fue exitosa */) {
        resolve('Valor devuelto por la promesa');
      } else {
        reject('Ocurrió un error');
      }
    });

Para encadenar promesas, puedes usar el método `.then()`:

    myPromise
      .then((result) => {
        // Hacer algo con el resultado
        return anotherPromise;
      })
      .then((result) => {
        // Hacer algo con el resultado
      })
      .catch((error) => {
        // Manejar errores
      });

## Async/Await

Async/Await es una forma de trabajar con promesas de manera más legible y concisa. Async/Await te permite escribir código asíncrono como si fuera síncrono.

Para usar Async/Await, simplemente agrega la palabra clave `async` antes de una función, y usa la palabra clave `await` dentro de la función para esperar a que una promesa se resuelva antes de continuar.

Aquí hay un ejemplo de cómo usar Async/Await:

    async function myFunction() {
      const result1 = await myPromise1;
      const result2 = await myPromise2;
      // Hacer algo con los resultados
    }

## Ejemplo práctico

Aquí hay un ejemplo práctico de cómo usar Promesas y Async/Await para ejecutar operaciones asíncronas en orden secuencial:

    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    async function myFunction() {
      await wait(1000);
      console.log('Paso 1 completado');
      await wait(2000);
      console.log('Paso 2 completado');
      await wait(3000);
      console.log('Paso 3 completado');
    }
    
    myFunction();

En este ejemplo, la función `wait()` devuelve una promesa que se resuelve después de una cantidad de tiempo determinada. La función `myFunction()` usa Async/Await para esperar a que cada operación asíncrona se complete antes de continuar con la siguiente.

## Conclusión

Las promesas y Async/Await son herramientas poderosas para trabajar con código asíncrono en JavaScript. Al utilizarlas, podemos asegurarnos de que nuestras operaciones asíncronas se ejecuten en orden secuencial y podemos evitar problemas de sincronización.

En este tutorial, hemos visto cómo trabajar con promesas y Async/Await en JavaScript. Hemos visto cómo crear promesas, encadenarlas y cómo usar Async/Await para escribir código asíncrono de manera más legible y concisa. También hemos visto un ejemplo práctico de cómo usar estas herramientas para ejecutar operaciones asíncronas en orden secuencial.
