var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");

// quiz questions
let questions = [
{   question: "What color is the sky?",
    imgSrc: "", 
    choiceA:"blue",
    choiceB: "green",
    choiceC: "orange",

    correct: "A"
},
{   question: "What color is typical grass?",
    imgSrc: "", 
    choiceA:"blue",
    choiceB: "green",
    choiceC: "orange",

    correct: "B"
},
{   question: "What color is a typical traffic cone?",
    imgSrc: "", 
    choiceA:"blue",
    choiceB: "green",
    choiceC: "orange",

    correct: "C"
},
]
// attempt to modify previous timer
$("#start").on("click", function() {
    
    $("#quiz").css("display" , "inherit");
    var sec = 10;
    var time = setInterval(myTimer, 1000);

    function myTimer() {
        document.getElementById('time').innerHTML = sec + " left";
        sec--;
        if (sec == -1) {
            clearInterval(time);
    
        }
    }
});

// populate quiz container
function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }


// var start = document.getElementById("start");
// var quiz = document.getElementById("quiz");
// var qImg = document.getElementById("qImage");
// var question = document.getElementById("question");
// var counter = document.getElementById("counter");
// var timeGauge = document.getElementById("timeGauge");

// var choiceA = document.getElementById("A");
// var choiceB = document.getElementById("B");
// var choiceC = document.getElementById("C");

// var scoreCounter = document.getElementById("scoreCounter");
