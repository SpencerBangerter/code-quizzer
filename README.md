# code-quizzer
Multi choice quiz that utilizes DOM manipulation with Javascript and jQuery.

### link to the deployed application
- https://spencerbangerter.github.io/code-quizzer/

## Contents and Instructions

This is a quiz that will start a very basic set of qustions to answer upon clicking the Start Quiz button. At the start you may also view High Scores which are stored in Local Storage.
![Screenshot of Main Page](https://github.com/SpencerBangerter/code-quizzer/blob/master/assets/screenshots/mainpage.png)

Selecting the correct answer to a questioin will turn the button green, and will prompt you to click the Next Question Button.
Selecting the wrong answer to a qustion will turn the answer red, and decrement your score (and time remaining!) by 15.
![Screenshot of Answer grid](https://github.com/SpencerBangerter/code-quizzer/blob/master/assets/screenshots/answergrid.png)

You have 90 seconds to complete the test, and each second left counts for 1 point towards your score. Should your time left hit zero you can still finish the test, but any further incorrect answers will put your score into the negative! Make sure to retry if you end up with a negative score!

Once you complete all the questions, you will be prompted to enter your name and submit your score. If your score is one of the top 5 scores (scores stored in local storage) you will be placed into the leaderboard. You may restart the test, or clear the highscores once you have finished the test.
![Screenshot of High Scores](https://github.com/SpencerBangerter/code-quizzer/blob/master/assets/screenshots/highscores.png)

## Credits

I used helpful guidance from the following people and places:

- https://www.w3schools.com
- https://github.com/jbejar
- https://github.com/jrheap
- https://github.com/Nidant
- https://github.com/WebDevSimplified