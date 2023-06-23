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



edad.innerText = calcularAniosPasados("1980-06-25")