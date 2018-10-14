$(document).ready(function(){

    var obj ={
        masterArr : [
            { name: "your love is king", pic: "assets/images/king.png", band:"Your love is king", songName:"assets/songs/king.mp3"},
            { name: "jezebel", pic: "assets/images/jezebel.png", band:"Jezebel", songName:"assets/songs/jezebel.mp3"},
            {name: "kiss of life", pic: "assets/images/kiss.png", band:"kiss of Life", songName:"assets/songs/kiss.mp3"}
           
            //Note: these elements are not associated with any songs and therefore are comment it out but might be of use in the future
            // { name: "thesweetesttaboo", pic: "assets/images/taboo.png", band:"The Sweetest Taboo"},
            //  { name: "paradise", pic: "assets/images/paradise.png", band:"Paradise"},
            // { name: "isitacrime", pic: "assets/images/crime.png", band:"Is It a Crime"},
            // { name: "likeatattoo", pic: "assets/images/tatoo.png", band:"like a Tattoo"},
            // { name: "pearls", pic: "assets/images/perls.png", band:"Pearls"},
            // { name: "noordinarylove", pic: "assets/images/noordinary.png", band:"No Ordinary Love"},
            // { name: "cherishtheday", pic: "assets/images/cherish.png", band:"Cherish the Day"},
            // { name: "hangontoyourlove", pic: "assets/images/hangon.png", band:"Hang on to your Love"} 

        ], 
        correctGuess : [],
        inCorrectGuess: [],
        currentWord : [], 
        currantWordUpdate: [],
        loss : 11, // Nice to have: set loss based on word length | this.loss =  this.currentWord 
        win: 0,

        //set array and get random number for current guessing word
        setGame : function(){
            target = Math.floor(Math.random() * this.masterArr.length)
            this.currentWord = this.masterArr[target]["name"].split("");
            this.currentWordUpdate =this.masterArr[target]["name"].split("");
            for(var i = 0; i< this.currentWord.length; i++){
                if(this.currentWord[i] === " "){
                    this.correctGuess[i] = " ";
                }else{
                    this.correctGuess[i] = '-';
                }
               
            }

        }, //end of setGame 
        
        //render dashes on screen 
        settingGuessArray : function(){
            var correct_guess = this.correctGuess;
            var new_correct_guess = $("<h3>");
            new_correct_guess.addClass("correct");
            $('#correct').html(correct_guess);
            },
            //end of settingGuessArray
             
        //compare user input to current guessing word and update are made accordingly
        letterCheck: function(){
            var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
            var letterPos = this.currentWordUpdate.indexOf(userInput);
            if(userInput === this.currentWordUpdate[letterPos]){
                this.currentWordUpdate.splice(letterPos, 1, '_');
                this.correctGuess[letterPos] = userInput; 
                this.updateCorrectLetter (this.correctGuess);
                //if user has solved the guess make upade then reset
                var gameState = this.gameState();
                if(gameState){
                    this.updateWin();
                    this.updatePicture();
                    this.updateBand();
                    this.reset();
                    //this.playSong();
                }
            }else{
                if(this.inCorrectGuess.indexOf(userInput)===-1){
                    this.inCorrectGuess.push(userInput);
                    this.updateIncorrectLetter(this.inCorrectGuess);
                    this.updateLoss();
                    //if loss is 0 end game and reset the game 
                    if(this.loss === 0){
                        //alert("The Correct guess was " + this.masterArr[target]["name"].toUpperCase() +" Try again");
                        var lostmesg ="<p>The Correct guess was </p>" + this.masterArr[target]["name"] +"<p> Try again! </p>"
                        var newText = lostmesg;
                        bandName = $("<h1>");
                        bandName.addClass("lossMsg");
                        $(".lossMsg").html(newText);
                        this.reset();

                    }
                }
            }
        },
        //end of letterCheck

        //screen updates
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

        playSong: function(){
            audioElement = document.createElement("audio");
            audioElement.setAttribute("src", this.masterArr[target]["songName"]);
            audioElement.play();
        //setTimeout to audioElement.pause() after  20 seconds
        }, // end of playSong
       
        updateBand: function(){
            var newText = this.masterArr[target]["band"]
            bandName = $("<h1>");
            bandName.addClass("text");
            $(".text").html(newText);
        },// end of updateBand

        // check if user has not solved the current guess
        gameState : function(){
            return this.correctGuess.join("").trim()=== this.currentWord.join("").trim(); 
        },// end of gameState

        //reset game
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
        //audioElement.setTimeout(audioElement.pause(), 20000);
        }
    }//end of obj

        // nice to have: add alert to prevent user from entering non alpha 
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