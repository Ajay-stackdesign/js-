// const getData = () => {
//     url = "ajay.txt"
//     etch(url).then((response) => {
//         console.log("data")
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// getData();
function getData(){
    console.log("inside a function")
    url = "https://api.github.com/users"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
    
}
console.log("hi");
getData();