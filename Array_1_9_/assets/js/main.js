const zahlen = [23, 54, 75]

// 5 zahlen am Ende hinzufügen
zahlen.push(22, 33, 55, 66, 77)
console.log(zahlen);

// 5 zahlen am Anfang hinzufügen
zahlen.unshift(1, 2, 3, 4, 5)
console.log(zahlen);

// 2 werte von hinten entfernen
zahlen.pop()
zahlen.pop()
console.log(zahlen);

// 2 werte am Anfang entfernen
zahlen.shift()
zahlen.shift()
console.log(zahlen);
