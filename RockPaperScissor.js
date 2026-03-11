let userchoice = 0;
let compchoice = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = document.querySelector("#userScore");
let compscore = document.querySelector("#compScore");
let reset = document.querySelector("#reset");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id");
        console.log("userchoice is =", userchoice);
        getCompChoice();
        getWinner();
    }
    )
})

const getCompChoice = () => {
    choose = ["rock", "paper", "scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    compchoice = choose[randomVal];
    console.log("computer choice is = ", compchoice);
}

const getWinner = () => {

    if (userchoice == compchoice) {
        msg.innerText = "Match is Draw";
        msg.style.backgroundColor = "rgb(32, 32, 79)";
    }
    else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = compchoice == "paper" ? false : true;
        }
        else if (userchoice == "paper") {
            userwin = compchoice == "rock" ? true : false;
        }
        else {
            userwin = compchoice == "paper" ? true : false;
        }

        if (userwin) {
            msg.innerText = `You win! Computer chose ${compchoice}`;
            msg.style.backgroundColor = "green";
            let score = userscore.innerText;
            score++;
            userscore.innerText = score;
        }
        else {
            msg.innerText = `You lost! Computer chose ${compchoice} `;
            msg.style.backgroundColor = "red";
            let score = compscore.innerText;
            console.log(score);
            score++;
            compscore.innerText = score;
        }
    }
}

const resetFunc = () => {
    msg.innerText = "Play your Move";
    msg.style.backgroundColor = "rgb(32, 32, 79)";
    userscore.innerText = 0;
    compscore.innerText = 0;
}

reset.addEventListener("click", resetFunc);