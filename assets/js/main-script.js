


$('.counter').counterUp({
   
   useEasing: true,
   useGrouping: true,
   separator: ",",
   decimal: "."
});


// ===========Sticky to=================//


$(document).ready(function(){
   $(".after-carousel-section").waypoint(function (direction) {
      if(direction == "down"){
     

         $(".its").addClass("fixed-top");
      }
      else{
         $(".its").removeClass("fixed-top");
         

      }
      
   });


});
$(document).ready(function(){
   $(".after-carousel-section").waypoint(function (direction) {
      if(direction == "down"){
        $(".ad").addClass("fixed");
      }
      else{
         $(".ad").removeClass("fixed");

      }
      
   });


});

// ==========For calculator==========
AOS.init();

//  =============Accordion owl============//

$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   dots:false,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
})


//converter

function first(){

   var input5 = document.getElementById("inPut").value;
   var outPut5 = document.getElementById("outPut");
   outPut5.value;
   if(document.getElementById("converter1").value == "BTC"){

      if(document.getElementById("converter2").value == "USD"){
         outPut5.value = input5 * 17452.8;
      }

     else if(document.getElementById("converter2").value == "EUR"){
         outPut5.value = input5 * 16237.9;
      }
     else if(document.getElementById("converter2").value == "CNY"){
         outPut5.value = input5 * 118155;
      }
    else  if(document.getElementById("converter2").value == "GBP"){
         outPut5.value = input5 * 14370.4;
      }
      else  if(document.getElementById("converter2").value == "INR"){
         outPut5.value = input5 * 1424990;
      }

      

   }
}



