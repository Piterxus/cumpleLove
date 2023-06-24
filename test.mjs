import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, child, get, set, onValue, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"

let add = document.getElementById('add')
let input = document.querySelector('input')

function calcularAniosPasados(desdeFecha) {
    const fechaActual = new Date();
    const fechaPasada = new Date(desdeFecha);

    let aniosPasados = fechaActual.getFullYear() - fechaPasada.getFullYear();

    // Verificar si aún no se ha alcanzado el día y mes de la fecha pasada en el año actual
    if (
        fechaActual.getMonth() < fechaPasada.getMonth() ||
        (fechaActual.getMonth() === fechaPasada.getMonth() &&
            fechaActual.getDate() < fechaPasada.getDate())
    ) {
        aniosPasados--;
    }

    return aniosPasados;
}

function afegir() {
    add.innerText += `\n ${input.value} \n`
    // return input.value
    input.value = ''
}


edad.innerText = calcularAniosPasados("1980-06-25")