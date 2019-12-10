///////////////
// Variables //
///////////////

// Element variables
let startButtonEl = $("#start-btn");
let qContainerEl = $('#question-container');
let questionEl = $('#question')
let aGridEl = $('#answer-buttons')
let nextBtnEl = $('#next-btn')
let answerBtnEl = $('#answer-buttons')
// Question index to increment current question when needed
let questionIndex = 0
// sets question from question array based upon the index above
let currentQ = questionsArr[questionIndex]
let time = 300
/////////////////////
// Click Listeners //
/////////////////////

//When Start is clicked hide start and launch question 1.
startButtonEl.click(startQuiz);

//when an answer is selected run function
answerBtnEl.click(selectAnswer);

nextBtnEl.click(nextQuestion)

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
        //create button, set text, add button class, and append to end for each choice
        let newButton = $('<button>');
        newButton.text(options);
        newButton.addClass('btn');
        aGridEl.append(newButton);
    })
}

function nextQuestion () {
    questionIndex++
    currentQ = questionsArr[questionIndex]
    if (questionIndex === questionsArr.length){
        alert('Last Q')
        questionEl.empty();
        aGridEl.empty();
    } else {
        dispQuestion(currentQ)
    }
}
//Bug when clicking inbetween buttons TO FIX
function selectAnswer(e) {
     if ($(e.target).text() === currentQ.answer) {
         $(e.target).addClass('btn-success');
         nextBtnEl.removeClass('hide');
     } else if ($(e.target).text() !== currentQ.answer){
        $(e.target).addClass('btn-danger');
        time -= 15
        console.log(time)
     }
}


