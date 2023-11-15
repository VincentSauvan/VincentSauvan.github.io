function randomizer() {
    return Math.random()
}

let justePrix = Math.round(randomizer() * 500)

console.log(justePrix)

let compteur = 0

let saisie = prompt("Entrez un nombre")

while (parseInt(saisie) !== justePrix) {
    if (saisie > justePrix) {
        saisie = prompt("Essayez un nombre plus bas")
        compteur = compteur + 1
    } if (saisie < justePrix) {
        saisie = prompt("Essayez un nombre plus grand")
        compteur = compteur + 1
    }
}

alert("Bravo le nombre est bien " + justePrix + " (" + compteur + "essai(s))")
