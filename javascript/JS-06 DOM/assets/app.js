const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//vamos a declarar una funcion que genere un numero random tomando un parametro number 

const random = (number) =>{
    return Math.floor(Math.random() * (number + 1));
}

// Crear un evento de click para cuand ose presione un boton y suceda algo

//Random
botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

//Reset
botonReset.addEventListener("click", () =>{
    document.body.style.backgroundColor = colorFondo;
});



