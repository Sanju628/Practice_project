const ratingEls = document.querySelectorAll(".rating");
const btn = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");

    });

});

btn.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you!!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We will use this feedback to improve our customer Support</p>
        `
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}