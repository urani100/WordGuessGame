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
            this.updateCorrectLetter (this.correctGuess);
            var gameState = this.gameState();
            if(gameState){
                this.updateWin();
                this.updatePicture();
                this.updateBand();
                this.reset();
            }
        }else{
            if(this.inCorrectGuess.indexOf(userInput)===-1){
                this.inCorrectGuess.push(userInput);
                this.updateIncorrectLetter(this.inCorrectGuess);
                this.loss++;
            }
        }
     },
     //end of letterCheck
     updateCorrectLetter : function(word){
         var correct_guess = word;//this.correctGuess;
         var new_correct_guess = $("<h3>");
         new_correct_guess.addClass("correct");
         $('#correct').html(correct_guess);
    },// end of updateCorrectLetter
    
    updateIncorrectLetter : function(word){
         var wrong_guess = word;
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
        var link =  this.masterArr[target]["pic"];
        var bandImage = $("<img>");
        bandImage.addClass("image");
        bandImage.attr("src", link);
        $(".image").html(bandImage);
    },// end of updatePicture

    updateBand: function(){
        var newText = this.masterArr[target]["band"]
        bandName = $("<h1>");
        bandName.addClass("text");
        $(".text").html(newText);
    },// end of updateBand

    gameState : function(){
        return this.correctGuess.join("") === this.currentWord.join(""); 
    },// end of gameState

    reset: function(){
    //debugger;
    var resetCorrectWord = '- - - -';
    var resetIcorrectWord = ' ';
    this.updateCorrectLetter(resetCorrectWord);
    this.updateIncorrectLetter(esetIcorrectWor);
    this.correctGuess = [];
    this.inCorrectGuess= [];
    this.currentWord = [];
    this.currantWordUpdate= [];
    }
}//////end of obj

  
   
          
    document.onkeyup = function(event){
    if(obj.correctGuess.length === 0 && obj.inCorrectGuess.length === 0){
        obj.setGame();
        obj.settingGuessArray();
        obj.letterCheck ();
    }else{
        obj.letterCheck ();  
    }
 }//end of document.onkeyup
    
});//end of $document.ready