
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
        
         $(".its").addClass("sticky-top");
      }
      else{
         $(".its").removeClass("sticky-top");
      }
      
   });


});

// ==========For calculator==========
