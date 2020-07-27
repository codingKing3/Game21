$(document).ready(function () {
    //alert("im in"); 
    $("#twentyOne").css("color", "yellow");
    //$("#twentyOne").show('slow');
    $("#twentyOne").css("text-decoration", "underline");


// on play button click check for input in name-space
// if no-name show drop down
// if set name min length
// link to player page : upgrade=>later use ajax link
// get player name: replace player 1 with player name


//window.onload = function(){

function addName(){
    let name = [];
    let playerName ={
        name: document.getElementById('e_name').value
    };
    
    name.push(playerName);
    pName =document.getElementById('e_name').value;
    sessionStorage.setItem("name",pName);
    console.log(name); 
  }

  // storing name to local storeage 
// go to next page 
  
  let playing = document.getElementById('play');
  playing.addEventListener("click",function() {
        addName();
        console.log('added');
      location.href = "public/gameBoard.html";    
  });     

});

