// function x() {
//     let a = 7
//     function y() {
//         console.log(a)
//     }
//     return y
// }

// var z = x()
// console.log(z)

// z()


function x() {
    let a = 10
    return function y() {
        console.log(a)
    }
}

let z = x()
console.log(z)

z()