//jQuery
// $('#music').click(function(){
//     $("#left-text").hide();
// })

// When we select "body" as the target selector we are referring to the window/body of the page
// $("body").keydown(function(e){
    //With the keydown event, each key on the keyboard is part of the event object - The event object has a property called "which" that we can use to access the keycode for any particular key
//     console.log(e.which);
//     if(e.which === 9){ //Keycode 9 = TAB key
//         $("#left-text").hide();
//     }
//     if(e.which === 13){ //Keycode 13 = ENTER key
//         $("#left-text").show();
//     }
// });
// $("h1").html("<h1>This is the new title using jQuery!</h1>")

//---- Cached Element References ----\\
const backgroundMusic = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/background-music.mp3`);

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
    //Add user generated cookie to cookie jar array
    addToJar(entry) {
        cookieJar.push(entry);
    }
    //Display message after user generates and "wins" a cookie
    generatedMessage() {
        // winCookieDisplay.value = `You won a ${this.flavor} ${this.shape} cookie`;
        $("#win-cookie").val(`You won a ${this.flavor} ${this.shape} cookie`);
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
                // cookieJarDisplay.value = "Error";
                $("#cookie-jar-display").val("Error")         
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
                // rightTextContainer.value = "Error";
                $("#right-text").val("Error");        
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
            // cookieJarDisplay.value = "Error";
            $("#cookie-jar-display").val("Error");   
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
            // rightTextContainer.value = "Error";  
            $("#right-text").val("Error");
        }
    }   
}


//-------------------------------------- Functions --------------------------------------\\
    //Functions to add the ponits from each cookie property
const sumOfPoints = (flavorPoints, shapePoints)=>{
    score = flavorPoints + shapePoints;
    return score;
}
const sumOfComputerPoints = (computerFlavorPoints, computerShapePoints)=>{
    computerScore = computerFlavorPoints + computerShapePoints;
    return computerScore;
}
    //Message displayed based on length of cookie jar referencing satisfaction level array
function satisfactionBarMessage(){
    switch(cookieJar.length){
        case 4:
            // satisfactionBarDisplay.value = satisfactionLevel[0];
            $("#satisfaction-bar").val(satisfactionLevel[0]);
            break;
        case 8:
            // satisfactionBarDisplay.value = satisfactionLevel[1];
            $("#satisfaction-bar").val(satisfactionLevel[1]);
            break;
        case 12:
            // satisfactionBarDisplay.value = satisfactionLevel[2];
            $("#satisfaction-bar").val(satisfactionLevel[2]);
            break;
        case 16:
            // satisfactionBarDisplay.value = satisfactionLevel[3];
            $("#satisfaction-bar").val(satisfactionLevel[3]);
            break;
        case 20:
            // satisfactionBarDisplay.value = satisfactionLevel[4];
            $("#satisfaction-bar").val(satisfactionLevel[4]);
            break;
        default:
            if(cookieJar.length >= 21){ //Ending display and style after last cookie earned
                // satisfactionBarDisplay.value = "Stop Eating!";
                $("#satisfaction-bar").val("Stop Eating!");
                // satisfactionBarDisplay.style.color = "red";
                // $("#satisfaction-bar").css("color", "red");
                $("#satisfaction-bar").css({color: "red"});
            }else{
                // satisfactionBarDisplay.value = "Keep Eating!"; //display should condition in swith statement NOT be either of the cases
                $("#satisfaction-bar").val("Keep Eating!");
            }
            break;
        }
    }

function generateCookie() {
    let cookie;
    let randomInt1 = Math.floor(Math.random() * (flavors.length)); //Generating random numbers to represent index value during cookie generation
    let randomInt2 = Math.floor(Math.random() * (shapes.length));
    cookie = new Cookies(flavors[randomInt1], shapes[randomInt2]); //Instance object (cookie) using Cookies Class
    cookie.addToJar(cookie); //Adding generated cookie to cookieJar array
    cookie.generatedMessage(cookie);
    cookie.addFlavorPoints(); //Method in Cookie Class to add the points to the variable (so we can use later inside function that sums both variables)
    cookie.addShapePoints();
    sumOfPoints(flavorPoints, shapePoints); //Invoking function to sum points for each cookie generated
}

function computerGeneratedCookie(){
    let computerCookie;
    let computerRandomInt1 =  Math.floor(Math.random() * (flavors.length));
    let computerRandomInt2 =  Math.floor(Math.random() * (shapes.length));
    computerCookie = new Cookies(flavors[computerRandomInt1], shapes[computerRandomInt2]);
    computerCookie.addComputerFlavorPoints();
    computerCookie.addComputerShapePoints();
    sumOfComputerPoints(computerFlavorPoints, computerShapePoints);
    computerTotalPointsDisplay(); //Invoking function that displays computer points total
}
 
function handleCookieBtnClick(){
    // winCookieDisplay.style.transform = "scale(1.2)";
    $("#win-cookie").css({transform: "scale(1.2)"});
    setTimeout(cookieDisplaySize, 500); //Ensures returning scale size of display input to initial size
    // satisfactionBarDisplay.value = `Eat the Cookie!`;
    $("#satisfaction-bar").val("Eat the Cookie!");
    generateCookie();
    gameStartAnimation(); //Animation coded in CSS to start the blinking effect 
    // cookieJarDisplay.value = `Total Points: ${score}`;
    $("#cookie-jar-display").val(`Total Points: ${score}`);
    computerGeneratedCookie();
    winCookieSound();
    if(cookieJar.length >= 21){ //End game actions: stop animation, display reset feature, display winning message with stats, and remove event listener from button to prevent user from clicking and generating cookies
        gameWinAnimation();
        displayPlayAgainBtn();
        // winCookieBtn.removeEventListener("click", handleCookieBtnClick);
        $("#win-cookie-btn").off("click", handleCookieBtnClick);
        // rightTextContainer.classList.remove("animation");
        $("#right-text").removeClass("animation");
        backgroundMusic.muted = true;
    }
}

function handleSatisfactionBtnClick(){
    // satisfactionBarDisplay.style.transform = "scale(1.2)";
    $("#satisfaction-bar").css({transform: "scale(1.2)"});
    satisfactionBarMessage();
    eatCookieSound();
    setTimeout(satisfactionDisplaySize, 500);
}

function handleCookieJar(){
    // cookieJarDisplay.value = `You have ${cookieJar.length} cookies!`;
    $("#cookie-jar-display").val(`You have ${cookieJar.length} cookies!`); 
}

function displayPlayAgainBtn(){
    // playAgainBtn.textContent = "Play Again";
    // playAgainBtn.setAttribute("id", "play-again-btn");
    // gameWinContainer.appendChild(playAgainBtn); 
    $("<button></button>", {
        "id": "play-again-btn",
        text: "Play Again",
        click: resetGame, //If we create an HTML element using the plain object syntax, we MUST define all of its properties in the object (which is the second parameter) including any events with its event handlers --> NOTE: We tried to create the button here and then add an event listener outside of this code block, but it did not work
    }).appendTo("#right-text");
};

function gameWinAnimation(){
    // const gameWinText = document.createElement("h1"); //creating element that displays end game message
    const gameWinText = $("<h1></h1>").appendTo($("#right-text"));
    if(computerScore === score){
        // gameWinText.textContent = `It's a Tie! Both You and Cookie Monster made ${score} points - try again!`;
        $(gameWinText).text(`It's a Tie! Both You and Cookie Monster made ${score} points - try again!`);

        const tieGame = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/tie-game.mp3`);
        tieGame.volume = .4;
        tieGame.play();
    }else if(computerScore > score){
        // gameWinText.textContent = `Oh no, You Lost! Cookie Monster made ${computerScore - score} more points than You - Better luck next time!`;
        $(gameWinText).text(`Oh no, You Lost! Cookie Monster made ${computerScore - score} more points than You - Better luck next time!`);

        const cookieMonsterSound = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/cookie-monster-sound.mp3`);
        cookieMonsterSound.volume = 1;
        cookieMonsterSound.play();
    }else{
        // gameWinText.textContent = `You Won! You made ${score - computerScore} more points than Cookie Monster, congratulations!`;
        $(gameWinText).text(`You Won! You made ${score - computerScore} more points than Cookie Monster, congratulations!`);

        const playerWin = new Audio(`https://github.com/chrisjimenez10/hit-the-buzzer-win-a-cookie-game/raw/main/audio/player-win.mp3`);
        playerWin.volume = .4;
        playerWin.play();
    }
    // gameWinContainer.appendChild(gameWinText); //Appending element onto HTML, so user can see the end game message
}

function cookieDisplaySize(){
    // winCookieDisplay.style.transform = "scale(1)";
    $("#win-cookie").css({transform: "scale(1)"});
}

function satisfactionDisplaySize(){
    // satisfactionBarDisplay.style.transform = "scale(1)";
    $("#satisfaction-bar").css({transform: "scale(1)"});
}

    //Reset feature and re-activating event listener to win cookie button
function resetGame(){
    // winCookieBtn.addEventListener("click", handleCookieBtnClick);
    $("#win-cookie-btn").on("click", handleCookieBtnClick);
    // gameWinContainer.textContent = "";
    $("#right-text").text("");
    // cookieJarDisplay.value = ""
    $("#cookie-jar-display").val("");
    // satisfactionBarDisplay.value = "";
    $("#satisfaction-bar").val("");
    // winCookieDisplay.value = "";
    $("#win-cookie").val("");

    flavorPoints = 0;
    shapePoints = 0;
    cookieJar = [];

    // satisfactionBarDisplay.style.color = "initial";
    $("#satisfaction-bar").css({color: "initial"});
    computerFlavorPoints = 0;
    computerShapePoints = 0;
    backgroundMusic.muted = false;
}

function gameStartAnimation(){
    // rightTextContainer.classList.add("animation");
    $("#right-text").addClass("animation");
}

function computerTotalPointsDisplay(){
    // rightTextContainer.style.fontSize = "1.5rem";
    $("#right-text").css({fontSize: "1.5rem"});
    // rightTextContainer.textContent = `Cookie Monster Total Points: ${computerScore}`;
    $("#right-text").text(`Cookie Monster Total Points: ${computerScore}`);
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
// satisfactionBtn.addEventListener("mouseover", handleSatisfactionBtnClick);
$("#satisfaction-btn").on("mouseenter", handleSatisfactionBtnClick);

// winCookieBtn.addEventListener("click", handleCookieBtnClick);
$("#win-cookie-btn").on("click", handleCookieBtnClick)

// cookieJarIcon.addEventListener("mouseover", handleCookieJar);
$("#jar").on("mouseenter", handleCookieJar);

// cookieJarIcon.addEventListener("mouseout", ()=>{
//     cookieJarDisplay.value = `Total Points: ${score}`;
// });

$("#jar").mouseleave(function(){
    $("#cookie-jar-display").val(`Total Points: ${score}`);
});

// playAgainBtn.addEventListener("click", resetGame);
// $("#play-again-btn").on("click", resetGame);

// musicButton.addEventListener("click", ()=>{
//     backgroundMusic.volume = .1;
//     backgroundMusic.play();
//     backgroundMusic.loop = true;
//     if(backgroundMusic.muted === false){
//         backgroundMusic.muted = true;
//     }else{
//         backgroundMusic.muted = false;
//     }
// })

$("#music").click(function(){
    backgroundMusic.volume = .1;
    backgroundMusic.play();
    backgroundMusic.loop = true;
    if(backgroundMusic.muted === false){
        backgroundMusic.muted = true;
    }else{
        backgroundMusic.muted = false;
    }
});
