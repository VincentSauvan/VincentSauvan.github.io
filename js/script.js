let results = []
function play() {
    const game = {
        searchedNumber: null,
        attempts: 1,
    }
    function randomize(min, max) {
        game.searchedNumber = Math.round(Math.random() * (max - min) + min);
        return game.searchedNumber;
    }
    const finalNumber = randomize(10, 20)
    let enteredNumber = parseInt(prompt("Quel est le juste prix (entre 10 et 20"))
    console.log(typeof (enteredNumber))
    console.log(game.searchedNumber)
    console.log(game.attempts)
    while (enteredNumber !== game.searchedNumber) {
        if (!enteredNumber) {
            break;
        }
        if (enteredNumber < game.searchedNumber) {
            console.log("C'est plus")
            enteredNumber = parseInt(prompt("C'est plus"))
        } else {
            console.log("C'est moins")
            enteredNumber = parseInt(prompt("C'est moins"))
        }
        game.attempts++
    }
    if (enteredNumber) {
        results.push(game.attempts)
        alert("Bravo ! C'était bien " + game.searchedNumber + " - Nombre d'essais : " + game.attempts)
        if (confirm("Voulez-vous rejouer?")) {
            play();
        } else {
            alert('Vous abandonnez ? Dommage...')
            // for (i = 0; i < results.length; i++) {
            alert("Vos précédents résultats :\n" + results.join('\n'));
        }
    }
}
play()