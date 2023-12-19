/*
*Ejercicios

*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
        // Temperaturas diarias en grados Celsius para una semana
        const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

        // Función para convertir Celsius a Fahrenheit
        function celsiusToFahrenheit(celsius) {
        return celsius * (9/5) + 32;
        }

        // Array para almacenar las temperaturas convertidas a Fahrenheit
        const temperaturasFahrenheit = [];

        // Bucle para convertir cada temperatura y almacenar los resultados
        for (let i = 0; i < temperaturasCelsius.length; i++) {
        const temperaturaFahrenheit = celsiusToFahrenheit(temperaturasCelsius[i]);
        temperaturasFahrenheit.push(temperaturaFahrenheit);
        }

        // Mostrar ambos arrays en la consola
        console.log("Temperaturas en grados Celsius:", temperaturasCelsius);
        console.log("Temperaturas en grados Fahrenheit:", temperaturasFahrenheit);

/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
        // Inicializar la variable de suma
        let suma = 0;

        // Bucle para sumar los primeros 10 números naturales
        for (let i = 1; i <= 10; i++) {
        suma += i;
        }

        // Imprimir el resultado en la consola
        console.log("La suma de los primeros 10 números naturales es:", suma);

/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/
       
        // Solicitar al usuario ingresar un número
        let numero = parseInt(prompt("Ingresa un número para verificar si es primo:"));

        // Función para verificar si un número es primo
        function esPrimo(num) {
        if (num <= 1) {
            return false; // Los números menores o iguales a 1 no son primos
        }

        // Verificar si hay algún divisor además de 1 y el propio número
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; // El número tiene un divisor distinto de 1 y él mismo
            }
        }

        return true; // El número es primo
}

        // Verificar si el número ingresado por el usuario es primo
        if (esPrimo(numero)) {
            console.log(`${numero} es un número primo.`);
        } else {
            console.log(`${numero} no es un número primo.`);
        }

/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

     // Función para generar los primeros n términos de la secuencia de Fibonacci
    function fibonacci(n) {
        let secuencia = [0, 1];

        for (let i = 2; i < n; i++) {
            let siguienteTermino = secuencia[i - 1] + secuencia[i - 2];
            secuencia.push(siguienteTermino);
        }

        return secuencia;
    }

    // Generar los primeros 10 términos de la secuencia de Fibonacci
    const primerosDiezTerminos = fibonacci(10);

    // Imprimir la secuencia en la consola
    console.log("Los primeros 10 términos de la secuencia de Fibonacci son:", primerosDiezTerminos);