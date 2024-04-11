//---- Cached Element References ----\\
const winCookieBtn = document.getElementById("win-cookie-btn");

const winCookieDisplay = document.getElementById("win-cookie");

const satisfactionBtn = document.getElementById("satisfaction-btn");

const satisfactionBarDisplay = document.getElementById("satisfaction-bar");

const bottomCell = document.querySelector(".bottom-cell");

const cookieJarIcon = document.getElementById("jar");

const cookieJarDisplay = document.getElementById("cookie-jar-display");

//--------------- Variables ----------------\\
let cookies = [];
let satisfactionLevel = ["Very Hungry!", "Hungry", "Small Portion Please!", "I'm Stuffed!", "I'm at my Limit!"];

//--------------- Functions ---------------\\
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
    if(cookies.length >= 20){
        gameWinAnimation();
    }else{
    gameWinText.textContent = "";
    // console.log(cookies);
    }
}

function handleSatisfactionBtnClick(){
    satisfactionBarMessage();
}

function handleCookieJar(){
    cookieJarDisplay.value = `You have ${cookies.length} cookies!`;
}


//---- Event Listeners ----\\
satisfactionBtn.addEventListener("click", handleSatisfactionBtnClick);

winCookieBtn.addEventListener("click", handleCookieBtnClick);

cookieJarIcon.addEventListener("mouseover", handleCookieJar);

cookieJarIcon.addEventListener("mouseout", ()=>{
    cookieJarDisplay.value = `Cookies Inside Jar!`;
});


//--------------- Game Winning Animation ---------------\\
function gameWinAnimation(){
    const gameWinContainer = document.querySelector("#right-text");
    const gameWinText = document.createElement("h1");
    gameWinText.textContent = `Congratulations, You Fed your Hunger and Won!`;
    gameWinContainer.appendChild(gameWinText);
}




