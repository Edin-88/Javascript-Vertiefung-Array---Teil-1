// Array splice
let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

// Fotos 008-010 dem Array hinzufügen
array.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg")
console.log(array);

array.splice(14, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg")
console.log(array);

array.splice(6, 0, "imageTeilnehmer002supercode.jpg","imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg",)
console.log(array);
array.sort().splice(11, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg",  "imageTeilnehmer013supercode.jpg")

console.log(array);