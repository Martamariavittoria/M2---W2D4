// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà  "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà  "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}


const prices = [34, 50, 2]
const shippingCost = 50

let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


//✅ PARTE UNO
let clienti = []; //creo arrey per utenti
//aggiungo elementi
clienti.push(marco, paul, amy);

console.log(clienti); //stampo array per vedere se ok

let soloAmbassador = [];//array per solo amabassador

//ciclo che mi stampa elementi array
for (let i = 0; i < clienti.length; i++) {
  if (clienti[i].isAmbassador === true) {
    console.log(clienti[i].name + " " + clienti[i].lastName + " è un ambassador");

    soloAmbassador.push(clienti[i]);
    console.log(soloAmbassador);
    console.log(" \n "); //salto una riga su console 
  }
  else {
    console.log(clienti[i].name + " " + clienti[i].lastName + " non è un ambassador");
  }
}


//✅ PARTE 2
let carrello = 0;
let percentuale = 0.70;

for (const element of prices) {
  carrello += element; // Somma i prezzi
}

//dichiaro che il totale sia uguale al carrello (quindi alla somma degli elementi nell'array prices)
let totale = carrello;

// Applica il 30% di sconto se l'utente è un ambassador
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  totale *= percentuale;  
}

// Aggiungi il costo di spedizione se totale <= 100
if (totale <= 100) {
  totale += shippingCost; 
}

console.log(" \n ");
console.log("Totale dell'acquisto a nome di " + utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + ":" + totale.toFixed(2));















