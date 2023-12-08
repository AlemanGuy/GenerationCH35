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
var edad;
var res= "s";

function mostrarMensajeEdad(edad) {
    if (edad >= 0 && edad <= 17) {
        alert("Eres un niñ@.");
    } else if (edad >= 18 && edad <= 21) {
        alert("Estas chav@.");
    } else if (edad >= 21 && edad <= 39) {
        alert("Chavorruc@ detectad@.");
    } else if (edad >= 40 && edad <= 60) {
        alert("Checa lo de tu afore.");
    } else if (edad >= 65) {
        alert("que haces aqui? ya vayase a dormir ancian@.");
    } else {
        alert("Edad no válida.");
    }
}
do{

}while(res=="s");
