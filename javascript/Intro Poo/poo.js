/*
Paradigmas de progrmacion
Imeprativa: Se basa en las instruciones detalladas ejecutando un flujo o una secuencia determinada

Programacion basada en eventos: Se basa en la gestion y respuesta de eventos 

Programacion declarativa: Explicar lo que queremos obtener

Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos)

*/

//Clases: Plantillas para crear objetos definir un tipo de objeto y crear instancias  de este tipo  de objeto.

class persona{

    nombre="Rubén";
    apellido="Alemán";
    edad=28;
    email="aleman@gmail.com";
    telefono="xxx-xxxx-xxxx";

//Objetos
// El constructor es una funcion especial, cuya finalidad es la de construir o istanciar objetos
//Para inicializar un objeto es necesario definir un constructor que tomara los atributos
// clases = molde objeto = gomita constructro = chefsito atributos = ingredientes metodos = comportamientos

constructor(nombre,apellido,edad,email,telefono){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.email=email;
    this.telefono=telefono;
}


comer(){
    console.log("En la Tragacion");
}  //Metodo comer 

bailar (){
    console.log("Sacando los prohibidos");
} //Metodo bailar

mostrarInfo(){
    console.log("nombre:", this.nombre ),
    console.log("apellido:", this.apellido ),
    console.log("edad:", this.edad ),
    console.log("email:", this.email ),
    console.log("telefono:", this.telefono )
}
}

let usuario1 = new persona ("Fernanda", "Ramos", "31", "fer@gmail.com", "xx-xxxx-xxxx-xxx");
let usuario2 = new persona ("Rubén", "Alemán", "28", "ruben@gmail.com", "xx-xxxx-xxxx-xxx");
let usuario3 = new persona ("Anna", "Fernandez", "26", "anna@gmail.com", "xx-xxxx-xxxx-xxx");
let usuario4 = new persona ("Cecilia", "Chavez", "26", "Ceci@gmail.com", "xx-xxxx-xxxx-xxx");
let usuario5 = new persona ("Elizabeth", "Razok", "29", "eli@gmail.com", "xx-xxxx-xxxx-xxx");

console.log(usuario1);
console.log(usuario2.edad);
console.log(usuario1.email,usuario2.email,usuario3.email,usuario4.email,usuario5.email);

usuario2.comer();
usuario2.mostrarInfo();
console.log(usuario3.telefono, usuario5.apellido);

// Pilares de la programacion orientada a objetos

/*
    Herencia
    Polimorfismo
    Abstraccion
    Encapsulamiento
*/

//Herencia nos permite heredar a las clases inferiores para poder optimizar un prograama

class arrendadxr extends persona { //subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    constructor () {
        super (nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

    mostrarInfo() {
        console.log("capacidad: ", this.capacidad);
        console.log("costo: ", this.costo);
        console.log("Nombre del lugar: ", this.nombreLugar);
    }
}

let arrendadxr1 = new arrendadxr ("Rocio", "Hernandez", 29, "rocio@gmail.com", "557726374", 100, 50000, "salonG")

console.log(arrendadxr1);
console.log(arrendadxr1.costo);
arrendadxr1.mostrarInfo();
///////////////////////////////
class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();

//Polimorfismo nos permite tener objetos de diferentes tipos que pueden ser manipulados en comun

class producto{
    
    marca =  "";
    precio= 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion(){
        console.log("Marca");
        console.log("Precio");

    }
}

let producto1 = new producto ("Samsung", 11000);
let producto2 = new producto ("Apple", 21000);


//Encapsulamiento ocultar la impletancion de un objeto y solo mostrar los datos necesarios

class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    
    verificarContraseña(contraseña){
    return this.#contraseña === contraseña;
    }

}

//Abstracion no es nada mas que traer objetos del mundo real y poder aplicarlos a la prograamcion mediante clases, metodos, constructores y objetos.

//Los objetos de tipo JSON en un formato de intercambi ode datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicacion entre el cliente y el servidor. Esto gracias a qeu son mas flexibles y generalmente se ejecuntan con fetch.
let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}
console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}
console.log(objetoLiteral);

//Principios de solid
//Primer principio de resposabbilidad unica, una clase debe de tener asigna una tarea o responsabilidad especifica y esta no debe de cambiar 

//Segundo principio  abierto/cerrada (open/closed principiple OCP) Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, perso sin generar cambios en la misma

//Tercer princio de sustitucion de Liskov (Liskov Suntitution Priciple LSP)
//una clase hijo puede sustitur objetos de una clase padre

//Principio de segregacion de interfaces (Interface Segregation Principle ISP)
//Delimitar los metoso que necesito y dar fuera los incesarios

//Principio de inversion de dependencias (Depndency Inversion Principle DIP) 
/*
Este principio se enfoca en reducir las dependencias en un sistema de software, promoviendo una estructura más flexible y fácil de mantener.

En términos sencillos, el Principio de Inversión de Dependencias establece que:

Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
Las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones.
En otras palabras, en lugar de que los componentes de alto nivel dependan directamente de los componentes de bajo nivel, ambas capas deben depender de abstracciones. Esto invierte la dirección de las dependencias.
*/


/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */

class alumno {
    
    nombre="";
    calificacion=0;

    constructor(nombre, calificacion) {
      this.nombre = nombre;
      this.calificacion = calificacion;
    }
  
    imprimirCalificacion() {
      console.log(`Nombre: ${this.nombre}, Calificación: ${this.calificacion}`);
    }
  
    evaluacion() {
      if (this.calificacion >= 6) {
        console.log(`${this.nombre} ha aprobado.`);
      } else {
        console.log(`${this.nombre} ha reprobado.`);
      }
    }
  }
  
  // Crear instancias de la clase Alumno
  const alumno1 = new alumno("Juan", 8);
  const alumno2 = new alumno("María", 5);
  
  // Imprimir calificaciones y realizar evaluación
  alumno1.imprimirCalificacion();
  alumno1.evaluacion();
  
  alumno2.imprimirCalificacion();
  alumno2.evaluacion();
  

