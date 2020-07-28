$(document).ready(function (){
let deal = document.getElementById('playBtn');

let cardplayed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let showMyCard = document.getElementById("card1");
let player1 = document.querySelector("#player1");
let drawPlayer1 = document.getElementById("cardPlayed1");
let player1Hold = document.getElementById("freeze1");
let pName = document.getElementById("draw1");
let total1 = 0;
let hold = false;

// add player name
pName.innerHTML = sessionStorage.getItem("name")+":  ";


// will get random card number and add card value to total amount
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
player1Hold.addEventListener("click", function(){
 let iHoldP1 = document.getElementById("draw1");
 let noCardP1 = document.getElementById("cardPlayed1");

 hold = true;
 iHoldP1.innerHTML = "HOLD";
 noCardP1.innerHTML = ""; 
 
});

deal.addEventListener("click", function () {
    //console.log('this is:',hold);    
    //showMyCard.innerHTML="<img src = 'images/AC.jpg'>";
    randomNum = Math.floor((Math.random() * 11) + 1);
    console.log(randomNum);
    getNumber = cardplayed[randomNum - 1];
    drawPlayer1.innerHTML = "  " + getNumber;
    
    total1 = total1 + getNumber;
    if (hold === true){
       console.log("player one Hold");
    }
    else if (total1 < 22) {
        showMyCard.innerHTML = total1;
    } else if (total1 > 21) {
        let vanish = document.getElementById("draw1");
        showMyCard.classList.add("busted");
        showMyCard.innerHTML = "BUSTED";
        drawPlayer1.classList.add("stop");
        vanish.classList.add("stop");

    }
    // add else if total1 === 21  you win
    // need to determine what happen if win
    // need to code to determine who is close to 21 to win


});

// will allow player one to freeze accepting cards before busting out over 21
player1.addEventListener("click", function () {
    let vanish = document.getElementById("cardPlayed1");

  });
}); // end of onload