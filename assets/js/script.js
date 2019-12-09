///////////////////////
// Element Variables //
///////////////////////

// let startButtonEl = $("#start-btn");
let startButtonEl = document.getElementById('start-btn')
let qContainerEl = document.getElementById('question-container');
let questionEl = document.getElementById('question')
let aGridEl = document.getElementById('answer-buttons')


//When Start is clicked hide start and launch question 1.

// startButtonEl.click(startQuiz);
startButtonEl.addEventListener('click', startQuiz);

// Question index to increment current question when needed
let questionIndex = 0
// sets question from question array based upon the index above
let currentQ = questionsArr[questionIndex]

///////////////
// Functions //
///////////////

function startQuiz() {
    console.log('Start Quiz');
    startButtonEl.classList.add('hide');
    qContainerEl.classList.remove('hide');
    //calls display func with the current Question set above
    dispQuestion(currentQ)
}

//Display the question of current index, and make buttons for each answer option. 
//Allows for any number of answers on any question.
function dispQuestion(question) {
    //Removes previous button options
    resetDisp()
    //Set question text
    questionEl.textContent = question.title
    //create answer buttons for each item in answers choice array
    question.choices.forEach(function (options) {
        //create button, set text, add button class, and append to end for each choice
        let newButton = document.createElement('button')
        newButton.textContent = options
        newButton.classList.add('btn')
        aGridEl.appendChild(newButton)
    })
}

function resetDisp() {
    while (aGridEl.firstChild) {
        aGridEl.removeChild(aGridEl.firstChild)
    }
}