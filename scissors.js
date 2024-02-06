let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);//generating random no.(index) b/w range 0 to 2
    return options[randIndx];
};

const drawGame = () =>{
    console.log("game draw");
    msg.innerText = "Game Draw. Play again.";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose.. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice is", userChoice);
    //generating computer's choice
    const compChoice = genCompChoice();
    console.log("comp choice is",compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") { 
            //compChoice left is paper to win and scissors to lose
            userWin = compChoice === "paper" ? false:true;//ternary operation
        } else if (userChoice === "paper"){
            // rock ,scissors
            userWin = compChoice === "scissors" ? false: true; 
        } else{
            //rock, paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice clicked",userChoice);
        playGame(userChoice);
    });
});