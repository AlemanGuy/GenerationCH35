/* comentarios de una sola linea

/* comentarios multilinea*/

//alert ("Hola Mundo");

//console.log("Este es un mensaje para la consola")


//var nombre = prompt("Ingresa tu nombre");
//alert("Hola,"  + nombre +  " Bienvenido a la CH35");

//var numero1 = parseInt (prompt("Ingresa el primer numero:"));
//var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

//console.log("suma:" + (numero1 + numero2));
//console.log("resta:" + (numero1 - numero2));
//console.log("multiplicación:" + (numero1 * numero2));
//console.log("division:" + (numero1 / numero2));




// Función que muestra un mensaje de alerta según la edad proporcionada
//var edad;
//var res = "s";



/* while(res==="s"){

   edad = parseInt(prompt("Dame tu edad"));

   if (0 <= edad && edad < 18) {
       alert("Eres un niñ@.");
  } else if (19 <= edad && edad < 30) {
     alert("Estas chav@.");
  } else if (31 <= edad && edad < 39) {
       alert("Chavorruc@ detectad@.");
   } else if (40 <= edad && edad < 64) {
      alert("EL FUTURO ES HOY ANCIAN@");
   } else if (edad >= 65) {
       alert("que haces aqui? ya vayase a dormir ancian@.");
     } else {
     alert("Edad no válida.");
    }       res=prompt("a que vienes de nuevo")    
  }

*/


// Tipos de datos y variable//

// scope es el alcance de nuestras variables

/* var, let, const la diferencia es el alcance

var tiene un alcance global
let tiene un alcance local
const se mantine sin ningun cambio */

/* string: cadena de texto (lleva comillas "" )
number: numero
noolena: true/false
null: nulo
undefined: no esta asignado o definido */

/*Todas nuestras variables deben de ser declaradas con 
nombres especificos y claros, sin espacios, no deben de
 iniciar con numeros*/

 /*
let nombre = "Daniel";
let invitadosExtra = 2;
let esMayorEdad = true;
let edad = 24;
let invitadoEspecial = null;
let horaDeSalida = undefined;

document.write(nombre); */

/*    Encasillamiento o tipado 
nos es util para el mantenimiento del codgio, ya que lo 
hace facil de leer y entender, de esta forma se vuelve
preventivo de errores y para reducir la probabilidad de 
los mismos*/

/*

let numero = 15;
let texto = "hola";

// con encasillamiento

let numeroEncasillado = Number(5);
let textoEncasillado = String("hola"); */

//typeof palabra reserveda para saber que tipo de datos tenemos 

/*
console.log(typeof(nombre));

let funcionNimber = console.log (typeof Number(nombre));
metodoParseint = console.log(typeof parseInt (nombre));
metodoParsefloat = console.log(typeof parseFloat (nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas
de texto en numeros, ambas nos ayudan en este cambio*/

/*conversion de number a string

console.log (typeof String(edad));
console.log (typeof edad.toString()); 

let numero = Number (esMayorEdad);

console.log (typeof(numero)); 

let texto = String(esMayorEdad);

console.log(typeof(texto));

let negacion = !esMayorEdad;

console.log (negacion);


let saludo = "Hola Humano";
let frase = "El futuo es hoy";

texto= saludo + frase;

console.log(texto);

document.write 



let ingrediente1 = "1 taza de harina";
let ingrediente2 = "1 taza de leche";
let ingrediente3 = "1 huevos";
let ingrediente4 = "2 cucharaditas de mantequilla";
let ingrediente5 = "polvo Para Hornear";
let ingrediente6 = "vainilla";
let ingrediente7 = "nutella";
let saltoLinea = "<br>";

document.write("Receta para hot cakes 12 personas" + saltoLinea);

document.write("Ingredientes: " + saltoLinea);

document.write(ingrediente1 + saltoLinea + ingrediente2 + saltoLinea + ingrediente3 + saltoLinea + ingrediente4 + saltoLinea + ingrediente5 + saltoLinea + ingrediente6 + saltoLinea)



// tipos de datos

>string (cadenas de texto)
>number (numericos)
>Booleans (Booleanos : true or false)
>Null (nulos)
>Undefined (indefinidos)
>Objects (objetos)
>Objects (arrays) 

console.log(); Nos permite visualizar en consola del navejador el codigo de JS
console.warn(); Muesta un mensaje de advertencia
console.error(); Muestra un mensaje de erro
console.table();
*/

let firstName;
firstName = "Daniel";
let lastName = "Maldonado";

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + "y mi apellido es" + lastName);

/* ECMAScript 6  (ES6). Interpolacion de cadenas
> backticks 
> para variables las incvocamos ${variable}
> texto para string
*/
let age = 37;
console.log(`Mi nombre es ${firstName}, mi apellido es ${lastName} y tengo ${age} años.`); 

//console.warn();

console.warn(`Precaución, no es buena practica dejar sin punto y coma`);

//console.error

console.error(`Status 404: Failed`);

/* 
-Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
-Los arrays se pueden manipular mediante métodos específicos.
-Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
-Un array posse n cantidad de elementos.
-Se declaran como varibales, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/

let arreglo1 = []; //Array vacio.
console.log(`Arreglo vacio ${arreglo1}`);
// Los elementos de un array se separan mediante comas.
let cars = ["Volkswagen", "BMW", "Mazda", "KIA", "Nissan", "Chevrolet"]; //Array de String.
console.log(cars);
//Longitud e indice son difenentes. La longitud (length) es el número de elementos y el indice corresponde a cada elemento a partir del 0.

console.log(typeof(cars));//Output: object

//Array de Numbers
let salariosMxn = [15000, 12000, 18000, 25000, 28000, 10000, 10500, 10200, 20500, 25300, 17000, 11200];
console.log(salariosMxn,length); //Ouput: 12
console.log(salariosMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
   firstName: "Rey david",
   lastName: "Martinez",
   age: 29,
   country: "México"
}

console.log(employee);

//Mostrando mi array como tabla
console.table(cars);
//Mostrando mi objeto como tabla
console.table(employee);