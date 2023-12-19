const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");

//Regex: Expresiones regulares, Determinan patrones que se deben de cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Desabilitar el boton
submitButton.disabled = true;

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if (emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
});