let kinobiletterArray = [];
function velg() {
    let filmvalg = document.getElementById("filmvalg").value;
    let feilFilm = document.getElementById("feilFilm");
    feilFilm.innerHTML =" ";
    if (filmvalg=== "Velg film her") {
        feilFilm.innerHTML = "Må velge en film".fontcolor("red");
        return;
    }

    let antall = document.getElementById("antall").value;
    let feilantall = document.getElementById("feilAntall");
    feilantall.innerHTML =" ";
    if (antall <= 0) {
        feilantall.innerHTML = "Må skrive noe inn i antall".fontcolor("red");
        return
    }

    let fornavn = document.getElementById("fornavn").value;
    let feilFornavn = document.getElementById("feilFornavn");
    feilFornavn.innerHTML = "";
    if (fornavn === ''){
        feilFornavn.innerHTML = "Må skrive noe inn i Fornavn".fontcolor("red");
        return;
    }

    let etternavn = document.getElementById("etternavn").value;
    let feilEtternavn = document.getElementById("feilEtternavn");
    feilEtternavn.innerHTML = " ";
    if (etternavn === ""){
        feilEtternavn.innerHTML = "Må skrive noe inn i etternavn".fontcolor("red");
        return;
    }

    let telefonnr = document.getElementById("telefonnr").value;
    let feilTelefonnr = document.getElementById("feilTelefonnr");
    feilTelefonnr.innerHTML = " ";
    /*Her kunne man lagt til telefonnr lengde begrensning, men dette vil ikke gjøre det mulig for mennesker med
    utelandsk nummer å kjøpe bilett*/
    if (isNaN(telefonnr) || telefonnr === ""){
        feilTelefonnr.innerHTML = "Må skrive noe inn i telefonnr".fontcolor("red");
        return;
    }

    let epost = document.getElementById("epost").value;
    let feilEpost = document.getElementById("feilEpost");
    feilEpost.innerHTML = "";
    if (epost === "" || !epost.includes("@")){
        feilEpost.innerHTML = "Må skrive noe inn i epost".fontcolor("red");
        return;
    }

    const bilett = {
        filmvalg, antall, fornavn, etternavn, telefonnr, epost
    };

    kinobiletterArray.push(bilett);
    visBiletter();

    document.getElementById("filmvalg").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

function visBiletter() {
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "<ul>";

    kinobiletterArray.forEach(function (bilett) {
        let li = document.createElement("li");
        li.textContent = ` ${bilett.filmvalg}, ${bilett.antall}, ${bilett.fornavn} ${bilett.etternavn}, ${bilett.telefonnr}, ${bilett.epost}`;
        resultat.appendChild(li);
    });
    resultat.innerHTML += "</ul>";
}
function resetTickets() {
    kinobiletterArray.length = 0;
    visBiletter();
}
