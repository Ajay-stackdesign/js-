const myDisplayer = ((sum) => {
    console.log("i am player" + sum)
})


const myCalculator = ((num1,num2,callback) =>{
    let sum = num1 + num2 ;
    callback(sum);
})
myCalculator(10,10,myDisplayer)

