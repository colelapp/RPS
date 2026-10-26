
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

//logic behind rock paper scissors
function play(choice){
    let choices = ["rock","paper","scissors"];

    let randomComputer = choices[Math.floor(Math.random()*3)];

    let result = ""

    if(choice === randomComputer){
        result = "tie"
        tieScore++;
    }
    else if(
        (choice === "rock" && randomComputer === "scissors")||
        (choice === "paper" && randomComputer === "rock")||
        (choice === "scissors" && randomComputer === "paper")
    ) {
        result = "You Win";
        userScore++;
    }
    else{
        result = "Computer Wins";
        computerScore++;
    }
    

    //added who won
    document.getElementById("result").innerHTML = `You: ${choice} <br> Computer: ${randomComputer} <br> Result: ${result}`;

    //Added score 
    document.getElementById("score").innerHTML = `Your score: ${userScore} | Computer score: ${computerScore} | Ties: ${tieScore}`
}