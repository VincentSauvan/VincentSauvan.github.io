/**
 * 
 * Code fourni
 */
const app = {
    // just a utility var to remember all the colors
    colors: ['red', 'green', 'blue', 'yellow'],

    // this var will contain the sequence said by Simon
    sequence: [],
    indice: [],
    compteur: 0,
    timer: 5,

    drawCells: function () {
        const playground = document.getElementById('playground');
        for (const color of app.colors) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = color;
            cell.style.backgroundColor = color;
            cell.addEventListener("click", app.playGame)
            playground.appendChild(cell);
        }
    },

    bumpCell: function (color) {
        // let's modify the syle directly
        document.getElementById(color).style.borderWidth = '45px';
        // and reset the same style, after a small pause (150 ms)
        setTimeout(() => {
            document.getElementById(color).style.borderWidth = '0';
        }, 150);

    },

    newGame: function () {
        // start by reseting the sequence 
        app.sequence = [];
        // make it 3 times :
        for (let index = 0; index < 3; index++) {
            // get a random number between 0 and 3
            let random = Math.floor(Math.random() * 4);
            // add the corresponding color to the sequence
            app.sequence.push(app.colors[random]);
        }

        // start the "Simon Says" sequence
        app.simonSays(app.sequence);
    },

    simonSays: function (sequence) {
        if (sequence && sequence.length) {
            // after 500ms, bump the first cell
            app.showMessage("Mémorisez la séquence");
            setTimeout(app.bumpCell, 500, sequence[0]);
            console.log("sequence ", sequence[0])
            // plays the rest of the sequence after a longer pause
            setTimeout(app.simonSays, 850, sequence.slice(1));
            // setTimeout(app.showMessage("Reproduisez la séquence"), 5000)
        }
    },

    init: function () {
        console.log('init');
        app.drawCells();
        app.createTimer();

        // listen click on the "go" button
        document.getElementById('go').addEventListener('click', app.newGame);
    },


    /** Fin du code fourni. Après, c'est à toi de jouer! */



    showMessage: function (message) {
        document.getElementById('message').innerHTML = message;
        const goButton = document.getElementById('go');
        goButton.style.display = 'none';
    },

    hideMessage: function () {
        const goButton = document.getElementById('go');
        goButton.style.display = 'block';
    },

    endGame: function () {
        app.showMessage("Partie terminée. Votre score : " + "score")
    },

    playGame: function (event) {
        console.log("color ", event.target.id);
        const bumpColor = event.target.id;
        app.bumpCell(bumpColor);
        app.indice.push(event.target.id)
        console.log(app.indice)
        console.log(app.sequence)
        console.log(app.indice.length);
        console.log(bumpColor)
        if (bumpColor === app.sequence[app.compteur] && app.sequence.length === app.indice.length) {
            console.log("gg next")
            console.log(app.compteur)
            app.compteur++
            setTimeout(app.nextMove, 1000);
        } else if (bumpColor === app.sequence[app.compteur]) {
            console.log("gg keep")
            console.log(app.compteur)
            app.compteur++
        }
        else {
            let score = app.sequence.length;
            app.showMessage("Partie terminée. Votre score : " + score)
            app.sequence = [];
            app.indice = [];
            app.compteur = 0;
        }
    },

    nextMove: function () {

        app.indice = [];
        app.compteur = 0;
        let random = Math.floor(Math.random() * 4);
        app.sequence.push(app.colors[random]);
        console.log(app.sequence)
        app.simonSays(app.sequence);
        app.showMessage("Mémorisez la séquence");
    },

    createTimer: function () {
        const timerParent = document.getElementById("message");
        const timerDiv = document.createElement("div");
        timerParent.appendChild(timerDiv);
        timerDiv.textContent = app.timer;
    }
}


document.addEventListener('DOMContentLoaded', app.init);

function timerDecrease() {
    app.timer = 5;
    console.log(app.timer);
    timerDiv.textContent = app.timer;
    const timerInterval = setInterval(function () {
        app.timer--;
        console.log(app.timer);
        timerDiv.textContent = app.timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            console.log("Temps écoulé !")
        }
    }, 1000);
}

