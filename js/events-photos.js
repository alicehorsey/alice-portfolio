const backgroundColors = {
    1: "#F9A66C",
    2: "#F17A7E",
    3: "#FFC94B",
    4: "#39b3e8",
    5: "#32a530",
}

function randomNum() {
    return Math.floor(Math.random() * 5 + 1)
}

function setInitialColour() {
    let cards = document.getElementsByClassName("flip-card-back");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = backgroundColors[randomNum()]
        // cards[i].style.color = backgroundColors[randomNum()]
    }
}

function changeColour(card) {
    setTimeout(() => {
        card.style.backgroundColor = backgroundColors[randomNum()]
        // card.style.color = backgroundColors[randomNum()]
    }, 500)
}
