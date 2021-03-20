
//Jugadas posibles
let ppt = ['& PIEDRA &', '# PAPEL #', '8< TIJERA 8<'];

//Random para elección de computadora.
let computerSelection = function cS() {
        let random = Math.floor(Math.random() * ppt.length);
        return seleccionCompu = ppt[random];
        }
//Selección de jugador insesitive case
let playerSelection = function pS() {
    let seleccion = prompt('Elegí entre Piedra, Papel o Tijera.','');
    seleccion = seleccion.toUpperCase();

    if (seleccion == 'PIEDRA') {
        seleccion = ppt[0];
    } else if (seleccion == 'PAPEL') {
        seleccion = ppt[1];
    } else if (seleccion == 'TIJERA') {
        seleccion = ppt[2];
    } else {
        seleccion = null;
    }
    return seleccion;
}

//Una ronda que ejecuta ambas selecciones, las compara
// y devuelve un resultado

let posiblesResultados = ['Punto pa vo.','Punto pa la máquina.','Empate.','Escribí bien, dale.'];
function roundPlay () {
    
    let seleccion = playerSelection();
    let seleccionCompu = computerSelection();
    
    if (seleccion === null) {
        resultadoRonda = posiblesResultados[3];
    } else {
        if (seleccion === seleccionCompu) {
            resultadoRonda = posiblesResultados[2];
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        } else if (seleccion === ppt[0] && seleccionCompu === ppt[1]) {
            resultadoRonda = posiblesResultados[1];    
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        } else if (seleccion === ppt[0] && seleccionCompu === ppt[2]) {
            resultadoRonda = posiblesResultados[0];    
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        } else if (seleccion === ppt[1] && seleccionCompu === ppt[0]) {
            resultadoRonda = posiblesResultados[0];    
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        } else if (seleccion === ppt[1] && seleccionCompu === ppt[2]) {
            resultadoRonda = posiblesResultados[1];    
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        } else if (seleccion === ppt[2] && seleccionCompu === ppt[0]) {
            resultadoRonda = posiblesResultados[1];
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        } else if (seleccion === ppt[2] && seleccionCompu === ppt[1]) {
            resultadoRonda = posiblesResultados[0];
            alert('Jugador: ' + seleccion + '\n Computadora: ' + seleccionCompu);
        }
    }      
    return resultadoRonda;
}

// el juego en sí
// primero describe y luego invoca la ronda
// el primero que llegue a 5 gana.
function game() {
    alert('Piedra, papel o tijera clásico. Escribí tus opciones y competí contra la máquina. El primero que llegue a 5, gana. Suerte.')
    
    let puntoPlayer = 0;
    let puntoCompu = 0;

    do { 
        let resultadoRonda = roundPlay();
        if ( resultadoRonda === posiblesResultados[0]) {
            puntoPlayer = ++puntoPlayer;
            alert (resultadoRonda + '\n J: ' + puntoPlayer + ' - C: ' + puntoCompu);
            console.log(resultadoRonda);
        } else if (resultadoRonda === posiblesResultados[1]) {
            puntoCompu = ++puntoCompu;
            alert (resultadoRonda + '\n / J: ' + puntoPlayer + ' - C: ' + puntoCompu);
            console.log(resultadoRonda);
        } else {
            alert (resultadoRonda + '\n / J: ' + puntoPlayer + ' - C: ' + puntoCompu);
            console.log(resultadoRonda);
        }
    } while (puntoPlayer < 5 && puntoCompu < 5);

    if (puntoPlayer === 5) {
        alert('¡Ganaste! ' + puntoPlayer + ' a ' + puntoCompu + '.\n Pasá a buscar tu don periñon');
    } else {
        alert('Perdiste... ' + puntoPlayer + ' a ' + puntoCompu + '.\n Vergüenza.');
    }    
}

console.log(game());



