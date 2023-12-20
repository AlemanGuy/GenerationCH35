/*//Programacion sincronica
function two() {
  console.log("Dos");
}

function one() {
  console.log("Uno");
  two();
  console.log("Tres");
}

one();
console.log("*****");

//Programacion asincronica que recibe una funcion anonima y establece un tiempo en milisegundos 1000ms = 1s de ejecucion para cumplir con la condicon asincrona
const twoAsync = () => {
  setTimeout(() => {
    console.log("Dos Async");
  }, 5000);
};

const oneAsync = () => {
  setTimeout(() => {
    console.log("Uno Async");
  }, 2000);

  twoAsync();
  console.log("Tres Async");
};
oneAsync();

*/

//Trabajando con promesas mediante Fetch y Api

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    console.log(data[0].name);
  })
  .catch((error) => console.error("Upss!!!", error));

//Usando fetch para mostrar en navejador

const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");

//Variable para guardar la inforcion traida desde la API, debe de ser tipo null
let post = null;

// Consumiendo API con fettch (promesas)
botonInfo.addEventListener("click", (e) => {
  fetch("https://jsonplaceholder.typicode.com/users/6")
    .then((response) => response.json())
    .then((response) => {
      post = response; //Se guardan los datos de response en la variable de tipo null
      //Se manda a llamar la variable desde la funcion
      mostrarDatos(post);
    })
    .catch((error) => console.error("¡¡¡Upss!!!", error));
});

//Funcion que me permita manipular la varaible de tipo null
//Quiero traer name,username,email & phone del user de la API
const mostrarDatos = (post) => {
    //Creando nodos(elementos) mediante DOM manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    
    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navejador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//Fetch para mostrar en navegador (mostrar productos)

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");

let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response;

            mostrarProductos(productos);
        })
        .catch(error => console.error("Algo salió mal", error))
})

//Funcion para crear, agregar y mostrar elementos desde el DOM

const mostrarProductos = (productos) => {
    productos.map((productos) => { //El método map toma el array (objeto en JS y crea nuevos arreglos que se pueden manupular de manera individual. Así, evitamos el uso de un ciclo foreach)
        const tittle = document.createElement("h2");
        const image = document.createElement("img");
        const price = document.createElement("h3");
        const description = document.createElement("p");
        const category = document.createElement("p");
        const separador = document.createElement("hr");

        //Envivar a HTML con innerHTML
        tittle.innerHTML = productos.tittle;
        image.src = productos.image;
        image.width = 200;
        price.innerHTML = productos.price;
        description.innerHTML = productos.description;
        category.innerHTML = productos.category;
        

        //Mostrarlos en navegador al agregarlos a su padre
        tienda.appendChild(tittle);
        tienda.appendChild(image);
        tienda.appendChild(price);
        tienda.appendChild(description);
        tienda.appendChild(category);
        tienda.appendChild(tittle);
        tienda.appendChild(separador);
    })
}

//Metodo POST utilizando fetch. Me permite crear recursos en la API
fetch ("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un metodo de tipo POST
    method: "POST",
    //Creo el body de mi nuebo objecto siguiendo las mismas llaves de la API existente (userID, title, body)
    body: JSON.stringify({
        userId: 1986,
        title: "Sueñan los androides con ovejas electricas ?",
        body: "Author: philipe K. Dick"
    }),
    //Definir headers
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
    
})      //Fin de mi fetch

        //Inicio de mis promesas
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })


  /* >>>>>>> Programación asíncrona (promise) <<<<<<<<< */
//Función flecha de tipo async-await
//Indico que es una función asincrona con la palabra reservada async antes de los parámetros 
const getUser = async () => {
    //Para que se cumpla la promesa, no utilizamos then sino que usamos try. Para errores se sigue usando catch 
    try {
        //Retardo para ejecucion asyncrona
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Promesa que se ejecuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.error("Error inexplicable", error);
    }
}

//Invocar funcion NO OLVIDAR
getUser();


// localStorage
//Nos permite crear, modificar, eliminar, guardar objetos JS de manera local
//Crear una objeto de JS con sus llaves y valoes 
const user = [
    {
    id: 1,
    name: "Daniel",
    apellido: "Maldonado",
    email: "daniel@gmail.com",
    posicion: "Mentor",
    empresa: "Generation"
},
{
    id: 2,
    name: "Rubén",
    apellido: "Alemán",
    email: "aleman@gmail.com",
    posicion: "Alumno",
    empresa: "Generation"
}
]

//Convertir el obejto creado a notacion JSON y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Obtener el objeto JSON almacenado en el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].name} con posicion de ${user[1].posicion}, estudia en ${user[1].empresa}`);

//sessionStorage solo vive mientras la sesion este viva