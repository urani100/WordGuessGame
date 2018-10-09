//$document.ready(function(){

    //create an array with one word
    
    var masterArr=[['q','u','e'],['g','e']];
    var correctGuess =[];
    var inCorrectGuess =[];
    var count = 0;
    
    //create an array with the same length as current word to hold the correct guesses
    for(var i = 0; i<masterArr.length; i++){
        currentWord = masterArr[i];
        console.log(currentWord);
        for(var j = 0; i<currentWord.length; j++){
            correctGuess[j] = '_'
        }
        //console.log(correctGuess);
    }
    
   
     
    // Have user enter a letter
    document.onkeyup = function(event){
    var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 

    //look to see if user entry mathes letter in word
    var letterPos = masterArr.indexOf(userInput);

    //if there is a match replace the later with '-' in the word array and add it in the correct position in the correctGuess array
    //if there is no match add the letter to the inCorrectGuess array ( for latter and increase the count )
    if(userInput === masterArr[letterPos]){
        masterArr.splice(letterPos, 1, '_');
        correctGuess[letterPos] = userInput;
        console.log(masterArr);
        console.log(correctGuess);
    }else{
        //ensure that entry does not aleady exist in inCorrectGuess
        // if(inCorrectGuess.indexOf(userInput)===-1){
            inCorrectGuess.push(userInput);
            count++;
            //console.log(inCorrectGuess, count);
        // }
        
    }//end of else
    
    
    }//end of event function





    
//})//end of $document.ready