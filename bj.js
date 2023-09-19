const dealerCards = [];
const playerCards = [];
let playerHasDoubled = false;

const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function drawCard() {
    const index = Math.floor(Math.random() * deck.length);
    return deck[index];
}

function calculateTotal(cards) {
    let total = 0;
    let aces = 0;

    for (let card of cards) {
        if (['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(card)) {
            total += parseInt(card);
        } else if (['J', 'Q', 'K'].includes(card)) {
            total += 10;
        } else if (card === 'A') {
            aces += 1;
            total += 11;
        }
    }

    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }

    return total;
}

function startGame() {
    dealerCards.length = 0;
    playerCards.length = 0;
    playerHasDoubled = false;
    document.getElementById('game-result').textContent = '';

    dealerCards.push(drawCard());
    playerCards.push(drawCard(), drawCard());
    updateGameView();
}

function updateGameView() {
    document.getElementById('dealer-card-output').textContent = dealerCards.join(', ');
    document.getElementById('player-card-output').textContent = playerCards.join(', ');
}

function hit() {
    playerCards.push(drawCard());
    updateGameView();

    if (calculateTotal(playerCards) > 21) {
        endGame('Player busts! Dealer wins.');
    }
}

function stand() {
    while (calculateTotal(dealerCards) < 17) {
        dealerCards.push(drawCard());
    }

    const playerTotal = calculateTotal(playerCards);
    const dealerTotal = calculateTotal(dealerCards);

    updateGameView();

    if (dealerTotal > 21 || playerTotal > dealerTotal) {
        endGame('Player wins!');
    } else if (playerTotal === dealerTotal) {
        endGame('It\'s a tie!');
    } else {
        endGame('Dealer wins!');
    }
}

function doubleDown() {
    if (!playerHasDoubled) {
        playerHasDoubled = true;
        hit();
        if (calculateTotal(playerCards) <= 21) stand();
    }
}

function endGame(message) {
    document.getElementById('game-result').textContent = message;
    document.querySelector('button[onclick="hit()"]').disabled = true;
    document.querySelector('button[onclick="stand()"]').disabled = true;
    document.querySelector('button[onclick="doubleDown()"]').disabled = true;
}

function restartGame() {
    startGame();
    document.querySelector('button[onclick="hit()"]').disabled = false;
    document.querySelector('button[onclick="stand()"]').disabled = false;
    document.querySelector('button[onclick="doubleDown()"]').disabled = false;
}

startGame();
