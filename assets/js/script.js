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
let clearBtnEl = $('#clr-btn');
let userDispEl = $('#user-display');
// Base Variables
// Question index to increment current question when needed
let questionIndex = 0;
// sets question from question array based upon the index above
let currentQ = questionsArr[questionIndex];
let score = 0;
//pulls user array or sets user array to blank array if null
let usersArr = JSON.parse(localStorage.getItem("usersArr")) || [];
/////////////////////
// Click Listeners //
/////////////////////

//when an button is selected run function
startButtonEl.click(startQuiz);
answerBtnEl.click(selectAnswer);
nextBtnEl.click(nextQuestion);
submitBtnEl.click(submitScore);
scoreBtnEl.click(viewScores);
clearBtnEl.click(clearScores);

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
    clearBtnEl.addClass('hide');
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

//Determine if answer is correct when clicked
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
        // Set User/score, then push to user array, put into localStorage
        let userJSON = {
            username: user.value,
            score: score
        };

        //adds user and score to user array, and sorts/cuts off under 5 top scores
        usersArr.push(userJSON);
        usersArr.sort((a,b) => b.score - a.score );
        usersArr.splice(5);

        //Set JSON usersArr to current Arr which has the new spliced array
        localStorage.setItem('usersArr', JSON.stringify(usersArr));

        startButtonEl.removeClass('hide');
        startButtonEl.text('Restart')
        scoreBtnEl.addClass('hide');
        scoreEl.removeClass('hide');
        clearBtnEl.removeClass('hide');
        displayUsers()
        console.log(usersArr)

        }

};
//Create list items to the OL for each User in the top 5
function displayUsers () {
    //Empty the userDiplay so when you append new items it doesnt have duplicate displays FINALLY FIXED
    userDispEl.empty();
    usersArr.splice(5);

    $.each(usersArr, function (index, options) {
        //create button, set text, add button class, and append to end for each choice
        let newItem = $('<li>');
        newItem.text(`${options.username} - ${options.score}`);
        userDispEl.append(newItem);
    })

    //hide and display appropriate elements
    formEl.addClass('hide');
    submitBtnEl.addClass('hide');
    scoreEl.removeClass('hide');
    clearBtnEl.removeClass('hide');
    
}
function viewScores () {
    startButtonEl.removeClass('hide');
    startButtonEl.text('Start Quiz')
    scoreBtnEl.addClass('hide');
    scoreEl.removeClass('hide');
    clearBtnEl.removeClass('hide');
    displayUsers()
}

function clearScores () {
    userDispEl.empty();
    usersArr = [];
    localStorage.setItem('usersArr', '[]');
    console.log(usersArr)

}