//Toma el valor de la elección del jugador y ejecuta
//el random de la compu. Luego compara y en envía
//el resultado al contador.
let posiblesResultados = ['Punto pa vo.','Punto pa la máquina.','Empate.','Escribí bien, dale.'];
function roundPlay () {
    
    let seleccion = ppt[this.value];
    let seleccionCompu = computerSelection(); //Ejecuta un random entre 0 y 2 para asignar del array de arriba
    let result = resultadoRonda (seleccion,seleccionCompu) //Evía amabs elecciones y devuevle un resultado
    contador(result);
}

/* CONTADOR Y RESULTADO. Va sumando los puntos y cambia los div del index
    Cuando uno de los dos llega a 5, remueve cotenido de #cabecera 
    e imprime resultado */
let puntoPlayer = 0;
let puntoCompu = 0;
function contador(result) {
    
    if ( result === posiblesResultados[0]) {
        puntoPlayer = ++puntoPlayer;
    } else if (result === posiblesResultados[1]) {
            puntoCompu = ++puntoCompu;
    }
    let gpe = document.querySelector('.gpe');
    gpe.textContent = result;
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

//Jugadas posibles
let ppt = ['& PIEDRA &', '# PAPEL #', '8< TIJERA 8<'];

//Random para elección de computadora.
//Cambia la eleccion de la computadora en cada vuelta */
let computerSelection = function cS() {
    let random = Math.floor(Math.random() * ppt.length);
        
    let div = document.querySelector('.eleccionCompu');
    div.textContent = ppt[random];
       
    return ppt[random];
}

//Función para imprimir la elección del jugador
function playerSelection() {
    let div = document.querySelector('.eleccionPlayer');
    div.textContent = ppt[this.value];
}

function resultadoRonda (seleccion,seleccionCompu) {
    let result;

    if (seleccion === seleccionCompu) {
        result = posiblesResultados[2];
    } else if (seleccion === ppt[0] && seleccionCompu === ppt[1]) {
        result = posiblesResultados[1];    
    } else if (seleccion === ppt[0] && seleccionCompu === ppt[2]) {
        result = posiblesResultados[0];    
    } else if (seleccion === ppt[1] && seleccionCompu === ppt[0]) {
        result = posiblesResultados[0];    
    } else if (seleccion === ppt[1] && seleccionCompu === ppt[2]) {
        result = posiblesResultados[1];    
    } else if (seleccion === ppt[2] && seleccionCompu === ppt[0]) {
        result = posiblesResultados[1];
    } else if (seleccion === ppt[2] && seleccionCompu === ppt[1]) {
        result = posiblesResultados[0];
    }
    return result;
}

/* Asigna a cada selector de botón por el id
    el evento click y llama la funcion roundPlay*/ 
    const botones = Array.from(document.querySelectorAll('#btn'));
    botones.forEach((btn) => {  
        btn.addEventListener('click', roundPlay);
        btn.addEventListener('click', playerSelection);
    })