$(document).ready(function () {
  let playerInfo = JSON.parse(sessionStorage.getItem("info"));
  console.log(playerInfo);

  let showMyCard = document.getElementById("card1");
  //let houseShowMyCard = document.getElementById("houseCard");
 // let showingTheCard = "#showCard"; 
  const player = {
      player1_Total: 0,
      House_Total:0
  };
  let swithPlayer = false;
  let total1 = 0;
  let hold = false;

  
  if (swithPlayer == true){
     showMyCard = document.getElementById("houseCard");
  }
 /*  else if (swithPlayer == false){
    let showMyCard = document.getElementById("houseCard");
    let total1 = 0;
  }
 */

  

  // add player name
  // const personName = new playerInfo(sessionStorage.getItem("name"));
  //  const personEmail = new playerInfo(sessionStorage.getItem("email"));

  plyerName = playerInfo[0].name;
  $("#firstPlay").html(plyerName);
  //plyerEmail = playerInfo[0].email;
 


  // will get random card number and add card value to total amount
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");


  // ====Function area ===========

  // function will allow named player to freeze play on current total
  $("#player1Freeze").on("click", function () {
    console.log("You Pressed Freeze");
   // let iHoldP1 = document.getElementById("draw1");
    let noCardP1 = document.getElementById("cardPlayed1");
    hold = true;

    noCardP1.innerHTML = "Hold";
  });

  // function if random number is 10 return face card
  function draw10(getNumber) {
    let faceCard = [10, "J", "Q", "K"];
    let cardType = ["C", "D", "H", "S"];
    choiceFaceCard = faceCard[Math.floor(Math.random() * faceCard.length)];
    let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
    $("#showCard").attr(
      "src",
      "../images/card_deck/JPEG/" + choiceFaceCard + cardType_index + ".jpg"
    );
    total1 = total1 + getNumber;

    showMyCard.innerHTML = total1;  //
  } // end draw10

  // function for numbers 1 - 9
  // function if random is neither 1,11,10 the draw is default cards
  // if ((getNumber != 1) && (getNumber !=11) && (getNumber != 10))


  function drawJustNumber(getNumber,showingTheCard) {
    let switchPlayer = true;
    let cardType = ["C", "D", "H", "S"];
    let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
    $(showingTheCard).attr(
      "src",
      "../images/card_deck/JPEG/" + getNumber + cardType_index + ".jpg" 
    );
    total1 = total1 + getNumber;

    showMyCard.innerHTML = total1;  //
  } 


//=======================================================================
  // function will be called if draw is 1 or 11 which is a ACE
  function drawOneEleven(getNumber) {    
    let cardType = ["C", "D", "H", "S"];
    let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
    $("#showCard").attr(
      "src",
      "../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg"
    );
    getNumber = 0;
    $("#AceDraw").modal(
      $("input[type='radio']").click(function () {
        let radioValue = $("input[name='gotAce']:checked").val();
        if (radioValue === "1") {
          console.log("You picked " + radioValue);
          getNumber = 1;
          total1 = total1 + getNumber;

          showMyCard.innerHTML = total1;

          $("#closeModal").click();
          //$('input[name="gotAce"]').buttonset('refresh');
          $('input[type="radio"]').prop("checked", false);
        } else if (radioValue === "11") {
          console.log("You picked " + radioValue);
          getNumber = 11;
          total1 = total1 + getNumber;

          showMyCard.innerHTML = total1;

          $("#closeModal").click();
          $('input[type="radio"]').prop("checked", false);
        } // end if

        checkPlayerStats();
      })      
    );
    console.log("you total so far is: ", total1);
    // console.log('getNumber was assigned: ',getNumber);
  } // end function for 1 or 11 draw
//======================================================================

//==========================================================================
  // function to check if player BUSTED over 21 or hit 21
  function checkPlayerStats(){
    // check for BUST over 21
    if (total1 > 21) {
      player.player1_Total = total1;
      total1 = 0;
      showMyCard.innerHTML= `${player.player1_Total} BUSTED`;
      console.log("YOU BUSTED");
      //swithPlayer = true;

      
      // uBust();
    } // end over 21

    if (total1 === 21) {
      console.log("you hit 21");
      player.player1_Total = total1;
      showMyCard.innerHTML= `${player.player1_Total} WIN!!`;
    } // end if

  
  } // end function

  


  //=======================================================================

  // deal button will return player card when clicked
  $("#playBtn").on("click", function () {
    // get random number between 1 to 11  and
    // $("input[name='gotAce']").attr('checked',false);
  //  let showMyCard = document.getElementById("card1");

    /* if (swithPlayer == true){
      let showMyCard = document.getElementById("houseCard"); */

    let showingTheCard = " #houseShowCard";  //"#showCard";
    let displayCardTotal = "#houseCard";
    let getNumber = Math.floor(Math.random() * 11 + 1);
    
    console.log(getNumber);

    if (getNumber === 10) {
      draw10(getNumber);
      checkPlayerStats();
    } // end if draw is 10

    if (getNumber != 1 && getNumber != 11 && getNumber != 10) {
      drawJustNumber(getNumber,showingTheCard);
      checkPlayerStats();
    } // end if draw is 1 - 9 draw

    if (getNumber === 1 || getNumber === 11) {
      drawOneEleven(getNumber);
      console.log('jumped out');
      checkPlayerStats();
      //console.log("you total so far is: ", total1);
    } // if draw a Ace    
    // $("#showCard").attr("src","../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg");
    // $("#showCard").attr("src","../images/card_deck/JPEG/" + getNumber + cardType_index + ".jpg");
    //console.log("you total so far is: ", total1);
  }); // End playBtn onclick
  
}); // End onload




// ==== code to select and switch players 


// ===== store each person code in local storage  
// ===== code to determine winner





