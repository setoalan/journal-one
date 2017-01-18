var questions = [
  'When was the last time you tried something new?',
  'Who do you sometimes compare yourself to?',
  'What&#39;s the most sensible thing you’ve ever heard someone say?',
  'What gets you excited about life?',
  'What life lesson did you learn the hard way?',
  'What do you wish you spent more time doing five years ago?',
  'Do you ask enough questions or do you settle for what you know?',
  'Who do you love and what are you doing about it?',
  'What&#39;s a belief that you hold with which many people disagree?',
  'What can you do today that you were not capable of a year ago?'
];

document.getElementById('date').innerHTML = '<h1>' + moment().format('dddd, MMMM Do, YYYY') + '</h1>';

var randomNumber = Math.floor(Math.random() * (questions.length));
document.getElementById('journalQuestion').innerHTML = '<h1>' + questions[randomNumber] + '</h1>';
