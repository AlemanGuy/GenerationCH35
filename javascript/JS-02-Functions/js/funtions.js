/* 
Funciones: son bloque de codigo con instrucciones que se puede reutilizar
las veces que sean necesarias.

Algunas funciones reciben parametros y otros no reciben parametros

*/

//Function que permite saludar
function saludar(){
    console.log(`Hola desde funcion`);
}

//Ejecutar la funcion con el nombre de la funcion y parametros

saludar();

//Funciones que retornan algo


//Hoisting. Caracteristicas de una funcion que nos permite invocarla desde antes de su inicializacion, es decir, que se puede invocar desde antes del bloque de codigo o despues.


function saludar(){
    console.log("Hola incocando la funcion con hoisting");
}

saludar();

//Funciones que retornan algo. Para que una funcion retorne algo (un String, una operacion, una variable, etc.) Necesitamos incdicarle al codigo que la funcion que vamos a retornar mediante la palabra return

function greeting(){
    return"Hola desde una funcion que retorna";
}
console.log(greeting());

//funcion que retorna y recibe parametros

function sumar (x,y){
    return x + y;
}
let resultado = sumar (255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcular el caudrado de un numero
function calcCubo(numero){
    return numero + numero;
}

let resultadoCuadrado = calcCubo(5);
console.log(resultadoCuadrado);

//Funciones flecha (Arrow Function). Es una manera de declarar una funcion por declaracion, sintetizando el codigo y haciendo mas legible.
// funcion flecha pare calcular el cubo de un numero.

const calcCubo = (number) => {
    return number + number + number;
}
let resultadoCubo = calcCubo(3);
console.log(resultadoCubo);

//Funciones anonimas. Son un tipo de funcion que se declara sin nombre defuncion y se alojan en  el interior de una varibale. Se hace referencia de ellas cada vez que la utilicemos. 
// las funciones anonimas no permiten el hoisting (no se pueden invocar antes de inicializar)
const mensaje = function(){
    return "Este es un mensaje desde una funcion anónima";
}
console.log(mensaje());

//Callbacks. Es para una funcion B por parametro a una funcion A, de modo que la funcion A puede ejecutar esa funcion de forma generica desde su codigo.                            

//Funcion B
const funtionB = function () {
    console.log("Ejecuntando funcion B")
}

//Funcion A
const functionA = function (callback){
    callback();
}
functionA(funtionB);
