function play(choice){
    let choices = ["rock","paper","scissors"];

    let randomComputer = choices[Math.floor(Math.random()*3)];

    let result = ""

    if(choice === randomComputer){
        result = "tie"
    }
    else if(
        (choice === "rock" && randomComputer === "scissors")||
        (choice === "paper" && randomComputer === "rock")||
        (choice === "scissors" && randomComputer === "paper")
    ) {
        result = "You Win";
    }
    else{
        result = "Computer Wins";
    }
    document.getElementById("result").innerHTML = `You: ${choice} Computer: ${randomComputer} Result: ${result}`;

}