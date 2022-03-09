$(document).ready(function(){
  $('h3').click(function(){
    $('.link-bar').toggleClass('open');
  });
  $('.link').click(function(e){
    e.preventDefault();
    $('body').fadeOut(2000, function(){
      window.location.href = $(e.target).attr('href');
    });
  });
});