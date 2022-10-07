// Se crea la variable 'color' de scope global
let color = "";

// Se guardan colores según tecla a presionar
document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        color = "red";
    } else if (event.key === "s") {
        color = "green";
    } else if (event.key === "d") {
        color = "blue";
    }
});

// Se crean variables según id de cada div
let caja1 = document.getElementById("caja-1");
let caja2 = document.getElementById("caja-2");
let caja3 = document.getElementById("caja-3");
let caja4 = document.getElementById("caja-4");

// Se crean los eventos para cada caja
/*
caja1.addEventListener("click", function (event) {
    event.target.style.backgroundColor = color;
});

caja2.addEventListener("click", function (event) {
    event.target.style.backgroundColor = color;
});

caja3.addEventListener("click", function (event) {
    event.target.style.backgroundColor = color;
});

caja4.addEventListener("click", function (event) {
    event.target.style.backgroundColor = color;
});
*/

// Pero 'refactorizo' el código de arriba para no repetirlo
function eventoCambiarColor(numeroCaja) {
    numeroCaja.addEventListener("click", function (event) {
        event.target.style.backgroundColor = color;
    });
}

// Se llama a la función con el argumento correspondiente
eventoCambiarColor(caja1);
eventoCambiarColor(caja2);
eventoCambiarColor(caja3);
eventoCambiarColor(caja4);
