let numeroSecreto;
let intentos;
let listaNumeroSorteados = []
let numeroMaximo = 10

function asignarTextElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextElemento('p',  `Acertaste el número en ${intentos} ${intentos === 1 ? 'Vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextElemento('p', 'El número secreto es menor')

        } else {
            asignarTextElemento('p', 'El número secreto es mayor')

        }
        intentos++;
        limpiarCaja()
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumeroSorteados == numeroMaximo) {
        asignarTextElemento('p', 'Ya se sortearon todos los numero posibles')
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto()
        } else {
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }



}

function condicionesInciciales() {
    asignarTextElemento('h1', "Juego del número secreto")
    asignarTextElemento('p', "Indica un número del 1 al 10")
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

function reiniciarJuego() {
    limpiarCaja()


    condicionesInciciales()

    document.querySelector('#reiniciar').setAttribute('disabled', true)


}

condicionesInciciales()