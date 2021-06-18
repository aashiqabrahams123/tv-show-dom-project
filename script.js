//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

 function makePageForEpisodes(episodeList) {
 const rootElem = document.getElementById("root");

   episodeList.forEach((episode) => {
    let tvShowName = document.createElement("h1");
    tvShowName.innerText = `${episode.name} S${episode.season.toString().padStart(2, '0')}E${episode.number.toString().padStart(2, '0')}`;
   rootElem.appendChild(tvShowName);
   let tvShowImage = document.createElement("img");
   tvShowImage.src = episode.image.medium;
   tvShowName.appendChild(tvShowImage);
   let tvShowSummary = document.createElement("p");
   tvShowSummary.innerHTML = episode.summary;
   tvShowName.appendChild(tvShowSummary);
   })

   
   
}

window.onload = setup;