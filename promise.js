// const promise = new Promise((resolve,reject) => {
//     let num = 10;
//     resolve("request sucess")
// }).then(
//     (value)=>{
//         console.log(value)
//         return value+10;
//     }).then((value)=>{
//         console.log(value)
//         return value;
//     }).then(
//         () => {
//         throw new Error("not found")
//     }).catch(
//         (Error) =>  {
//             console.log(Error)
//         })

function getName(name){
    return new Promise((resolve,rejet) => {
        setTimeout(() => {
            console.log("ajay sahani")
            resolve(name);
        }, 100);
    })
}

function hobbies(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("ajay sahani")
            resolve(["cricket","badminton"]);
        }, 1000);
    })
}

// getName("ajay")
// .then(nm => hobbies(nm))
// .then(hobby => console.log(hobby))

async function get(){
    const nm = await getName("ajay")
    const hobby = await hobbies("nm")
    console.log(hobby)
} 

get();