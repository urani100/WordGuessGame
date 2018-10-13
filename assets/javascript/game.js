$(document).ready(function(){

    var obj ={
        masterArr : [
            { name: "yourloveisking", pic: "assets/images/king.png", band:"Your love is king"},
             { name: "thesweetesttaboo", pic: "assets/images/taboo.png", band:"The Sweetest Taboo"},
             { name: "paradise", pic: "assets/images/paradise.png", band:"Paradise"},
            { name: "jezebel", pic: "assets/images/jezebel.png", band:"Jezebel"},
            { name: "isitacrime", pic: "assets/images/crime.png", band:"Is It a Crime"},
            { name: "likeatattoo", pic: "assets/images/tatoo.png", band:"like a Tattoo"},
            { name: "pearls", pic: "assets/images/perls.png", band:"Pearls"},
            { name: "noordinarylove", pic: "assets/images/noordinary.png", band:"No Ordinary Love"},
            { name: "cherishtheday", pic: "assets/images/cherish.png", band:"Cherish the Day"},
            { name: "kissoflife", pic: "assets/images/kiss.png", band:"kiss of Life"},
            { name: "hangontoyourlove", pic: "assets/images/hangon.png", band:"Hang on to your Love"} 
        ], // did not take account of spcace in letter check
        correctGuess : [],
        inCorrectGuess: [],
        currentWord : [], 
        currantWordUpdate: [],
        loss : 10, // would like to set loss based on word length | this.loss =  this.currentWord + 5? 
        win: 0,

        setGame : function(){
            
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
                    this.updateLoss();
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

        updateLoss : function(){    
            this.loss--;
            var newScore = this.loss;
            var newLoss = $("<span>");
            newLoss.addClass("loss");
            $("#loss").html(newScore);
        }, //end of updateLoss

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
       
       
        var resetCorrectWord = ' ';
        var resetIcorrectWord = ' ';
        this.updateCorrectLetter(resetCorrectWord);
        this.updateIncorrectLetter(resetIcorrectWord);
        this.correctGuess = [];
        this.inCorrectGuess= [];
        this.currentWord = [];
        this.currantWordUpdate= [];
        this.loss = 11;
        }
    }//end of obj

        // add alert to prevent user from entering non alpha ...
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