// Character list. Each house has a name and a code
const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
          return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
          return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
          return ["Robert", "Stannis", "Renly"];
        case "TA":
          return ["Aerys", "Daenerys", "Viserys"];
        default:
          return []; // Empty array
    }
};



function li(text) {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
}

const choice = (text, value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
};


const difhouse = document.querySelector("select");
houses.forEach(house => {
    difhouse.appendChild(choice(house.name, house.code));
});

difhouse.addEventListener("change", e => {
    const characterElement = document.getElementById("characters");
    const characters = getCharacters(e.target.value);
    characterElement.innerHTML = "";

    characters.forEach(character => {
        characterElement.appendChild(li(character));
    });
});
