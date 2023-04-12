let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let selectSound = document.querySelector("#select");
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
    sound.play();
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
    playSound(selectSound);
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
    selectSound.currentTime = 0;
};

const endGame = () => {

    let finalScreen = document.querySelector("#final-screen");
    let finalResult = document.querySelector("#final-result");
    let btnReset = document.querySelector("#reset");
    finalScreen.style.cssText = "display: flex;"
    
    if(playerScore > computerScore) {
        let winGameTheme = document.querySelector("#winGame");
        finalResult.innerText = "Player win!"
        playSound(winGameTheme);
    }else {
        let gameOverTheme = document.querySelector("#gameOver");
        playSound(gameOverTheme);
    }

    btnReset.addEventListener("click", () => {
        window.location.reload(true)
    })
};


rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissor.addEventListener('click', playGame);



