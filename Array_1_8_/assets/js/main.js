// Arrays shift()

const deutscheGerichte = ["Speckkuchen", "Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
deutscheGerichte.unshift("gericht1", "gericht2", "gericht3", "gericht4", "gericht5")
console.log(deutscheGerichte);

// Die ersten 3 Gerichte entfernen mit shift()
const nichtGut = [deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift()] 
console.log(nichtGut);

console.log(deutscheGerichte);

// pop()
deutscheGerichte.pop()
console.log(deutscheGerichte);