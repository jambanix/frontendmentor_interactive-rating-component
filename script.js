
const btnSubmit = document.querySelector("button");
const form = document.querySelector(".form");
const results = document.querySelector(".results");
const radios = form.querySelectorAll("input");

const ratingSelected = () => {
    radios.forEach((radio) => {
        console.log(radio);
        if (radio.checked) return radio;
    })
    return null;
}

btnSubmit.addEventListener("click", () => {
    const rating = ratingSelected();
    if (rating) {
        changeState(rating.value);
    }
});

function changeState(rating) {
    [form, results].forEach((item) => {
        item.classList.toggle("active");
        results.querySelector(".score").querySelector("span").textContent = rating;
    })
}
