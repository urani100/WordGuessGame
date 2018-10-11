$(document).ready(function(){

  
    var masterArr=[
        { name: "q", pic: "assets/images/pic2.png", band:"Q"},
        { name: "queen", pic:"assets/images/pic3.png", band:"Queen"}
    
    ]
    var correctGuess =[];
    var inCorrectGuess =[];
    var target = Math.floor(Math.random() * masterArr.length);
    var currentWord = masterArr[target]["name"].split(""); 
    var loss = 0;// number of times user makes wrong guess
    var win = 0;
    

    

    //function verifies that we are not at the end of the current word
    //musts be revisited... I need to figure out when the user clik the last letter when getting the correct word...
    // this assumes that the that the user cliks one last time after the win...
     
    var gameState = function(){
      return correctGuess.join("") === masterArr[target]["name"]; 
     }
 


    document.onkeyup = function(event){
    var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
    var stillPlaying = gameState(); 

    if(!stillPlaying){
        //verify that user entry matches letter in currentWord
        var letterPos = currentWord.indexOf(userInput);
        
        if(userInput === currentWord[letterPos]){
            currentWord.splice(letterPos, 1, '_');
            correctGuess[letterPos] = userInput; 
            if(correctGuess.join("") === masterArr[target]["name"]){
                win++;
                 //update win
                var newScore = win;
                var newWin = $("<span>");
                newWin.addClass("win");
                $("#win").html(newScore);

                var link =  masterArr[target]["pic"];
                var bandImage = $("<img>");
                bandImage.addClass("image");
                bandImage.attr("src", link);
                $(".image").html(bandImage);
        
                //updade the band name
                var newText = masterArr[target]["band"]
                var bandName = $("<h1>");
                bandName.addClass("text");
                $(".text").html(newText);
            }
        
        }else{
            if(inCorrectGuess.indexOf(userInput)===-1){
                inCorrectGuess.push(userInput);
                loss++;
            }
        }

        console.log("currentWord: " + currentWord + " correctGuess " + correctGuess.join("") + 
           " inCorrectGuess: " + inCorrectGuess + " Master: " + masterArr[target]["name"])
       }else{
      
        // restart game 
        correctGuess =[];
        inCorrectGuess =[];
        target = Math.floor(Math.random() * masterArr.length);
        currentWord = masterArr[target]["name"].split(""); 
        // alert("game is over!!")
      }      

    
   }//end of document.onkeyup
    


  
});//end of $document.ready