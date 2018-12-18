
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

$("#startGame").on("click", function() {
    console.log("start")
            reset();
            
        });

function startGame(){

    randomWord=wordBank[Math.floor(Math.random() * wordBank.length)];

    //lowercase the variable
    randomWordLower = randomWord.toLowerCase();

//have to store the randomword and split it    
    wordSplit = randomWordLower.split("");
        
//have to create a for loop to show each letter stored 
    for (var i=0; i < wordSplit.length; i++){
        splitsOutput.push("_");
    }
//write to the id on index.html
    $("newWord").text(splitsOutput.join(" "));
    //$("newWord").text(splitsOutput.join(""));
    
    $("#guessesLeft").text(guessLeft);
    $("#lossResult").text(losses);
    $("#winResult").text(wins);


    console.log(randomWord);
    console.log(wordSplit);
    console.log(splitsOutput);
}

function updateThePage(userGuess){
    if (guessLeft===0){
        //adds a +1 to losses counter 
        losses++;
        $("#lossResult").text(losses);
        //restarts the game
        reset();
       
    }
    else{
        checkIfIncorrect(userGuess);
        //updateWIns();
        
    }
   
}


//check if incorrect
function checkIfIncorrect(userGuess){
   var index = wordSplit.indexOf(userGuess);
    if( index === -1){
        incorrectGuesses.push(userGuess);
        guessLeft--;
        $("#guessesLeft").text(guessLeft);
        $("#incorrectGuesses").text(incorrectGuesses.join(", "));
    } else {
        splitsOutput[index] = userGuess;
        $("newWord").text(incorrectGuesses.join(" "));
        displayWins();
    }

}

function displayWins(){
    if (wordSplit === userGuess){
        wins++;

    }


}

//grabs the user input and stores it in array
document.onkeyup = function(event)
    {
    userGuess = event.key;
    updateThePage(userGuess);
    
    }

//to restart the game
function reset(){
     splitsOutput =[];
     matchedLetters =[];
     incorrectGuesses=[];
     guessLeft = 10;
     //not exactly sure why I only need to empty these, but it works
     startGame();

}

//Call the function to start
startGame()
