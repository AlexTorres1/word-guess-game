
//Have to create the variable that will be used
var wordBank=["javascript", "function", "append", "hypertext", "algorithm", "bug", "click", "frustration", "command", "steps", "memory", "data", "call", "event", "input", "output", "programming", "variable"]
//variable to store the word from the array
var randomWord = "";
//array to store the letters that are split from the chosen word
var wordSplit=[];
//variable used to store the letters
var splits;
//array 
var splitsTrue =[];
var userGuess =[];
var incorrect=[];
var losses = 0;
var wins = 0;
var guessLeft = 10;

//Function to start the game
function startGame(){
    randomWord=wordBank[Math.floor(Math.random() * wordBank.length)];
//have to store the randomword and split it    
    wordSplit = randomWord.split("");
    splits = wordSplit.length;
        
//have to create a for loop to show each letter stored 
    for (i=0; i < splits; i++){
        splitsTrue.push("_");
    }
//write to the id on index.html
    document.getElementById("newWord").innerHTML = splitsTrue.join(" ");

    console.log(randomWord);
    console.log(wordSplit);
    console.log(splits);
    console.log(splitsTrue);
}

//grabs the user input and stores it in array
document.onkeyup = function(event)
{
    userGuess = event.key;
    if(randomWord.indexof(userGuess) > -1){
        for (var i = 0; i < randomWord.length; i++){
            if(randomWord[i] === userGuess ){


            }

        }
    }
}
    
 







//Call the function to start
startGame()
