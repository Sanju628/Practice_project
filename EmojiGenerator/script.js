const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=0924130bcf39a89c3b88a32f9aefe28c1cb51cfd");
    const data = await response.json();
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}


getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random()* emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;

})