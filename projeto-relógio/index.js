function atualizarTempo() {
    var display = document.querySelector('div.display')

    var agora = new Date()
    
    //Pegando o tempo real
    var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds())

    display.innerHTML = horario
}

//Colocando o 0 na frente dos horarios
function corrigirHorario(numero) {
    if(numero < 10) {
        numero = '0' + numero
        return numero
    } else {
        return numero
    }
}

atualizarTempo();

//Faz com que a cada sengundoo a pgina atualize
setInterval(atualizarTempo, 1000)