const contador = document.getElementById("contador");
const submitSumaButton = document.getElementById("btn-suma");
const submitRestaButton = document.getElementById("btn-resta");

let n = 0; // contador

const suma = () => {
    n = n + 1;
    contador.innerText = n;
};

const resta = () => {
    n = n - 1;
    contador.innerText = n;
};
// asignar respectivamente la funciones al evento "click"
submitSumaButton.addEventListener("click", suma);
submitRestaButton.addEventListener("click", resta);