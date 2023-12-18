/*
Operador 
Es un signo que especifica que debe efectuar una determinada operacion

Operadores aritmeticos (+,-,*,/,%,++,--)
Operadores de asignacion (=)
Operadores logicos (&&,||,!)
Operadores de comparacion (==, ===, !==, <, >, <=, >=,)
Operador de cadena (tolowerCase, toUpperCase, trim, toLower, toUpper, toString, contact, +)
*/

/*
    Operadores aritmeticos
    (+)Suma, se utiliza para sumar dos numeros.
    (-)Resta, se utiliza para restar un numero de otro.
    (*)Multipilicacion, Se utiliza para multiplicar dos numeros.
    (/)Division, Se utiliza para dividir un numero entre otro.
    (%)Residuo, Se utiliza para obtener el resto de una division.
    (++)Incremento, Se utiliza para aumentar de uno en uno la cantidad o el numero.
    (--)Decremento, Se utiliza para disminuir de uno en uno la cantidad o el numero.
*/

let numero = 10;
let numero2 = 8;

suma = numero + numero2;
console.log(`La suma es ${suma}`);

resta = numero - numero2;
console.log(`La resta es ${resta}`);

multiplicacion = numero * numero2;
console.log(`La multiplicacion es ${multiplicacion}`);

division = numero / numero2;
console.log(`La division ${division}`);

residuo = numero % numero2;
console.log(`El residuo es ${residuo}`);

incremento = ++numero;
console.log(`El incremento ${incremento}`);

decremento = --numero;
console.log(`El decremento ${decremento}`);

let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento) / 100;
let precioCondDescuento = precioReal - cantidadDescuento;

console.log("Precio real $" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento $" + cantidadDescuento);
console.log("Precio con descuento $" + precioCondDescuento); //

/* Operadores de asignacion
    =: Este operador no compara, lo que hace es asignar un valor
*/

let frutas = "manzana";
console.log(frutas);

/* 
    Operadores de comparacion
    (==): Igualdad compara si nuestro valores son iguales
    (===): Igualdad Estricta compara si los valores son iguales y el tipo de dato
    (!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversion
    (!==) Desigual estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos 
    valores deben de tener el mimo tipo y valor
    (>) Mayor que indica si un valor es mayor que otro
    (<): Menor que indica si un valor es menor que otro
    (<=) Mayor o igual que nos dice si un valor es mayor o igual a otro
    (>=) Menor o igual que nos dice si un valor es menor o igual a otro
*/ 

let numero3 = 10 ; 
let texto = "10" ;
console.log( numero3 == texto);
console.log( numero3 === texto);

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo) {
    console.log("El precio del producto no es igual al precio maximo")
} else {
    console.log("El precio del producto es igual al precio maximo permitido")
}

let numero4 = 10;
let numero5 = "15";

if (numero4 !== numero5) {
    console.log("No son iguales")
} else {
    console.log("Son iguales")
}

let scoreFinal = 85;
let scoreRequerido = 102;
console.log(scoreFinal > scoreRequerido);

let años = 20;
let edadLimite = 30;
console.log(años < edadLimite);

let edad = 18;
let edadNecesaria = 18;
console.log(edad >= edadNecesaria);

let temperatura = 14;
let temperaturaMaxima = 21;
console.log(temperatura <= temperaturaMaxima);

/* ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si 
esos números son iguales o ay alguno que sea mayor que otro */

let numero6 = parseFloat (prompt ("Ingresa el primer número:"));
let numero7 = parseFloat (prompt ("Ingresa el segundo número:"));

if (numero6 === numero7) {
    console.log("Los números ingresados son iguales.");
} else if (numero6 > numero7) {
    console.log(`El primer número (${numero6}) es mayor que el segundo número (${numero7}).`);
} else {
    console.log(`El segundo número (${numero7}) es mayor que el primer número (${numero6}).`);
}


/* ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no */

let primeraPalabra = prompt("Ingresa la primera palabra");
let segundaPalabra = prompt("Ingresa la segunda palabra");

primeraPalabra = primeraPalabra.toLowerCase();
segundaPalabra = segundaPalabra.toLowerCase();

if (primeraPalabra === segundaPalabra) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

// Operadores logicos
/*
    (&&) AND se utilizan cuando las dos condiciones deben de cumplirse
    (||) OR se utiliza cuando se debe de cumplir una condicion u otra 
    (!) NOT se utiliza para negar el valor de una condicoon 
*/

let mayoriaDeEdad = 18;
let tieneIdentificacion = true;

if (mayoriaDeEdad >= 18 && tieneIdentificacion){
    console.log("Puedes rentar el salorn");
}   else {
    console.log("No puedes rentar el salorn");
}

let userPrime = false;
let descuento = true;

if (userPrime || descuento) {
    console.log("Califica para descuento");
} else{
    console.log("No califica para descuento");
}

let diaLibre = false;

if (!diaLibre){
    console.log("Se trabaja :C");
} else {
    console.log("Libertad C:");
}

//Operadores de cadena
/*
    toLowerCase: transforma todo el string en minusculas
    toUpperCase: transforma todo el string en mayusculas
    trim: elimina los espacios en blanco al principio y al final
    toString: convierte un tipo de dato number en string
    concat:  concatena strings
    
*/ 

let mensajeUsuario = "Bienvenidos a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);

let saludo = "casi viernes";
let cambioMayusculas = saludo.toUppercase();
console.log(cambioMayusculas);

let aviso = "                 CH35    JavaFullstack           ";
let sinEspacios = aviso.trim();
console.log(sinEspacios);

let numero8 = 31;
let cadenas = numero8.toString( );
console.log(cadenas);

let nombre = "Fernanda";
let apellido = "Ramos";
let nombreCompleto = nombre.concat(" " , apellido );
console.log(nombreCompleto);

/*
    Expresiones
    
    expresion aritmetica
    let operacion = 14 + 25 * 12; combina la suma con la muiltiplicacion
    console.log(operacion);

    expresion de cadena
    let notifiacion = "Casi," + "Año nuevo"; expresion concatenando
    console.log(notifiacion);

    expresion logica
    let mayorEdad = (21 > 18) && (23 < 65); tiene operador logicos y de comparacion
    console.log(mayorEdad);

    expresion de asignacion
    let frasco = chocolates; asigna el valor de chocolates
    console.log(frasco);

    
*/



