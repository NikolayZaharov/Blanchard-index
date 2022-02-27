$(function(){
    $('button.hero__content-btn').on('click', function(event) {
      event.preventDefault();
      
      var sc = $(this).data("anchor"),
          dn = $(sc).offset().top;
          
      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });