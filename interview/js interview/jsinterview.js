// to print the object into values like list

let x = {
    a: 1,
    b: 2
}

let xArr = []

for (i in x) {
    console.log(xArr.push(i))
}


// let y = "hi"

// let z = "ih"

// const reverseString = (str) => str.split("").join("")
// console.log(str)
// console.log(reverseString)
// console.log(reverseString(x) === y)


const a = {
    b: 10,
    c: 20,
    getA() {
        console.log(this.b)
        return this
    },
    getB() {
        console.log(this.c)
        return this
    }
}

a.getA().getB()