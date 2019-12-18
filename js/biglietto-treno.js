
// Il programma chiede all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBase = 0.21;
var prezzoTratta= prezzoBase * chilometri;
var euro = " €";

// controllo che le risposte siano inserite in maniera corretta
if( isNaN(chilometri) || isNaN(eta)) {
  document.getElementById("avvertenza").innerHTML= "Attenzione, non hai inserito le risposte in modo corretto";
} else {
// va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
if (eta < 18) {
  var prezzoTratta20 = prezzoTratta - prezzoTratta * (20 / 100);
  document.getElementById('prezzo').innerHTML = "Il tuo biglietto costa " + prezzoTratta20.toFixed(2) + euro;
} else if (eta > 65) {
  var prezzoTratta40 = prezzoTratta - prezzoTratta * (40 / 100);
    document.getElementById('prezzo').innerHTML = "Il tuo biglietto costa " + prezzoTratta40.toFixed(2) + euro;
} else{
  prezzoTratta;
    document.getElementById('prezzo').innerHTML = "Il tuo biglietto costa " + prezzoTratta + euro;
}
}
