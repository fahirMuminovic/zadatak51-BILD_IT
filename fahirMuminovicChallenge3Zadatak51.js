/*
3. Palindrome prime je prosti broj koji je također i palindrom. Na primjer, 131 je
palindrome prime, kao i brojevi 313 i 757. Napisati metodu koja ispisuje
prvih 100 palindrome prime brojeva, 10 brojeva po liniji.
*/

function isPrimePalindrome(granica) {                            //funkcija prima argument koji oznacava koliko primePalindrome brojeva zelimo
    let primePalindromeBrojevi = '';

    //funkcija  provjerava da li je proslijedjeni broj palindrom
    function isPalindrome(broj) {

        let stringBroj = String(broj);                
        let j = stringBroj.length - 1;                                //brojac j postavljamo na zadnju cifru broja (zadnji karakter broja)

        if (stringBroj.length > 1 || stringBroj.length % 2 === 0) {   //provjera da li je broj jednocifren ili ima paran broj cifri
            for (let i = 0; i < stringBroj.length / 2; i++, j--) {    //u svakoj iteraciji i se povecava za 1 a j smanjuje za 1
                if (stringBroj[i] !== stringBroj[j]) {                //i se krece od 0 do polovice broja (stringa)
                    return false;                                     
                }
            }
            return true;                                              //ako su svi uslovi ispunjeni broj je palindrom
        }
        return false;                                                 //ako je broj jednocifren ne moze biti palindrom
    }

    let brojac = 0;
    let isPrime = true;

    for (let i = 2; ; i++) {                          //uslov za prekid je brojac >= granica (brojac predstavlja primePalindrom broj)
        let stop = Math.sqrt(i);
        for (let j = 2; j <= stop; j++) {
            isPrime = true;                           //resetujemo varijablu na prvobitno stanje pri svakom ulasku u petlju
            if (i === j) {
                continue;
            }
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {                                  //i je primarni broj
            if (isPalindrome(i)) {                               //provjera da li je i palindrome
                primePalindromeBrojevi += i + ' ';               //ako su oba uslova ispunjena upisujemo i u varijablu primePalindromeBrojevi
                brojac++;                                        //brojac sluzi za evidenciju koliko brojeva je primePalindrome
                if (brojac % 10 === 0 && brojac > 0) {           //svaki deseti broj prelazimo u novi red
                    primePalindromeBrojevi += '\n';
                }
                if (brojac >= granica) {                         //kada imamo zeljeni broj primePalindrome brojeva petlja se prekida
                    break;
                }
            }
        }
    }
    return primePalindromeBrojevi;                               //funkcija vraca string primePalindrome brojeva
}

console.log(isPrimePalindrome(100));