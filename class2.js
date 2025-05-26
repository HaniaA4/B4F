/*class cat {
    constructor(name, weight, maxJumpHeight, verticalPosition) {
        this.name= name;
        this.weight= weight;
        this.maxJumpHeight= maxJumpHeight;
        this.verticalPosition= verticalPosition;
    }
}

let dobby = new cat("Dobby", 6, 2,0);
console.log(dobby);

const apply = (n, func); { 
    return func(n);
}
function sum (n) {
    return n+n;
}
apply(5,sum);
sum(5);*/

/*let sum;
function superDigit (n) {
   if(n==='9875') {
    return parseInt(sum(n));
   }
}
console.log(superDigit(n));

function superDigit(n) {
    while(n.length>1) {
        let sum = 0;
        for(let i = 0; i < n.length; i++) {
             sum += Number(n[i]);
        }
        n = String(sum);
   }
   return n;
}
console.log(superDigit('9875'));
console.log(superDigit('12'));
console.log(superDigit('1'));
////////////////////////////////////////
function superDigit(n) {
let sum = 0;
if(n.length <= 1) {
    return n;
} for(let i = 0; i < n.length; i++) {
    
}
}


function sum(a, b) {
    return a + b
}
const arr = [1, 2]
sum(...arr)*/


/*function minMax(arr, n) {
    const sorted = [...arr].sort((a,b)=>a-b);
    let min= 0;
    let max=0; 
    for (let i=0; i<n; i++) {
      min += arr[i];
      max =+ array[array.length1 - i];
        return [0, 0];
    }
}
console.log(minMax[1,2,3,4,5],4)*/

/*function minMax(arr, n) {
    let ascending = [...arr].sort((a, b) => a - b);
    let min = 0;
    for(let i = 0; i<n; i++) {
        min += ascending[i];
    }
    let descending = [...arr].sort((a, b) => b - a);
    let max = 0;
    for (let i= 0; i<n; i++) {
        max += descending[i];
    }
    return [min, max];
}
console.log(minMax([1, 2, 3, 4, 5],4));*/

let map = new Map(
    [
        ['jan', 'january'],
        ['feb', 'febuary'],
        ['mar', 'march'],
        ['apr', 'april'],
        ['may', 'may'],
        ['jun', 'june'],
        ['jul', 'july'],
        ['aug', 'august'],
        ['sep', 'september'],
        ['oct', 'october'],
        ['nov', 'november'],
        ['dec', 'december'],
    ]);
    console.log(map);

function removeDuplicates(arr) {
let arrremove = new Set([...arr]);
return [...arrremove];
}
console.log(removeDuplicates([1,1,3,4,2,3,3]));

