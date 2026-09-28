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

}
jugarRonda();