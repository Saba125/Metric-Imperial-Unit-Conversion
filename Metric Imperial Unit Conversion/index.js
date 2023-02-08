let ButtonEl = document.getElementById("Button-el")
let Inputel = document.getElementById("input-el")
let Meterel = document.getElementById("Meter-el")
let LitersEl = document.getElementById("Liters-el")
let KilosEl = document.getElementById("Kilos-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

ButtonEl.addEventListener("click", function(){
    let Basevalue = Inputel.value
    Meterel.textContent = Basevalue + " meters" + " = " + Basevalue * meterToFeet + " " + "feet"
    LitersEl.textContent = Basevalue + " gallons" + " = " + Basevalue * literToGallon + " " + "liters"
    KilosEl.textContent = Basevalue + " kilos" + " = " + Basevalue * kiloToPound + " " + "pounds"
})