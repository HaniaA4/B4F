/*function getStringLength(string) {
    return string.length;
}
console.log(getStringLength("house"));*/

/*function getStringLength(value) {
    if(
        typeof value === "number") {
            return "Error: invalid number";
        }
        return value.length;
}
console.log(getStringLength("apples"));
console.log(getStringLength(3));*/

/*function calculaterectanglearea(w,h) {
    return w * h;
}
console.log(`The area of rectangle is: ${calculaterectanglearea(5,5)}`
  );  
    //calculaterectanglearea(5, 5)*/

/*function concatenatestrings (string_1, string_2) {
 
        return a= string_1 + " " + string_2;    
}
console.log(concatenatestrings("apples", "oranges")); */

function sum(){
    var a;
    var b;
    return a + b;
}
console.log("sum =", 7+5); 
 //--------------------------------

function somar(a, b) {
    let sum = a + b;
    return sum;
}
const result = somar(10, 5);
console.log (result);

                
/*function doubleandtriple(num) {
    return Math.sqrt(num);
}
console.log(num);*/

/*function monthsofyear(month) {
    switch (month) {
        case 1:
            console.log("january");
            break;
        case 2:
            console.log("february");
            break;
        case 3:
            console.log("march");
        default:
            console.log("input invalid");
            break;
    }
    return;
}

function monthsofyear(month) {
    switch (month) {
        case 1:
            return "january";
        case 2:
            return "february";
        case 3:
            return "march";
        default: 
        console.log("input invalid");
    }
}*/

function daysofweek(days) {
    switch (days) {
        case 1:
            return "monday";
        case 2:
          return "tuesday";
        case 3:
          return "wednesday";        
}
}
console.log(
    daysofweek(3)
);