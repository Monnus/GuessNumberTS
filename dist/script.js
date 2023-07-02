var htmlClassMessage = document.querySelector(".message");
var htmlClassNumber = document.querySelector(".number");
var htmlClassScore = document.querySelector(".score");
var htmlClassGuess = document.querySelector(".guess");
var htmlClasscheck = document.querySelector(".check");
var htmlClassHighScore = document.querySelector(".highscore");
htmlClassMessage.textContent = "❌Wrong or 🟢Right guess Number!";
htmlClassNumber.textContent = "?";
htmlClassScore.textContent = "10";
htmlClassHighScore.textContent = "0";
var highScoreCount = 0;
// let highScoreCount:number=(htmlClassHighScore.textContent as unknown) as number;
var againFn = function () {
    htmlClassMessage.textContent = "❌Wrong or 🟢Right, guess Number!";
    htmlClassNumber.textContent = "?";
    htmlClassScore.textContent = "10";
    htmlClassHighScore.textContent = "0";
};
var getRandomNum = function () {
    //creates random guess number for game;
    var randomNum = Math.floor(Math.random() * 20) + 1;
    console.log("====================================");
    console.log(randomNum);
    console.log("====================================");
    return randomNum;
};
var checkGuessNumber = function (guess) {
    if (guess === +htmlClassNumber.textContent) {
        console.log("====================================");
        console.log("worked");
        console.log("====================================");
        highScoreCount++;
        htmlClassMessage.textContent = "🎉 Correct Number!";
        htmlClassHighScore.textContent = String(highScoreCount);
        htmlClassNumber.textContent = String(getRandomNum());
        return;
    }
    htmlClassMessage.textContent = "💥 Wrong Number!";
    htmlClassScore.textContent = String(htmlClassScore.textContent - 1);
};
htmlClasscheck.addEventListener("click", function () {
    if (+htmlClassScore.textContent === 0)
        return alert("All chances used up please 'Try again' :-)");
    if (!htmlClassGuess.value)
        return alert("Please insert a Guess number between 1 and 20.");
    var guessNumber = +htmlClassGuess.value;
    if (guessNumber && guessNumber >= 1 && guessNumber <= 20) {
        checkGuessNumber(guessNumber);
    }
});
