const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const youScoure = document.querySelector("#y-point");
const comScoure = document.querySelector("#c-point");

let you = 0;
let comp = 0;


choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
        const userChoie = choice.getAttribute("id");
        playGame(userChoie);
    });
});

const gameChoices = () =>{
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoie) =>{
    const compChoices = gameChoices();

    if(userChoie === compChoices){
        DrawGame();
    }else {
        let userwin = true;
        if(userChoie === "rock"){
            userwin = compChoices === "paper" ? false : true;
        }else if(userChoie === "paper"){
            userwin = compChoices === "scissor" ? false : true;
        }else if(userChoie === "scissor"){
            userwin = compChoices === "rock" ? false : true;
        }
        showWinner(userwin, userChoie, compChoices);
    }
};

const showWinner = (userwin, userChoie, compChoices) =>{
    if(userwin){
        you++;
        youScoure.innerHTML = you;
        message.innerHTML = `You win! Your ${userChoie} beats ${compChoices}`;
        message.style.backgroundColor = "green";
    }else{
        comp++;
        comScoure.innerHTML = comp;
        message.innerHTML = `You lost. ${compChoices} beats your ${userChoie}`;
        message.style.backgroundColor = "red";
    }
}

const DrawGame = () =>{
    message.innerHTML = `Game is draw play again......`
    message.style.backgroundColor = "lightgray";
}