/*
4. Napisati funkciju koja vraća ukupan broj riječi u rečenici.

Primjer poziva funkcije: brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
Primjer ispisa programa: Unijeta rečenica se sastoji od 8 riječi.
*/

function brojRijeci(string) {
    string = string.trim();                       //.trim uklanja whitespace sa pocetka i kraja stringa(ili ako se string sastoji samo od whitespace-a )

    if (string) {                                 //ukoliko je string prazan uslov nije ispunjen odnosno funkcija se izvrsava samo za stringove koji nisu prazni   

        let brojRijeciBrojac = 1;                 //brojRijeci postavljamo na 1 zbog toga sto znamo da imamo minimalno jednu rijec ako string nije prazan

        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i) === ' ' && string.charAt(i + 1) !== ' ') {                         //ukoliko je karakter na poziciji i prazno mjesto znamo da je to kraj rijeci
                brojRijeciBrojac++;                                                                 //takodje je bitno da naredni karakter nije prazno mjesto ukoliko je 
                                                                                                    //slucajno uneseno vise od jednog space-a izmedju rijeci.
            }

        }return brojRijeciBrojac;                 //funkcija vraca broj rijeci u unijetom stringu

    } return 0;                                   //funkcija vraca 0 za prazan string

}



let unos = 'Ja mrzim proste brojeve u svim njihovim oblicima.  ';

console.log(`Unijeta rečenica se sastoji od ${brojRijeci(unos)} riječi`);
