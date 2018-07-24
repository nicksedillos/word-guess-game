//List of possible solutions.
var wordList = ["morgellons", "necromania", "hypertrichosis", "dyscrasia", "miasma", "vapours", "lunacy", "drapetomania", "selenoplexia", "wind turbine syndrome", "electromagnetic hypersensitivity", "veterbral subluxation", "clinical lycanthropy", "the common cold", "xenomorphic infestation", "reduplicative paramnesia"];

//Select a random word from the word list and log to console.
var solution = wordList[Math.floor(Math.random() * wordList.length)];
console.log(solution);

//Display a number of blanks equal to the number of letters in the solution word.
var lengthOfSolution = solution.length;
console.log(lengthOfSolution);

document.getElementById("puzzle".textContent="")

// PSEUDOCODE
// 1. Listen for letter key events.
// 2. Count number of wins.
// 3. Select a solution word and display a number of blanks equal to the number of keys in that word.
// 4. Correct guesses reveal that letter in the solution.
// 5. The number of incorrect guesses should be subtracted from an arbitrary limit and displayed to the user.
// 6. Letters guessed incorrectly should be displayed to the user.
// 7. After win or loss another word is chosen and the next round is started.
//
// Solution strings: Wind turbine syndrome, Electromagnetic hypersensitivity, Vertebral subluxation, Morgellons, Clinical lycanthropy, Necromania, The common cold, Xenomorphic infestation, Reduplicative paramnesia, Thought insertion, Somnambulance, Hypertrichosis, Skin failure, Leaky gut syndrome, Dyscrasia, Wandering womb, Male hysteria, Tooth worm, Da Costa's syndrome, Fan death, Miasma, Railway spine, Feeble-mindedness, Female hysteria, Vapours, Lunacy, Drapetomania, Selenoplexia