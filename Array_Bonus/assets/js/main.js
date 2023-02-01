// HTML inputs
const teilnehmerEingabe = document.querySelector("#teilnehmer")
const btnAdd = document.querySelector('input[value="Hinzufügen"]')
const btnRemove = document.querySelector('input[value="Rückgängig"]')

// HTML outputs
const outputList = document.querySelector("ol")

const teilnehmer = [];


// Teilnehmer hinzufügen
btnAdd.addEventListener ("click", () => {
    let userInput = "<li>" + (teilnehmerEingabe.value)
    teilnehmer.push(userInput)
    outputList.innerHTML = teilnehmer
})

// letzen teilnehmer entfernen
btnRemove.addEventListener ("click", () => {
    teilnehmer.pop()
    outputList.innerHTML = teilnehmer
})
