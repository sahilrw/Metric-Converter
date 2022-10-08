let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el") 
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let deleteEL = document.getElementById("delete-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function(){
    let value = inputEl.value
    lengthEl.textContent = `${value} meter = ${value * meterToFeet} feet `
})
convertBtn.addEventListener("click", function(){
    let value = inputEl.value
    volumeEl.textContent = `${value} litres = ${value * literToGallon} gallons `
})
convertBtn.addEventListener("click", function(){
    let value = inputEl.value
    massEl.textContent = `${value} kilograms = ${value * kiloToPound} pound `
})

