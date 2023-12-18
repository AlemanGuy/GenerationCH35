/* Arrays
Es una coleccion o agrupacion de elementos en una misma variable
cada uno de ellos ubicado por la posicion que ocupa el array.

Los arrays se utilizan para almacenar y organizar datos de manera
mas eficiente.
*/

//  Crear un Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// Array de cadena de texto
const comida = ["tacos", "sopa", "pan", "soda"];
console.log(comida);

// Array mixto
const mixto = [
    "Pluma",
    8,
    true,
    {nombre:"mar"}
];
console.log(mixto);

// Array vacio
const lista = [];
console.log(lista);
// Agregar elementos a mi Array vacio
lista[0]= "Leche";
lista[1]= "Carne de pollo";
lista[2]= "Espinaca";
lista[3]= "Huevo";
console.log(lista);

// Otra manera de crear arrays
const frutas = new Array("Manza", "Naranja", "Peras", "Mandarinas", "Uvas");
/*
    La sintaxis se puede emplear en Arrays por que son objects, es una manera de
    mandar a llamar un nuevo objeto de tipo Array. 
*/
console.log(frutas);

// Longitud de un Array
console.log(frutas.length);

// Acceder los elemento de un Array, acorde a su indice
console.log(frutas[3]);// Mandarinas
console.log(frutas[2]);// Peras
console.log(frutas[0]);// Manzanas
console.log(frutas[5]);// Undefined
console.log(frutas[1]);// Naranja
console.log(frutas[4]);// Uvas

// Modificar un elemento de un array por el indice
const cremeria = ["Jamon", "Salchicha", "Queso Oaxaca", "Queso fresco", "Yogurt" + frutas.length];
console.log(cremeria);
cremeria[2] = "Quesillo"
console.log(cremeria);
cremeria[3] = "Danonino Jumbo"; 
console.log(cremeria);

//Arreglo de arreglos o  multidimencional
console.log("Arreglo de arreglos");

// Estados: Estado de México, Jalisco, Yucatan, Sonora, Oaxaca, CDMX.

//Platillos: GuajaLocombo, Torta Ahogada, Panuchos, Dogos, Tlayudas, Tacos.

const estados = ["México", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["GuajaLocombo", "Torta Ahogada", "Panuchos", "Dogos", "Tlayudas", "Tacos ¿?"];
const menu = [estados, platillos];
console.log(menu [0], [2]);
/*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.*/
console.log(`En ${menu[0][1]} también se come ${menu[1][2]}`);

/* 
    Metodos de Arrays
    Metodos de cola (queue), Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio.
    Este sigue el principio de FIFO (First-In-First-Out). Lo que significa el primer elemento añadido es el primer elemento eliminado.
    Push
    Shift
    Unshift
    
    Los metodos de pila (stack), Los metodos de pila implican agregar elementos al final del array y eleiminar elementos del final del array. 
    Sigue el principio de LIFO (last-In-First-Out) Que significa el ultimo elemento añadido es el primero en ser eliminado.
    Push
    Pop
*/

console.log("Metodos de Arrays");
const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//pop() Eliminar el ultimo elemento del array
let popch35 = ch35.pop();
console.log(popch35);
console.log(ch35);
// Push () Agregar al final del array
let pushch35 = ch35.push("Mony");
console.log(ch35);
// Shift() quitaar primero del array
let shiftch35 = ch35.shift();
console.log(ch35);
//Unshift agregar al principio del array
let unshiftch35 = ch35.unshift("Dany");
console.log(ch35);
// Reverse () Este cambia el sentido del ordenamiento del array
let reversech35 = ch35.reverse();
console.log(ch35);
// Sort () Este ord
let sortch35 = ch35.sort();
console.log(ch35);
//Foreach()
let foreachch35 = ch35.foreach();
console.log(ch35);
//Slice
let slicech35 = ch35.slice();
console.log(ch35);
//splice ()
let splicech35 = ch35.splice();
console.log(ch35);
//IndexOf()
let indexOfch35 = ch35.indexOf();
console.log(ch35);
