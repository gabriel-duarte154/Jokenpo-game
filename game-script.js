const game = () => {
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let selectSound = document.querySelector("#select");
let rounds = document.querySelector("#round");
let player = document.querySelector("#player-score");
let computer = document.querySelector("#computer-score");
let pScore = 0;
let cScore = 0;
let round = 0;


const getComputerChoise = () => {
    return Math.floor(Math.random() * 3);
};
const trasnformPlayerChoise = (choise) => {
    if(choise == 'rock'){return 0};
    if(choise == "paper"){return 1};
    if(choise == "scissor"){return 2};
};

function playSound(sound) {
    sound.play();
}


const showResult = (result) => {
    let divResult = document.querySelector("#box-result");

    if(result == "draw") {
        divResult.innerHTML = `Computer: Droga!, empate, na próxima eu 
        ganharei!`;
        
    }else if(result == "player") {
        divResult.innerHTML = `Computer: Raios, você ganhou.`
        pScore++
    }else if (result == "computer") {
        divResult.innerHTML = `Computer: Outra vítoria, para mim, hahaha!`
        cScore++
    };

    player.textContent = `Score: ${pScore}`;
    computer.textContent = `Score: ${cScore}`; 
}

const playGame = (event) => {
    playSound(selectSound);
    let playerChoise = trasnformPlayerChoise(event.target.parentElement.id);
    let computerChoise = getComputerChoise();
    let winner;
    if(playerChoise == computerChoise){
        winner = "draw";
    
    } else if (playerChoise == 0  && computerChoise == 2 || 
        playerChoise == 1 && computerChoise == 0 ||
        playerChoise == 2 && computerChoise == 1) {
            winner = "player";
    } else {
        winner = "computer";
    };

    showResult(winner);
    selectSound.currentTime = 0;
    if (round == 5) {
        window.location.reload(true)
    };
    round++
    rounds.innerHTML = `${round}/5`
};


rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissor.addEventListener('click', playGame);

}
game();



