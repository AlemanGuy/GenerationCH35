
//Para manipular la informacion de un usuario, necesitamos crear un perfil medianda un objeto js
const user = {
    username: "AlemanGuy",
    age: 28,
    email: "aleman@gmail.com",
    favfilms:['hereditary', 'pulp fiction', 'Shreck 2', 'Lord of the rings: fellowship of the ring', 'Jhon wick 4', 'Nacho libre' ]

}

// Crear una funcion que me permita ingresas el objeto del perfin el en nodo padre

const createUser = (user) => {
    document.getElementById("username") .textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrando elementos de lista en forma de lista
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    // Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "white";

    //Moestrando elemeneto de lista en forma de fila
    // document.getElementById("fav-films").textContent = user.favfilms;
}

//Invoca la funcion
createUser(user);

// Eventos para actualizar el username el input y el boton

const inputName = document.getElementById("name");
const userName = document.getElementById("username");

const inputEmail = document.getElementById("email-input");
const userEmail = document.getElementById("email");





const profileBtn = document.getElementById("btn-main");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
    userEmail.textContent = inputEmail.value;
   
});
