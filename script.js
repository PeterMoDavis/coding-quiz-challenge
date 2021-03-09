//assigning variables from DOM
let button = document.querySelector("#start-button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
//all answer buttons
let answerButtons = document.querySelectorAll(".answer-buttons");
//individual answer buttons
let answerButton1 = document.querySelector("#answer-button-1");
let answerButton2 = document.querySelector("#answer-button-2");
let answerButton3 = document.querySelector("#answer-button-3");
let answerButton4 = document.querySelector("#answer-button-4");
let correctIncorrect = document.querySelector("#correct-incorrect");

//changes the question and answer choices

function changeQuestionFunction() {
  h1.innerText = questionsList[(listNumber += 1)].question;
  answerButton1.innerText = questionsList[listNumber].answer1;
  answerButton2.innerText = questionsList[listNumber].answer2;
  answerButton3.innerText = questionsList[listNumber].answer3;
  answerButton4.innerText = questionsList[listNumber].answer4;
}
//creating question objects
let qAndA1 = {
  question: "Commonly used data types DO NOT include:",
  answer1: "1. strings",
  answer2: "2. booleans",
  answer3: "3. alerts",
  answer4: "4. numbers",
  correctAnswer: "alerts",
};
let qAndA2 = {
  question: "The condition in an if / else statement is enclose within ____.",
  answer1: "1. quotes",
  answer2: "2. curly brackets",
  answer3: "3. parenthesis",
  answer4: "4. square brackets",
  correctAnswer: "parenthesis",
};
let qAndA3 = {
  question: "Arrays in JavaScript can be used to store ____.",
  answer1: "1. numbers and strings",
  answer2: "2. other arrays",
  answer3: "3. booleans",
  answer4: "4. all of the above",
  correctAnswer: "all of the above",
};
let qAndA4 = {
  question:
    "String values must be enclosed within ___ when being assigned to variables",
  answer1: "1. commas",
  answer2: "2. curly brackets",
  answer3: "3. quotes",
  answer4: "4. parenthesis",
  correctAnswer: "quotes",
};
let qAndA5 = {
  question:
    "A very useful tool used during development and debugging for printing content to the debugger is",
  answer1: "1. javascript",
  answer2: "2. terminal / bash",
  answer3: "3. for loops",
  answer4: "4. console.log",
  correctAnswer: "console.log",
};

let questionsList = [qAndA1, qAndA2, qAndA3, qAndA4, qAndA5];
let listNumber = -1;
let totalScore = 0;

button.addEventListener("click", () => {
  changeQuestionFunction();
  p.style.display = "none";
  //hide the main button
  button.style.display = "none";

  //display the answer buttons
  for (answerButton of answerButtons) {
    answerButton.style.display = "block";
  }
});
//buttons
//button one
answerButton1.addEventListener("click", () => {
  if (
    answerButton1.innerText.slice(3) === questionsList[listNumber].correctAnswer
  ) {
    correctIncorrect.innerText = "You Are Correct!";
    correctIncorrect.style.color = "green";
    totalScore += 1;
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  } else {
    correctIncorrect.style.color = "red";
    correctIncorrect.innerText = "Incorrect";
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  }
});
//button 2
answerButton2.addEventListener("click", () => {
  if (
    answerButton2.innerText.slice(3) === questionsList[listNumber].correctAnswer
  ) {
    correctIncorrect.style.color = "green";
    correctIncorrect.innerText = "You Are Correct!";
    totalScore += 1;
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  } else {
    correctIncorrect.style.color = "red";
    correctIncorrect.innerText = "Incorrect";
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  }
});
//button 3
answerButton3.addEventListener("click", () => {
  if (
    answerButton3.innerText.slice(3) === questionsList[listNumber].correctAnswer
  ) {
    correctIncorrect.style.color = "green";
    correctIncorrect.innerText = "You Are Correct!";
    totalScore += 1;
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  } else {
    correctIncorrect.style.color = "red";
    correctIncorrect.innerText = "Incorrect";
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  }
});
//button 4
answerButton4.addEventListener("click", () => {
  if (
    answerButton4.innerText.slice(3) === questionsList[listNumber].correctAnswer
  ) {
    correctIncorrect.style.color = "green";
    correctIncorrect.innerText = "You Are Correct!";
    totalScore += 1;
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  } else {
    correctIncorrect.style.color = "red";
    correctIncorrect.innerText = "Incorrect";
    changeQuestionFunction();
    setTimeout(() => {
      correctIncorrect.innerText = "";
    }, 1000);
  }
});
