// buy now hover

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
$('.single-item').slick();