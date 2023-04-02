// Task #1
const nums = [3, 5, 2, 6, 4, 1]
for (let num of nums) {
    console.log(
        document.querySelector(`#string-${num}`).textContent
    )
}

// Task #2
const task2 = document.querySelector(".task2")
const elements = task2.querySelectorAll(".element")
for (let i = 0; i < elements.length; i++) {
    if (i < 3) {
        elements[i].style.color = 'red'
    } else {
        elements[i].style.color = 'green'
    }
}

// Task #3
function getRandomNumber(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

function generateRGB() {
    const RGB = []
    for (let j = 0; j < 3; j++) {
        RGB.push(getRandomNumber(0, 256))
    }
    return RGB;
}

const container = document.querySelector(".container")
for (let i = 0; i < 5; i++) {
    const element = document.createElement("div")
    const rgb = generateRGB()
    element.className = 'element'
    element.style.color = `rgb(${rgb.join(', ')})`
    element.textContent = `Element ${i+1}`

    container.append(element)
}
