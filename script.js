let ppt = ['& PIEDRA &', '# PAPEL #', '8< TIJERA 8<'];


function computerPlay() {
    
    let random = Math.floor(Math.random() * ppt.length);

    let computerSelection = ppt[random];
    
    return computerSelection;
    }

function playerSelection() {
    let seleccion = prompt('Elegí entre Piedra, Papel o Tijera.','');
    console.log(seleccion);

    seleccion = seleccion.toUpperCase();

    console.log(seleccion);
    
    if (seleccion == 'PIEDRA') {
        seleccion = ppt[0];
    } else if (seleccion == 'PAPEL') {
        seleccion = ppt[1];
    } else if (seleccion2 == 'TIJERA') {
        seleccion = ppt[2];
    } else {
        seleccion = null;
        alert('Eres un gallina.');
    }
    return seleccion;
}

console.log(playerSelection(),computerPlay());


 
 
    


console.log('No hay nada en la heladera.');