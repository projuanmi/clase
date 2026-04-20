// Esperamos a que toda la página cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

    // Guardamos en variables los elementos HTML que vamos a modificar
    const bateria = document.getElementById("bateria");
    const textoBateria = document.getElementById("texto-bateria");

    const descarga = document.getElementById("descarga");
    const textoDescarga = document.getElementById("texto-descarga");


    // ---------------------------
    // CAMBIO DE LA BATERÍA (meter)
    // ---------------------------

    // Creamos una variable con el valor inicial de la batería
    let nivelBateria = 80;

    // Cada 1 segundo se ejecuta este bloque de código
    setInterval(function () {

        // Restamos 5 al nivel de batería
        nivelBateria -= 5;

        // Si la batería baja de 0, vuelve a empezar en 100
        if (nivelBateria < 0) {
            nivelBateria = 100;
        }

        // Cambiamos el valor del meter
        bateria.value = nivelBateria;

        // Cambiamos también el texto que aparece debajo
        textoBateria.textContent = nivelBateria + "% de batería";

    }, 1000);


    // --------------------------------
    // CAMBIO DEL PROGRESO (progress)
    // --------------------------------

    // Creamos una variable con el valor inicial de la descarga
    let progresoDescarga = 25;

    // Cada 800 milisegundos se ejecuta este bloque
    setInterval(function () {

        // Sumamos 5 al progreso
        progresoDescarga += 5;

        // Si llega a más de 100, vuelve a empezar en 0
        if (progresoDescarga > 100) {
            progresoDescarga = 0;
        }

        // Cambiamos el valor de la barra progress
        descarga.value = progresoDescarga;

        // Cambiamos el texto inferior
        textoDescarga.textContent = progresoDescarga + "% completado";

    }, 800);

});