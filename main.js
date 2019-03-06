const display = document.getElementById("output")
const input = document.createElement("input")
const inputLabel = document.createElement("label")
inputLabel.textContent = "Enter Some Text: "

const outputWrapper = document.createElement("div")
outputWrapper.setAttribute("id", "outputWrapper")

const redOutput = document.createElement("article")
redOutput.setAttribute("id", "redOutput")

const blueOutput = document.createElement("article")
blueOutput.setAttribute("id", "blueOutput")

outputWrapper.appendChild(redOutput)
outputWrapper.appendChild(blueOutput)

display.appendChild(inputLabel)
display.appendChild(input)
display.appendChild(outputWrapper)

input.addEventListener("keyup", () => {
        console.log(input.value)
        redOutput.textContent = input.value
        blueOutput.textContent = input.value
})