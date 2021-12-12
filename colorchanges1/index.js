let color = ["yellow","pink","white","black","lightgray","smoke"]

let btn2 = document.getElementById("btn")

btn2.addEventListener("click", () => {

    let index = parseInt((Math.random()*color.length))

    let canvas = document.getElementById("canvas")
    canvas.style.background = `${color[index]}`
})