let tempsTravail = 25
let tempsPause = 5
let seconde = tempsTravail*60
let bool = true
let affMin = document.getElementById("min")
let affSeconde = document.getElementById("sec")
let but = document.getElementById("tonGrosBouton")

console.log("oui")

function lancer(){
    if(bool == true){
        lIntervalDuBoss = window.setInterval(deffilage, 1000)
        bool = false
    }
    but.textContent = "Stauopp"
    but.onclick = reset
}


function deffilage(){
    if(seconde > 0){
        seconde--
        min = Math.floor(seconde/60)
        affMin.textContent = min
        affSeconde.textContent = seconde%60
    }
}


function reset(){
    seconde = 25*60
    affMin.textContent = 25
    affSeconde.textContent = "00"
    but.textContent = "Startttt"
    clearInterval(lIntervalDuBoss);
    bool = true
    but.onclick = lancer
}

//
