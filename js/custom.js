$(document).ready(function () {

            class playerInfo {
                constructor(name) {
                    this.name = name;
                }
            } // end class definition
            
            let showMyCard = document.getElementById("card1");
           
            let drawPlayer1 = document.getElementById("cardPlayed1");
           
            let total1 = 0;
            let hold = false;
            /* let cardType = ["C", "D", "H", "S"];
            let faceCard = [10, "J", "Q", "K"]; */

            // add player name
            const personName = new playerInfo(sessionStorage.getItem("name"));
            $("#firstPlay").html(personName.name);

            // will get random card number and add card value to total amount
            //document.getElementById("result").innerHTML = localStorage.getItem("lastname");

            // function will allow named player to freeze play on current total
            $("#freeze1").on("click", function () {
                let iHoldP1 = document.getElementById("draw1");
                let noCardP1 = document.getElementById("cardPlayed1");

                hold = true;
                iHoldP1.innerHTML = "HOLD";
                noCardP1.innerHTML = "";
            });

            function chooseOne() {
                $("input[type=radio]").on("click",function(){
                    console.log('im in');
                    getnumber = 11;
                    total1 = total1 + getNumber;
                    if (total1 < 22) {
                        showMyCard.innerHTML = total1;
                    }
                  
                });

              return getnumber; 
            } // end function

            // deal button will return player card when clicked
            $("#playBtn").on("click", function () {
                    //let cardplayed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];   
                    let cardType = ["C", "D", "H", "S"];
                    let faceCard = [10, "J", "Q", "K"];
                    // get random number between 1 to 11  and 
                    // get random card type
                    let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
                    let getNumber = Math.floor((Math.random() * 11) + 1);
                    //let getNumber = randomNum;  //cardplayed[randomNum - 1];
                   //let getNumber = 1;

              // function if random number is a 1 or 11 then draw is a Ace      
                    if ((getNumber === 1) || (getNumber === 11)) {
                        let uPicked = 0;

                         $("#showCard").attr("src","../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg"); 
                                              
                        $("#AceDraw").modal(
                            getNumber = chooseOne()                      
                                              
                         
                        );
                       
                          

                           // $("#showCard").attr("src", "../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg");
                                                     
                          /*   total1 = total1 + getNumber;
                            if (total1 < 22) {
                                showMyCard.innerHTML = total1;
                            } */
                      

                        
                    } // end main if

              // function if random number is 10 return face card
                    if (getNumber === 10) {
                        choiceFaceCard = faceCard[Math.floor(Math.random() * faceCard.length)];
                        $("#showCard").attr("src", "../images/card_deck/JPEG/" + choiceFaceCard + cardType_index + ".jpg");
                        total1 = total1 + getNumber;
                        if (total1 < 22) {
                            showMyCard.innerHTML = total1;

                        }
                        console.log('second total', total1);
                    }

              // function if random is neither 1,11,10 the draw is default cards
                    if ((getNumber != 1) && (getNumber !=11) && (getNumber != 10)){
                       $("#exampleModal").modal();     
                         $("#showCard").attr("src","../images/card_deck/JPEG/" + getNumber + cardType_index + ".jpg");
                        total1 = total1 + getNumber;
                        if (total1 < 22) {
                            showMyCard.innerHTML = total1;
                        }
                        console.log('third total', total1);
                    } // end if    


             // function: if over 21 player busted
                      if (total1 >21){
                       // let vanish = document.getElementById("draw1");
                        showMyCard.classList.add("busted");
                        showMyCard.innerHTML = "BUSTED: " + total1;
                        $("#playBtn").attr("disabled", true); 
                      } // end >21 if 


                       console.log(cardType_index);
                       console.log(getNumber);
                       console.log('is total', total1);

                    });

                // end  button deal
                //console.log('out of function total',total[0]);
                //console.log('get number',getNumber);


                /* 
                  function UseOne(){
                          $("#showCard").attr('src','../images/card_deck/JPEG/' + 'A' + 
                        cardType_index + '.jpg'); 

                    let pick = $("#one").click;
                    if (pick.clicked == true) {
                      choice = 11;
                      console.log(choice);    }


                    return choice;  

                  } */

                // will pick random card


                /* $("#showCard").attr('src','../images/card_deck/JPEG/' + getNumber + 
                     cardType_index + '.jpg');  */
                //======================================================
                // if (hold === true) {
                //   console.log("player one Hold");
                //   showMyCard.innerHTML = "Hold";
                //   drawPlayer1.classList.add("stop");
                // } else if (total1 < 22) {
                //   showMyCard.innerHTML = total1;
                // } else if (total1 > 21) {
                //   let vanish = document.getElementById("draw1");
                //   showMyCard.classList.add("busted");
                //   showMyCard.innerHTML = "BUSTED";
                //   $("#playBtn").attr("disabled", true);

                //drawPlayer1.classList.add("stop");
                //vanish.classList.add("stop");

                // add else if total1 === 21  you win
                // need to determine what happen if win
                // need to code to determine who is close to 21 to win

                //======================================================================
                // will allow player one to freeze accepting cards before busting out over 21
                  /* $("#player1").on("click", function () {
                    let vanish = document.getElementById("cardPlayed1"); 

                  });*/
            }); // end of onload