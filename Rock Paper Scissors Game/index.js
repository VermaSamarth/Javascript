const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const winnerText = document.querySelector("#winnerText");
const choiceButtons = document.querySelectorAll(".choice");
let player;
let computer;
let winner;

choiceButtons.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent;
    computerTurn();
    playerText.textContent=`Player: ${player}`;
    computerText.textContent=`Computer: ${computer}`;
    winnerText.textContent=checkWinner();
}));

function computerTurn(){
    const randamNum = Math.floor(Math.random()*3)+1;
    switch(randamNum){
        case 1: 
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player==computer)
        return "DRAW!!!";
    else if(player == "ROCK"){
        return (computer == "PAPER")?"YOU LOSE!!!":"YOU WIN!!!";
    }
    else if(player == "PAPER"){
        return (computer == "SCISSORS")?"YOU LOSE!!!":"YOU WIN!!!";
    }
    else{
        return (computer == "ROCK")?"YOU LOSE!!!":"YOU WIN!!!";
    }

}