const htmlClassMessage = document.querySelector(
  ".message"
) as HTMLParagraphElement;
const htmlClassNumber = document.querySelector(".number") as HTMLDivElement;
const htmlClassScore = document.querySelector(".score") as HTMLSpanElement;
const htmlClassGuess = document.querySelector(".guess") as HTMLInputElement;
const htmlClasscheck = document.querySelector(".check") as HTMLButtonElement;
const htmlClassHighScore = document.querySelector(
  ".highscore"
) as HTMLSpanElement;
htmlClassMessage.textContent = "❌Wrong or 🟢Right guess Number!";
htmlClassNumber.textContent = "?";
htmlClassScore.textContent = "10";
htmlClassHighScore.textContent = "0";

let highScoreCount: number = 0;
// let highScoreCount:number=(htmlClassHighScore.textContent as unknown) as number;
const againFn=():void=>{
    htmlClassMessage.textContent = "❌Wrong or 🟢Right, guess Number!";
    htmlClassNumber.textContent = "?";
    htmlClassScore.textContent = "10";
    htmlClassHighScore.textContent = "0";
};
const getRandomNum = (): string => {
    //creates random guess number for game;
  const randomNum = Math.floor(Math.random() * 20) + 1;
  console.log("====================================");
  console.log(randomNum);
  console.log("====================================");
  return (randomNum as unknown) as string;
};

const checkGuessNumber = function (guess: number): void {
  if (guess === (+(htmlClassNumber.textContent as unknown) as number)) {
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
  htmlClassScore.textContent = String(
    (htmlClassScore.textContent as unknown as number) - 1
  );
};

htmlClasscheck.addEventListener("click", () => {
  if ((+(htmlClassScore.textContent as unknown) as number) === 0)
    return alert("All chances used up please 'Try again' :-)");
  if (!htmlClassGuess.value)
    return alert("Please insert a Guess number between 1 and 20.");
  const guessNumber: number = +(htmlClassGuess.value as unknown) as number;

  if (guessNumber && guessNumber >= 1 && guessNumber <= 20) {
    checkGuessNumber(guessNumber);
  }
});
