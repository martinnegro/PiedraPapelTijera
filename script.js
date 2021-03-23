
//Jugadas posibles
let ppt = ['& PIEDRA &', '# PAPEL #', '8< TIJERA 8<'];

/*Random para elección de computadora.
Cambia la eleccion de la computadora en cada vuelta */
let computerSelection = function cS() {
        let random = Math.floor(Math.random() * ppt.length);
        
        const computadora = document.querySelector('#computadora')
        let div = document.querySelector('.eleccionCompu');

            computadora.removeChild(div) 
             
            div = document.createElement('div')
            div.classList.add('eleccionCompu');
            div.textContent = ppt[random];

            computadora.appendChild(div)
        
        return seleccionCompu = ppt[random];

        }

/* Asigna a cada selector de botón por el id
    el evento click y llama la funcion roundPlay*/ 
const botones = Array.from(document.querySelectorAll('#btn'));
botones.forEach((btn) => {  
    btn.addEventListener('click', roundPlay);
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
    console.log(resultadoRonda);
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




