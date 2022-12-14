var popar_2019 = {
    "PiS": 43.59,
    "KO": 27.4,
    "Lewica": 12.56,
    "PSL": 8.55,
    "Konfederacja": 6.81
};
var partie = ["PiS", "KO", "Lewica", "PSL", "Konfederacja"];
var komitety = ["PiS", "KO", "Lewica", "PSL", "Konfederacja", "PL2050"];
var barwy = {

        "PiS": '#41709E', 
        "KO": '#E46701', 
        "Lewica": '#cc1a4c', 
        "PSL": '#3DA63D', 
        "Konfederacja": '#28344C',
        "PL2050": '#E4A80A',
        "Mniejszość Niemiecka": '#666666'
};
var okregi = [
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 432436,
        "Siedziba": "Legnica",
        "Wojewodztwo": "dolnośląskie",
        "PiS": 42.4,
        "KO": 25.02,
        "Lewica": 16.43,
        "PSL": 7.17,
        "Konfederacja": 5.85
    },
    {
        "Liczba mandatow": 8,
        "Glosy wazne": 283002,
        "Siedziba": "Wałbrzych",
        "Wojewodztwo": "dolnośląskie",
        "PiS": 40.54,
        "KO": 32.09,
        "Lewica": 12.53,
        "PSL": 7.25,
        "Konfederacja": 5.42
    },
    {
        "Liczba mandatow": 14,
        "Glosy wazne": 654455,
        "Siedziba": "Wrocław",
        "Wojewodztwo": "dolnośląskie",
        "PiS": 34.67,
        "KO": 32.8,
        "Lewica": 15.41,
        "PSL": 6.46,
        "Konfederacja": 7.45
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 459982,
        "Siedziba": "Bydgoszcz",
        "Wojewodztwo": "kujawsko-pomorskie",
        "PiS": 36.43,
        "KO": 31.05,
        "Lewica": 15.17,
        "PSL": 9.02,
        "Konfederacja": 7.05
    },
    {
        "Liczba mandatow": 13,
        "Glosy wazne": 452330,
        "Siedziba": "Toruń",
        "Wojewodztwo": "kujawsko-pomorskie",
        "PiS": 40.38,
        "KO": 26.42,
        "Lewica": 14.83,
        "PSL": 10.88,
        "Konfederacja": 6.33
    },
    {
        "Liczba mandatow": 15,
        "Glosy wazne": 565597,
        "Siedziba": "Lublin",
        "Wojewodztwo": "lubelskie",
        "PiS": 55.39,
        "KO": 19.3,
        "Lewica": 9.1,
        "PSL": 7.81,
        "Konfederacja": 7.07
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 401318,
        "Siedziba": "Chełm",
        "Wojewodztwo": "lubelskie",
        "PiS": 59.5,
        "KO": 14.8,
        "Lewica": 6.83,
        "PSL": 11.86,
        "Konfederacja": 5.84
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 437917,
        "Siedziba": "Zielona Góra",
        "Wojewodztwo": "lubuskie",
        "PiS": 34.3,
        "KO": 31.27,
        "Lewica": 15.61,
        "PSL": 11.63,
        "Konfederacja": 7.19
    },
    {
        "Liczba mandatow": 10,
        "Glosy wazne": 415540,
        "Siedziba": "Łódź",
        "Wojewodztwo": "łódzkie",
        "PiS": 32.9,
        "KO": 35.82,
        "Lewica": 20.1,
        "PSL": 4.53,
        "Konfederacja": 6.65
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 346326,
        "Siedziba": "Piotrków Trybunalski",
        "Wojewodztwo": "łódzkie",
        "PiS": 56.21,
        "KO": 15.64,
        "Lewica": 10.95,
        "PSL": 10.44,
        "Konfederacja": 6.76
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 460239,
        "Siedziba": "Sieradz",
        "Wojewodztwo": "łódzkie",
        "PiS": 49.81,
        "KO": 20.48,
        "Lewica": 11.98,
        "PSL": 10.29,
        "Konfederacja": 5.88
    },
    {
        "Liczba mandatow": 8,
        "Glosy wazne": 316214,
        "Siedziba": "Kraków",
        "Wojewodztwo": "małopolskie",
        "PiS": 53.48,
        "KO": 23.04,
        "Lewica": 8.51,
        "PSL": 7.9,
        "Konfederacja": 7.06
    },
    {
        "Liczba mandatow": 14,
        "Glosy wazne": 649287,
        "Siedziba": "Kraków",
        "Wojewodztwo": "małopolskie",
        "PiS": 39.56,
        "KO": 30.48,
        "Lewica": 13.01,
        "PSL": 7.27,
        "Konfederacja": 7.99
    },
    {
        "Liczba mandatow": 10,
        "Glosy wazne": 370199,
        "Siedziba": "Nowy Sącz",
        "Wojewodztwo": "małopolskie",
        "PiS": 65.8,
        "KO": 13.83,
        "Lewica": 6.07,
        "PSL": 7.35,
        "Konfederacja": 6.95
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 347088,
        "Siedziba": "Tarnów",
        "Wojewodztwo": "małopolskie",
        "PiS": 59.59,
        "KO": 14,
        "Lewica": 5.94,
        "PSL": 13.35,
        "Konfederacja": 7.11
    },
    {
        "Liczba mandatow": 10,
        "Glosy wazne": 370561,
        "Siedziba": "Płock",
        "Wojewodztwo": "mazowieckie",
        "PiS": 52.45,
        "KO": 16.85,
        "Lewica": 8.76,
        "PSL": 15.17,
        "Konfederacja": 5.24
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 335009,
        "Siedziba": "Radom",
        "Wojewodztwo": "mazowieckie",
        "PiS": 57.82,
        "KO": 17.15,
        "Lewica": 7.43,
        "PSL": 10.2,
        "Konfederacja": 5.89
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 452906,
        "Siedziba": "Siedlce",
        "Wojewodztwo": "mazowieckie",
        "PiS": 59.76,
        "KO": 13.94,
        "Lewica": 6.45,
        "PSL": 11.94,
        "Konfederacja": 6.49
    },
    {
        "Liczba mandatow": 20,
        "Glosy wazne": 1381917,
        "Siedziba": "Warszawa",
        "Wojewodztwo": "mazowieckie",
        "PiS": 27.49,
        "KO": 42.05,
        "Lewica": 18.19,
        "PSL": 4.75,
        "Konfederacja": 7.51
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 598727,
        "Siedziba": "Warszawa",
        "Wojewodztwo": "mazowieckie",
        "PiS": 40.89,
        "KO": 28.61,
        "Lewica": 13.09,
        "PSL": 8.6,
        "Konfederacja": 6.63
    },
    {
        "Liczba mandatow": 11,
        "Glosy wazne": 406439,
        "Siedziba": "Opole",
        "Wojewodztwo": "opolskie",
        "PiS": 37.64,
        "KO": 26.71,
        "Lewica": 11.74,
        "PSL": 10.31,
        "Konfederacja": 5.7
    },
    {
        "Liczba mandatow": 11,
        "Glosy wazne": 390581,
        "Siedziba": "Krosno",
        "Wojewodztwo": "podkarpackie",
        "PiS": 63.36,
        "KO": 15.94,
        "Lewica": 6.04,
        "PSL": 7.85,
        "Konfederacja": 6.81
    },
    {
        "Liczba mandatow": 15,
        "Glosy wazne": 588786,
        "Siedziba": "Rzeszów",
        "Wojewodztwo": "podkarpackie",
        "PiS": 62.38,
        "KO": 14.39,
        "Lewica": 6.59,
        "PSL": 7.79,
        "Konfederacja": 8.25
    },
    {
        "Liczba mandatow": 14,
        "Glosy wazne": 520578,
        "Siedziba": "Białystok",
        "Wojewodztwo": "podlaskie",
        "PiS": 52.04,
        "KO": 21.04,
        "Lewica": 9.09,
        "PSL": 9.33,
        "Konfederacja": 6.96
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 528829,
        "Siedziba": "Gdańsk",
        "Wojewodztwo": "pomorskie",
        "PiS": 32.1,
        "KO": 41.31,
        "Lewica": 13.47,
        "PSL": 5.9,
        "Konfederacja": 7.21
    },
    {
        "Liczba mandatow": 14,
        "Glosy wazne": 580722,
        "Siedziba": "Słupsk",
        "Wojewodztwo": "pomorskie",
        "PiS": 36.43,
        "KO": 35.85,
        "Lewica": 12.47,
        "PSL": 7.94,
        "Konfederacja": 7.3
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 389256,
        "Siedziba": "Bielsko-Biała",
        "Wojewodztwo": "śląskie",
        "PiS": 46.76,
        "KO": 27.2,
        "Lewica": 11.48,
        "PSL": 7.13,
        "Konfederacja": 7.48
    },
    {
        "Liczba mandatow": 7,
        "Glosy wazne": 284517,
        "Siedziba": "Częstochowa",
        "Wojewodztwo": "śląskie",
        "PiS": 44.28,
        "KO": 22.63,
        "Lewica": 15.59,
        "PSL": 8.68,
        "Konfederacja": 6.07
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 340647,
        "Siedziba": "Katowice",
        "Wojewodztwo": "śląskie",
        "PiS": 37.75,
        "KO": 32.61,
        "Lewica": 13.38,
        "PSL": 5.99,
        "Konfederacja": 7.67
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 333836,
        "Siedziba": "Bielsko-Biała",
        "Wojewodztwo": "śląskie",
        "PiS": 48.28,
        "KO": 27.71,
        "Lewica": 9.68,
        "PSL": 5.64,
        "Konfederacja": 7.17
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 469633,
        "Siedziba": "Katowice",
        "Wojewodztwo": "śląskie",
        "PiS": 39.19,
        "KO": 37.2,
        "Lewica": 11.92,
        "PSL": 4.37,
        "Konfederacja": 7.33
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 335431,
        "Siedziba": "Katowice",
        "Wojewodztwo": "śląskie",
        "PiS": 37.13,
        "KO": 29.66,
        "Lewica": 21.9,
        "PSL": 4.85,
        "Konfederacja": 6.45
    },
    {
        "Liczba mandatow": 16,
        "Glosy wazne": 569891,
        "Siedziba": "Kielce",
        "Wojewodztwo": "świętokrzyskie",
        "PiS": 55.18,
        "KO": 16.65,
        "Lewica": 9.95,
        "PSL": 9.88,
        "Konfederacja": 5.95
    },
    {
        "Liczba mandatow": 8,
        "Glosy wazne": 250819,
        "Siedziba": "Elbląg",
        "Wojewodztwo": "warmińsko-mazurskie",
        "PiS": 40.86,
        "KO": 28.43,
        "Lewica": 11.64,
        "PSL": 10.89,
        "Konfederacja": 5.66
    },
    {
        "Liczba mandatow": 10,
        "Glosy wazne": 331684,
        "Siedziba": "Olsztyn",
        "Wojewodztwo": "warmińsko-mazurskie",
        "PiS": 38.82,
        "KO": 26.46,
        "Lewica": 13.84,
        "PSL": 13.19,
        "Konfederacja": 6.97
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 459152,
        "Siedziba": "Kalisz",
        "Wojewodztwo": "wielkopolskie",
        "PiS": 42.48,
        "KO": 24.72,
        "Lewica": 13.43,
        "PSL": 12.8,
        "Konfederacja": 6.57
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 353041,
        "Siedziba": "Konin",
        "Wojewodztwo": "wielkopolskie",
        "PiS": 47.29,
        "KO": 20.48,
        "Lewica": 15.04,
        "PSL": 9.81,
        "Konfederacja": 6.74
    },
    {
        "Liczba mandatow": 9,
        "Glosy wazne": 349051,
        "Siedziba": "Piła",
        "Wojewodztwo": "wielkopolskie",
        "PiS": 35.64,
        "KO": 30.6,
        "Lewica": 13.28,
        "PSL": 13.86,
        "Konfederacja": 6.62
    },
    {
        "Liczba mandatow": 10,
        "Glosy wazne": 514527,
        "Siedziba": "Poznań",
        "Wojewodztwo": "wielkopolskie",
        "PiS": 25.33,
        "KO": 45.38,
        "Lewica": 16.49,
        "PSL": 6.2,
        "Konfederacja": 6.61
    },
    {
        "Liczba mandatow": 8,
        "Glosy wazne": 271711,
        "Siedziba": "Koszalin",
        "Wojewodztwo": "zachodniopomorskie",
        "PiS": 36.83,
        "KO": 32.31,
        "Lewica": 15.44,
        "PSL": 9.43,
        "Konfederacja": 5.98
    },
    {
        "Liczba mandatow": 12,
        "Glosy wazne": 470529,
        "Siedziba": "Szczecin",
        "Wojewodztwo": "zachodniopomorskie",
        "PiS": 35.11,
        "KO": 35.71,
        "Lewica": 15.25,
        "PSL": 7.4,
        "Konfederacja": 6.53
    }
]

function sortuj(a, b) {
    return b - a;
}
function akt_wynik() {
    var akt_wynik = {};
    for(kom of komitety) {
        var x = parseFloat(document.getElementById(kom).value);
        akt_wynik[kom] = x;
    }
    return akt_wynik;
}
function l_glosow(poparcie_komitetow, l_glosow_okr) {
    var glosy_komietow = {};
    
    for(let kom of komitety) {
        glosy_komietow[kom] = Math.round(poparcie_komitetow[kom] * l_glosow_okr / 100)
    }

    return glosy_komietow;
}

function oblicz_mandaty(poparcie_komitetow, l_glosow_okr, l_mandatow) {
    var ogolne_popar = akt_wynik();
    var glosy_komietow = l_glosow(poparcie_komitetow, l_glosow_okr);
    var glosy_kandatatow_z_komitetow = {};
    var glosy_wszystkich_kandatatow_w_okregu = [];
    var glosy_kandatatow_dostajacych_sie_do_Sejmu = [];
    var okr_mandaty = [];
    var komiety_ilosc_mandatow_w_okr = {};
    for(let kom of komitety) {
        glosy_kandatatow_z_komitetow[kom] = [];
        let i = 1;

        while(i <= l_mandatow) {
            let x = Math.round(glosy_komietow[kom] / i);
            glosy_kandatatow_z_komitetow[kom].push(x);
            glosy_wszystkich_kandatatow_w_okregu.push(x);
            i++;
        }
    }
    glosy_wszystkich_kandatatow_w_okregu.sort(sortuj);
    for(let kom of komitety) {
        if(ogolne_popar[kom] < 5.0 || (ogolne_popar[kom] < 8.0 && ["PiS", "KO"].includes(kom))) {
            let i = 0;
            while(i <= l_mandatow){
                glosy_wszystkich_kandatatow_w_okregu.splice(glosy_wszystkich_kandatatow_w_okregu.indexOf(glosy_kandatatow_z_komitetow[kom][i]), 1);
                i++;
            }
        }
    }
    glosy_kandatatow_dostajacych_sie_do_Sejmu = glosy_wszystkich_kandatatow_w_okregu.slice(0, l_mandatow);
    for(let kom of komitety) {
        let i = 0;
        while(i <= l_mandatow) {
            if(glosy_kandatatow_dostajacych_sie_do_Sejmu.includes(glosy_kandatatow_z_komitetow[kom][i])) {
                okr_mandaty.push(kom);
            }
            i++;
        }
    }

    if(okr_mandaty.length > l_mandatow) {
        okr_mandaty.slice(0, l_mandatow);
    }
    let il_0 = 0;
    let il_do_5 = 0;
    for(let kom of komitety) {
        if(ogolne_popar[kom]==0){          
            il_0 += 1;
        }
        if(ogolne_popar[kom] < 5) {
            il_do_5 += 1;
        }
    }
    for(let kom of komitety) {
        if(ogolne_popar[kom]==100 || il_0 > 4 || il_do_5 > 4) { 
            if(ogolne_popar[kom] >= 5) { 
                komiety_ilosc_mandatow_w_okr[kom] = l_mandatow;
            }
            else {
                komiety_ilosc_mandatow_w_okr[kom] = 0;
            }
        }
        else {
            komiety_ilosc_mandatow_w_okr[kom] = okr_mandaty.filter(k => k == kom).length;
        }
    }
	for(let kom of komitety) {
		if(ogolne_popar[kom] < 5.0) {
			komiety_ilosc_mandatow_w_okr[kom] = 0;
		}
    }
    return komiety_ilosc_mandatow_w_okr;
}

function chart(mandaty) {
    let proc_mand = {};
    
    for(let p of komitety) {
        let m = mandaty[p];
        proc_mand[p] = ((m/459) * 100).toFixed(2);
    }
    var x = "<div id='mandsejm'><svg id='mandsejmchart' viewBox='0 0 500 500' peserveAspectRatio='xMinYMi'>";
    let i = 471;
    for(let p of komitety) {
        if(mandaty[p] > 0) {
            x += "<circle r='150' cx='50%' cy='30%' meet' stroke="+barwy[p]+" stroke-width='100' stroke-dasharray="+i+",943 fill='none'></circle>";
            i -= (proc_mand[p]*471/100).toFixed(2);
        }
    }
    x += "</svg></div>";
    return x;

}

function podzial_mandatow(mandaty) {
    let proc_mand = {};
    let x = "<div id='pmandatow'><h2>Podział mandatów:</h2>";
    x += "<div id='legend'>";
    for(let p of ["PiS", "KO", "Lewica", "PSL", "Konfederacja", "PL2050", "Mniejszość Niemiecka"]) {
        let m = mandaty[p];
        if(p == "Mniejszość Niemiecka") {
            m = 1;
        }
        x += "<div><div id='barw' style=background-color:"+barwy[p]+"></div><div id='pm'>"+p+"&nbsp-&nbsp"+m+" </div></div>"
    }
    x += "</div><br><table><tr>"
    for(let p of ["PiS", "KO", "Lewica", "PSL", "Konfederacja", "PL2050", "Mniejszość Niemiecka"]) {
        let m = mandaty[p];
        if(p == "Mniejszość Niemiecka") {
            m = 1;
        }
        proc_mand[p] = ((m/459) * 100).toFixed(2);
        console.log(proc_mand[p]);
    }
    for(let p of komitety) {
         if(mandaty[p] > 0) {
            x += "<td width='"+proc_mand[p]+"%' style= background-color:"+barwy[p]+"></td>";
         }
    }
    x += "</tr></table>"
    var ch = chart(mandaty);
    x += ch;
    x += "</div>";
    return x;
}
function update() {
    var okregi_aktualne = [];
    for(let element of okregi) {
        let e = parseFloat(document.getElementById("PL2050").value);
        if(isNaN(e)) {
            element["PL2050"] = 0;
        }
        else {
            element["PL2050"] = e;
        }
    }
    for(let i = 0; i < 41; i++) {
        let x = {};
        Object.keys(okregi[i]).forEach((key) => {
            let value;
            if(partie.includes(key)) {
                let v = parseFloat(document.getElementById(key).value);
                if(v == 0 || isNaN(v)) {
                    value = 0;
                }
                else {
                    value = ((parseFloat(document.getElementById(key).value) / popar_2019[key])*okregi[i][key]).toFixed(2);
                    if(value > 100) {
                        value = 100;
                    } 
                }
            }
            else {
                value = okregi[i][key];
            }
            x[key] = value;
        });
        okregi_aktualne.push(x);
    }
    return okregi_aktualne;
}

function Hide_Show() {
    var x = document.getElementById("tabokr");
    var y = document.getElementById("HDTab");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
    if(y.innerText === "Pokaż"){
        y.innerText = "Ukryj";
    }
    else if(y.innerText === "Ukryj") {
        y.innerText ="Pokaż";
    }
}

function usun() {
    document.getElementById("wynik").innerHTML = "";
    document.getElementById("MN").innerHTML = "";
    document.getElementById("alert").innerHTML = "";
    for(let p of komitety) {
        document.getElementById(p.charAt(0)+p).innerHTML = "";
        document.getElementById(p).value = 0;
    }
}

function wyswietl() {
    var okregi_aktualne = update();
    var wynik = "<div id='tyttabokr'><h2>Dane z poszczególnych okręgów dla głównych partii:</h2><p><b>(Ilość głosów poszczególnych partii została obliczona na podstawie danych z 2019 roku.)</b></p>"
    wynik += "<button id='HDTab' onclick='Hide_Show()'>Ukryj</button></div><br>"
    wynik += "<div id='tabokr' style='overflow-x:auto'><table><thead><tr><th>Nr okręgu</th><th>Liczba mandatów (woj. opolskie - z wyłączeniem mandatu dla Mniejszości Niemieckiej)</th><th>Głosy ważne (dane z 2019)</th><th>Siedziba</th><th>Województwo</th><th>PiS</th><th>KO</th><th>Lewica</th><th>PSL</th><th>Konfederacja</th><th>PL2050</th>";
    wynik += "<th>PiS (głosy)</th><th>KO (głosy)</th><th>Lewica (głosy)</th><th>PSL (głosy)</th><th>Konfederacja (głosy)</th><th>PL2050 (głosy)</th>";
    wynik += "<th>PiS (mandaty)</th><th>KO (mandaty)</th><th>Lewica (mandaty)</th><th>PSL (mandaty)</th><th>Konfederacja (mandaty)</th><th>PL2050 (mandaty)</th></tr></thead><tbody class='okr'>";
    var i = 0;
    var mandaty_calosc = {};
    for(let kom of komitety) {
        mandaty_calosc[kom] = 0;
    }
    while(i < 41) {
        wynik += "<tr>";
        wynik += "<td>"+(i+1)+"</td>"
        Object.keys(okregi_aktualne[i]).forEach((key) => {
            if(key == "Glosy wazne") {
                wynik += "<td>"+okregi_aktualne[i][key].toLocaleString()+"</td>";
            }
            else if(komitety.includes(key)) {
                const format = (num, decimals) => num.toLocaleString('pl-PL', {
                    style: 'percent',
                    minimumFractionDigits: 2,      
                    maximumFractionDigits: 2
                });
                wynik += "<td>"+format(okregi_aktualne[i][key]/100)+"</td>";
            }
            else {
                wynik += "<td>"+okregi_aktualne[i][key]+"</td>";
            }
        });
        let popar = {
            "PiS": okregi_aktualne[i]["PiS"], 
            "KO": okregi_aktualne[i]["KO"], 
            "Lewica": okregi_aktualne[i]["Lewica"], 
            "PSL": okregi_aktualne[i]["PSL"], 
            "Konfederacja": okregi_aktualne[i]["Konfederacja"], 
            "PL2050": okregi_aktualne[i]["PL2050"]
        };
        let l_glosow_partii_w_okr = l_glosow(popar, okregi_aktualne[i]["Glosy wazne"]);
        let mandaty_w_okr = oblicz_mandaty(popar, okregi_aktualne[i]["Glosy wazne"], okregi_aktualne[i]["Liczba mandatow"]);
        for(let p of komitety) {
            wynik += "<td>"+l_glosow_partii_w_okr[p].toLocaleString()+"</td>"; 
        }
        for(let p of komitety) {
            wynik += "<td class='mand'>"+mandaty_w_okr[p]+"</td>";
            mandaty_calosc[p] += mandaty_w_okr[p];
        }
        wynik += "</tr>";
        i++;
    }
    wynik += "<tfoot><tr class='suma'><td colspan='17'>Suma mandatów (PiS|KO|Lewica|PSL|Konfederacja|PL2050):</td>";
    for(let p of komitety) {
        let x = mandaty_calosc[p];
        wynik += "<td class='mand'>"+x+"</td>";
        document.getElementById(p.charAt(0)+p).innerHTML = x;
    }
    wynik += "</tbody></tr></tfoot></table></div>";
    document.getElementById("MN").innerHTML = 1;
    document.getElementById("wynik").innerHTML = podzial_mandatow(mandaty_calosc) + wynik;
}

function show() {
    let suma_popar = 0;
    let x = [];
    for(let p of komitety) {
        suma_popar += parseFloat(document.getElementById(p).value);
        x.push(parseFloat(document.getElementById(p).value));
    }
    if(suma_popar <= 100 && suma_popar > 0) {
        document.getElementById("alert").innerHTML = "";
        wyswietl();
    }
    else if(suma_popar > 100){
        document.getElementById("wynik").innerHTML = "";
        document.getElementById("alert").innerHTML = "<div id='info'><strong>Suma poparć nie może przekraczać 100%.</strong></div>";
    }
    else if(suma_popar <= 0){
        document.getElementById("wynik").innerHTML = "";
        document.getElementById("alert").innerHTML = "<div id='info'><strong>Suma poparć musi być większa niż 0%.</strong></div>";
    }
    else {
        document.getElementById("wynik").innerHTML = "";
        document.getElementById("alert").innerHTML = "<div id='info'><strong>Proszę wprowadzać liczby.</strong></div>";
    }
}
