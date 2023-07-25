const htmlClassMessage = document.querySelector(".message") as HTMLParagraphElement;
const htmlClassNumber = document.querySelector(".number") as HTMLDivElement;
const htmlClassScore = document.querySelector(".score") as HTMLSpanElement;
const htmlClassGuess = document.querySelector(".guess") as HTMLInputElement;
const htmlClasscheck = document.querySelector(".check") as HTMLButtonElement;
const htmlClassHighScore = document.querySelector(".highscore") as HTMLSpanElement;
const htmlClassAgain=document.querySelector(".again") as HTMLButtonElement;
htmlClassMessage.textContent = "❌Wrong or 🟢Right guess Number!";
htmlClassScore.textContent = "10";
htmlClassHighScore.textContent = "0";

let highScoreCount: number = 0;
let stateOfPlay=true;
const getRandomNum = (): number => {
    //creates random guess number for game;
  const randomNum:number = Math.floor(Math.random() * 20) + 1;
  console.log("====================================");
  console.log(randomNum);
  console.log("====================================");
  return randomNum;
};
let guessCheckNumber:number=getRandomNum();

// let highScoreCount:number=(htmlClassHighScore.textContent as unknown) as number;
const againFn=():boolean=>{
    htmlClassMessage.textContent = "❌Wrong or 🟢Right, guess Number!";
    guessCheckNumber=getRandomNum();
    htmlClassNumber.textContent = String(guessCheckNumber);
    htmlClassScore.textContent = "10";
    document.querySelector("body").style.backgroundColor="#222";
    htmlClassNumber.style.width="14rem";
    console.log('====================================');
    console.log(stateOfPlay);
    console.log('====================================');
   return stateOfPlay=true;

};


htmlClassNumber.textContent ="?";

const checkGuessNumber = function (guess: number): void {
  if (guess === guessCheckNumber) {
      console.log("====================================");
      console.log(guess);
      console.log("====================================");
    highScoreCount++;
     document.querySelector("body").style.backgroundColor="#60b347";
     htmlClassNumber.style.width="25rem";
    htmlClassMessage.textContent = "🎉 Correct Number!";
    htmlClassNumber.textContent = String(guessCheckNumber);
    htmlClassHighScore.textContent = String(highScoreCount);
    stateOfPlay=false;
    return;
  }
  htmlClassMessage.textContent = "💥 Wrong Number!";
  htmlClassScore.textContent = String(
    (htmlClassScore.textContent as unknown as number) - 1
  );
};
//butttons
//===============check guess btn==========================
htmlClasscheck.addEventListener("click", () => {
    if(stateOfPlay){

        if ((+(htmlClassScore.textContent as unknown) as number) === 0)
        return alert("All chances used up please 'Try again' :-)");
        if (!htmlClassGuess.value)
    return alert("Please insert a Guess number between 1 and 20.");
  const guessNumber: number = +(htmlClassGuess.value as unknown) as number;

  if (guessNumber && guessNumber >= 1 && guessNumber <= 20) {
    checkGuessNumber(guessNumber);
}
};
});

//=====================click agin btn=====================
    htmlClassAgain.addEventListener("click",againFn);
