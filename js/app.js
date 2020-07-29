$(document).ready(function () {   
    $("#twentyOne").css("color", "yellow");
    $("#twentyOne").css("text-decoration", "underline");


 // on play button click check for input in name-space
 // if no-name show drop down
 // if set name min length
 // link to player page : upgrade=>later use ajax link
 // get player name: replace player 1 with player name


 //window.onload = function(){

  // storing name to local storeage 
 // go to next page 
  
 // let playing = document.querySelector('play');
  $("#play").on("click",function(){
        //addName();
        let input_name = document.getElementById('e_name').value;
        sessionStorage.setItem("name",input_name);         
        location.href = "public/gameBoard.html";    
  });     

});

