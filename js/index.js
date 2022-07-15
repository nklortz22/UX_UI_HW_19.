
$(document).ready (function(){
  $("#CarexP").hide ();
  var hidden=true;

  $(".CaseStudyImage").on('click',function (){
    console.log("click")
    if (hidden) {
      $("#CarexP").show ();
        hidden = false
    } else {
      $("#CarexP").hide ();
       hidden=true;
  
    }
    
  });
});

$(document).ready (function(){
  $("#CarexP2").hide ();
  var hidden=true;

  $(".CaseStudyImage2").on('click',function (){
    console.log("click")
    if (hidden) {
      $("#CarexP2").show ();
        hidden = false
    } else {
      $("#CarexP2").hide ();
       hidden=true;
  
    }
    
  });
});