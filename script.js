let ppt = ['& PIEDRA &', '# PAPEL #', '8< TIJERA 8<'];


function computerPlay() {
    let random = Math.floor(Math.random() * ppt.length);
    let computerSelection = ppt[random];
    return computerSelection;
    }

function playerSelection() {
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

let resultado = ['Punto pa vo.','Punto pa la máquina.','Empate.','Eres un gallina.'];
let puntoPlayer = 0;
let puntoCompu = 0;

function roundPlay() {
    
    let p = playerSelection();
    
    if (p === null) {
        alert(resultado[3]);
        return resultado[3];
    } else {
        let c = computerPlay ();
        let punto;
        if (p === c) {
            punto = resultado[2];
        } else if (p === ppt[0] && c === ppt[1]) {
            punto = resultado[1];    
        } else if (p === ppt[0] && c === ppt[2]) {
            punto = resultado[0];    
        } else if (p === ppt[1] && c === ppt[0]) {
            punto = resultado[0];    
        } else if (p === ppt[1] && c === ppt[2]) {
            punto = resultado[1];    
        } else if (p === ppt[2] && c === ppt[0]) {
            punto = resultado[1];
        } else if (p === ppt[2] && c === ppt[1]) {
            punto = resultado[0];    
        } 

        if (punto == resultado[0]) {
            ++puntoPlayer;
        } else if  (punto == resultado[1]) {
            ++puntoCompu;
        } else {
        }

        alert('Vos: ' + p + '  -  Computadora: ' + c + ' - ' + punto);
        alert('Vos: ' + puntoPlayer + ' - Compu: ' + puntoCompu)
        return resultado;
    }
}
function game() {
    do {
        resultado = roundPlay();
    } while (puntoCompu < 5 && puntoPlayer <5); 
    if (puntoPlayer = 5) {
        alert('Ganaste! ' + puntoPlayer + ' a ' + puntoCompu + '.');
    } else {
    alert('Perdiste!' + puntoCompu + ' a ' + puntoPlayer + '.');
    }
}

console.log(game());