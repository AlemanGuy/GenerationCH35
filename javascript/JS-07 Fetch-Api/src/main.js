//Programacion sincronica
function two(){
    console.log("Dos");
}

function one(){
    console.log("Uno");
    two();
    console.log("Tres");
}

one();
console.log("*****");


//Programacion asincronica que recibe una funcion anonima y establece un tiempo en milisegundos 1000ms = 1s de ejecucion para cumplir con la condicon asincrona
const twoAsync = () => {
    setTimeout ( () => {
    console.log("Dos Async");    
    }, 5000);
    
}

const oneAsync = () => {

    setTimeout ( () => {
    console.log("Uno Async");
    }, 2000);
    
    twoAsync();
    console.log("Tres Async");
}
oneAsync();

//Trabajando con promesas mediante Fetch y Api

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(data =>  data.json())
    .then(data => {
        console.log(data);
        console.log(data[0].name);
    })
    .catch(error => console.error("Upss!!!", error));