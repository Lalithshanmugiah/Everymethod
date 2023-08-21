const numbers =[23,74,4,17,2,50];
const check = numbers.every(myFunction);
document.getElementById("para").innerHTML=check;
function myFunction(value, index, array){
    return value > 18
}