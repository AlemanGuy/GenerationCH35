console.log("Hola CH35");

/* 
control de flujo y estructuras de control:
 
las estructuras de control son un componente fundamental dentro de la programacion, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencioanr las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

*/
 /* Declarar de sentencia if-else:
    
    Palabra reservada if, para comenzar la declaracion, se coloca con parentesis () donde se debe colocar la expresion logica (true false) se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condicion se cumple (true).
    
    despues de la llave {} declarada para el bloque de ejecucion if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un ().
    
    siemplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicion no se cumpla(false).
 

    let n = 15;
    if (n > 10){
        console.log(true);
    }else{
        console.log(false);
    }

    /* 
 *   if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa:      * "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo   * operador que usamos para sumar números, pero en este contexto hace algo   * diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
    

    //If anidados
    let edad=28;
    if (edad < 18){
        console.log("Eeres menos de edad, retirate");
    }else if(edad >= 18 && edad < 65){
        console.log("aun agantas chavo");
    }else{
        console.log("ya vas a la tumba")
    }

    /*
    Sugerencia switch
    La setencia switch es otro tipo de estructura de control de flujo, que nuevamente se encuentra en diversos lenguajes de programacion.
    
    Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion(particion de caminos), sino que se secciona multiples casos (case) que, dependiendo de la expresion que cumpla con un caso especifico, sera la secuencia que se va a ejecutar, dentro de la declaracion.

    Declaracion:
    Se empeiza por colocar la plabra reservada switch, seguido de esto, colocamos () donde se debe colocar el valor que va indicar que sentencia/caso a ejcutar.
    Falta indicar el bloque de codigo que se limta a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
    Dentro de ese bloque de codigo, falta colocar las cosas para cada valor que se desee, establecer segun sea el valor indicado dentro del ().
    Cada uno de estos casos se separa de la siguiente manera:
    case valor: instruccion a ejecutar si el valor empata con este caso.
    Despues para indicar que la ejecucion de las sentencias debe cortarse cuando se cumple, se coloca la instruccion break.
    cuando terminamos de establecer las cosas que necesitamos declarar, dentro de nuestra sentecia, debemos colocar un valor por defecto, default.
    este ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
    default: mensaje no disponible.
    

    let dia = "martes";
    switch(dia){
        case"lunes":
        console.log ("Odio los lunes");
        break;
        
        case"martes":
        console.log("quien avienta cuentes los martes?");
        break;

        case"miercoles":
        console.log("Toca presentar proyecto :C");
        break;
        
        case"jueves":
        console.log("Juebebes casi viernes");
        break;

        case"viernes":
        console.log("Viernes pero a que costo");
        break;

        case"sabado":
        console.log("Sabadrinks");
        break;

        case"domingo":
        console.log("Domingo de tirar huevita");
        break;
        default:
            console.log("este dia no existe");
            break;
    }
// Termina el switch

/*
    Operador ternario
    Expresion condicional if-else mas simple y legible
    Pricipalmente se usa para simplicar condisiones de una sola expresion.
    tambien puede anidar sentencias if-else-if, sin embaro , no es recomendado por que el codigo se puede volver confuso y poco legible.
    Su declaracion es la siguiente:
    Palabra reservada var, let o const:
    se le asigna un nombre como si se tratara de una variable,
    operador de asignacion "#", seguido de este operadorm hay que colocar una expresion logica, esta va dentro de un parentesis(), despues hay que colocar un caracter ? que indica el camino a seguir, depndiendo de si, se cumple (o no) la expresion.
    Para separar el resultado true de falsedebemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
    Si se cumple la condicion. del lado derecho se coloca la sentencia a ejecutar.

    // ejemplo de operador ternario
    
    let verificacion = n > 5 ? "Si es mayor" : "No es mayor"
    console.log(verificacion);

    /*
    Cuando usar if-else y cuando usar el switch?

    if-else: cuando necesitemos tomar decisiones bajo condiciones mas flexibles.
    switch: cuando tengamos un conjuto fijo de valores para comparar con una expresion.
    */


    // Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
    let años = prompt ("Ingresa tu edad para ver si puedes votar");
    function votar(años){
        if (años < 18){
    console.log("Tu no puedes mi chav@");
        }else if(años >= 18){
    console.log("TU si puedes Votar");
        }else{
    console.log("eh loco con numero")
        }
    }
    votar(años);
    

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
    function esDivisible(numero) {
    if (numero % 7 === 0 && numero % 8 === 0) {
        console.log("Verdadero");
            } else {
            console.log("Falso");
            }
    }
        esDivisible(56);
        esDivisible(7);
        esDivisible(8);
        esDivisible(0);
        esDivisible(224);
        esDivisible(73);

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
    let numero2 = prompt ("Ingresar Numero para dividir entre 4 y 9");
    function Divisible(numero2) {
        if (numero2 % 4 === 0 || numero2 % 9 === 0) {
            console.log("Verdadero");
        } else {
            console.log("Falso");
        }
    }

    Divisible(numero2);


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */ 
    let categoria = prompt ("Que genero de pelicula quieres ver ?");
    function recomendarPelicula(categoria) {
        switch (categoria) {
            case "accion":
                console.log("Recomendación de película de acción: 'Jhon Wick 4'");
                break;
            case "drama":
                console.log("Recomendación de película dramática: 'El Club de la Pelea'");
                break;
            case "comedia":
                console.log("Recomendación de película de comedia: 'Lego Movie'");
                break;
            case "romance":
                console.log("Recomendación de película romántica: 'Orgullo y Prejuicio'");
                break;
            case "suspenso":
                console.log("Recomendación de película de suspenso: 'Memento'");
                break;
            case "terror":
                console.log("Recomendación de película de terror: 'Hereditary'");
                break;
            case "Bio":
                console.log("Recomendación de película de biopic: 'Rocketman'");
                break;
            default:
                console.log("Categoría no reconocida. Introduce una categoría válida.");
        }
    }
    recomendarPelicula(categoria);



/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */ 
function operacionCajero(opcion) {
    if (opcion === 1) {
        console.log("Realizando retiro de dinero");
    } else if (opcion === 2) {
        console.log("Realizando transferencia");
    } else if (opcion === 3) {
        console.log("Realizando depósito");
    } else if (opcion === 4) {
        console.log("Realizando pago de servicios");
    } else {
        console.log("Opción no válida. Por favor, elige una opción del 1 al 4.");
    }
}


operacionCajero(1);  // Realizando retiro de dinero
operacionCajero(2);  // Realizando transferencia
operacionCajero(3);  // Realizando depósito
operacionCajero(4);  // Realizando pago de servicios
operacionCajero(5);  // Opción no válida. Por favor, elige una opción del 1 al 4.

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function Divisas(cantidad, opcion) {
    let resultado;

    switch (opcion) {
        case 1:
            resultado = cantidad / 20.30; // Tasa de cambio de pesos mexicanos a dólares estadounidenses
            console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} dólares estadounidenses.`);
            break;
        case 2:
            resultado = cantidad / 23.98; // Tasa de cambio de pesos mexicanos a euros
            console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} euros.`);
            break;
        case 3:
            resultado = cantidad / 0.19; // Tasa de cambio de pesos mexicanos a yenes japoneses
            console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} yenes japoneses.`);
            break;
        case 4:
            resultado = cantidad / 27.98; // Tasa de cambio de pesos mexicanos a libra esterlina
            console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} libras esterlinas.`);
            break;
        case 5:
            resultado = cantidad / 21.99; // Tasa de cambio de pesos mexicanos a franco suizo
            console.log(`${cantidad} pesos mexicanos equivalen a ${resultado.toFixed(2)} francos suizos.`);
            break;
        default:
            console.log("Opción no válida. Por favor, elige una opción del 1 al 5.");
    }
}

Divisas(1000, 1);  // Convertir 1000 pesos a dólares estadounidenses
Divisas(1500, 2);  // Convertir 1500 pesos a euros
Divisas(2000, 3);  // Convertir 2000 pesos a yenes japoneses
Divisas(2500, 4);  // Convertir 2500 pesos a libras esterlinas
Divisas(3000, 5);  // Convertir 3000 pesos a francos suizos
Divisas(4000, 6);  // Opción no válida