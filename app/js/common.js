// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex =+ n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n >slides.length) {
        slideIndex = 1
    }

    if (n < 1){
        slideIndex=slides.length
    }

    for (i=0; i <slides.length; i++){
        slides[i].style.display= "none";
    }

    slides[slideIndex-1].style.display = "block";
};


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