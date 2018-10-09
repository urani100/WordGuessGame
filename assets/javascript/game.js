//$document.ready(function(){

    
    
    var masterArr=[['q','u','e', 'e', 'n',], ['l', 'o', 'v', 'e']];
    var correctGuess =[];
    var inCorrectGuess =[];
    var count = 0; // number of turns/words in the game
    var loss = 0// number of times user makes wrong guess
    var endOfGame=masterArr.length;
    var currentWord = masterArr[count];
    
    // is it the begining of the game or the end of the game?
     
     //create an array with the same length as current word to hold the correct guesses
      
      for(var i = 0; i< currentWord.length; i++){
        correctGuess[i]='_'
      }
      

      document.onkeyup = function(event){
        var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
    
        ////look to see if user entry matches letter in currentWord
        var letterPos = currentWord.indexOf(userInput);
       

        //if there is a match replace the later with '-' in the word array and add it in the correct position in the correctGuess array
        //if there is no match add the letter to the inCorrectGuess array ( for latter and increase the count )
        if(userInput === currentWord[letterPos]){
            currentWord.splice(letterPos, 1, '_');
            correctGuess[letterPos] = userInput;   
        }else{
            if(inCorrectGuess.indexOf(userInput)===-1){
                inCorrectGuess.push(userInput);
                loss++;

            }
        }
        console.log(currentWord);
        console.log(correctGuess);
        console.log(inCorrectGuess);
    }

        
     
      

  
//})//end of $document.ready