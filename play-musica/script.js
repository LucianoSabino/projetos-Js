let musicas = [
    {titulo: 'Partilhar _ Rubel', artista:'Agnes Nunes_ Xamã', src:'musica/Agnes Nunes_ Xamã - Partilhar _ Rubel (Ao Vivo - Bagua Records)(MP3_70K).mp3',
    img:'img/pexels-grevin-kivi-1716580.jpg'},
    {titulo: 'Probleminha Diário', artista:'Califa_L7NNON_MC Haiel', src:'musica/Califfa_ L7NNON_ MC Hariel - Probleminha Diário [Papasessions _7](MP3_70K).mp3',
    img:'img/pexels-stephen-niemeier-68705.jpg'},
    {titulo: 'Quero Você', artista:'MC Kevin O Chris', src:'musica/DONATTO_ MC Kevin O Chris - Quero Você (Lyric Video)(MP3_70K).mp3',
    img:'img/pexels-tomaz-barcellos-2021348.jpg'}
]

let musica = document.querySelector('audio');

let indexMusica = 0

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocaMusica);
document.querySelector('.botao-pause').addEventListener('click', pausaMusica);

musica.addEventListener('timeupdate', atulizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
})

//Funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocaMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausaMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atulizarBarra() {
   let barra = document.querySelector('progress');
   barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    //let tempoDecorrido = document.querySelector('.inicio');
    let tempoDecorrido = document.querySelector('.inicio');
    //tempoDecorrido.textContent = segundoParaMinutos(Math.floor(musica.currentTime));
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    } else {
        return campoSegundos
    }

    return campoMinutos+':'+campoSegundos;
}