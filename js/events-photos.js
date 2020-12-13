const backgroundColors = {
    1: ["black", "white"],
    2: ["purple", "black"],
    3: ["green", "purple"],
    4: ["yellow", "blue"],
    5: ["blue", "white"],
    6: ["orange", "green"],
    7: ["violet", "black"],
    8: ["pink", "black"],
    9: ["grey", "yellow"],
    10: ["turquoise", "blue"],

}

function randomNum() {
    return Math.floor(Math.random() * 10 + 1)
}

function setInitialColour() {
    let cards = document.getElementsByClassName("flip-card-back");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = backgroundColors[randomNum()][0]
        cards[i].style.color = backgroundColors[randomNum()][1]
    }
}

function changeColour(card) {
    setTimeout(() => {
        card.style.backgroundColor = backgroundColors[randomNum()][0]
        card.style.color = backgroundColors[randomNum()][1]
    }, 500)
}
