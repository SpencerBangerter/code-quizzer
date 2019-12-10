///////////////
// Variables //
///////////////

// Element variables
let startButtonEl = $("#start-btn");
let qContainerEl = $('#question-container');
let questionEl = $('#question');
let aGridEl = $('#answer-buttons');
let nextBtnEl = $('#next-btn');
let answerBtnEl = $('#answer-buttons');
let submitBtnEl = $('#submit-btn');
let formEl = $('#user-form');
let userEl = $('#user');
let controlsEl = $('#controls');
// Base Variables
// Question index to increment current question when needed
let questionIndex = 0;
// sets question from question array based upon the index above
let currentQ = questionsArr[questionIndex];
let score = 300;

/////////////////////
// Click Listeners //
/////////////////////

//when an button is selected run function
startButtonEl.click(startQuiz);
answerBtnEl.click(selectAnswer);
nextBtnEl.click(nextQuestion);
submitBtnEl.click(submitScore);

///////////////
// Functions //
///////////////

function startQuiz() {
    //hide start button, and show the question container
    // startButtonEl.classList.add('hide');
    startButtonEl.addClass('hide');
    qContainerEl.removeClass('hide');
    //calls display func with the current Question set above
    dispQuestion(currentQ);
};

//Display the question of current index, and make buttons for each answer option. 
//Allows for any number of answers on any question.
function dispQuestion(question) {
    //Removes previous button options
    aGridEl.empty();
    //Set question text
    questionEl.text(question.title);
    //create answer buttons for each item in answers choice array
    $.each(question.choices, function (index, options) {
        //create button, set text, add button class, and append to end for each choice
        let newButton = $('<button>');
        newButton.text(options);
        newButton.addClass('btn');
        aGridEl.append(newButton);
    })
};

//Bug when clicking inbetween buttons TO FIX
function selectAnswer(e) {
     if ($(e.target).text() === currentQ.answer) {
         $(e.target).addClass('btn-success');
         nextBtnEl.removeClass('hide');
     } else if ($(e.target).text() !== currentQ.answer){
        $(e.target).addClass('btn-danger');
        score -= 15;
        console.log(score);
     }
};

function nextQuestion () {
    //increment q index and run appropriate statement
    questionIndex++
    currentQ = questionsArr[questionIndex]
    if (questionIndex === questionsArr.length){
        //Stop Score countdown

        //Empty container, show correct buttons/name input
        qContainerEl.empty()
        formEl.removeClass('hide');
        submitBtnEl.removeClass('hide');
        nextBtnEl.addClass('hide');
        controlsEl.addClass('grid');

    

    } else {
        dispQuestion(currentQ);
        nextBtnEl.addClass('hide');
    }
};

function submitScore () {
    if (!user.value) {
        formEl.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    } else {
        
    }

};

