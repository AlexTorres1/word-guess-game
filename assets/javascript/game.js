
//Have to create the variable that will be used
var wordBank=["javascript", "function", "append", "hypertext", "algorithm", "bug", "click", "frustration", "command", "steps", "memory", "data", "call", "event", "input", "output", "programming", "variable"]
//variable to store the word from the array
var randomWord = "";
//array to store the letters that are split from the chosen word
var wordSplit=[];

//array 
var splitsOutput =[];
var matchedLetters =[];
var incorrectGuesses=[];
var losses = 0;
var wins = 0;
var guessLeft = 10;

//Function to start the game
function startGame(){
    randomWord=wordBank[Math.floor(Math.random() * wordBank.length)];
//have to store the randomword and split it    
    wordSplit = randomWord.split("");
        
//have to create a for loop to show each letter stored 
    for (var i=0; i < wordSplit.length; i++){
        splitsOutput.push("_");
    }
//write to the id on index.html
    document.getElementById("newWord").innerHTML = splitsOutput.join(" ");

    console.log(randomWord);
    console.log(wordSplit);
    console.log(splitsOutput);
}

function updateThePage(userGuess){
    if (guessLeft===0){
        //restart the game


    }
    else{
        
        checkIfIncorrect(userGuess);
        
        //display the word
        //check if win
    }
   
}

//display the word
function displayWord(){

    
}



//check if correct
function checkIfCorrect(){


}

//check if incorrect
function checkIfIncorrect(userGuess){
   
    if(wordSplit.indexOf(userGuess) === -1){
        incorrectGuesses.push(userGuess);
        guessLeft--;
        $("#guessesLeft").text(guessLeft);
        $("#incorrectGuesses").text(incorrectGuesses.join(", "));
    }

}

//grabs the user input and stores it in array
document.onkeyup = function(event)
    {
    userGuess = event.key;
    updateThePage(userGuess);
    console.log(userGuess);
    }

//Call the function to start
startGame()
