//assigning variables from DOM
let button = document.querySelector("#start-button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let main = document.querySelector("main");
let aside = document.createElement("aside");
let section = document.querySelector("section");
let form = document.querySelector("form");
let input = document.querySelector("input");
let ol = document.querySelector("ol");
//timer append
main.append(aside);
let timer = document.querySelector("#timer");

//all answer buttons
let answerButtons = document.querySelectorAll(".answer-buttons");
//individual answer buttons
let answerButton1 = document.querySelector("#answer-button-1");
let answerButton2 = document.querySelector("#answer-button-2");
let answerButton3 = document.querySelector("#answer-button-3");
let answerButton4 = document.querySelector("#answer-button-4");
let correctIncorrect = document.querySelector("#correct-incorrect");

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

let timeLeft = 60;
let listNumber = -1;
form.style.display = "none";
//initial screen button, hides main button and uses the change question function to fill those buttons and h1 with the correct information.  starts timer.
button.addEventListener("click", () => {
  //start interval right away
  aside.innerText = "Time " + timeLeft;
  timeLeft -= 1;
  //continue interval
  let stopInterval = setInterval(() => {
    aside.innerText = "Time " + timeLeft;
    timeLeft -= 1;
    //if time runs out run allDone() clear the interval
    if (timeLeft === 0) {
      allDone();
      clearInterval(stopInterval);
    }
  }, 1000);
  //change question function which changes questions as they are chosen.
  changeQuestionFunction();
  //hide paragraph and form
  p.style.display = "none";

  //hide the main button
  button.style.display = "none";
  //display the answer buttons
  for (answerButton of answerButtons) {
    answerButton.style.display = "block";
  }
  //changes the question and answer choices until setting off allDone function to clear the screen for final score.

  function changeQuestionFunction() {
    if (listNumber <= 3) {
      h1.innerText = questionsList[(listNumber += 1)].question;
      answerButton1.innerText = questionsList[listNumber].answer1;
      answerButton2.innerText = questionsList[listNumber].answer2;
      answerButton3.innerText = questionsList[listNumber].answer3;
      answerButton4.innerText = questionsList[listNumber].answer4;
    } else {
      allDone();
    }
  }

  //answer buttons
  //button one
  answerButton1.addEventListener("click", () => {
    if (
      answerButton1.innerText.slice(3) ===
      questionsList[listNumber].correctAnswer
    ) {
      correctIncorrect.innerText = "You Are Correct!";
      correctIncorrect.style.color = "green";

      changeQuestionFunction();
      setTimeout(() => {
        correctIncorrect.innerText = "";
      }, 1000);
    } else {
      timeLeft -= 10;
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
      answerButton2.innerText.slice(3) ===
      questionsList[listNumber].correctAnswer
    ) {
      correctIncorrect.style.color = "green";
      correctIncorrect.innerText = "You Are Correct!";

      changeQuestionFunction();
      setTimeout(() => {
        correctIncorrect.innerText = "";
      }, 1000);
    } else {
      timeLeft -= 10;
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
      answerButton3.innerText.slice(3) ===
      questionsList[listNumber].correctAnswer
    ) {
      correctIncorrect.style.color = "green";
      correctIncorrect.innerText = "You Are Correct!";

      changeQuestionFunction();
      setTimeout(() => {
        correctIncorrect.innerText = "";
      }, 1000);
    } else {
      timeLeft -= 10;
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
      answerButton4.innerText.slice(3) ===
      questionsList[listNumber].correctAnswer
    ) {
      correctIncorrect.style.color = "green";
      correctIncorrect.innerText = "You Are Correct!";

      changeQuestionFunction();
      setTimeout(() => {
        correctIncorrect.innerText = "";
      }, 1000);
    } else {
      timeLeft -= 10;
      correctIncorrect.style.color = "red";
      correctIncorrect.innerText = "Incorrect";
      changeQuestionFunction();

      setTimeout(() => {
        correctIncorrect.innerText = "";
      }, 1000);
    }
  });

  //clears questions and buttons and displays final score
  function allDone() {
    for (let answerButton of answerButtons) {
      answerButton.style.display = "none";
      correctIncorrect.style.display = "none";
    }
    //h1 All Done!
    h1.innerText = "All Done!";
    //p
    p.innerText = "Your Final Score is " + timeLeft + " points!";
    p.style.display = "block";
    //form display
    form.style.display = "block";
    //timer changes to score
    aside.innerText = "Score " + timeLeft + "!";
    //stopping timer
    clearInterval(stopInterval);
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  input.addEventListener("change", (e) => {
    console.log(e.target.value);
    h1.innerText = "High Scores";
    p.style.display = "none";
    form.style.display = "none";
    let li = document.createElement("li");
    li.innerText = `${e.target.value} - ${timeLeft}`;
    ol.appendChild(li);
    console.log(li);
  });
});
