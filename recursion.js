
function work() {
    console.log("hello world")
}


function workon() {
    let a = cookMeal()
    console.log(`meal is ${a}`)
}

function cookMeal() {
    console.log("deleicious")
}

function bind() {
    work()
    workon()
    console.log("helo ajay sahani")
}

bind()