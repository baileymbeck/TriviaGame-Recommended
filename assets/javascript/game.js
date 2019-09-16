var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("qImage");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var scoreCounter = document.getElementById("scoreCounter");

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