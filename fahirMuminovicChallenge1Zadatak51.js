/*
Napisati funkciju koja prima 2 argumenta, string i karakter koji treba
ukloniti iz datog stringa. Nakon poziva, funkcija treba da vrati novi
string koji predstavlja orginalni string sa izuzetkom prosljedjenog
karaktera.
Primjer poziva funkcije: ukloniKarakter("Dobrodosli", "o");
Primjer ispisa programa: Dbrdsli
*/

function ukloniKarakter(string, karakter) {
    let modifikovaniString = '';

    modifikovaniString = string.replaceAll(karakter, '');

    return modifikovaniString;
}

console.log(ukloniKarakter('Dobrodosli', 'o'));