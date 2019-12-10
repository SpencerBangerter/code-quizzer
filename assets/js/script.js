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
let scoreBtnEl = $('#score-btn');
let scoreEl = $('#score-container')
// Base Variables
// Question index to increment current question when needed
let questionIndex = 0;
// sets question from question array based upon the index above
let currentQ = questionsArr[questionIndex];
let score = 0;
let userJSON = {
    name: '',
    score: '',
}

/////////////////////
// Click Listeners //
/////////////////////

//when an button is selected run function
startButtonEl.click(startQuiz);
answerBtnEl.click(selectAnswer);
nextBtnEl.click(nextQuestion);
submitBtnEl.click(submitScore);
scoreBtnEl.click(viewScores);

///////////////
// Functions //
///////////////

function startQuiz() {
    //hide start button, and show the question container
    //set qIndex to zero for a restart option
    questionIndex = 0;
    currentQ = questionsArr[questionIndex];
    startButtonEl.addClass('hide');
    scoreBtnEl.addClass('hide');
    qContainerEl.removeClass('hide');
    scoreEl.addClass('hide');
    //calls display func with the current Question set above
    dispQuestion(currentQ);
    score = 300
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

function selectAnswer(e) {
     if ($(e.target).text() === currentQ.answer) {
         $(e.target).addClass('btn-success');
         nextBtnEl.removeClass('hide');
     } else if ($(e.target).text() !== currentQ.answer && $(e.target).hasClass('btn')){
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
        qContainerEl.addClass('hide')
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
        // Set user to localStorage
        userJSON.name = user.value
        userJSON.score = score
        localStorage.setItem("user", JSON.stringify(userJSON))
        //hide and display appropriate elements
        formEl.addClass('hide');
        submitBtnEl.addClass('hide');
        startButtonEl.removeClass('hide');
        startButtonEl.text('Restart');
        //NEED TO CREATE USER SCORE DISPLAY
        scoreEl.removeClass('hide');
    }

};

function viewScores () {
    startButtonEl.removeClass('hide');
    startButtonEl.text('Start Quiz')
    scoreBtnEl.addClass('hide');
    scoreEl.removeClass('hide');
}
