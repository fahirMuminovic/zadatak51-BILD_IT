/*
Twin prime brojevi su par prostih brojeva koji se razlikuju za 2. Na
primjer, brojevi 3 i 5 su twin primes, brojevi 5 i 7 i 11 i 13 su
također twin primes. Napisati funkciju koja ispisuje sve twin prime
brojeve manje od 10.000, 10 parova po liniji. (Ne prvi 10.000 twin prime
brojeva, sve twin prime brojeve u rasponu od 0 do 10.000)
*/

function isTwinPrime() {
    //funkcija za ispis primarnih brojeva od 0 do 10,000
    function isPrime() {
        let jePrimarni = true;                   //jePrimarni koristimo kao indikator da li je broj primaran ili ne u funkciji
        let primarniBrojevi = [];
        for (let i = 2; i <= 10000; i++) {       //prvu for petlju koristimo da prolazimo kroz svaki broj od 2 do 10,000
            let stop = Math.sqrt(i);             //provjeru za prime brojeve vrsimo do korijena testiranog broja u drugoj for petlji
            for (let j = 2; j < stop; j++) {
                if (i % j === 0) {
                    jePrimarni = false;          //ako je testirani broj i djeljiv sa bilo kojom vrijednosti od 2 do korijena broja i
                    break;                       //tada testirani broj nije primarni i mozemo izaci iz petlje
                }
            }
            if (jePrimarni === true) {
                primarniBrojevi.push(i);         //sve primarne brojeve spremamo u niz primarniBrojevi
            }
            jePrimarni = true;                   //resetujemo vrijednost indikatora jePrimarni na pocetnu vrijednost(stanje)
        }
        return primarniBrojevi;                  //funkcija vraca niz primarniBrojevi
    }

    //pozivajuci isPrime funkciju dobijamo sve primarne brojeve od 0-10,000 u nizu primarniBrojevi
    let primarniBrojevi = isPrime();
    //twinPrime brojeve spremamo u string
    let twinPrimarniBrojevi = '';
    //brojac koristimo za prelazak u novi red
    let brojac = 0;                                                    

    for (let i = 0; i < primarniBrojevi.length; i++) {
        //provjerimo da li je razlika dva susjedna primarna broja jednaka 2
        if (primarniBrojevi[i + 1] - primarniBrojevi[i] === 2) {
            //upisat cemo vrijednosti tog para brojeva u varijablu twinPrimarniBrojevi
            twinPrimarniBrojevi += ' | ' + primarniBrojevi[i] + ' i ' + primarniBrojevi[i + 1] + ' | ';
            brojac++;
        }
        //za svakih 10 upisanih parova prelazimo u novi red
        if ((brojac % 10 === 0) && brojac > 0) {
            twinPrimarniBrojevi += '\n';
            brojac = 0;
        }
    }
    return twinPrimarniBrojevi; //funkcija vraca string svih twin prime brojeva
}


//poziv funkcije i ispis u konzolu
console.log(isTwinPrime());
