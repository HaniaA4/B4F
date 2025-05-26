/*alert("Hello World!");

let input= prompt("Please insert a number");
console.log(`Input: ${input}`);

Math.floor(Math.random()*10)+1;   //1-10
let random;
console.log("random number");
let num; 
if (num!=5) {
    console.log("guess the number again");    
} else (number === 5) 
{
    console.log("you win");
}

while (input !== random) 
{

    input = 
}*/



alert("Hello World!");

let input= prompt("Please insert a number");
console.log(`Input: ${input}`);

Math.floor(Math.random()*6)+1;

while (parseInt(input) !== randNum) {
    if (input<1 || input>10) {
        input= prompt("invalid input. insert the numeber between 1-10");
    }
    input = prompt("Try again!");

}
alert("You did it!");