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
           
            // add player name
            const personName = new playerInfo(sessionStorage.getItem("name"));
            $("#firstPlay").html(personName.name);

            // will get random card number and add card value to total amount
            //document.getElementById("result").innerHTML = localStorage.getItem("lastname");

            // function will allow named player to freeze play on current total
            $("#player1Freeze").on("click", function () {
                console.log('You Pressed Freeze');
                let iHoldP1 = document.getElementById("draw1");
                let noCardP1 = document.getElementById("cardPlayed1");
                hold = true;
              
                noCardP1.innerHTML = "Hold";
            });
           
            // function if random number is 10 return face card
            function draw10(getNumber){
              let faceCard = [10, "J", "Q", "K"];
              let cardType = ["C", "D", "H", "S"];
              choiceFaceCard = faceCard[Math.floor(Math.random() * faceCard.length)];
              let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
              $("#showCard").attr("src", "../images/card_deck/JPEG/" + choiceFaceCard + cardType_index + ".jpg");
              total1 = total1 + getNumber;
              
                  showMyCard.innerHTML = total1; 

                      
            } // end draw10
            
             // function for numbers 1 - 9
             // function if random is neither 1,11,10 the draw is default cards
                   // if ((getNumber != 1) && (getNumber !=11) && (getNumber != 10))
                    function drawJustNumber(getNumber){                      
                      let cardType = ["C", "D", "H", "S"]; 
                      let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];    
                        $("#showCard").attr("src","../images/card_deck/JPEG/" + getNumber + cardType_index + ".jpg");
                       total1 = total1 + getNumber;
                       
                           showMyCard.innerHTML = total1;
                       
                      
                   } // end function for 1 - 9 draw

             // function will be called if draw is 1 or 11 which is a ACE
             
                   function drawOneEleven(getNumber){
                    console.log('Iam in drawOneEleven', getNumber);                    
                    let cardType = ["C", "D", "H", "S"]; 
                    let cardType_index = cardType[Math.floor(Math.random() * cardType.length)];
                    $("#showCard").attr("src","../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg"); 
                    getNumber = 0;                      
                    $("#AceDraw").modal(
                      $("input[type='radio']").click(function(){
                        let radioValue = $("input[name='gotAce']:checked").val();
                        if(radioValue === "1"){
                            console.log("You picked " + radioValue);
                            getNumber = 1;
                            total1 = total1 + getNumber;
                            
                           showMyCard.innerHTML = total1;
                       
                           $('#closeModal').click();
                           //$('input[name="gotAce"]').buttonset('refresh');
                           $('input[type="radio"]').prop('checked' , false); 
                            
                        } else if (radioValue === "11"){
                          console.log("You picked " + radioValue);
                          getNumber = 11;
                          total1 = total1 + getNumber;
                         
                           showMyCard.innerHTML = total1;
                      
                          $('#closeModal').click();
                          $('input[type="radio"]').prop('checked' , false);
                        }// end if
                     })                     
                    );   
                   // console.log('getNumber was assigned: ',getNumber);
                  }// end function for 1 or 11 draw


            // deal button will return player card when clicked
            $("#playBtn").on("click", function () {                   
                    // get random number between 1 to 11  and 
                   // $("input[name='gotAce']").attr('checked',false);
                    let getNumber = Math.floor((Math.random() * 11) + 1);
                    // get random card type
                   // getNumber = 1;
                    console.log(getNumber);
                   
                    if (getNumber === 10){
                      draw10(getNumber);
                    }  // end if draw is 10
                    
                    if ((getNumber != 1) && (getNumber !=11) && (getNumber != 10)){                   
                        drawJustNumber(getNumber);
                    } // end if draw is 1 - 9 draw

                    if ((getNumber === 1) || (getNumber === 11)) {                       
                        drawOneEleven(getNumber);                    
                    } // if draw a Ace
                 
                  // $("#showCard").attr("src","../images/card_deck/JPEG/" + "A" + cardType_index + ".jpg"); 
                  // $("#showCard").attr("src","../images/card_deck/JPEG/" + getNumber + cardType_index + ".jpg");
                      
                                              
                });  // End playBtn onclick

        }); // End onload
  
 //================== OLD VERSION CODE FOR RE-USE =========================================================       

        


              //=======================================================================================================
             // function: if over 21 player busted
                      /* if (total1 >21){
                       // let vanish = document.getElementById("draw1");
                        showMyCard.classList.add("busted");
                        showMyCard.innerHTML = "BUSTED: " + total1;
                        $("#playBtn").attr("disabled", true); 
                      } // end >21 if 


                       console.log(cardType_index);
                       console.log(getNumber);
                       console.log('is total', total1);

                     */

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
           // }); // end of onload