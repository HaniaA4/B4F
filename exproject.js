let input= prompt("make a choice!");
console.log(`Input: ${input}`);


  switch(computerMove) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
  }                                 
                                                            
function playRound(userChoice, computerChoice) {               
if (userChoice === computerChoice) {
    return "it is a tie!";
} else if(
    userChoice.toLowerCase() === "rock" && computerChoice === "paper" ||
    userChoice.toLowerCase()=== "scissors" && computerChoice === "paper" ||
    userChoice.toLowerCase() === "paper" && computerChoice === "rock"    
) { 
    return "you win!";
} else {
    return"you lose!";
}
let computerChoice = getComputerMove();
let userChoice = prompt("make a choice")


}
