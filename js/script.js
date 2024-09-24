let tempsTravail = 25; 
let tempsPause = 5;    
let seconde = 1;
let bool = true;
let affMin = document.getElementById("min");
let affSeconde = document.getElementById("sec");
let but = document.getElementById("tonGrosBouton");
let tempsBool = true;
const parametres = document.getElementById("param");
const inputTravail = document.getElementById("tpsTravail"); 
const inputPause = document.getElementById("tpsPause"); 
const confirmBtn = document.getElementById("confirmBtn");

affMin.textContent = tempsTravail;
affSeconde.textContent = "00";

function lancer() {
    if (bool === true) {
        seconde = tempsTravail * 60;
        lIntervalDuBoss = window.setInterval(deffilage, 1); 
        bool = false;
    }
    but.textContent = "Stop";
    but.onclick = reset;
}

function deffilage() {
    if (seconde > 0) {
        seconde--;
        let min = Math.floor(seconde / 60);
        let sec = seconde % 60;
        affMin.textContent = min;
        affSeconde.textContent = sec < 10 ? "0" + sec : sec; 
    } else {
        if (tempsBool === true) {
            seconde = tempsPause * 60;
            tempsBool = false;
        } else {
            seconde = tempsTravail * 60;
            tempsBool = true;
        }
    }
}

function reset() {
    seconde = tempsTravail * 60;
    affMin.textContent = tempsTravail;
    affSeconde.textContent = "00";
    but.textContent = "Start";
    clearInterval(lIntervalDuBoss);
    bool = true;
    but.onclick = lancer
}

function setParam() {
    parametres.showModal()
}


confirmBtn.addEventListener("click", (event) => {
    const nouvelleDureeT = inputTravail.value
    const nouvelleDureeP = inputPause.value
    if (nouvelleDureeT > 0 && nouvelleDureeP > 0) {
        tempsTravail = nouvelleDureeT
        tempsPause = nouvelleDureeP
        affMin.textContent = tempsTravail
        reset()
    }
    parametres.close()
});

parametres.addEventListener("close", () => {
    inputTravail.value = tempsTravail
    inputPause.value = tempsPause

});
