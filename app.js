//---- Cached Element References ----\\
const winCookieBtn = document.getElementById("win-cookie-btn");

const winCookieDisplay = document.getElementById("win-cookie");

const satisfactionBtn = document.getElementById("satisfaction-btn");

const satisfactionBarDisplay = document.getElementById("satisfaction-bar");

const cookieJarIcon = document.getElementById("jar");

const cookieJarDisplay = document.getElementById("cookie-jar-display");

const gameWinContainer = document.querySelector("#right-text");

const playAgainBtn = document.createElement("button");

const rightTextContainer = document.querySelector("#right-text");

//--------------- Variables ----------------\\
let cookieJar = [];

let flavorPoints = 0;

let shapePoints = 0;

let computerFlavorPoints = 0;

let computerShapePoints = 0;

let satisfactionLevel = ["Very Hungry!", "Hungry", "Small Portion Please!", "I'm Stuffed!", "I'm at my Limit!"];

let flavors = [
    "chocolate",
    "vanilla",
    "strawberry",
    "hazlenut",
    "coffee",
    "oatmeal-raisin",
    "gingerbread",
    "biscotti",
    "sugar",
    "lemon",
]
let shapes = [
    "round",
    "filled",
    "sandwich",
    "animal",
    "star",
]

class Cookies {
    constructor(flavor, shape) {
        this.flavor = flavor;
        this.shape = shape;
    }
    addToJar(entry) {
        cookieJar.push(entry);
    }
    generatedMessage() {
        winCookieDisplay.value = `You won a ${this.flavor} ${this.shape} cookie`;
    }
    addFlavorPoints() {
        switch (this.flavor) {
            case flavors[0]:
                flavorPoints += 3;
                break;
            case flavors[1]:
                flavorPoints += 2;
                break;
            case flavors[2]:
                flavorPoints += 1;
                break;
            case flavors[3]:
                flavorPoints += 3;
                break;
            case flavors[4]:
                flavorPoints += 2;
                break;
            case flavors[5]:
                flavorPoints += 1;
                break;
            case flavors[6]:
                flavorPoints += 1;
                break;
            case flavors[7]:
                flavorPoints += 2;
                break;
            case flavors[8]:
                flavorPoints += 3;
                break;
            case flavors[9]:
                flavorPoints += 1;
                break;
            default:
                cookieJarDisplay.value = "Error";         
        }
    }
    addComputerFlavorPoints() {
        switch (this.flavor) {
            case flavors[0]:
                computerFlavorPoints += 3;
                break;
            case flavors[1]:
                computerFlavorPoints += 2;
                break;
            case flavors[2]:
               computerFlavorPoints += 1;
                break;
            case flavors[3]:
                computerFlavorPoints += 3;
                break;
            case flavors[4]:
                computerFlavorPoints += 2;
                break;
            case flavors[5]:
                computerFlavorPoints += 1;
                break;
            case flavors[6]:
                computerFlavorPoints += 1;
                break;
            case flavors[7]:
                computerFlavorPoints += 2;
                break;
            case flavors[8]:
                computerFlavorPoints += 3;
                break;
            case flavors[9]:
                computerFlavorPoints += 1;
                break;
            default:
                rightTextContainer.value = "Error";         
        }
    }
    addShapePoints() {
        switch (this.shape) {
            case shapes[0]:
                shapePoints += 1;
                break;
            case shapes[1]:
                shapePoints += 4;
                break;
            case shapes[2]:
                shapePoints += 2;
                break;
            case shapes[3]:
                shapePoints += 1;
                break;
            case shapes[4]:
                shapePoints += 2;
                break;
            default:
            cookieJarDisplay.value = "Error";   
        }
    }
    addComputerShapePoints() {
        switch (this.shape) {
            case shapes[0]:
                computerShapePoints += 1;
                break;
            case shapes[1]:
                computerShapePoints += 4;
                break;
            case shapes[2]:
                computerShapePoints += 2;
                break;
            case shapes[3]:
                computerShapePoints += 1;
                break;
            case shapes[4]:
                computerShapePoints += 2;
                break;
            default:
            rightTextContainer.value = "Error";   
        }
    }   
}


//-------------------------------------- Functions --------------------------------------\\
const sumOfPoints = (flavorPoints, shapePoints)=>{
    score = flavorPoints + shapePoints;
    return score;
}
const sumOfComputerPoints = (computerFlavorPoints, computerShapePoints)=>{
    computerScore = computerFlavorPoints + computerShapePoints;
    return computerScore;
}

function satisfactionBarMessage(){
    switch(cookieJar.length){
        case 4:
            satisfactionBarDisplay.value = satisfactionLevel[0];
            break;
        case 8:
            satisfactionBarDisplay.value = satisfactionLevel[1];
            break;
        case 12:
            satisfactionBarDisplay.value = satisfactionLevel[2];
            break;
        case 16:
            satisfactionBarDisplay.value = satisfactionLevel[3];
            break;
        case 20:
            satisfactionBarDisplay.value = satisfactionLevel[4];
            break;
        default:
            if(cookieJar.length >= 21){
                satisfactionBarDisplay.value = "Stop Eating!";
                satisfactionBarDisplay.style.color = "red";
            }else{
                satisfactionBarDisplay.value = "Keep Eating!";
            }
            break;
        }
    }

function generateCookie() {
    let cookie;
    let randomInt1 = Math.floor(Math.random() * (flavors.length));
    let randomInt2 = Math.floor(Math.random() * (shapes.length));
    cookie = new Cookies(flavors[randomInt1], shapes[randomInt2]);
    cookie.addToJar(cookie);
    cookie.generatedMessage(cookie);
    cookie.addFlavorPoints();
    cookie.addShapePoints();
    sumOfPoints(flavorPoints, shapePoints);
}

function computerGeneratedCookie(){
    let computerCookie;
    let computerRandomInt1 =  Math.floor(Math.random() * (flavors.length));
    let computerRandomInt2 =  Math.floor(Math.random() * (shapes.length));
    computerCookie = new Cookies(flavors[computerRandomInt1], shapes[computerRandomInt2]);
    computerCookie.addComputerFlavorPoints();
    computerCookie.addComputerShapePoints();
    sumOfComputerPoints(computerFlavorPoints, computerShapePoints);
    computerTotalPointsDisplay();
}
 
function handleCookieBtnClick(){
    winCookieDisplay.style.transform = "scale(1.2)";
    setTimeout(cookieDisplaySize, 500);
    satisfactionBarDisplay.value = `Eat the Cookie!`;
    generateCookie();
    gameStartAnimation();
    cookieJarDisplay.value = `Total Points: ${score}`;
    computerGeneratedCookie();
    winCookieSound();
    if(cookieJar.length >= 21){
        gameWinAnimation();
        displayPlayAgainBtn();
        winCookieBtn.removeEventListener("click", handleCookieBtnClick);
        rightTextContainer.classList.remove("animation");
    }
}

function handleSatisfactionBtnClick(){
    satisfactionBarDisplay.style.transform = "scale(1.2)";
    satisfactionBarMessage();
    eatCookieSound();
    setTimeout(satisfactionDisplaySize, 500);
}

function handleCookieJar(){
    cookieJarDisplay.value = `You have ${cookieJar.length} cookies!`; //point system
}

function displayPlayAgainBtn(){
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.setAttribute("id", "play-again-btn");
    gameWinContainer.appendChild(playAgainBtn); 
}

function gameWinAnimation(){
    const gameWinText = document.createElement("h1");
    if(computerScore === score){
        gameWinText.textContent = `It's a Tie! Both You and Cookie Monster made ${score} points - try again!`;
        const tieGame = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/tie-game.mp3`);
        tieGame.volume = .4;
        tieGame.play();
    }else if(computerScore > score){
        gameWinText.textContent = `Oh no, You Lost! Cookie Monster made ${computerScore - score} more points than You - Better luck next time!`;
        const cookieMonsterSound = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/cookie-monster-sound.mp3`);
        cookieMonsterSound.volume = 1;
        cookieMonsterSound.play();
    }else{
        gameWinText.textContent = `You Won! You made ${score - computerScore} more points than Cookie Monster, congratulations!`;
        const playerWin = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/player-win.mp3`);
        playerWin.volume = .4;
        playerWin.play();
    }
    gameWinContainer.appendChild(gameWinText);
}

function cookieDisplaySize(){
    winCookieDisplay.style.transform = "scale(1)";
}

function satisfactionDisplaySize(){
    satisfactionBarDisplay.style.transform = "scale(1)";
}

function resetGame(){
    winCookieBtn.addEventListener("click", handleCookieBtnClick);
    gameWinContainer.textContent = "";
    cookieJarDisplay.value = ""
    satisfactionBarDisplay.value = "";
    winCookieDisplay.value = "";
    flavorPoints = 0;
    shapePoints = 0;
    cookieJar = [];
    satisfactionBarDisplay.style.color = "initial";
    computerFlavorPoints = 0;
    computerShapePoints = 0;
}

function gameStartAnimation(){
    rightTextContainer.classList.add("animation");
}

function computerTotalPointsDisplay(){
    rightTextContainer.style.fontSize = "1.5rem";
    rightTextContainer.textContent = `Cookie Monster Total Points: ${computerScore}`;
}

function winCookieSound(){
    const winCookieSound = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/win-cookie-button.mp3`);
    winCookieSound.volume = .2;
    winCookieSound.play();
}

function eatCookieSound(){
    const eatCookieSound = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/eating-cookie.mp3`);
    eatCookieSound.volume = .2;
    eatCookieSound.currentTime = 5.5;
    eatCookieSound.play();
}

//--------------- Event Listeners ----------------\\
satisfactionBtn.addEventListener("mouseover", handleSatisfactionBtnClick);

winCookieBtn.addEventListener("click", handleCookieBtnClick);

cookieJarIcon.addEventListener("mouseover", handleCookieJar); //addition

cookieJarIcon.addEventListener("mouseout", ()=>{
    cookieJarDisplay.value = `Total Points: ${score}`;
});

playAgainBtn.addEventListener("click", resetGame);




