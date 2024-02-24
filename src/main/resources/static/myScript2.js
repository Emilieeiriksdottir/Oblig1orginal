//Oppretter et array for kinobilettene
let kinoBillettArray =[];
//Lager egene funksjoner som sjekker at input er riktig ikke bare når kjøp knappen trykkes
//En funksjon som sjekker at antallet stemmer
function sjekkAntall(){
    //Setter antall lik antall i index siden sin value, samme med antallfeilmelding
    let antall = document.getElementById("antall").value;
    let feilantall = document.getElementById("feilAntall");
    feilantall.innerHTML =" ";
    //Dersom antall ikke er et tall får vi feilmelding opp
    if (isNaN(antall)) {
        feilantall.innerHTML = "Må skrive noe inn i antall".fontcolor("red");
    }
}

/*Definerer en regex validering som skal hjelpe å forsikre riktig input av navn. Her har jeg brukt følgende nettsider for
 hjelp med regex validering: https://www.quora.com/What-does-this-regex-match-a-z
 og https://cerveceroscodigo.github.io/ServiciosDeVivienda/constant-values.html#lib.RegexTester.KUN_BOKSTAVER */

const navnRegex = /^[A-Z][a-z]{1,30}$/;
//Lager en funksjon som sjekker at fornavnet stemmer
function sjekkFornavn(){
    //Gjør det samme som på antall med fornavn inputen, og viser feilmelding dersom input ikke på riktig format
    let fornavn = document.getElementById("fornavn").value;
    let feilFornavn = document.getElementById("feilFornavn");
    feilFornavn.innerHTML = "";
    if (navnRegex.test(fornavn)===false){
        feilFornavn.innerHTML = "Må skrive noe inn i Fornavn".fontcolor("red");
    }
}

//Gjør det samme med etternavn som fornavn
function sjekkEtternavn(){
    let etternavn = document.getElementById("etternavn").value;
    let feilEtternavn = document.getElementById("feilEtternavn");
    feilEtternavn.innerHTML = "";
    if (navnRegex.test(etternavn)===false){
        feilEtternavn.innerHTML = "Må skrive noe inn i etternavn".fontcolor("red");
    }
}

//For telefonvalidering har jeg brukt kode fra https://stackoverflow.com/questions/37114166/regex-for-8-digit-phone-number-singapore-number-length
 const telefonnrRegex =  /^[0-9]{8}$/;
//Lager en funksjon her på samme måte som de andre og sjekker at telefonnummeret er på riktig format
function sjekkTelefon(){
      let telefonnr = document.getElementById("telefonnr").value;
      let feilTelefonnr = document.getElementById("feilTelefonnr");
      feilTelefonnr.innerHTML = " ";
      if (telefonnrRegex.test(telefonnr)===false){
          feilTelefonnr.innerHTML = "Må skrive noe inn i telefonnr".fontcolor("red");
      }
}

//For hjelp med email regex validering har jeg brukt følgende nettside: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
const epostRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//Lager en siste sjekk funksjon her med epost for å forsikre at epost er på riktig format
function sjekkEpost() {
    let epost = document.getElementById("epost").value;
    let feilEpost = document.getElementById("feilEpost");
    feilEpost.innerHTML = "";
    if (epostRegex.test(epost)===false) {
        feilEpost.innerHTML = "Må skrive noe inn i epost".fontcolor("red");
    }
}

//Inspirasjon tatt fra powerpointen Intro. JavaScript - del 2 på Canvas
function visBilett(){
    //Definerer ut som en tom variabel
    let ut = "";
    //Setter i lik 0, mindre enn lengden til arrayet og skal øke med en hver gjennomgang. skriver ut arrayverdiene med index "i"
    for (let i=0; i < kinoBillettArray.length; i++){
        ut+="<table><tr>";
        ut+=kinoBillettArray[i].filmvalg+", "+kinoBillettArray[i].antall+", "+kinoBillettArray[i].fornavn+", "+kinoBillettArray[i].etternavn+", "+kinoBillettArray[i].telefonnr+", "+kinoBillettArray[i].epost;
        ut+="</tr>";
    }
    document.getElementById("resultat").innerHTML=ut;
}

function kjopBilett(){
   document.getElementById("feilFilm").innerHTML = "";
   document.getElementById("feilAntall").innerHTML ="";
   document.getElementById("feilFornavn").innerHTML = "";
   document.getElementById("feilEtternavn").innerHTML = "";
   document.getElementById("feilTelefonnr").innerHTML = "";
   document.getElementById("feilEpost").innerHTML ="";
   const filmvalg = document.getElementById("filmvalg").value;
   const antall1 = document.getElementById("antall").value;
   const antall = Number(antall1);
   const fornavn = document.getElementById("fornavn").value;
   const etternavn = document.getElementById("etternavn").value;
   const telefonnr1 = document.getElementById("telefonnr").value;
   const telefonnr = Number(telefonnr1);
   const epost = document.getElementById("epost").value;

   /* sjekker om inputene er tomme eller har riktig info og sikrer at dersom en validering ikke stemmer så blir
   de ikke lagt inn i bilett eller lagt til i arrayet*/
    if (filmvalg==="" || filmvalg === "Velg film her"){
        document.getElementById("feilFilm").innerHTML= "Må velge en film".fontcolor("red");
    } else if (isNaN(antall) || antall<=0){
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall".fontcolor("red");
    } else if (navnRegex.test(fornavn)===false){
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i Fornavn".fontcolor("red");
    }  else if (navnRegex.test(etternavn)===false) {
        document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i Etternavn".fontcolor("red");
    } else if (isNaN(telefonnr)) {
        document.getElementById("feilTelefonnr").innerHTML = "Må skrive noe inn i telefonnr".fontcolor("red");
    } else if (epostRegex.test(epost)===false){
        document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost".fontcolor("red");
    } else {
        const bilett = {
            filmvalg, antall, fornavn, etternavn, telefonnr, epost
        };

        //Legger til bilett  arrayet
        kinoBillettArray.push(bilett);
        visBilett();

        //Nullstiller alle input boksene så de blir blanke igjen
        document.getElementById("filmvalg").value = "Velg film her";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }
}

function resetTickets() {
    //tømmer reultatet for biletter
    document.getElementById("resultat").innerHTML=" ";
    //kaller på funksjonen visBiletter() for å oppdatere visningen av biletter etter tilbakestillingen
    visBiletter();
}
