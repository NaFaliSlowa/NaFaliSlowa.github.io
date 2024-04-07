//head
var iconLink = document.createElement("link");
iconLink.rel = "icon";
iconLink.href = "/1.img/icon.png";

// Tworzenie linku do preconnect
var preconnectLink1 = document.createElement("link");
preconnectLink1.rel = "preconnect";
preconnectLink1.href = "https://fonts.googleapis.com";

// Tworzenie linku do preconnect z crossorigin
var preconnectLink2 = document.createElement("link");
preconnectLink2.rel = "preconnect";
preconnectLink2.href = "https://fonts.gstatic.com";
preconnectLink2.setAttribute("crossorigin", "");

// Tworzenie linku do arkusza stylów
var stylesLink = document.createElement("link");
stylesLink.rel = "stylesheet";
stylesLink.href = "https://fonts.googleapis.com/css2?family=Oswald&family=Ubuntu&display=swap";

// Tworzenie meta tagu dla kodowania znaków
var charsetMeta = document.createElement("meta");
charsetMeta.charset = "UTF-8";

// Tworzenie meta tagu dla kompatybilności z IE
var ieMeta = document.createElement("meta");
ieMeta["http-equiv"] = "X-UA-Compatible";
ieMeta.content = "IE=edge";

// Tworzenie meta tagu dla skalowania widoku
var viewportMeta = document.createElement("meta");
viewportMeta.name = "viewport";
viewportMeta.content = "width=device-width, initial-scale=1.0";

// Tworzenie meta tagu dla opisu strony
var descriptionMeta = document.createElement("meta");
descriptionMeta.name = "description";
descriptionMeta.content = "Strona poświęcona twórczości poetyckiej Anety Jasłowskiej";

// Tworzenie meta tagu dla słów kluczowych
var keywordsMeta = document.createElement("meta");
keywordsMeta.name = "keywords";
keywordsMeta.content = "poezja, wiersze, pantum, niteczka, Aneta Jasłowska, Jasłowska";

// Dodanie wszystkich elementów do sekcji head
document.head.appendChild(iconLink);
document.head.appendChild(preconnectLink1);
document.head.appendChild(preconnectLink2);
document.head.appendChild(stylesLink);
document.head.appendChild(charsetMeta);
document.head.appendChild(ieMeta);
document.head.appendChild(viewportMeta);
document.head.appendChild(descriptionMeta);
document.head.appendChild(keywordsMeta);

//logo
var div = document.createElement("div");
div.className = "card";
var h1 = document.createElement("h1");
var img = document.createElement("img");
img.setAttribute("draggable", "false");
img.setAttribute("src", "/1.img/logo.png");
img.setAttribute("alt", "Logo Na Fali Słowa");
img.setAttribute("class", "logo");
h1.appendChild(img);
var titleH1 = document.createElement("h1");
titleH1.style.textAlign = "center";
titleH1.textContent = "Na Fali Słowa";
titleH1.style.fontSize = "1em";
h1.appendChild(titleH1);
div.appendChild(h1);
var logo = document.getElementById("logo");
logo.appendChild(div);

//spis
var leftColumnDiv = document.createElement("div");
leftColumnDiv.className = "leftcolumn";
var cardDiv = document.createElement("div");
cardDiv.className = "card";
cardDiv.style.paddingTop = "5px";
var h2 = document.createElement("h2");
h2.textContent = "Spis treści: ";
cardDiv.appendChild(h2);
var linksData = [
    { text: "Wyszukaj", href: "/katalog/wyszukaj/", className: "fakeimg faketop button" },
    { text: "Najnowsze", href: "/katalog/najnowsze/", className: "fakeimg fakemid button" },
    { text: "Alfabetycznie", href: "/katalog/alfabetycznie/a/", className: "fakeimg fakemid button" },
    { text: "Gatunek", className: "fakeimg fakemid button"},
        { text: "   Strofy", href: "/katalog/gatunek/strofy/", className: "fakeimg fakemid button hidden", id: "dropdownA" },
        { text: "   Sonety", href: "/katalog/gatunek/sonety/", className: "fakeimg fakemid button hidden", id: "dropdownB" },
        { text: "   Pantum", href: "/katalog/gatunek/pantum/", className: "fakeimg fakemid button hidden", id: "dropdownC" },
        { text: "   Tautogramy", href: "/katalog/gatunek/tautogramy/", className: "fakeimg fakemid button hidden", id: "dropdownD" },
        { text: "   Inne...", href: "/katalog/gatunek/inne/", className: "fakeimg fakemid button hidden", id: "dropdownE" },
    { text: "Kategorie", className: "fakeimg fakemid button"},
        { text: "   Tematyka", className: "fakeimg fakemid button hidden", id: "dropdown2A" },
            { text: "      Miłość", href: "/katalog/kategorie/tematyka/milosc/", className: "fakeimg fakemid button hidden", id: "dropdown2A1" },
            { text: "      Erotyka", href: "/katalog/kategorie/tematyka/erotyka/", className: "fakeimg fakemid button hidden", id: "dropdown2A2" },
            { text: "      Tęsknota", href: "/katalog/kategorie/tematyka/tesknota/", className: "fakeimg fakemid button hidden", id: "dropdown2A3" },
            { text: "      Ból", href: "/katalog/kategorie/tematyka/bol/", className: "fakeimg fakemid button hidden", id: "dropdown2A4" },
            { text: "      Życie", href: "/katalog/kategorie/tematyka/zycie/", className: "fakeimg fakemid button hidden", id: "dropdown2A5" },
            { text: "      Wiara", href: "/katalog/kategorie/tematyka/wiara/", className: "fakeimg fakemid button hidden", id: "dropdown2A6" },
            { text: "      Patriotyzm", href: "/katalog/kategorie/tematyka/patriotyzm/", className: "fakeimg fakemid button hidden", id: "dropdown2A7" },
            { text: "      Nadzieja", href: "/katalog/kategorie/tematyka/nadzieja/", className: "fakeimg fakemid button hidden", id: "dropdown2A8" },
            { text: "      Przyjaźń", href: "/katalog/kategorie/tematyka/przyjazn/", className: "fakeimg fakemid button hidden", id: "dropdown2A9" },
            { text: "      Przyroda", href: "/katalog/kategorie/tematyka/przyroda/", className: "fakeimg fakemid button hidden", id: "dropdown2A10" },
            { text: "      Wariacja", href: "/katalog/kategorie/tematyka/wariacja/", className: "fakeimg fakemid button hidden", id: "dropdown2A11" },
            { text: "      Satyra", href: "/katalog/kategorie/tematyka/satyra/", className: "fakeimg fakemid button hidden", id: "dropdown2A12" },
        { text: "   Serie", className: "fakeimg fakemid button hidden", id: "dropdown2B" },
            { text: "      Dla dzieci", href: "/katalog/kategorie/serie/dla_dzieci/", className: "fakeimg fakemid button hidden", id: "dropdown2B1" },
            { text: "      Życzenia", href: "/katalog/kategorie/serie/zyczenia/", className: "fakeimg fakemid button hidden", id: "dropdown2B2" },
            { text: "      List do...", href: "/katalog/kategorie/serie/list_do/", className: "fakeimg fakemid button hidden", id: "dropdown2B3" },
            { text: "      Z pamiętnika...", href: "/katalog/kategorie/serie/z_pamietnika/", className: "fakeimg fakemid button hidden", id: "dropdown2B4" },
            { text: "      Obrazkowe", href: "/katalog/kategorie/serie/obrazkowe/", className: "fakeimg fakemid button hidden", id: "dropdown2B5" },
        { text: "   Wiersze białe", href: "/katalog/kategorie/wiersze_biale/", className: "fakeimg fakemid button hidden", id: "dropdown2C" },
        { text: "   Miniatury", href: "/katalog/kategorie/miniatury/", className: "fakeimg fakemid button hidden", id: "dropdown2D" },
    { text: "Lata", className: "fakeimg fakemid button" },
        { text: "   2017", href: "/katalog/lata/2017/", className: "fakeimg fakemid button hidden", id: "dropdown3A" },
        { text: "   2018", href: "/katalog/lata/2018/", className: "fakeimg fakemid button hidden", id: "dropdown3B" },
        { text: "   2019", href: "/katalog/lata/2019/", className: "fakeimg fakemid button hidden", id: "dropdown3C" },
        { text: "   2020", href: "/katalog/lata/2020/", className: "fakeimg fakemid button hidden", id: "dropdown3D" },
        { text: "   2021", href: "/katalog/lata/2021/", className: "fakeimg fakemid button hidden", id: "dropdown3E" },
        { text: "   2022", href: "/katalog/lata/2022/", className: "fakeimg fakemid button hidden", id: "dropdown3F" },
        { text: "   2023", href: "/katalog/lata/2023/", className: "fakeimg fakemid button hidden", id: "dropdown3G" },
        { text: "   2024", href: "/katalog/lata/2024/", className: "fakeimg fakemid button hidden", id: "dropdown3H" },
        { text: "   2025", href: "/katalog/lata/2025/", className: "fakeimg fakemid button hidden", id: "dropdown3I" },
        { text: "   2026", href: "/katalog/lata/2026/", className: "fakeimg fakemid button hidden", id: "dropdown3J" },
        { text: "   2027", href: "/katalog/lata/2027/", className: "fakeimg fakemid button hidden", id: "dropdown3K" },
        { text: "   2028", href: "/katalog/lata/2028/", className: "fakeimg fakemid button hidden", id: "dropdown3L" },
        { text: "   2029", href: "/katalog/lata/2029/", className: "fakeimg fakemid button hidden", id: "dropdown3M" },
    { text: "Tomiki", href: "/katalog/tomiki/", className: "fakeimg fakemid button" },
    { text: "Antologie", href: "/katalog/antologie/", className: "fakeimg fakemid button" },
    { text: "Nagrodzone", href: "/katalog/nagrodzone/", className: "fakeimg fakebot button" }
];

linksData.forEach(function(linkData) {
    if (linkData.text == "Gatunek") {
        var link = document.createElement("button");
        link.onclick = function() {
            dropdowns();
        };
    }
    else if (linkData.text == "Kategorie") {
        var link = document.createElement("button");
        link.onclick = function() {
            dropdowns2();
        };
    }
    else if (linkData.text == "   Tematyka") {
        var link = document.createElement("button");
        link.onclick = function() {
            drop1downs2();
        };
    }
    else if (linkData.text == "   Serie") {
        var link = document.createElement("button");
        link.onclick = function() {
            drop2downs2();
        };
    }
    else if (linkData.text == "Lata") {
        var link = document.createElement("button");
        link.onclick = function() {
            dropdowns3();
        };
    }
    else {
        var link = document.createElement("a");
    }
    link.textContent = linkData.text;
    link.href = linkData.href;
    link.className = linkData.className;
    link.id = linkData.id;
    link.setAttribute("draggable", "false");
    cardDiv.appendChild(link);
});

leftColumnDiv.appendChild(cardDiv);
var spisElement = document.getElementById("spis");
spisElement.appendChild(leftColumnDiv);

var rightColumnDiv = document.querySelector(".rightcolumn");

// Tworzenie pierwszej karty
var card1 = document.createElement("div");
card1.className = "card";
card1.style.paddingTop = "5px";

// Dodawanie tytułu do pierwszej karty
var h2_1 = document.createElement("h2");
h2_1.textContent = "O mnie:";
card1.appendChild(h2_1);

// Tworzenie linku "Moja biografia"
var bioLink = document.createElement("a");
bioLink.textContent = "Moja biografia";
bioLink.href = "/";
bioLink.className = "fakeimg button";
bioLink.setAttribute("draggable", "false");
card1.appendChild(bioLink);

// Dodanie pierwszej karty do "rightcolumn"
rightColumnDiv.appendChild(card1);

// Tworzenie drugiej karty
var card2 = document.createElement("div");
card2.className = "card";
card2.style.paddingTop = "5px";

// Dodawanie tytułu do drugiej karty
var h2_2 = document.createElement("h2");
h2_2.textContent = "Wybrane wiersze:";
card2.appendChild(h2_2);

// Tworzenie pięciu linków do wybranych wierszy
for (var i = 1; i <= 5; i++) {
    var randomLink = document.createElement("a");
    if (i == 1) {
        randomLink.className = "fakeimg faketop button";
    }
    else if (i== 5) {
        randomLink.className = "fakeimg fakebot button";
    } else {randomLink.className = "fakeimg fakemid button";}
    randomLink.setAttribute("draggable", "false");
    randomLink.href = "";
    randomLink.id = "random" + i;
    card2.appendChild(randomLink);
}

// Dodanie drugiej karty do "rightcolumn"
rightColumnDiv.appendChild(card2);

// Tworzenie trzeciej karty
var card3 = document.createElement("div");
card3.className = "card";
card3.style.paddingTop = "5px";

// Dodawanie tytułu do trzeciej karty
var h3_3 = document.createElement("h3");
h3_3.textContent = "Zaobserwuj mnie na Facebooku:";
card3.appendChild(h3_3);

// Tworzenie linku do Facebooka
var facebookLink = document.createElement("a");
facebookLink.textContent = "Na Fali Słowa";
facebookLink.href = "https://www.facebook.com/nafalislowa";
facebookLink.className = "fakeimg button";
facebookLink.setAttribute("draggable", "false");
facebookLink.setAttribute("target", "_blank");
card3.appendChild(facebookLink);

// Dodanie trzeciej karty do "rightcolumn"
rightColumnDiv.appendChild(card3);


//prawa_autorskie

var midColumnDiv = document.createElement("div");
midColumnDiv.className = "midcolumn";
midColumnDiv.style.paddingBottom = "20px";

// Tworzenie elementu div dla karty
var cardDiv = document.createElement("div");
cardDiv.className = "card";
cardDiv.style.padding = "20px";

// Tworzenie przycisku
var button = document.createElement("button");
button.className = "fakeimg";
button.style.textAlign = "center";
button.style.padding = "15px";
button.textContent = "Prawa autorskie";
button.onclick = openForm; // Dodanie funkcji obsługi zdarzeń onclick

// Dodanie przycisku do karty
cardDiv.appendChild(button);

// Dodanie karty do kolumny środkowej
midColumnDiv.appendChild(cardDiv);

// Dodanie kolumny środkowej do dokumentu
document.body.appendChild(midColumnDiv);

// Tworzenie formularza popup
var formPopupDiv = document.createElement("div");
formPopupDiv.className = "form-popup";
formPopupDiv.id = "myForm";

// Tworzenie formularza
var form = document.createElement("form");
form.className = "form-container";

// Tworzenie nagłówka formularza
var h2 = document.createElement("h2");
h2.textContent = "Ustawa o prawie autorskim i prawach pokrewnych";
form.appendChild(h2);

// Tworzenie treści formularza
var h3 = document.createElement("h3");
h3.innerHTML = "Art. 115.0<br><br>1. Kto przywłaszcza sobie autorstwo albo wprowadza w błąd co do autorstwa całości lub części cudzego utworu albo artystycznego wykonania, podlega grzywnie, karze ograniczenia wolności albo pozbawienia wolności do lat 3.<br><br>2. Tej samej karze podlega, kto rozpowszechnia bez podania nazwiska lub pseudonimu twórcy cudzy utwór w wersji oryginalnej albo w postaci opracowania, artystyczne wykonanie albo publicznie zniekształca taki utwór, artystyczne wykonanie, fonogram, wideogram lub nadanie.";
form.appendChild(h3);

// Tworzenie przycisku zamknięcia formularza
var closeButton = document.createElement("button");
closeButton.type = "button";
closeButton.className = "btn";
closeButton.textContent = "Zamknij";
closeButton.onclick = closeForm; // Dodanie funkcji obsługi zdarzeń onclick

// Dodanie przycisku zamknięcia do formularza
form.appendChild(closeButton);

// Dodanie formularza do formularza popup
formPopupDiv.appendChild(form);

// Dodanie formularza popup do dokumentu
document.body.appendChild(formPopupDiv);


function displayLatestPoems(containerId) {
    var container = document.getElementById(containerId);

    fetch('/strony.json')
    .then(response => response.json())
    .then(data => {
        // Posortuj dane o stronach według daty malejąco
        data.sort((a, b) => {
            var dateA = new Date(a.pageDate.split('.').reverse().join('.'));
            var dateB = new Date(b.pageDate.split('.').reverse().join('.'));
            
            return dateB - dateA; // Sortowanie malejąco
        });

        // Wybierz 10 najpóźniej dodanych wierszy
        var latestPoems = data.slice(0, 10);

        // Iteruj po wybranych wierszach i generuj odnośniki
        latestPoems.forEach(function(poem) {
            var pageTitle = poem.pageTitle;
            var pageTitleUrl = poem.pageTitleSave;

            // Utwórz odnośnik
            var link = document.createElement("a");
            link.className = "fakeimg button";
            link.draggable = false;
            link.href = "/wiersze/" + pageTitleUrl + "/";
            link.textContent = pageTitle;

            // Utwórz element h3 i dodaj do niego odnośnik
            var heading = document.createElement("h3");
            heading.className = "item";
            heading.appendChild(link);

            // Dodaj element h3 do kontenera
            container.appendChild(heading);
        });
    })
    .catch(error => console.error('Błąd podczas odczytu danych:', error));
}

function generatePageLinksDate(containerId, selectedYear) {
    var container = document.getElementById(containerId);

    fetch('/strony.json')
    .then(response => response.json())
    .then(data => {
        // Filtruj dane dla wybranego roku
        data = data.filter(strona => {
            var dateParts = strona.pageDate.split('.');
            var year = parseInt(dateParts[2]);
            return year === selectedYear;
        });

        // Posortuj dane o stronach według daty
        data.sort((a, b) => {
            // Konwertuj daty na obiekty Date
            var dateA = new Date(a.pageDate.split('.').reverse().join('.'));
            var dateB = new Date(b.pageDate.split('.').reverse().join('.'));
            
            // Porównaj daty
            return dateA - dateB;
        });

        var currentMonth = null;
        var currentYear = null;

        // Mapowanie numerów miesięcy na ich polskie odpowiedniki
        var monthNames = [
            "Styczeń:", "Luty:", "Marzec:", "Kwiecień:", "Maj:", "Czerwiec:",
            "Lipiec:", "Sierpień:", "Wrzesień:", "Październik:", "Listopad:", "Grudzień:"
        ];

        // Iteruj po posortowanych danych o stronach i generuj odnośniki
        data.forEach(function(strona) {
            var pageTitle = strona.pageTitle;
            var pageTitleUrl = strona.pageTitleSave;
            var saveCategories = strona.saveCategories.toLowerCase(); // Przekształć kategorie na małe litery
            var dateParts = strona.pageDate.split('.');
            var month = parseInt(dateParts[1]);
            var year = parseInt(dateParts[2]);

            // Utwórz odnośnik
            var link = document.createElement("a");
            link.className = "fakeimg button";
            link.draggable = false;
            link.href = "/wiersze/" + pageTitleUrl + "/";
            link.textContent = pageTitle;

            // Utwórz element h3 i dodaj do niego odnośnik
            var heading = document.createElement("h3");
            heading.className = "item";
            heading.appendChild(link);

            // Sprawdź, czy miesiąc się zmienił
            if (month !== currentMonth) {
                // Utwórz nagłówek dla nowego miesiąca
                var monthHeading = document.createElement("h2");
                monthHeading.textContent = monthNames[month - 1]; // Indeksowanie od 0
                container.appendChild(monthHeading);

                // Zaktualizuj bieżący miesiąc
                currentMonth = month;
            }

            // Dodaj element h3 do kontenera
            container.appendChild(heading);
        });
    })
    .catch(error => console.error('Błąd podczas odczytu danych:', error));
}

function generatePageLinks(containerId, desiredCategory, desiredFirstLetter) {
    var container = document.getElementById(containerId);
    
    fetch('/strony.json')
    .then(response => response.json())
    .then(data => {
        // Posortuj dane o stronach alfabetycznie według tytułów
        data.sort((a, b) => a.pageTitle.localeCompare(b.pageTitle, 'pl'));

        let ixPages = data.filter(page => page.pageTitle.includes("IX"));
        ixPages.forEach(page => {
            let index = data.indexOf(page);
            data.splice(index, 1);
            data.splice(index + 4, 0, page);
        });

        // Iteruj po posortowanych danych o stronach i generuj odnośniki
        data.forEach(function(strona) {
            var pageTitle = strona.pageTitle;
            var pageTitleUrl = strona.pageTitleSave;
            var saveCategories = strona.saveCategories.toLowerCase(); // Przekształć kategorie na małe litery
            var firstLetter = pageTitle.charAt(0).toLowerCase(); // Pobierz pierwszy znak tytułu

            // Sprawdź, czy pierwszy znak tytułu pasuje do podanego lub czy podany znak jest pusty
            if (firstLetter === desiredFirstLetter.toLowerCase() || desiredFirstLetter === "") {
                // Sprawdź, czy strona zawiera żądaną kategorię lub czy kategoria jest pusta
                if (saveCategories.includes(desiredCategory.toLowerCase()) || desiredCategory === "") {
                    // Utwórz odnośnik
                    var link = document.createElement("a");
                    link.className = "fakeimg button";
                    link.draggable = false;
                    link.href = "/wiersze/" + pageTitleUrl + "/";
                    link.textContent = pageTitle;

                    // Utwórz element h3 i dodaj do niego odnośnik
                    var heading = document.createElement("h3");
                    heading.className = "item";
                    heading.appendChild(link);

                    // Dodaj element h3 do kontenera
                    container.appendChild(heading);
                }
            }
        });
    })
    .catch(error => console.error('Błąd podczas odczytu danych:', error));
}

var form = document.getElementById("myForm");

var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");
var random3 = document.getElementById("random3");
var random4 = document.getElementById("random4");
var random5 = document.getElementById("random5");

random1.href = "/wiersze/szczyt_wyobraźni/";
random2.href = "/wiersze/na_poddaszu/";
random3.href = "/wiersze/morzu2/";
random4.href = "/wiersze/zakazany_owoc2/";
random5.href = "/wiersze/ogród_ciszy/";

random1.textContent = "Szczyt wyobraźni";
random2.textContent = "Na poddaszu";
random3.textContent = "Morzu";
random4.textContent = "Zakazany owoc";
random5.textContent = "Ogród ciszy";

var dropdownA= document.getElementById("dropdownA");
var dropdownB= document.getElementById("dropdownB");
var dropdownC= document.getElementById("dropdownC");
var dropdownD= document.getElementById("dropdownD");
var dropdownE= document.getElementById("dropdownE");

var dropdown2A= document.getElementById("dropdown2A");
var dropdown2B= document.getElementById("dropdown2B");
var dropdown2C= document.getElementById("dropdown2C");
var dropdown2D= document.getElementById("dropdown2D");

var dropdown2A1= document.getElementById("dropdown2A1");
var dropdown2A2= document.getElementById("dropdown2A2");
var dropdown2A3= document.getElementById("dropdown2A3");
var dropdown2A4= document.getElementById("dropdown2A4");
var dropdown2A5= document.getElementById("dropdown2A5");
var dropdown2A6= document.getElementById("dropdown2A6");
var dropdown2A7= document.getElementById("dropdown2A7");
var dropdown2A8= document.getElementById("dropdown2A8");
var dropdown2A9= document.getElementById("dropdown2A9");
var dropdown2A10= document.getElementById("dropdown2A10");
var dropdown2A11= document.getElementById("dropdown2A11");
var dropdown2A12= document.getElementById("dropdown2A12");

var dropdown2B1= document.getElementById("dropdown2B1");
var dropdown2B2= document.getElementById("dropdown2B2");
var dropdown2B3= document.getElementById("dropdown2B3");
var dropdown2B4= document.getElementById("dropdown2B4");
var dropdown2B5= document.getElementById("dropdown2B5");

var dropdown3A= document.getElementById("dropdown3A");
var dropdown3B= document.getElementById("dropdown3B");
var dropdown3C= document.getElementById("dropdown3C");
var dropdown3D= document.getElementById("dropdown3D");
var dropdown3E= document.getElementById("dropdown3E");
var dropdown3F= document.getElementById("dropdown3F");
var dropdown3G= document.getElementById("dropdown3G");
var dropdown3H= document.getElementById("dropdown3H");
var dropdown3I= document.getElementById("dropdown3I");
var dropdown3J= document.getElementById("dropdown3J");
var dropdown3K= document.getElementById("dropdown3K");
var dropdown3L= document.getElementById("dropdown3L");
var dropdown3M= document.getElementById("dropdown3M");

if(localStorage.dropcount%2===0){
    dropdownA.classList.toggle("hidden");
    dropdownB.classList.toggle("hidden");
    dropdownC.classList.toggle("hidden");
    dropdownD.classList.toggle("hidden");
    dropdownE.classList.toggle("hidden");
}

if(localStorage.dropcount2%2===0){
    dropdown2A.classList.toggle("hidden");
    dropdown2B.classList.toggle("hidden");
    dropdown2C.classList.toggle("hidden");
    dropdown2D.classList.toggle("hidden");
}

if(localStorage.drop1count2%2===0){
    dropdown2A1.classList.toggle("hidden");
    dropdown2A2.classList.toggle("hidden");
    dropdown2A3.classList.toggle("hidden");
    dropdown2A4.classList.toggle("hidden");
    dropdown2A5.classList.toggle("hidden");
    dropdown2A6.classList.toggle("hidden");
    dropdown2A7.classList.toggle("hidden");
    dropdown2A8.classList.toggle("hidden");
    dropdown2A9.classList.toggle("hidden");
    dropdown2A10.classList.toggle("hidden");
    dropdown2A11.classList.toggle("hidden");
    dropdown2A12.classList.toggle("hidden");
}

if(localStorage.drop2count2%2===0){
    dropdown2B1.classList.toggle("hidden");
    dropdown2B2.classList.toggle("hidden");
    dropdown2B3.classList.toggle("hidden");
    dropdown2B4.classList.toggle("hidden");
    dropdown2B5.classList.toggle("hidden");
}

if(localStorage.dropcount3%2===0){
    dropdown3A.classList.toggle("hidden");
    dropdown3B.classList.toggle("hidden");
    dropdown3C.classList.toggle("hidden");
    dropdown3D.classList.toggle("hidden");
    dropdown3E.classList.toggle("hidden");
    dropdown3F.classList.toggle("hidden");
    dropdown3G.classList.toggle("hidden");
    dropdown3H.classList.toggle("hidden");
    /*dropdown3I.classList.toggle("hidden");
    dropdown3J.classList.toggle("hidden");
    dropdown3K.classList.toggle("hidden");
    dropdown3L.classList.toggle("hidden");
    dropdown3M.classList.toggle("hidden");*/
}

function openForm() {
    form.classList.toggle("on");
}

function closeForm() {
    form.classList.toggle("on");

}
function dropdowns() {
    dropCounter();
    setTimeout(()=>{
        dropdownA.classList.toggle("hidden")
        setTimeout(()=>{
            dropdownB.classList.toggle("hidden");
            setTimeout(()=>{
                dropdownC.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdownD.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdownE.classList.toggle("hidden");
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function dropdowns2() {
    if(localStorage.drop1count2%2===0) drop1downs2()
    if(localStorage.drop2count2%2===0) drop2downs2()
    drop2Counter();
    setTimeout(()=>{
        dropdown2A.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown2B.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown2C.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown2D.classList.toggle("hidden");
                },20)
            },20)
        },20)
    },20)
}

function drop1downs2() {
    drop2Counter1();
    setTimeout(()=>{
        dropdown2A1.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown2A2.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown2A3.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown2A4.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdown2A5.classList.toggle("hidden");
                        setTimeout(()=>{
                            dropdown2A6.classList.toggle("hidden");
                            setTimeout(()=>{
                                dropdown2A7.classList.toggle("hidden");
                                setTimeout(()=>{
                                    dropdown2A8.classList.toggle("hidden");
                                    setTimeout(()=>{
                                        dropdown2A9.classList.toggle("hidden");
                                        setTimeout(()=>{
                                            dropdown2A10.classList.toggle("hidden");
                                            setTimeout(()=>{
                                                dropdown2A11.classList.toggle("hidden");
                                                setTimeout(()=>{
                                                    dropdown2A12.classList.toggle("hidden");
                                                },20)
                                            },20)
                                        },20)
                                    },20)
                                },20)
                            },20)
                        },20)
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function drop2downs2() {
    drop2Counter2();
    setTimeout(()=>{
        dropdown2B1.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown2B2.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown2B3.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown2B4.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdown2B5.classList.toggle("hidden");
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function dropdowns3() {
    drop3Counter();
    setTimeout(()=>{
        dropdown3A.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown3B.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown3C.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown3D.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdown3E.classList.toggle("hidden");
                        setTimeout(()=>{
                            dropdown3F.classList.toggle("hidden");
                              setTimeout(()=>{
                                dropdown3G.classList.toggle("hidden");
                                setTimeout(()=>{
                                    dropdown3H.classList.toggle("hidden");
                                    /*setTimeout(()=>{
                                        dropdown3I.classList.toggle("hidden");
                                        setTimeout(()=>{
                                            dropdown3J.classList.toggle("hidden");
                                            setTimeout(()=>{
                                                dropdown3K.classList.toggle("hidden");
                                                setTimeout(()=>{
                                                    dropdown3L.classList.toggle("hidden");
                                                    setTimeout(()=>{
                                                        dropdown3M.classList.toggle("hidden");
                                                    },20)
                                                },20)
                                            },20)
                                        },20)
                                    },20)*/
                                },20)
                            },20)
                        },20)
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function dropCounter() {
    if(Number(localStorage.dropcount)>9)
        localStorage.dropcount = 2;
    if (localStorage.dropcount) {
        localStorage.dropcount = Number(localStorage.dropcount)+1;
    }else{
        localStorage.dropcount = 0;
    }
    

}

function drop2Counter() {
    if(Number(localStorage.dropcount2)>9)
        localStorage.dropcount2 = 2;
    if (localStorage.dropcount2) {
        localStorage.dropcount2 = Number(localStorage.dropcount2)+1;
    }else{
        localStorage.dropcount2 = 0;
    }
}

function drop2Counter1() {
    if(Number(localStorage.drop1count2)>9)
        localStorage.drop1count2 = 2;
    if (localStorage.drop1count2) {
        localStorage.drop1count2 = Number(localStorage.drop1count2)+1;
    }else{
        localStorage.drop1count2 = 0;
    }
}

function drop2Counter2() {
    if(Number(localStorage.drop2count2)>9)
        localStorage.drop2count2 = 2;
    if (localStorage.drop2count2) {
        localStorage.drop2count2 = Number(localStorage.drop2count2)+1;
    }else{
        localStorage.drop2count2 = 0;
    }
}

function drop3Counter() {
    if(Number(localStorage.dropcount3)>9)
        localStorage.dropcount3 = 2;
    if (localStorage.dropcount3) {
        localStorage.dropcount3 = Number(localStorage.dropcount3)+1;
    }else{
        localStorage.dropcount3 = 0;
    }
}