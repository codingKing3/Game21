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
        p_info_arr = []; // hold player info
        //addName();
        let input_name = document.getElementById('e_name').value;
        let input_email = document.getElementById('eMail').value;
        let pInfo = {
              name:input_name,
              email:input_email
            };
            
        
        //console.log(input_name,input_email);
        p_info_arr.push(pInfo); // place in array
       
        console.log(p_info_arr);    
        sessionStorage.setItem("info",JSON.stringify(p_info_arr)); 
        //sessionStorage.setItem('email',input_email);        
         location.href = "public/gameBoard.html";
  }); 

      
});

