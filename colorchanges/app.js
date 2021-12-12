let color = ["red","blue","green","black","orange","pink","voilet"]

let btn1 = document.getElementById("btn")

btn1.addEventListener("click", () => {
    let index = parseInt((Math.random()*color.length))

    let canvas = document.getElementById("canvas")
    canvas.style.background = `${color[index]}`
})

