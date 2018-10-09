//$document.ready(function(){

    //create an array with one word
    
    var masterArr=[['q','u','e'],['g','e']];
    var correctGuess =[];
    var inCorrectGuess =[];
    var count = 0;
    var currentWord = 0;

   
    
    //create an array with the same length as current word to hold the correct guesses
    for(var i = 0; i<masterArr.length; i++){ // main for loop
        currentWord = masterArr[i];
       
        for(var j = 0; j<currentWord.length; j++){
            correctGuess[j]= '-'
        }
        //correctGuess =[]; // where does this go?
        
       
    
        
        // Have user enter a letter
        document.onkeyup = function(event){
        var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
        console.log(currentWord);
        //look to see if user entry mathes letter in word
        var letterPos = currentWord.indexOf(userInput);

        //if there is a match replace the later with '-' in the word array and add it in the correct position in the correctGuess array
        //if there is no match add the letter to the inCorrectGuess array ( for latter and increase the count )
        if(userInput === masterArr[letterPos]){
            masterArr.splice(letterPos, 1, '_');
            correctGuess[letterPos] = userInput;
            
        }else{
            //ensure that entry does not aleady exist in inCorrectGuess
            inCorrectGuess.push(userInput);
            count++;
            // console.log(inCorrectGuess, count);
            
            
        }//end of else
        
        
        }//end of event function

}//end of main for loop





    
//})//end of $document.ready