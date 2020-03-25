// var doSomething = function(paramOne, paramTwo, fn) {
//     paramOne = paramOne + 3;
//     paramOne = paramOne + 1;
//     paramOne = paramOne * 8;

//     return fn(paramOne, paramTwo);
// };

// function sum(paramOne, paramTwo) {
//     return paramOne + paramTwo;
// }



// // set one
// var foo = doSomething(2, 2, sum); // 96

// // set two
// var bar = doSomething(3, 2, function(paramOne, paramTwo) {
//     return paramOne * paramTwo;    
// }); // 112

// alert(foo);
// alert(bar);


// // This is the second block of coding
// var myFunction = function(pram1, pram2, suny){
//     pram1 = pram1 + 3;
//     pram1 = pram1 + 1;
//     pram1 = pram1 *5;

//     return suny(pram1, pram2);
// };




// function sum(pram1, pram2) {
//     return pram1 * pram2;
// }




// var too = myFunction(2, 2, sum);
// var soo = myFunction(3, 2, function(pram1, pram2){
//     return pram1 * pram2;
// });
    
// alert(too);
// alert(soo);


// Convert Fahrenheit to celsius
function toCelsius(f){
    return (5/9) * (f-32);
}

var f = toCelsius(87);
document.getElementById('Celsius').innerHTML = toCelsius(87);
console.log(toCelsius(87));
