$("#winner-pop-up").hide();
const delay = 500; 

/*
Roll the dice
*/
const play = document.getElementById("btn-play");
play.addEventListener("click", function(){
    rollDice();
});

/*
Start a new game
*/
const newGm = document.getElementById("btn-new");
newGm.addEventListener("click", function(){
    newGame();
});

// const newGmPopUp = document.getElementById("btn-new-gm");
// newGmPopUp.addEventListener("click", function(){
//     newGame();
// });

/*
Show the rules of the game
*/
const popUp = document.getElementById("pop-up-rules");
const rules = document.getElementById("btn-rules");

let popupAnimationHandler;
let opacityValue = 0;

rules.addEventListener("click", function(){
    setTimeout( function(){
        popupAnimationHandler = requestAnimationFrame( fadeIn );
    } , delay);
});

function fadeIn(){
    opacityValue = opacityValue + .05;
    if(opacityValue <= 1){
        popUp.style.opacity = opacityValue;
        requestAnimationFrame( fadeIn );
    }else{
        popUp.style.opacity = 1;
    }    
}

/*
Close rules pop up
*/
const closePopup = document.getElementById("rules-btn-close");
closePopup.addEventListener("click", function(){
    popUp.style.opacity = "0";
});

/*
Close results pop up
*/
const closeResults = document.getElementById("results-btn-close");
closeResults.addEventListener("click", function(){
    $("#winner-pop-up").slideUp();
});

/*
Function to establish the rules of the game and record scores
*/
const playerDie1Value = document.getElementById("player-die-1");
const playerDie2Value = document.getElementById("player-die-2");
const compDie1Value = document.getElementById("computer-die-1");
const compDie2Value = document.getElementById("computer-die-2");

const playerCurrentScore = document.getElementById("player-current-score");
const playerTotalScore = document.getElementById("player-total-score");
const computerCurrentScore = document.getElementById("computer-current-score");
const computerTotalScore = document.getElementById("computer-total-score");

//keep count of round, die value & score
let currentRound = 1;
const maxRound = 3;
let die1 = 1;
let die2 = 2;
let die3 = 3;
let die4 = 4;
let pCurrent = 0;
let pTotal = 0;
let cCurrent = 0;
let cTotal = 0;



function rollDice() {
    setTimeout(function(){
        if(currentRound <= maxRound){        
            die1 = Math.floor(Math.random() * 6) + 1;
            die2 = Math.floor(Math.random() * 6) + 1;
            die3 = Math.floor(Math.random() * 6) + 1;
            die4 = Math.floor(Math.random() * 6) + 1; 

            playerDie1Value.src = `images/dice${die1}.png`;
            playerDie2Value.src = `images/dice${die2}.png`;
            compDie1Value.src = `images/dice${die3}.png`;
            compDie2Value.src = `images/dice${die4}.png`;

            if( die1 == 1 || die2 == 1){
                playerCurrentScore.innerHTML = 0;
            }else if( die1 === die2 ){
                pCurrent = (die1+die2)*2;
                pTotal += pCurrent;
                playerCurrentScore.innerHTML = pCurrent;
                playerTotalScore.innerHTML = pTotal;
            }else{
                pCurrent = die1+die2;
                pTotal += pCurrent;
                playerCurrentScore.innerHTML = pCurrent;
                playerTotalScore.innerHTML = pTotal;
            }
            
            if( die3 == 1 || die4 == 1){
                computerCurrentScore.innerHTML = 0;
            }else if( die3 === die4 ){
                cCurrent = (die3+die4)*2;
                cTotal += cCurrent;
                computerCurrentScore.innerHTML = cCurrent;
                computerTotalScore.innerHTML = cTotal;
            }else{
                cCurrent = die3+die4;
                cTotal += cCurrent;
                computerCurrentScore.innerHTML = cCurrent;
                computerTotalScore.innerHTML = cTotal;
            }            

            document.getElementById("player-final-score").textContent = pTotal;
            document.getElementById("computer-final-score").textContent = cTotal;

            //declare winner and show message
            if(currentRound === maxRound){
              setTimeout(function(){
                  if(cTotal > pTotal){
                    document.getElementById("winner-msg").textContent = "YOU LOSE!";
                    document.getElementById("winner-pop-up").style.backgroundImage = "url('https://media.giphy.com/media/V9T8PfurFuZH90QzOI/giphy.gif')";
                    document.getElementById("winner-pop-up").style.backgroundSize = "cover";  
                  }else if(cTotal == pTotal){
                    document.getElementById("winner-msg").textContent = "";
                    document.getElementById("winner-pop-up").style.backgroundImage = "url('https://media.giphy.com/media/bXdvCXs1MPZOE/giphy.gif')";
                    document.getElementById("winner-pop-up").style.backgroundSize = "cover";  
                  }
                  $("#winner-pop-up").slideDown(); 
              }, delay) 
            }
            currentRound++;
        }
    }, delay);
}

/*
Function to start a new game
*/
function newGame() {
    currentRound = 1;
    pCurrent = 0;
    pTotal = 0;
    cCurrent = 0;
    cTotal = 0;

    playerCurrentScore.innerHTML = pCurrent;
    playerTotalScore.innerHTML = pTotal;
    computerCurrentScore.innerHTML = cCurrent;
    computerTotalScore.innerHTML = cTotal;

    playerDie1Value.src = `images/dice1.png`;
    playerDie2Value.src = `images/dice2.png`;
    compDie1Value.src = `images/dice3.png`;
    compDie2Value.src = `images/dice4.png`;

    document.getElementById("winner-msg").textContent = "YOU WIN!";
    document.getElementById("winner-pop-up").style.backgroundImage = "url('https://media.giphy.com/media/5jT0jaNDsM6Ik7X9yq/giphy.gif')";
}



