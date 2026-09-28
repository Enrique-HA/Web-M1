let secuencia = [];
let posicionJugador = 0;
const casillas = document.querySelectorAll(".casilla");

function jugarRonda() {
    let nuevaCasilla = Math.floor(Math.random() * 9) + 1;
    secuencia.push(nuevaCasilla);
    mostrarSecuencia();
}
function mostrarSecuencia(){
    console.log(secuencia);
    let tiempo = 500;
    for (const numero of secuencia) {
        setTimeout(() => {iluminarCasilla(numero);},tiempo);
        tiempo+=750;
    }
}
function iluminarCasilla(numero){
    const casillaActual = casillas[numero - 1];
    casillaActual.classList.add("iluminada");
    setTimeout(() => {casillaActual.classList.remove("iluminada");},500);
}
jugarRonda();