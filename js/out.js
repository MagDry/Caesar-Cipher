//Szyfr Cezara na podstawie www.nayuki.io 

function cryptText(deCrypt) {  //funkcja obsługująca program 
    let numberText = document.getElementById("number").value; //stworzono zmienną lokalizującą i zachowującą wartość liczbową
    if (!/^-?\d+$/.test(numberText)) { //funkcja sprawdza, czy w miejscu wartości liczbowej nie ma znaków specjalnych
        //ciąg znaków na podstawie RegExp (https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
        // jeśli w polu nie ma "-" (np. wartości ujemnej) lub litery to wszystko w porządku, ale jeśli są pojawia się alert //doczytać
        alert("Wprowadzona wartość nie jest liczbą");
        return;
    }

    let number = parseInt(numberText, 10); //zmienna -> numberText to przesunięcie, określone w systemie dziesiętnym
    if (number<0 || number >= 26) { //jeśli przesunięcie jest mniejsze od 0 lub większe lub równe 26 to zwraca komunikat
        alert("Wartość poza przedziałem. Proszę wybrać wartości od 0 do 25");
        return;
    } if (deCrypt)  //jeśli 
        number = (26 - number) % 26;  //przesunięcie = (26-(np.)3)%26 = 23
        var mainText = document.getElementById("text"); //określa lokalizację tekstu
        mainText.value = cesarCode(mainText.value, number); //zawartość wprowadzonego tekstu jest szyfrowana funkcją cesarCode, wykorzystywany jest wprowadzony tekst i numer
    
}

//Szyfr Cezara

function cesarCode(text, number) {  //funkcja szyfrująca, wykorzystująca wprowadzone dane (text i number)
    let result = ""; //tworzymy zmienną, która przechowa zaszyfrowany tekst
    for (let i = 0; i<text.length; i++) { //pętla analizująca każdą literę (ograniczona przez długość wprowadzonego tekstu - liczbę znaków)
        let code = text.charCodeAt(i); //szyfrowanie - każda litera (element) wprowadzanego tekstu jest przedstawiony jako kod charakterystyczny dla Unicode (0-65535)
        //przykład: dla litery "c" Unicode = 99 -> tabela znaków Unicode: https://unicode-table.com/pl/#control-character
        if (65<= code && code <= 90) { //kiedy wpisane zostają wielkie litery A-Z to
            result += String.fromCharCode((code - 65 + number) % 26 + 65); //wynikiem jest ciąg znaków stworzonych za pomocą Unikode
            //przykład: litera B to kod 66. Przesunięcie o 3. Wynikiem jest litera, która powstanie po rozwiązaniu równania: (66-65+3)%26 (Reszta z dzielenia = 4) cd. 4+65 = 69 -> Unicode 69 = "E"
        } else if (97 <= code && code <= 122) { //analogicznie dla małych liter
            result += String.fromCharCode((code - 97 + number) % 26 + 97); 
        } else {
        result += text.charAt(i); //jeśli nie jest to mała ani wielka litera, dany element jest kopiowany (dotyczy m.in. spacji i polskich znaków)
        }
    } 
    return result; //zwracany jest wynik
}


