// BlackJack Card Counting Function using Switch Statement

// when you see low card count goes up 
// when you see high card count goes down
// and if its a middle value card the count stays the same
// when the count is positive the player should bet high
// when the count is 0 or negative the player should bet low


var count= 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":   
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }

    return count + " " + holdbet;
}
cc(2); cc(3); cc(4); cc("K"); cc("A");
console.log(cc(4))