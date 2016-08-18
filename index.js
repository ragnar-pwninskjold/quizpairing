// var globalQuizState = {
//   counter: 0,
//   currentQuestion: '',
//   userAnswer: null,
// }

var counter = 0;

var quiz = [
  {
    question: 'What is butter used for?',
    answers: [
      'Browning',
      'Skating',
      'Boiling water',
      'Tanning oil'
    ],
    correctAnswer: 0
  },
  {
    question: 'What is the best size for a refrigerator?',
    answers: [
      'Two doors',
      'One door',
      'Just a freezer',
      'Salt and icecubes'
    ],
    correctAnswer: 0
  },
  {
    question: 'How much pepper is enough?',
    answers: [
      'Three',
      'Sneeze',
      'Blindness',
      'A dash'
    ],
    correctAnswer: 3
  },
  {
    question: 'How many teaspoons are in a gallon?',
    answers: [
      '1000',
      '5',
      '768',
      '534'
    ],
    correctAnswer: 2
  }
];

var userAnswer;

var appendQuestion = function(){
  $(".quiz__question").append(quiz[0].question);
  console.log(quiz[0].question, 'from appendQuestion');
};

var appendAnswers = function(){
  var answerCounter = counter;
  for (i = 0; i < quiz[answerCounter].answers.length; i++){
    $('#' + i).text(quiz[answerCounter].answers[i]);
  }
};

var getUserAnswer = function(evt){
  console.log($(evt.target).data('value'));

};

var submitAnswer = function(){
  $('#submit__button').on('click', function(evt){
    evt.preventDefault();
    console.log(this);

  });
}



$(document).ready(function(){
  appendQuestion();
  appendAnswers();
  // submitAnswer();
});
