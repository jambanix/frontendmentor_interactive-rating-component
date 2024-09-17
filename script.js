
const btnSubmit = document.querySelector("button");
const form = document.querySelector(".form");
const results = document.querySelector(".results");
const radios = form.querySelectorAll("input");

const ratingSelected = () => {

    for (radio of radios) {
        if (radio.checked) return radio.labels[0].textContent
    }
    return null;
}

btnSubmit.addEventListener("click", () => {
    const rating = ratingSelected()
    console.log(rating);
    if (rating) {
        changeState(rating);
    }
});

function changeState(rating) {
    [form, results].forEach((item) => {
        item.classList.toggle("active");
    })
    console.log(rating);
    results.querySelector(".score").querySelector("h4").querySelector("span").textContent = rating;
}
