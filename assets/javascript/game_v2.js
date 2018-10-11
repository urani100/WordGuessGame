$(document).ready(function(){

 
    var obj ={
        masterArr: [{ name: "queen", pic:"assets/images/pic4.jpg", song:"tba"},
        { name: "genenis", pic:"assets/images/pic4.jpg", song:"tba"}],
        //target: 1000,
        stillPlaying: false,
        correctGuess: [],
        inCorrectGuess:[],
        currentWord : [], //masterArr[target]["name"].split("")
        loss: 0,// number of times user makes wrong guess
  
    };


    var randomNum = function(){
        // obj.target = 
         var target = Math.floor(Math.random() * obj.masterArr.length); 
         console.log(target);
     }
     var gameState = function(){ 
         target = randomNum ();
         obj.stillPlaying =  obj.correctGuess.join() === obj.masterArr[target]["name"];
         
     }
      var wordSelection = function(){
          this.currentWord = obj.masterArr[target]["name"].split("");
     }
    
    document.onkeyup = function(event){
         
       
         var userInput = String.fromCharCode(event.keyCode).toLowerCase(); 
        
         if(!obj.stillPlaying){
             var letterPos = obj.currentWord.indexOf(userInput);
            if(userInput === obj.currentWord[letterPos]){
                obj.currentWord.splice(letterPos, 1, '_');
                obj.correctGuess[letterPos] = userInput; 
            }else{
                if(obj.inCorrectGuess.indexOf(userInput)===-1){
                    obj.inCorrectGuess.push(userInput);
                    obj.loss++;
                }
            }
        }else{
            alert("game is over")
        }
    }   

  
});//end of $document.ready