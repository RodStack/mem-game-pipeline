document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    const timerDisplay = document.getElementById('timer');
    const textDiv = document.getElementById('text'); // Agregado
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let timeLeft = 0;

    const cardArray = [
        { name: 'card1', img: 'images/meme1.jpg' },
        { name: 'card1', img: 'images/meme1.jpg' },
        { name: 'card2', img: 'images/meme2.jpeg' },
        { name: 'card2', img: 'images/meme2.jpeg' },
        { name: 'card3', img: 'images/meme3.jpg' },
        { name: 'card3', img: 'images/meme3.jpg' },
        { name: 'card4', img: 'images/meme4.jpeg' },
        { name: 'card4', img: 'images/meme4.jpeg' },
        { name: 'card5', img: 'images/meme5.jpg' },
        { name: 'card5', img: 'images/meme5.jpg' },
        // ...add more pairs as needed
    ];

    function initial_text() {
        assingTextElement("h1", "Memorice de Memes");
        assingTextElement("p", "Bienvenid@s al memorice de memes, tienes que dar vuelta dos cartas iguales. Recuerda que cartas das vuelta!.")
    }

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function assingTextElement(element, text) {
        let elementHtml = document.querySelector(element)
        elementHtml.innerHTML = text
        return
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        textDiv.style.display = 'none'; // Oculta el div de texto
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
        startTimer();
    }

    function startTimer() {
        timeLeft = 121;
        const interval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `Tiempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (timeLeft <= 0 || cardsWon.length === cardArray.length / 2) {
                clearInterval(interval);
                if (timeLeft <= 0) {
                    assingTextElement("h1", "Haz perdido")
                    assingTextElement("p", "Mejor suerte a la proxima")
                    textDiv.style.display = 'block'
                } else {
                    assingTextElement("h1", "Felicidades")
                    assingTextElement("p", "Eres el rey de los memes")
                    textDiv.style.display = 'block'
                }
            }
        }, 1000);
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board img');
        const firstCardId = cardsChosenId[0];
        const secondCardId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            cards[firstCardId].style.visibility = 'hidden';
            cards[secondCardId].style.visibility = 'hidden';
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];

    }

    startButton.addEventListener('click', createBoard);
    initial_text()
});

