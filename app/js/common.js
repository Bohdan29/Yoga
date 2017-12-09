//fixed header
$(document).ready(function(){
         
        var $menu = $(".fixedHeader");
             
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });        
});

//slow anchor links 
$(document).ready(function(){
    var headerHeight = $('header').outerHeight();

    $('.slideSection').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});

// validation form
var field = new Array('name', 'phone');

$('form').submit(function() {
  var error = 0;
  $('form').find('input').each(function() {
    for (var i = 0; i < field.length; i++) {
      if ($(this).attr('name') == field[i]) {
        if (!$(this).val()) {
          $(this).css('border', 'red 1px solid');
          error = 1;
        } else {
          $(this).css('border', 'none');
        }
      }
    }
  });
  if (error == 0) {
    return true;
  } else {
    if (error == 1) var err_text = 'Not all fields are filled!';
    $('.messenger').html(err_text);
    $('.messenger').fadeIn('slow');
    return false;
  }
});

// "buy now" hover
$(document).ready(function(){
    $('.buyN1').hover(function() {
        $(this).css({'backgroundColor' : '#475bf1'});
        $('.titlePrice1').css({'backgroundColor' : '#475bf1'});
    })
    $('.buyN1').mouseout(function() {
        $(this).css({'backgroundColor' : '#5b6ceb'});
        $('.titlePrice1').css({'backgroundColor' : '#5b6ceb'});
    })

        $('.buyN2').hover(function() {
        $(this).css({'backgroundColor' : '#475bf1'});
        $('.titlePrice2').css({'backgroundColor' : '#475bf1'});
    })
    $('.buyN2').mouseout(function() {
        $(this).css({'backgroundColor' : '#5b6ceb'});
        $('.titlePrice2').css({'backgroundColor' : '#5b6ceb'});
    })

        $('.buyN3').hover(function() {
        $(this).css({'backgroundColor' : '#475bf1'});
        $('.titlePrice3').css({'backgroundColor' : '#475bf1'});
    })
    $('.buyN3').mouseout(function() {
        $(this).css({'backgroundColor' : '#5b6ceb'});
        $('.titlePrice3').css({'backgroundColor' : '#5b6ceb'});
    })
})


//slick slider 
$('.single-item').slick({
    dots: false
});

$('.review-slick').slick({
    dots: true,
    arrows: false
});

$('.trainer-slick').slick({
    dots: false,
    arrows: true
});

