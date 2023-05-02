let addedAnimes = JSON.parse(localStorage.getItem("addedAnimes"))

function getAnimes(){
    const animesList = document.querySelector('#animes-list');
    animesListHTML = ""
    addedAnimes.length == 0 ? animesListHTML = "<p>Nenhum anime adicionado</p>" : addedAnimes.forEach(anime => {
        animesListHTML += `
        <div id=${anime.mal_id} class="card card-margin" style="width: 18rem;">
            <img class="card-img-left" src="${anime.images.jpg.image_url}">
            <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <span class="bold">${anime.title}</span><span> (${anime.episodes} episódios)</span>
                <p>Nota: ${anime.score}</p>
            </div>
            <div>
            <p>Episódio atual: <input id="${"anime_ep_" + anime.mal_id}" value="${anime.currentEpisode}" type="number" min="1" max="${anime.episodes}" onchange="saveCurrentEpisode(${anime.mal_id}, this)"></p>
            </div>
            </div>
      </div>
        `
    });
    animesList.innerHTML = animesListHTML
  }

  function saveCurrentEpisode(id){
    for (const index in addedAnimes)
        if(addedAnimes[index].mal_id == id)
            addedAnimes[index].currentEpisode = document.getElementById("anime_ep_"+id).value
  
    localStorage.setItem("addedAnimes", JSON.stringify(addedAnimes));
  }