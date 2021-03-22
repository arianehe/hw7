// Country list
const list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];



const choices = document.getElementById("suggestions");


const Acountry = document.querySelector("input");


Acountry.addEventListener("input", () => {
    choices.innerHTML = "";
      list.forEach(country => {
        if (country.startsWith(Acountry.value)) {
            choices.appendChild(select(country));
        }
    });
});

const select = country => {
    const element = document.createElement("div");
    element.classList.add("suggestion");
    element.textContent = country;
    element.addEventListener("click", e => {
        Acountry.value = e.target.textContent;
        choices.innerHTML = "";
    });
    return element;
};