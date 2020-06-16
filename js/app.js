$(document).ready(function(){
   $("#twentyOne").css("color","yellow"); 
   $("#twentyOne").show('slow');
   $("#twentyOne").css("text-decoration","underline");
  
});

let deal = document.getElementById('playBtn');
let cardplayed = [1,2,3,4,5,6,7,8,9,10,11];
let showMyCard = document.getElementById("card1");
let player1 = document.querySelector("#player1");
let total1 = 0;

// will get random card number and add card value to total amount
deal.addEventListener("click",function(){
    //showMyCard.innerHTML="<img src = 'images/AC.jpg'>";
    randomNum = Math.floor((Math.random()*11)+1);
    getNumber =cardplayed[randomNum-1];
    total1 = total1 + getNumber;
    if(total1 < 22){
    showMyCard.innerHTML = total1;
     } 
     else if (total1 > 21){
         showMyCard.innerHTML = "BUSTED";
     }
});

// will allow player one to freeze accepting cards before busting out over 21
player1.addEventListener("click",function(){

    
});