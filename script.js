// script.js
document.querySelector('.play').addEventListener('click', function() {
    alert('Iniciando o vídeo...');
});

document.querySelector('.add-list').addEventListener('click', function() {
    alert('Adicionado à lista!');
});

function showUnderConstruction() {
    alert('Página em construção');
}

function shareOnSocialMedia(platform) {
    alert('Compartilhando no ' + platform);
}

const episodes = [
    { id: 1, title: "Episódio 1" },
    { id: 2, title: "Episódio 2" },
    { id: 3, title: "Episódio 3" }
];

const episodiosContainer = document.getElementById('episodios');

episodes.forEach(episode => {
    const episodeCard = `
        <div class="card-episodio" onclick="handleEpisodeClick(${episode.id})">
            ${episode.title}
        </div>
    `;
    episodiosContainer.innerHTML += episodeCard;
});

function handleEpisodeClick(id) {
    alert('Episódio ' + id + ' clicado');
}
