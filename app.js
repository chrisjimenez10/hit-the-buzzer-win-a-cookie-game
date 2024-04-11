//---- Cached Element References ----\\
const winCookieBtn = document.getElementById("win-cookie-btn");

const winCookieDisplay = document.getElementById("win-cookie");

const satisfactionBtn = document.getElementById("satisfaction-btn");

const satisfactionBarDisplay = document.getElementById("satisfaction-bar");

const cookieJarIcon = document.getElementById("jar");

const cookieJarDisplay = document.getElementById("cookie-jar-display");

const gameWinContainer = document.querySelector("#right-text");

const playAgainBtn = document.createElement("button"); //play again button

//--------------- Variables ----------------\\
let cookies = [];
let satisfactionLevel = ["Very Hungry!", "Hungry", "Small Portion Please!", "I'm Stuffed!", "I'm at my Limit!"];

//-------------------------------------- Functions --------------------------------------\\
function satisfactionBarMessage(){
    switch(cookies.length){
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
            if(cookies.length >= 21){
                satisfactionBarDisplay.value = "Stop Eating!";
            }else{
                satisfactionBarDisplay.value = "Keep Eating!";
            }
            break;
        }
    }
 
function handleCookieBtnClick(){
    winCookieDisplay.value = "You won a Cookie!";
    cookies.push({food: "snack",type: "cookie",})
    console.log(cookies); // Check if cookies array resets cookie count and allow win condition to occur after "Play Again" is clicked
    if(cookies.length >= 20){
        gameWinAnimation();
        displayPlayAgainBtn();
        winCookieBtn.removeEventListener("click", handleCookieBtnClick);
    }
}

function handleSatisfactionBtnClick(){
    satisfactionBarMessage();
}

function handleCookieJar(){
    cookieJarDisplay.value = `You have ${cookies.length} cookies!`;
}

function displayPlayAgainBtn(){
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.setAttribute("id", "play-again-btn");
    gameWinContainer.appendChild(playAgainBtn); 
}

function gameWinAnimation(){
    const gameWinText = document.createElement("h1");
    gameWinText.textContent = `Congratulations, You Fed your Hunger and Won!`;
    gameWinContainer.appendChild(gameWinText);
}

function resetGame(){
    winCookieBtn.addEventListener("click", handleCookieBtnClick);
    gameWinContainer.textContent = "";
    satisfactionBarDisplay.value = "Satisfaction Level";
    winCookieDisplay.value = "Win a Cookie Message!";
    cookies = [];
    console.log(cookies);
}


//--------------- Event Listeners ----------------\\
satisfactionBtn.addEventListener("mouseover", handleSatisfactionBtnClick);

winCookieBtn.addEventListener("click", handleCookieBtnClick);

cookieJarIcon.addEventListener("mouseover", handleCookieJar);

cookieJarIcon.addEventListener("mouseout", ()=>{
    cookieJarDisplay.value = `Cookies Inside Jar!`;
});

playAgainBtn.addEventListener("click", resetGame);





