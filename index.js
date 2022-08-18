const inputUnit = document.getElementById("input-unit")
const btnUnit = document.getElementById("btn-unit")
const lengthPgh = document.getElementById("length-pgh")
const volumePgh = document.getElementById("volume-pgh")
const massPgh = document.getElementById("mass-pgh")

btnUnit.addEventListener("click", function() {
    renderInput()
})

function renderInput() {
    const length = 3.281
    const volume = 0.264
    const mass = 2.204
    const inputNumbers = inputUnit.value 
    lengthPgh.textContent = ""
    volumePgh.textContent = ""
    massPgh.textContent = ""
    lengthPgh.textContent += `${inputNumbers} meters = ${(inputNumbers * length).toFixed(3)} feet | ${inputNumbers} feet = ${(inputNumbers/length).toFixed(3)} meters`
    volumePgh.textContent += `${inputNumbers} liters = ${(inputNumbers * volume).toFixed(3)} gallons | ${inputNumbers} gallons = ${(inputNumbers/volume).toFixed(3)} liters`
    massPgh.textContent += `${inputNumbers} kilos = ${(inputNumbers * mass).toFixed(3)} pounds | ${inputNumbers} pounds = ${(inputNumbers/mass).toFixed(3)} kilos `
}




















































































