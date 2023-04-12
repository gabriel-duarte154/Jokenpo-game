let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let roundDisplay = document.querySelector("#round");
let player = document.querySelector("#player-score");
let computer = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;
let round = 0;

const getComputerChoise = () => {
    return Math.floor(Math.random() * 3);
};

const convertPlayerChoise = (choise) => {
    if(choise == 'rock'){return 0};
    if(choise == "paper"){return 1};
    if(choise == "scissor"){return 2};
};

function playSound(sound) {
    let theme;
    if (sound == "winGame") {
        theme = document.querySelector("#winGame");
    };
    if (sound == "gameOver") {
        theme = document.querySelector("#gameOver")
    }
    if (sound == "select") {
        theme = document.querySelector("#select")
        theme.currentTime = 0;
    }
    theme.play();
};

function typeWrite(string, element) {

    let array = string.split("");
    console.log(array)
    element.innerText = " "
    array.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter;
        }, 10 * i);
    });

}

const showResult = (result) => {
    let gameLog = document.querySelector("#box-result");
    let content = "";
    if(result == "draw") {
        content = "É um empate.";
        
    }else if(result == "player") {
        content = "Vitória para o player."
        playerScore++

    }else if (result == "computer") {
        content = "Derrota, você pelo menos consegue jogar?"
        computerScore++
    };

    typeWrite(content, gameLog)
    player.textContent = `Score: ${playerScore}`;
    computer.textContent = `Score: ${computerScore}`; 
    round++
    if(round >= 5) {
        rock.removeEventListener('click', playGame);
        paper.removeEventListener('click', playGame);
        scissor.removeEventListener('click', playGame);
        setTimeout(() => {
            endGame()
        }, 1000 )
    };
    roundDisplay.innerHTML = `${round}/5`
};

const playGame = () => {
    let playerChoise = convertPlayerChoise(event.target.parentElement.id);
    let computerChoise = getComputerChoise();
    let result;
    playSound("select");
    if(playerChoise == computerChoise){

        result = "draw";
    
    } else if (playerChoise == 0  && computerChoise == 2 || 
        playerChoise == 1 && computerChoise == 0 ||
        playerChoise == 2 && computerChoise == 1) {

            result = "player";
    } else {

        result = "computer";
    };

    showResult(result);
    
};

const endGame = () => {

    let finalScreen = document.querySelector("#final-screen");
    let finalResult = document.querySelector("#final-result");
    let btnReset = document.querySelector("#reset");
    finalScreen.style.cssText = "display: flex;"
    
    if(playerScore > computerScore) {
        finalResult.innerText = "Player win!"
        playSound("winGame");
    }else {
        playSound("gameOver");
    }

    btnReset.addEventListener("click", () => {
        window.location.reload(true)
    })
};


rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissor.addEventListener('click', playGame);