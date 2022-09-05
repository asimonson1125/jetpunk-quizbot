// ==UserScript==
// @name         Jetpunk Quizbot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Andrew Simonson
// @match        https://www.jetpunk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jetpunk.com
// @grant        none
// ==/UserScript==

function run(answers){
    console.log(answers);
    for(let i = 0; i < answers.length; i++){
        document.querySelector('#txt-answer-box').value = answers[i].join(' ');
        document.querySelector('#txt-answer-box').dispatchEvent(new KeyboardEvent('input'))
    }
}

(function() {
    let divs = document.getElementById('grid').querySelectorAll('.answer-display')
    let answers = [];
    for (let i = 0; i < divs.length; i++){
        let answer = divs[i].textContent.replaceAll('\n', '').split(' ');
        answers.push(answer);
    }
    document.querySelector('#start-button').onclick = function () {run(answers)};
})();
