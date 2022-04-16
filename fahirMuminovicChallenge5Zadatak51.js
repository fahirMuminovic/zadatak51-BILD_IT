/*
5. Napisati funkciju koja prima kao argument godinu te vraća da li je ta godina prestupna ili ne.

Primjer poziva funkcije: isPrestupnaGodina(2000);
Primjer ispisa programa: Godina 2000 je prestupna godina. 


*/

function isPrestupnaGodina(godina) {
    //Godina je prestupna ukoliko je djeljiva sa 4 ali ne sa 100 ili ako je djeljiva sa 400.
    if ((godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0) {
        return true;
    } else return false;
}

let unos = 2000;

if (isPrestupnaGodina(unos)) {
    console.log(`Godina ${unos} je prestupna godina.`);
} else console.log(`Godina ${unos} nije prestupna godina.`);