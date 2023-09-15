const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

const fetchApi = async (word) => {
    try {
        infoTextEl.style.display = "block";
        meaningContEl.style.display = "none"; 
        infoTextEl.innerText = `Searching the meaning of "${word}"`
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const response = await fetch(URL).then((res) => res.json()); 

        if(response.title){
            infoTextEl.style.display = "none";
            meaningContEl.style.display = "block"; 
            titleEl.innerText = word;  
            meaningEl.innerText = "No Definitions Found";
            audioEl.style.display = "none";

        } else {
            infoTextEl.style.display = "none"; 
            meaningContEl.style.display = "block"; 
            audioEl.style.display = "inline-flex"; 
            titleEl.innerText = response[0].word;  
            meaningEl.innerText = response[0].meanings[0].definitions[0].definition;
            audioEl.src = response[0].phonetics[0].audio;
        }
        
    } catch (error) {
        infoTextEl.innerText = "Error happens try again later...."
    }
} 

inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchApi(e.target.value);
    }
})