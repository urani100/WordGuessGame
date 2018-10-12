$(document).ready(function(){

var obj ={
    masterArr : [
        { name: "qe", pic: "assets/images/pic2.png", band:"Q"},
        { name: "qe", pic:"assets/images/pic3.png", band:"Queen"}
    
    ],
    correctGuess : [],
    inCorrectGuess: [],
    currentWord : [], 
    currantWordUpdate: [],
    //currentWord = masterArr[target]["name"].split(""), 
    loss :0,// number of times user makes wrong guess
    win: 0,
    //target : Math.floor(Math.random() * this.masterArr.length),

    setGame : function(){
        
        //stillPlaying = false;
        //var correctGuess =[];
        //var inCorrectGuess =[];
        
        target = Math.floor(Math.random() * this.masterArr.length)
        this.currentWord = this.masterArr[target]["name"].split("");
        this.currentWordUpdate =this.masterArr[target]["name"].split("");
        for(var i = 0; i< this.currentWord.length; i++){
            this.correctGuess[i] = ' - ';
        }

    }, //end of setGame 

    settingGuessArray : function(){
           var correct_guess = this.correctGuess;
           var new_correct_guess = $("<h3>");
           new_correct_guess.addClass("correct");
           $('#correct').html(correct_guess);
        },
        //end of settingGuessArray
    letterCheck: function(){
        var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
        var letterPos = this.currentWordUpdate.indexOf(userInput);
        if(userInput === this.currentWordUpdate[letterPos]){
            this.currentWordUpdate.splice(letterPos, 1, '_');
            this.correctGuess[letterPos] = userInput; 
            this.updateCorrectLetter ();
            debugger;
            var gameState = this.gameState();
            if(gameState){
                this.updateWin();
                this.updatePicture();
            }
        }else{
            if(this.inCorrectGuess.indexOf(userInput)===-1){
                this.inCorrectGuess.push(userInput);
                this.updateIncorrectLetter();
                this.loss++;
            }
        }
     },
     //end of letterCheck
     updateCorrectLetter : function(){
         var correct_guess = this.correctGuess;
         var new_correct_guess = $("<h3>");
         new_correct_guess.addClass("correct");
         $('#correct').html(correct_guess);
    },// end of updateCorrectLetter
    
    updateIncorrectLetter : function(){
         var wrong_guess = this.inCorrectGuess;
         var new_wrong_guess = $("<h3>");
         new_wrong_guess.addClass("wrong");
         $('#wrong').html(wrong_guess);
    },//end of updateIncorrectLetter

    updateWin : function(){    
        this.win++;
        var newScore = this.win;
        var newWin = $("<span>");
        newWin.addClass("win");
        $("#win").html(newScore);
    }, //end of updateWin
    
    updatePicture: function(){
        var link =  masterArr[target]["pic"];
        var bandImage = $("<img>");
        bandImage.addClass("image");
        bandImage.attr("src", link);
        $(".image").html(bandImage);
    },

    gameState : function(){
       
        return this.correctGuess.join("") === this.currentWord.join(""); 
    }



}//////end of obj

  
  


    // var updateBand = function(){
    //     var newText = masterArr[target]["band"]
    //     var bandName = $("<h1>");
    //     bandName.addClass("text");
    //     $(".text").html(newText);

    // }

   

    // var gameState = function(){
    //   return correctGuess.join("") === masterArr[target]["name"]; 
    //  }

   
        
    
    document.onkeyup = function(event){
    if(obj.correctGuess.length === 0 && obj.inCorrectGuess.length === 0){
        obj.setGame();
        obj.settingGuessArray();
        obj.letterCheck ();
    }else{
        obj.letterCheck ();  
    }
    /*
    var turnOver = gameState();  // return false the first time
    if(!turnOver){
        letterCheck ();
        if(correctGuess.join("") === masterArr[target]["name"]){
            updateWin();
            updatePicture();
            updateBand();
            setGame();
            updateCorrectLetter();
            updateIncorrectLetter();
        }
       debugger;
   }else{
       if(correctGuess.join("") === masterArr[target]["name"]){
        // updateWin();
        // updatePicture();
        // updateBand();
        // setGame();
        // updateCorrectLetter();
        // updateIncorrectLetter();
        alert("game is over")
       }

     }// end of else   
   
    */
 }//end of document.onkeyup
    


  
});//end of $document.ready