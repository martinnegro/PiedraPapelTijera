
//Jugadas posibles
let ppt = ['& PIEDRA &', '# PAPEL #', '8< TIJERA 8<'];

/*Random para elección de computadora.
Cambia la eleccion de la computadora en cada vuelta */
let computerSelection = function cS() {
    let random = Math.floor(Math.random() * ppt.length);
        
    let div = document.querySelector('.eleccionCompu');
    div.textContent = ppt[random];
       
    return seleccionCompu = ppt[random];
}

function playerSelection() {
    let div = document.querySelector('.eleccionPlayer');
    div.textContent = ppt[this.value];
}

/* Asigna a cada selector de botón por el id
    el evento click y llama la funcion roundPlay*/ 
const botones = Array.from(document.querySelectorAll('#btn'));
botones.forEach((btn) => {  
    btn.addEventListener('click', roundPlay);
    btn.addEventListener('click', playerSelection);
})

//Una ronda que ejecuta ambas selecciones, las compara
// y devuelve un resultado

let posiblesResultados = ['Punto pa vo.','Punto pa la máquina.','Empate.','Escribí bien, dale.'];
function roundPlay () {
    
    let seleccion = ppt[this.value];
    let seleccionCompu = computerSelection();
    let resultadoRonda

    if (seleccion === null) {
        resultadoRonda = posiblesResultados[3];
    } else {
        if (seleccion === seleccionCompu) {
            resultadoRonda = posiblesResultados[2];
        } else if (seleccion === ppt[0] && seleccionCompu === ppt[1]) {
            resultadoRonda = posiblesResultados[1];    
        } else if (seleccion === ppt[0] && seleccionCompu === ppt[2]) {
            resultadoRonda = posiblesResultados[0];    
        } else if (seleccion === ppt[1] && seleccionCompu === ppt[0]) {
            resultadoRonda = posiblesResultados[0];    
        } else if (seleccion === ppt[1] && seleccionCompu === ppt[2]) {
            resultadoRonda = posiblesResultados[1];    
        } else if (seleccion === ppt[2] && seleccionCompu === ppt[0]) {
            resultadoRonda = posiblesResultados[1];
        } else if (seleccion === ppt[2] && seleccionCompu === ppt[1]) {
            resultadoRonda = posiblesResultados[0];
        }
    }      
    contador(resultadoRonda);
}

// el juego en sí
// primero describe y luego invoca la ronda
// el primero que llegue a 5 gana.
let puntoPlayer = 0;
let puntoCompu = 0;

function contador(resultadoRonda) {
    
    if ( resultadoRonda === posiblesResultados[0]) {
        puntoPlayer = ++puntoPlayer;
    } else if (resultadoRonda === posiblesResultados[1]) {
            puntoCompu = ++puntoCompu;
    }
    
    let contadorPlayer = document.querySelector('.contadorPlayer');
    contadorPlayer.textContent = puntoPlayer;
    let contadorCompu = document.querySelector('.contadorCompu');
    contadorCompu.textContent = puntoCompu;

    if (puntoPlayer === 5) {
        let cabecera = document.querySelector('#cabecera');
        cabecera.removeChild;
        cabecera.textContent = 'GANASTE!'
    } else if (puntoCompu === 5) {
        let cabecera = document.querySelector('#cabecera');
        cabecera.removeChild;
        cabecera.textContent = 'PERDISTE!'
    }

}




