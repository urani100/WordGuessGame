$(document).ready(function(){

  
    var masterArr=[
        { name: "qe", pic: "assets/images/pic2.png", band:"Q"},
        { name: "ko", pic:"assets/images/pic3.png", band:"Queen"}
    
    ]
    var correctGuess =[];
    var inCorrectGuess =[];
    var target = Math.floor(Math.random() * masterArr.length);
    var currentWord = masterArr[target]["name"].split(""); 
    var loss = 0;// number of times user makes wrong guess
    var win = 0;


    //settirng up correctGuess with dashes with correct ni=umnber of letters
    for(var i = 0; i< currentWord.length; i++){
            correctGuess[i] = ' - ';
        }

    var setGame = function(){
        stillPlaying = false;
        correctGuess =[];
        inCorrectGuess =[];
        var target = Math.floor(Math.random() * masterArr.length);
        var currentWord = masterArr[target]["name"].split(""); 
        for(var i = 0; i< currentWord.length; i++){
            correctGuess[i] = ' - ';
        }
        console.log(currentWord)

    }   

    var settingGuessArray = function(){
        var correct_guess = correctGuess;
        var new_correct_guess = $("<h3>");
        new_correct_guess.addClass("correct");
        $('#correct').html(correct_guess);
    }

    var updateCorrectLetter = function(){
        var correct_guess = correctGuess;
        var new_correct_guess = $("<h3>");
        new_correct_guess.addClass("correct");
        $('#correct').html(correct_guess);
    }
    var updateWin = function(){
         win++;
         var newScore = win;
         var newWin = $("<span>");
         newWin.addClass("win");
         $("#win").html(newScore);
    }

    var updatePicture =function(){
        var link =  masterArr[target]["pic"];
        var bandImage = $("<img>");
        bandImage.addClass("image");
        bandImage.attr("src", link);
        $(".image").html(bandImage);
    }
    var updateBand = function(){
        var newText = masterArr[target]["band"]
        var bandName = $("<h1>");
        bandName.addClass("text");
        $(".text").html(newText);

    }

    var updateIncorrectLetter = function(){
        var wrong_guess = inCorrectGuess;
        var new_wrong_guess = $("<h3>");
        new_wrong_guess.addClass("wrong");
        $('#wrong').html(wrong_guess);
    }

    var gameState = function(){
      return correctGuess.join("") === masterArr[target]["name"]; 
     }

     var letterCheck = function(){
        var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
        var letterPos = currentWord.indexOf(userInput);
        if(userInput === currentWord[letterPos]){
            currentWord.splice(letterPos, 1, '_');
            correctGuess[letterPos] = userInput; 
            updateCorrectLetter ();
        }else{
            if(inCorrectGuess.indexOf(userInput)===-1){
                inCorrectGuess.push(userInput);
                updateIncorrectLetter();
                loss++;
            }
        }

     }
        
    
    document.onkeyup = function(event){
    var turnOver = gameState();  // return false the first time
    if(!turnOver){
        letterCheck ();
       debugger;
   }else{
       if(correctGuess.join("") === masterArr[target]["name"]){
        updateWin();
        updatePicture();
        updateBand();
        setGame();
        updateCorrectLetter();
        updateIncorrectLetter();
       }

     }// end of else   
   
    
 }//end of document.onkeyup
    


  
});//end of $document.ready