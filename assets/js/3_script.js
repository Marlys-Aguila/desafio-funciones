// Elementos a modificar
/*
function pintar() {
    ele = document.getElementById("ele1");
    ele.style.backgroundColor = "yellow";
}

ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);
*/

// Función modificada
function pintar(color = "green") {
    ele = document.getElementById("ele1");
    ele.addEventListener("click", () => {
        ele.style.backgroundColor = color;
    });
}

pintar();
pintar("yellow");
