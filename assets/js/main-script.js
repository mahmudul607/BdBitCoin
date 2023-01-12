


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




