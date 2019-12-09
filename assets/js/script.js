// set Element Variables

// let startButtonEl = $("#start-btn");
let startButtonEl = document.getElementById('start-btn')

let qContainerEl = document.getElementById('question-container');
let questionEl = document.getElementById('question')


//When Start is clicked hide start and launch question 1.

// startButtonEl.click(startQuiz);
startButtonEl.addEventListener('click', startQuiz);

// Question index to increment current question
let questionIndex = 0

// Functions
function startQuiz() {
    console.log('Start Quiz');
    startButtonEl.classList.add('hide');
    qContainerEl.classList.remove('hide');
    dispQuestion()
}

function dispQuestion() {
    questionEl.textContent = questionsArr[questionIndex].title
}