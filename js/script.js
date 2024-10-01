let tempsTravail = 25;
let tempsPause = 5;
let seconde = 1;
let bool = true;
let affMin = document.getElementById("min");
let affSeconde = document.getElementById("sec");
let but = document.getElementById("play");
let tempsBool = true;
const parametres = document.getElementById("param");
const inputTravail = document.getElementById("tpsTravail");
const inputPause = document.getElementById("tpsPause");
const confirmBtn = document.getElementById("confirmBtn");

const travailText = document.getElementById("travail");
const pauseText = document.getElementById("pause");

affMin.textContent = tempsTravail;
affSeconde.textContent = "00";

function lancer() {
    travailText.style.color = '#dae987';
    if (bool) {
        seconde = tempsTravail * 60;
        lIntervalDuBoss = window.setInterval(deffilage, 1000);
        bool = false;
    }
    but.innerHTML = '<span class="fas fa-pause fa-3x"></span>';
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
        if (tempsBool) {
            travailText.style.color = '#ffffff';
            pauseText.style.color = '#dae987';
            console.log('travail')
            seconde = tempsPause * 60;
            tempsBool = false;
        } else {
            travailText.style.color = '#dae987';
            pauseText.style.color = '#ffffff';
            console.log('pause')
            seconde = tempsTravail * 60;
            tempsBool = true;
        }
    }
}

function reset() {
    travailText.style.color = '#ffffff';
    pauseText.style.color = '#ffffff';
    seconde = tempsTravail * 60;
    affMin.textContent = tempsTravail;
    affSeconde.textContent = "00";
    but.innerHTML = '<span class="fas fa-play fa-3x"></span>';
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
