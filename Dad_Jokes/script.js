const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "OljAPhYec12nVpX/t1bq0w==EIvkO81mtYT0032I";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const getJoke = async() => {
    try{
        jokeEl.innerHTML = "Updating...";
        btnEl.disabled = true;
        btnEl.innerHTML = "Processing";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me a joke";
        jokeEl.innerHTML = data[0].joke;
    } catch(error) {
        jokeEl.innerHTML = "Something Went Wrong";
        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me a joke";
    }
    
}

btnEl.addEventListener("click", getJoke);