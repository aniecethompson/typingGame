let time = 5;
let score = 0;
let isPlaying;  

// DOM Elements 
const wordInput = document.getElementById("word-input")
const currentWord = document.getElementById("current-word")
const scoreDisplay = document.getElementById("score")
const timeDisplay = document.getElementById("time")
const message = document.getElementById("message")
const seconds = document.getElementById("seconds")

const words =[
'line', 'chivalrous', 'veil', 'near', 'accept', 'unbecoming', 'admit', 'knowing', 'young', 'wave', 
'obtainable','board', 'attract', 'tremendous', 'expansion', 'absurd', 'curly', 'ring', 'confused', 
'cook', 'shelter', 'middle', 'little', 'squirrel', 'bone', 'theory', 'familiar', 'splendid', 'next',
'overconfident', 'afraid', 'sudden', 'stuff', 'javascript', 'rails', 'ruby', 'bootstrap', 'redux', 
'angular', 'python', 'developer', 'data', 'react', 'science', 'math', 'algorithm', 'befitting', 
'move', 'elbow', 'tongue', 'idea', 'free', 'berry','pathetic', 'interfere', 'broken', 'salt', 
'yielding', 'garage', 'animated', 'church', 'calculate','impossible', 'comparison', 'kaput', 
'even', 'describe', 'fancy', 'approval', 'solid', 'recondite'
]