var questions = [
  ['How many states are in the United States?', 52],
  ['What is 1 + 1?', 2],
  ['What\'s 2+2', 4]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html = '';
var correctQuestions = [];
var incorrectQuestions = [];



function print(message) {
   var outputDiv = document.getElementById('output');
   outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  
  for (let i = 0; i < arr.length; i++) {
      listHTML += `<li>${arr[i]}</li>`;
  }
  
  listHTML += '</ol>';
  return listHTML;
}


for (let i = 0; i < questions.length; i++) {
  response = parseInt(prompt(questions[i][0]));
    if(response === questions[i][1]) {
    correctAnswers += 1;
    correctQuestions.push(questions[i][0]);  
  } else {
    incorrectQuestions.push(questions[i][1]);
  }

}

html += `You got ${correctAnswers} questions right.<br>`;
html += `You got these questions right:<br>`;
html += buildList(correctQuestions);
html += `You got these questions wrong:<br>`;
html += buildList(incorrectQuestions);

print(html);

