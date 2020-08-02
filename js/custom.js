$(document).ready(function () {
    //let deal = document.getElementById("playBtn");
    let cardplayed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let showMyCard = document.getElementById("card1");
   // let player1 = document.querySelector("#player1");
    let drawPlayer1 = document.getElementById("cardPlayed1");
    //let player1Hold = document.getElementById("freeze1");
    //let draw1 = document.getElementById("draw1");
   // let show = document.getElementById("showCard");
    let total1 = 0;
    let hold = false;
    let cardType = ["C","D","H","S"];
    let faceCard = [10,"J","Q","K"];

    // add player name
    let personName = sessionStorage.getItem("name");    
    $('#firstPlay').html(personName );
    

    // will get random card number and add card value to total amount
    //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    $("#freeze1").on('click', function () {
        let iHoldP1 = document.getElementById("draw1");
        let noCardP1 = document.getElementById("cardPlayed1");

        hold = true;
        iHoldP1.innerHTML = "HOLD";
        noCardP1.innerHTML = "";
    });

    // will pick random card 
    $("#playBtn").on('click', function () {

        randomNum = Math.floor(Math.random() * 11 + 1);
        /*
          add code handle if random number is 11 or 1
          if 1 or 11 means card is a ACE
          will need to add player option to choose 1 or 11         */


       //getNumber = cardplayed[randomNum - 1];
        getNumber = 1; 
        cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
        console.log(cardType_index);
        console.log(getNumber);


         // need to be a callable function with return
         if ((getNumber == 1) || (getNumber == 11)){
            $("#showCard").attr('src','../images/card_deck/JPEG/' + 'A' + 
            cardType_index + '.jpg'); 
            console.log('i am in');
            $('#middleDisplay').css("display","block");
           
            document.getElementById('one').addEventListener("click", function(){            
                $('#middleDisplay').css("display","none");
                getNumber=1;
             }); // end button 1
              
            document.getElementById('eleven').addEventListener("click", function(){
                $('#middleDisplay').css("display","none");
                getNumber = 11;
            });  // end button 2   
            
            total1 = total1 + getNumber;
         } 
         else if(getNumber== 10){
            choiceFaceCard = faceCard[Math.floor(Math.random()* faceCard.length)];
            $("#showCard").attr('src','../images/card_deck/JPEG/' + choiceFaceCard + 
            cardType_index + '.jpg'); }
         else {
            $("#showCard").attr('src','../images/card_deck/JPEG/' + getNumber + 
            cardType_index + '.jpg');
          }

      


       // total1 = total1 + getNumber;
        
        
         /* $("#showCard").attr('src','../images/card_deck/JPEG/' + getNumber + 
         cardType_index + '.jpg');  */

        
        if (hold === true) {
            console.log("player one Hold");
            showMyCard.innerHTML = "Hold";
            drawPlayer1.classList.add("stop");
        } else if (total1 < 22) {
            showMyCard.innerHTML = total1;
        } else if (total1 > 21) {
            let vanish = document.getElementById("draw1");
            showMyCard.classList.add("busted");
            showMyCard.innerHTML = "BUSTED";
            
            //let c_played = "../images/card_deck/JPEG/";
             //let card = "../images/card_deck/JPEG/QD.jpg"; //c_played + 'QD.jpg';
             
            $("#showCard").attr('src','../images/card_deck/JPEG/QD.jpg');
           
            //drawPlayer1.classList.add("stop");
            //vanish.classList.add("stop");
        }
        // add else if total1 === 21  you win
        // need to determine what happen if win
        // need to code to determine who is close to 21 to win
    });

    // will allow player one to freeze accepting cards before busting out over 21
    $("#player1").on('click', function () {
        let vanish = document.getElementById("cardPlayed1");
    });
}); // end of onload