var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var welcomeMessage = readlineSync.question("What is your Name? ");
console.log(chalk.black.bgWhite("Welcome " + welcomeMessage + "! To Do You Know Me Quiz"));

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.blue.bold(question));
  if (userAnswer === answer) {
    console.log(chalk.green("Yeahhhh! It's a right answer \n"));
    score = score + 1;


  } else {

    console.log(chalk.red("OOPSS! It's a wrong answer \n"));
    // score=score - 1;

  }
  console.log(" Your Current Score : ", score);
  console.log("***************************** \n");
}

var questions = [
  {
    question: "Q1.) where do I live?",
    answer: "indore"
  },
  {
    question: "Q2.) what is my favourite color? ",
    answer: "black"
  },
  {
    question: "Q3.) What is my favourite subject ",
    answer: "maths"
  }, {
    question: "Q4.) what is my favourite movie? ",
    answer: "yeh jawani hai deewani"
  },
  {
    question: "Q5.) My favourite outdoor game? ",
    answer: "volleyball"
  }
]


// loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("You HAVE SCORE D" + score + "OUT OF 5")