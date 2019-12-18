// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// Il programma chiede all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(chilometri);
var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBase = 0.21;
var prezzoTratta= prezzoBase * chilometri;
var euro = " €";

// va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
if (eta < 18) {
  var prezzoTratta20 = prezzoTratta - prezzoTratta * (20 / 100);
  console.log(prezzoTratta20.toFixed(2) + euro);
} else if (eta > 65) {
  var prezzoTratta40 = prezzoTratta - prezzoTratta * (40 / 100);
  console.log(prezzoTratta40.toFixed(2) + euro);
} else{
  prezzoTratta;
  console.log(prezzoTratta + euro);
}
