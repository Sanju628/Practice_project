const btnEl = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeName.innerHTML = "Updating...";
        animeImg.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeContainer.style.display = "block";
        animeImg.src = data.url;
        animeName.innerText = data.artist;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeName.innerHTML = "Please Try Again....";
    }
})