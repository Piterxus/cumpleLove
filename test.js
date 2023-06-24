import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, child, get, set, onValue, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4AKC6DMvts-1h3iw5h0ZSMhdvfawVAlQ",
    authDomain: "happy-birthday-my-love-9ce8f.firebaseapp.com",
    projectId: "happy-birthday-my-love-9ce8f",
    storageBucket: "happy-birthday-my-love-9ce8f.appspot.com",
    messagingSenderId: "1092614073633",
    appId: "1:1092614073633:web:4a9db1cd494c3aab872260",
    measurementId: "G-LNL3QX0YRF",
    databaseURL: "https://happy-birthday-my-love-9ce8f-default-rtdb.europe-west1.firebasedatabase.app",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const dbRef = ref(database);
let contId = 0;
function messages(id, note) {
    // const db = getDatabase();
    set(ref(database, 'messages/' + (id + 1)), {
        message: note,

    });
}

onValue(dbRef, snapshot => {
    const data = snapshot.val();
    console.log('Datos actualizados:', data.messages);

}, error => {
    console.error('Error al obtener los datos:', error);
});


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
       messages(contId, input.value)
       contId++
    // return input.value
    input.value = ''
}


edad.innerText = calcularAniosPasados("1980-06-25")

window.afegir = afegir

/* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */