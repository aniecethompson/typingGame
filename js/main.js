window.addEventListener('load', startGame);

const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");

const words =[
'line', 'chivalrous', 'veil', 'near', 'accept', 'unbecoming', 'admit', 'knowing', 'young', 'wave', 
'obtainable','board', 'attract', 'tremendous', 'expansion', 'absurd', 'curly', 'ring', 'confused', 
'cook', 'shelter', 'middle', 'little', 'squirrel', 'bone', 'theory', 'familiar', 'splendid', 'next',
'overconfident', 'afraid', 'sudden', 'stuff', 'javascript', 'rails', 'ruby', 'bootstrap', 'redux', 
'angular', 'python', 'developer', 'data', 'react', 'science', 'math', 'algorithm', 'befitting', 
'move', 'elbow', 'tongue', 'idea', 'free', 'berry','pathetic', 'interfere', 'broken', 'salt', 
'yielding', 'garage', 'animated', 'church', 'calculate','impossible', 'comparison', 'kaput', 
'even', 'describe', 'fancy', 'approval', 'solid', 'recondite'
];

function startGame() {
  seconds.innerText = currentLevel;

  showWords(words);

  wordInput.addEventListener('input', startMatch);

  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWords(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerText = 0;
  } else {
    scoreDisplay.innerText = score;
  }
}

// Matches input with currentWord
function matchWords() {
  if (wordInput.value === currentWord.innerText) {
    message.innerText = 'Correct!!!';
    return true;
  } else {
    message.innerText = '';
    return false;
  }
}

// Show random word
function showWords(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randIndex];
}

// Countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerText = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerText = 'Game Over!!!';
    score = -1;
  }
}