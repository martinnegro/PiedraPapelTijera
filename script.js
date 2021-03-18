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

function roundPlay() {
    let p = playerSelection();
    
    let resultado;
     console.log(p);
    if (p === null) {
        resultado = 'Eres un gallina';
        alert(resultado);
        return resultado;
    } else {
        let c = computerPlay ();
        
        if (p === c) {
            resultado = 'Empate.';
        } else if (p === ppt[0] && c === ppt[1]) {
            resultado = '¡Gana Computadora!';    
        } else if (p === ppt[0] && c === ppt[2]) {
            resultado = '¡Ganaste!';    
        } else if (p === ppt[1] && c === ppt[0]) {
            resultado = '¡Ganaste!';    
        } else if (p === ppt[1] && c === ppt[2]) {
            resultado = '¡Gana Computadora!';    
        } else if (p === ppt[2] && c === ppt[0]) {
            resultado = '¡Gana Computadora!';    
        } else if (p === ppt[2] && c === ppt[1]) {
            resultado = '¡Ganaste!';    
        } 

        alert('Vos: ' + p + '  -  Computadora: ' + c + ' - ' + resultado);    
        
        return resultado;
    }
}

console.log(roundPlay());



 
