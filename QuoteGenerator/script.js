const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";
const getQuote = async() => {
    try {
        btnEl.innerHTML = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerHTML = "Updating...";
        authorEl.innerHTML = "Updating...";
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteEl.innerHTML = data.content;
        authorEl.innerHTML = `${"~ "} ${data.author}`;
        btnEl.innerHTML = "Get a Quote";
        btnEl.disabled = false;
        
    } catch (error) {
        quoteEl.innerHTML = "An error happened try again...";
        authorEl.innerHTML = "An error happened try again...";
        btnEl.innerHTML = "Get a Quote";
        btnEl.disabled = false;
    }
}

btn.addEventListener("click", getQuote);