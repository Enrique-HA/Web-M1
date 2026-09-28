let secuencia = [];
let posicionJugador = 0;
const casillas = document.querySelectorAll(".casilla");
const tablero = document.querySelector("#tablero");

function jugarRonda() {
    let nuevaCasilla = Math.floor(Math.random() * 9) + 1;
    secuencia.push(nuevaCasilla);
    mostrarSecuencia();
}
function mostrarSecuencia(){
    tablero.classList.add("bloqueado");
    console.log(secuencia);
    let tiempo = 500;
    for (const numero of secuencia) {
        setTimeout(() => {iluminarCasilla(numero);},tiempo);
        tiempo+=750;
    }
    setTimeout(() => {tablero.classList.remove("bloqueado");},tiempo);
}
function iluminarCasilla(numero){
    const casillaActual = casillas[numero - 1];
    casillaActual.classList.add("iluminada");
    setTimeout(() => {casillaActual.classList.remove("iluminada");},500);
}
function comprobarClick(casilla) {

    let numero = Number(casilla.textContent);
    if (numero === secuencia[posicionJugador]) {
        posicionJugador++;
        if (posicionJugador===secuencia.length) {
            posicionJugador = 0;
            jugarRonda();
        }
    }else{
        console.log("Has perdido");
        secuencia = [];
        posicionJugador = 0;
        jugarRonda();
    }
}
jugarRonda();

for (let casilla of casillas) {
    casilla.addEventListener("click", ()=> {comprobarClick(casilla)});
}