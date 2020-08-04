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
  let cardType = ["C", "D", "H", "S"];
  let faceCard = [10, "J", "Q", "K"];

  // add player name
  let personName = sessionStorage.getItem("name");
  $("#firstPlay").html(personName);

  // will get random card number and add card value to total amount
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  $("#freeze1").on("click", function () {
    let iHoldP1 = document.getElementById("draw1");
    let noCardP1 = document.getElementById("cardPlayed1");

    hold = true;
    iHoldP1.innerHTML = "HOLD";
    noCardP1.innerHTML = "";
  });
  function UseOne() {
    /*       $("#showCard").attr('src','../images/card_deck/JPEG/' + 'A' + 
        cardType_index + '.jpg'); */

    let pick = $("#one").click;
    if (pick.clicked == true) {
      choice = 11;
      console.log(choice);
    }

    /* let youPicked = new Promise((resolve,reject)=>{
            ()=> resolve(
               document.getElementById('eleven').clicked==true,
                   
               
               
            ); */

    //let mychoice = await $("#eleven").on('click',function(){

    return choice;
    /*  }

        
        console.log('i am in');
        return mychoice; */
  }

  // will pick random card
  $("#playBtn").on("click", function () {
    randomNum = Math.floor(Math.random() * 11 + 1);
    /*
          add code handle if random number is 11 or 1
          if 1 or 11 means card is a ACE
          will need to add player option to choose 1 or 11         */

    // getNumber = cardplayed[randomNum - 1];
    getNumber = 1;
    cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
    console.log(cardType_index);
    console.log(getNumber);

    // need to be a callable function with return
    switch (getNumber) {
      case 1:
        $("#showCard").attr(
          "src",
          "../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg"
        );
        $("#middleDisplay").css("visibility", "visible");

        getNumber = UseOne();
        //alert(getNumber);
        break;

      case 11: //(getNumber== 10)
        $("#showCard").attr(
          "src",
          "../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg"
        );
        $("#middleDisplay").css("visibility", "visible");

        getNumber = 11;
        break;

      case 10:
        choiceFaceCard = faceCard[Math.floor(Math.random() * faceCard.length)];
        $("#showCard").attr(
          "src",
          "../images/card_deck/JPEG/" + choiceFaceCard + cardType_index + ".jpg"
        );
        break;

      default:
        $("#showCard").attr(
          "src",
          "../images/card_deck/JPEG/" + getNumber + cardType_index + ".jpg"
        );
        break;
    } // end switch

    total1 = total1 + getNumber;

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
      $("#playBtn").attr("disabled", true);

      //drawPlayer1.classList.add("stop");
      //vanish.classList.add("stop");
    }
    // add else if total1 === 21  you win
    // need to determine what happen if win
    // need to code to determine who is close to 21 to win
  });

  // will allow player one to freeze accepting cards before busting out over 21
  $("#player1").on("click", function () {
    let vanish = document.getElementById("cardPlayed1");
  });
}); // end of onload
