var htmlClassMessage = document.querySelector(".message");
var htmlClassNumber = document.querySelector(".number");
var htmlClassScore = document.querySelector(".score");
var htmlClassGuess = document.querySelector(".guess");
var htmlClasscheck = document.querySelector(".check");
var htmlClassHighScore = document.querySelector(".highscore");
var htmlClassAgain = document.querySelector(".again");
htmlClassMessage.textContent = "❌Wrong or 🟢Right guess Number!";
htmlClassScore.textContent = "10";
htmlClassHighScore.textContent = "0";
var highScoreCount = 0;
var stateOfPlay = true;
var getRandomNum = function () {
    //creates random guess number for game;
    var randomNum = Math.floor(Math.random() * 20) + 1;
    console.log("====================================");
    console.log(randomNum);
    console.log("====================================");
    return randomNum;
};
var guessCheckNumber = getRandomNum();
// let highScoreCount:number=(htmlClassHighScore.textContent as unknown) as number;
var againFn = function () {
    htmlClassMessage.textContent = "❌Wrong or 🟢Right, guess Number!";
    guessCheckNumber = getRandomNum();
    htmlClassNumber.textContent = String(guessCheckNumber);
    htmlClassScore.textContent = "10";
    document.querySelector("body").style.backgroundColor = "#222";
    htmlClassNumber.style.width = "14rem";
    console.log('====================================');
    console.log(stateOfPlay);
    console.log('====================================');
    return stateOfPlay = true;
};
htmlClassNumber.textContent = String(guessCheckNumber);
var checkGuessNumber = function (guess) {
    if (guess === guessCheckNumber) {
        console.log("====================================");
        console.log(guess);
        console.log("====================================");
        highScoreCount++;
        document.querySelector("body").style.backgroundColor = "#60b347";
        htmlClassNumber.style.width = "25rem";
        htmlClassMessage.textContent = "🎉 Correct Number!";
        htmlClassNumber.textContent = String(guessCheckNumber);
        htmlClassHighScore.textContent = String(highScoreCount);
        stateOfPlay = false;
        return;
    }
    htmlClassMessage.textContent = "💥 Wrong Number!";
    htmlClassScore.textContent = String(htmlClassScore.textContent - 1);
};
//butttons
//===============check guess btn==========================
htmlClasscheck.addEventListener("click", function () {
    if (stateOfPlay) {
        if (+htmlClassScore.textContent === 0)
            return alert("All chances used up please 'Try again' :-)");
        if (!htmlClassGuess.value)
            return alert("Please insert a Guess number between 1 and 20.");
        var guessNumber = +htmlClassGuess.value;
        if (guessNumber && guessNumber >= 1 && guessNumber <= 20) {
            checkGuessNumber(guessNumber);
        }
    }
    ;
});
//=====================click agin btn=====================
htmlClassAgain.addEventListener("click", againFn);
