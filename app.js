//---- Cached Element References ----\\
const winCookieBtn = document.getElementById("win-cookie-btn");

const winCookieDisplay = document.getElementById("win-cookie");

const satisfactionBtn = document.getElementById("satisfaction-btn");

const satisfactionBarDisplay = document.getElementById("satisfaction-bar");

const bottomCell = document.querySelector(".bottom-cell");

//--------------- Variables ----------------\\
let cookies = [];
let satisfactionLevel = ["Very Hungry!", "Hungry", "Small Portion Please!", "I'm Stuffed!"];


//--------------- Functions ---------------\\
function satisfactionBarMessage(){
    switch(cookies.length){
        case 2:
            satisfactionBarDisplay.value = satisfactionLevel[0];
            break;
        case 4:
            satisfactionBarDisplay.value = satisfactionLevel[1];
            break;
        case 6:
            satisfactionBarDisplay.value = satisfactionLevel[2];
            break;
        case 8:
            satisfactionBarDisplay.value = satisfactionLevel[3];
            break;
        case 9:
        default:
            if (cookies.length >= 9){
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
    console.log(cookies);
}
function handleSatisfactionBtnClick(){
    satisfactionBarMessage();    
}


//---- Event Listeners ----\\
satisfactionBtn.addEventListener("click", handleSatisfactionBtnClick);

winCookieBtn.addEventListener("click", handleCookieBtnClick);

//--------------- Game Winning Condition ---------------\\
function gameWinCondition(){
    if(satisfactionBarDisplay.value === "Stop Eating!"){
        
    }
}

// while(satisfactionBarDisplay.value !== "Stop Eating!"){
        
// }



