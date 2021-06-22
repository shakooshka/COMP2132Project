const popUp = document.getElementById("pop-up");
const delay = 500; 
const rules = document.getElementById("btn-rules");
let popupAnimationHandler;
let opacityValue = 0;

// /*

// */
// setTimeout( function(){
//     if(userHasNotStartedAnimationYet === true){
//         popupAnimationHandler = requestAnimationFrame( fadeIn );
//     }
// } , delay);

// function rollDiceAnimation(){
    
// }
const playerDie1Value = document.getElementById("player-die-1");
const playerDie2Value = document.getElementById("player-die-2");
const compDie1Value = document.getElementById("computer-die-1");
const compDie2Value = document.getElementById("computer-die-2");

const playerCurrentScore = document.getElementById("player-current-score");
const playerTotalScore = document.getElementById("player-total-score");
const computerCurrentScore = document.getElementById("computer-current-score");
const computerTotalScore = document.getElementById("computer-total-score");

const play = document.getElementById("btn-play");
const newGame = document.getElementById("btn-new");

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

play.addEventListener("click", function(){
    rollDice();
});

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
        
            currentRound++;

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

        }else{
//declare winner
        }
    }, delay);
}
