//lager et tomt array
let kinobiletterArray = [];

//oppretter en funksjon kalt velg
function velg() {
    //setter filmvalg lik input verdien til index siden
    let filmvalg = document.getElementById("filmvalg").value;
    //setter feilfilm lik div´en feil film i index siden
    let feilFilm = document.getElementById("feilFilm");
    feilFilm.innerHTML =" ";
    //Dersom filmvalget er start valget, eller tomt så vil feilfilm meldingen vises i rød skrift
    if (filmvalg=== "Velg film her" || filmvalg === "") {
        feilFilm.innerHTML = "Må velge en film".fontcolor("red");
    }

    //Gjør det samme som med filmvalg, bare med antall, og feilmelding vises dersom antall er 0 eller mindre
    let antall = document.getElementById("antall").value;
    let feilantall = document.getElementById("feilAntall");
    feilantall.innerHTML =" ";
    if (antall <= 0) {
        feilantall.innerHTML = "Må skrive noe inn i antall".fontcolor("red");
    }

    //Gjør det samme igjen med fornavn inputen, og viser feilmelding dersom input er tom
    let fornavn = document.getElementById("fornavn").value;
    let feilFornavn = document.getElementById("feilFornavn");
    feilFornavn.innerHTML = "";
    if (fornavn === ''){
        feilFornavn.innerHTML = "Må skrive noe inn i Fornavn".fontcolor("red");
    }

    // Det samme som fornavn
    let etternavn = document.getElementById("etternavn").value;
    let feilEtternavn = document.getElementById("feilEtternavn");
    feilEtternavn.innerHTML = " ";
    if (etternavn === ""){
        feilEtternavn.innerHTML = "Må skrive noe inn i etternavn".fontcolor("red");
    }

    //Det samme som de andre, bare hvis input ikke er et nummer så vises feilmelding
    let telefonnr = document.getElementById("telefonnr").value;
    let feilTelefonnr = document.getElementById("feilTelefonnr");
    feilTelefonnr.innerHTML = " ";
    /*Her kunne man lagt til telefonnr lengde begrensning, men dette vil ikke gjøre det mulig for mennesker med
    utelandsk nummer å kjøpe bilett*/
    if (isNaN(telefonnr) || telefonnr === ""){
        feilTelefonnr.innerHTML = "Må skrive noe inn i telefonnr".fontcolor("red");
    }

    // det samme som resten bare at eposten må inneholde @ og . og ikke være tom for at det skal være gyldig
    let epost = document.getElementById("epost").value;
    let feilEpost = document.getElementById("feilEpost");
    feilEpost.innerHTML = "";
    if (epost === "" || !epost.includes("@") || !epost.includes(".")){
        feilEpost.innerHTML = "Må skrive noe inn i epost".fontcolor("red");
    }

    //Definerer bilett objekt
    const bilett = {
        filmvalg, antall, fornavn, etternavn, telefonnr, epost
    };

    //pusher bilett som inneholder alle inputverdiene inn i arrayet
    kinobiletterArray.push(bilett);
    //videre kjøres funksjonen vis bilett
    visBiletter();

    //Nullstiller alle input boksene så de blir blanke igjen
    document.getElementById("filmvalg").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

//lager funksjonen som viser biletter
function visBiletter() {
    //setter resultat lik resultat id i span i indexen
    let resultat = document.getElementById("resultat");
    //setter resultat til en uordnet liste
    resultat.innerHTML = "<ul>";

    //går igjennom alle elementene i arrayet og oppretter et listeelement for hver bilett
    kinobiletterArray.forEach(function (bilett) {
        //oppretter nytt liste element
        let li = document.createElement("li");
        //setter text innholdet til liste elementet med informasjonen om biletten
        li.textContent = `${bilett.filmvalg}, ${bilett.antall}, ${bilett.fornavn} ${bilett.etternavn}, ${bilett.telefonnr}, ${bilett.epost}`;
       //legger til det opprettede listeelementet til resultatlisten
        resultat.appendChild(li);
    });
    //avslutter den uordnede listen
    resultat.innerHTML += "</ul>";
}

//funksjon som nullstiller bilettene
function resetTickets() {
    //setter array lengden lik 0, som tømmer arrayet
    kinobiletterArray.length = 0;
    //kaller på funksjonen visBiletter() for å oppdatere visningen av biletter etter tilbakestillingen
    visBiletter();
}
