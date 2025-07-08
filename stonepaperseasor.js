let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user-score");
let computer = document.querySelector("#computer-score");
let message = document.querySelector("#message");
let reset = document.querySelector(".msg-reset");

reset.addEventListener("click",()=>{
    reset.style.backgroundColor = "white";
    reset.style.color = "black";
    user.innerText = 0;
    computer.innerText = 0;
    message.innerText = "Play Your Move";
    message.style.backgroundColor = "#081b31";
    message.style.color = "white";
})

const computerChoice = () =>{
    let options = ["rock" , "paper" , "scissors"];
    let indx  = Math.floor(Math.random() * 3);
    return options[indx];
}

const drawGame = () =>{
    console.log("game become draw");
    message.innerText = "Match Draw Play Again!";
    message.style.backgroundColor = "blue";
    message.style.color = "white";
}

const playGame = (choosenId)=>{
    let computerChoiceAnswer = computerChoice();
    console.log(choosenId);
    console.log(computerChoiceAnswer);
    if(choosenId === computerChoiceAnswer){
        drawGame();
    }
    else{
        let userWin = 0;
        if(choosenId==="rock"){
           if(computerChoiceAnswer==="scissors"){
            userWin++;
           } 
        }
        else if(choosenId==="scissors"){
            if(computerChoiceAnswer==="paper"){
                userWin++;
            }
        }
        else{
            if(computerChoiceAnswer==="rock"){
                userWin++;
            }
        }
        if(userWin>0){
            userScore++;
            message.style.backgroundColor = "green";
            message.style.color = "white";
            message.innerText = `You Won Your choice ${choosenId} beats computer choice ${computerChoiceAnswer}`;
            user.innerText = userScore;
        }
        else{
            computerScore++;
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerText = `You Lost! computer choice ${computerChoiceAnswer} beats your choice ${choosenId}`;
            computer.innerText = computerScore;
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
});