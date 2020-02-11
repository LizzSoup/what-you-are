var questionOne;
var questionTwo;
var questionThree;
var questionFour;
var questionFive;

function selectOption(question, option) {

  var listOfAnswers = {
    questionOne: questionOne,
    questionTwo: questionTwo,
    questionThree: questionThree,
    questionFour: questionFour,
    questionFive: questionFive
  };

     // Change background colours, based on which option was selected  
     var selected = document.querySelector(`#${question} .${option}`);
    selected.className += ' selected';
    switch (option) {
    case 'a':      
      document.querySelector(`#${question} .b`).classList.remove('selected');
      document.querySelector(`#${question} .c`).classList.remove('selected');
      document.querySelector(`#${question} .d`).classList.remove('selected');
      break;
    case 'b':
        document.querySelector(`#${question} .a`).classList.remove('selected');
        document.querySelector(`#${question} .c`).classList.remove('selected');
        document.querySelector(`#${question} .d`).classList.remove('selected');
        break;
    case 'c':       
        document.querySelector(`#${question} .a`).classList.remove('selected');
        document.querySelector(`#${question} .b`).classList.remove('selected');
        document.querySelector(`#${question} .d`).classList.remove('selected');
        break; 
    case 'd':
        document.querySelector(`#${question} .a`).classList.remove('selected');
        document.querySelector(`#${question} .b`).classList.remove('selected');
        document.querySelector(`#${question} .c`).classList.remove('selected');
        break;
  }


  switch (question) {
    case 'one':
      questionOne = option;
      break;
    case 'two':
      questionTwo = option;
      break;
    case 'three':
      questionThree = option;
      break;
    case 'four':
      questionFour = option;
      break;
    case 'five':
      questionFive = option;
      break;

  };


  // Checking to see what works
  console.log(question, option);

  console.log(`question One is ${questionOne}`);
  console.log(`question Two is ${questionTwo}`);
  console.log(`question Three is ${questionThree}`);
  console.log(`question Four is ${questionFour}`);
  console.log(`question Five is ${questionFive}`);
}  

function getResult() {
  var optionA;
  var optionB;
  var optionC;
  var optionD;
  var results = document.getElementById("showResult");

// Change submit button color
  document.querySelector('.enter').className += ' selected';

// Setting option counts to zero in case of multiple submission clicks
optionA = 0;
optionB = 0;
optionC = 0;
optionD = 0;

// Store answer for question one 
switch (questionOne) {
  case 'a':
    optionA++;
    break;
  case 'b':
    optionB++;
    break;
  case 'c':
    optionC++;
    break;
  case 'd': 
    optionD++;
    break;
}

// Store answer for question two
switch (questionTwo) {
  case 'a':
    optionA++;
    break;
  case 'b':
    optionB++;
    break;
  case 'c':
    optionC++;
    break;
  case 'd': 
    optionD++;
    break;
}

// Store answer for question three
switch (questionThree) {
  case 'a':
    optionA++;
    break;
  case 'b':
    optionB++;
    break;
  case 'c':
    optionC++;
    break;
  case 'd': 
    optionD++;
    break;
}

// Store answer for question four
switch (questionFour) {
  case 'a':
    optionA++;
    break;
  case 'b':
    optionB++;
    break;
  case 'c':
    optionC++;
    break;
  case 'd': 
    optionD++;
    break;
}

// Store answer for question five
switch (questionFive) {
  case 'a':
    optionA++;
    break;
  case 'b':
    optionB++;
    break;
  case 'c':
    optionC++;
    break;
  case 'd': 
    optionD++;
    break;
}

results.style.display = "block";

// Calculate and display quiz result
if (optionA > optionB && optionA > optionC && optionA > optionD) {
  results.innerHTML = "(A)YOU ARE MADE OF FARTS!";
} else if (optionB > optionA && optionB > optionC && optionB > optionD) {
  results.innerHTML = "(B) WATERMELON STEVENS";
} else if (optionC > optionA && optionC > optionB && optionC > optionD) {
  results.innerHTML = "(C) OMG I CAN'T BELIEVE IT'S WORKING!";
} else if (optionD > optionA && optionD > optionB && optionD > optionC) {
  results.innerHTML = "(D)HOLY FUCKING SHIRT BALLS!!! I DXIDDDD ITTTTTTT!! ps: I LOVE YOU SINE!"
} else {
  results.innerHTML = "OMG, YOU FREAK!";
}

// Check to see the count is working
console.log(`OptionA count:${optionA}, OptionB count: ${optionB}, OptionC count: ${optionC}, optionD count: ${optionD}`);

};


