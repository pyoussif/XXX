const
    SUITS = [
        'spades',
        'clubs',
        'diamonds',
        'hearts'
    ],
    CARDS = [
        {
            name: '2',
            value: 2
        },
        {
            name: '3',
            value: 3
        },
        {
            name: '4',
            value: 4
        },
        {
            name: '5',
            value: 5
        },
        {
            name: '6',
            value: 6
        },
        {
            name: '7',
            value: 7
        },
        {
            name: '8',
            value: 8
        },
        {
            name: '9',
            value: 9
        },
        {
            name: '10',
            value: 10
        },
        {
            name: 'J',
            value: 10
        },
        {
            name: 'Q',
            value: 10
        },
        {
            name: 'K',
            value: 10
        },
        {
            name: 'A',
            value: 11
        }
    ];

let
    values = {},
    cards = {
        user: [],
        dealer: []
    };

gameOver = (msg, color) => {
    document.querySelector('.gameover__msg').setAttribute('data-msg', msg);
    document.querySelector('.gameover__msg').style.color = color;
    document.querySelector('.gameover').classList.add('active');
}

evaluate = (type) => {
    let aces = cards[type].filter((card) => {
        return card.name == 'A' && card.value == 11;
    });
    console.log(values['user']);
    if (values[type] > 21 && aces.length) {
        cards[type][cards[type].indexOf(aces[0])].value = 1;
        values[type] -= 10;
        type == 'user' ? evaluate(type) : dealerPlay();
        return;
    }

    switch (type) {
        case 'user':
            if (values[type] > 21) {
                gameOver('Strip!', '#f06');
                return;
            } else if (values[type] == 21) {
                gameOver('You Win! Make Someone Strip!', '#0f8');
                return;
            }
            break;

        case 'dealer':
            if (values[type] > 21) {
                gameOver('You Win! Make Someone Strip!', '#0f8');
                return;
            } else if (values[type] == 21) {
                gameOver('Dealer Wins - STRIP!', '#f06');
                return;
            } else {
                if (values.user > values.dealer) {
                    gameOver('You Win! Make Someone Strip!', '#0f8');
                } else if (values.user == values.dealer) {
                    gameOver('\'Twas a Draw! Everyone Strips!', '#80f');
                } else {
                    gameOver('Dealer Wins - STRIP!', '#f06');
                }
            }
            break;
    }
}

class Card {
    constructor(target, type) {
        let
            card = document.createElement('span'),
            cardFront = document.createElement('div'),
            cardBack = document.createElement('div'),
            denomination = SUITS[Math.floor(Math.random() * SUITS.length)],
            value = CARDS[Math.floor(Math.random() * CARDS.length)];

        card.classList.add('card');
        card.setAttribute('data-value', value.value);

        cardFront.classList.add('card__front');
        cardFront.classList.add('prePlay');
        cardFront.classList.add(denomination);
        cardFront.innerHTML = value.name;

        cardBack.classList.add('card__back');
        cardBack.classList.add('prePlay');

        values[type] += value.value;

        card.appendChild(cardBack);
        card.appendChild(cardFront);
        target.appendChild(card);

        this.name = value.name;
        this.value = value.value;

        this.cardFront = cardFront;
        this.cardBack = cardBack;
    }

    play() {
        setTimeout(() => {
            this.cardFront.classList.remove('prePlay');
            this.cardBack.classList.remove('prePlay');
            if (values.user >= 21) setTimeout(evaluate.bind(null, 'user'), 1000);
        }, 20);
    }
}

dealerPlay = () => {
    let currCard = 1, int;
    cards.dealer[0].play();
    setTimeout(() => { cards.dealer[1].play(); }, 500);

    while (values.dealer < values.user) {
        let dealerCard = new Card(document.querySelector('.table__dealer'), 'dealer');
        cards.dealer.push(dealerCard);
    }

    setTimeout(() => {
        int = setInterval(() => {
            if (currCard < cards.dealer.length - 1) {
                ++currCard;
                cards.dealer[currCard].play();
            } else if (currCard == cards.dealer.length - 1) {
                clearInterval(int);
                setTimeout(evaluate.bind(null, 'dealer'), 500); // timeout before game over messaging
            }
        }, 500); // interval for each card animation
    }, 500); // timeout to account for initial animation
}

userPlay = () => {
    let userCard = new Card(document.querySelector('.table__user'), 'user');
    userCard.play();

    cards.user.push(userCard);
}

initGame = () => {
    document.querySelector('.gameover').classList.remove('active');

    values.user = 0;
    values.dealer = 0;
    cards.user = [];
    cards.dealer = [];

    document.querySelector('.table__user').innerHTML = '';
    document.querySelector('.table__dealer').innerHTML = '';

    cards.user.push(new Card(document.querySelector('.table__user'), 'user'));
    cards.user.push(new Card(document.querySelector('.table__user'), 'user'));
    cards.dealer.push(new Card(document.querySelector('.table__dealer'), 'dealer'));
    cards.dealer.push(new Card(document.querySelector('.table__dealer'), 'dealer'));
    cards.user[0].play();
    setTimeout(() => { cards.user[1].play(); }, 500);
}

eventListeners = () => {
    document.querySelector('.btn--hit').onclick = userPlay;
    document.querySelector('.btn--stay').onclick = dealerPlay;
    document.querySelector('.btn--reset').onclick = initGame;
}

initGame();
eventListeners();
