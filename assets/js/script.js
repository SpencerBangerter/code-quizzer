///////////////////////
// Element Variables //
///////////////////////

let startButtonEl = $("#start-btn");
// let startButtonEl = document.getElementById('start-btn')
let qContainerEl = $('#question-container');
let questionEl = $('#question')
let aGridEl = $('#answer-buttons')


//When Start is clicked hide start and launch question 1.

startButtonEl.click(startQuiz);
// startButtonEl.addEventListener('click', startQuiz);

// Question index to increment current question when needed
let questionIndex = 0
// sets question from question array based upon the index above
let currentQ = questionsArr[questionIndex]

///////////////
// Functions //
///////////////

function startQuiz() {
    //hide start button, and show the question container
    // startButtonEl.classList.add('hide');
    startButtonEl.addClass('hide');
    qContainerEl.removeClass('hide');
    //calls display func with the current Question set above
    dispQuestion(currentQ)
}

//Display the question of current index, and make buttons for each answer option. 
//Allows for any number of answers on any question.
function dispQuestion(question) {
    //Removes previous button options
    aGridEl.empty();
    //Set question text
    questionEl.text(question.title);
    //create answer buttons for each item in answers choice array
    $.each(question.choices, function (index, options) {
        debugger
        //create button, set text, add button class, and append to end for each choice
        let newButton = $('<button>');
        newButton.text(options);
        newButton.addClass('btn');
        aGridEl.append(newButton);
    })
}

