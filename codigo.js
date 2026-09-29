let secuencia = [];
let posicionJugador = 0;
const casillas = document.querySelectorAll(".casilla");
const tablero = document.querySelector("#tablero");
let ronda=0;
const numeroDeCasillas = 9;

function jugarRonda() {
    ronda++;
    document.querySelector("#numRonda").textContent = ronda;
    let nuevaCasilla = Math.floor(Math.random() * numeroDeCasillas) + 1;
    secuencia.push(nuevaCasilla);
    mostrarSecuencia();
}
function mostrarSecuencia(){
    tablero.classList.add("bloqueado");
    document.querySelector("#orden").textContent = "Observa"
    let tiempo = 500;
    for(const numero of secuencia) {
        setTimeout(() => {iluminarCasilla(numero);},tiempo);
        tiempo+=750;
    }
    setTimeout(() => {tablero.classList.remove("bloqueado");},tiempo);
    setTimeout(() => {document.querySelector("#orden").textContent = "Replica";},tiempo);
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
        alert("Has perdido");
        secuencia = [];
        posicionJugador = 0;
        ronda=0;
        jugarRonda();
    }
}
jugarRonda();
for (let casilla of casillas) {
    casilla.addEventListener("click", ()=> {comprobarClick(casilla)});
}
document.addEventListener("keydown",(event) => {
    if (event.key==="k") {
      document.body.classList.toggle("modoOscuro");
    }
  });