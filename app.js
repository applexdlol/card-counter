let count = 0;
let runningCount = 0;
let totalCardsDealt = 0;

function calculate() {
    const dealerHand = document.getElementById('dealerHand').value.split(',').map(card => card.trim());
    const playerHand = document.getElementById('playerHand').value.split(',').map(card => card.trim());
    const numDecks = parseInt(document.getElementById('numDecks').value) || 1;

    const hands = [...dealerHand, ...playerHand];

    totalCardsDealt += hands.length;
    for (let card of hands) {
        if (["2", "3", "4", "5", "6", "7"].includes(card)) {
            runningCount += 1;
        } else if (["10", "J", "Q", "K", "A"].includes(card)) {
            runningCount -= 1;
        }
    }

    const remainingDecks = ((numDecks * 52) - totalCardsDealt) / 52;
    const trueCount = (remainingDecks !== 0) ? (runningCount / remainingDecks) : runningCount;

    document.getElementById('count').innerText = runningCount;
    document.getElementById('trueCount').innerText = trueCount.toFixed(2);

    updateAdvice(dealerHand, playerHand, trueCount);
}

function resetCount() {
    count = 0;
    document.getElementById('count').innerText = count;
    document.getElementById('dealerHand').value = "";
    document.getElementById('playerHand').value = "";
    document.getElementById('advice').innerText = 'No advice yet';
}

function updateAdvice(dealerHand, playerHand) {
    const dealerUpcard = dealerHand[0];
    const playerTotal = calculateHandTotal(playerHand);
    
    let advice = 'No advice yet';

    if (count > 5) {
        if (playerTotal <= 11) {
            advice = "Strongly consider doubling down.";
        } else {
            advice = "Stand. Deck is favorable.";
        }
    } else if (count < -5) {
        if (["A", "10", "9"].includes(dealerUpcard) && playerTotal < 17) {
            advice = "Hit. Deck is unfavorable and dealer's card is strong.";
        } else {
            advice = "Hit. Deck is unfavorable.";
        }
    } else {
        if (playerTotal < 12) {
            advice = "Hit. No risk of busting.";
        } else if (["2", "3", "4", "5", "6"].includes(dealerUpcard) && playerTotal > 11 && playerTotal < 17) {
            advice = "Stand. Dealer is likely to bust.";
        } else if (["A", "10", "9", "8", "7"].includes(dealerUpcard) && playerTotal < 17) {
            advice = "Hit. Improve your hand.";
        } else {
            advice = "Stand. Best statistical move.";
        }
    }

    document.getElementById('advice').innerText = advice;
}

function calculateHandTotal(hand) {
    let total = 0;
    let aces = 0;

    for (let card of hand) {
        if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(card)) {
            total += parseInt(card);
        } else if (["J", "Q", "K"].includes(card)) {
            total += 10;
        } else if (card === "A") {
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


