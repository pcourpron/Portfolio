
$(document).ready(function () {

    var parallax = document.querySelectorAll(".parallax");
    var speed = -0.25;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed + i * 200) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

    var fadeOutIn = ()=>{
        var topPos = $(document).scrollTop();
        console.log(topPos)
        if (topPos > 140) {
            $('#name').css('opacity','0')
        }
        else{
            $('#name').css('opacity','1')
        }
        if( topPos > 220){
            $('#me-background').css('opacity','0')

        }
        else{
            $('#me-background').css('opacity','1')
        }

        if (topPos > 550){
            $('nav').addClass('bg-light')
            $('.nav-link').removeClass('text-white')
            $('.nav-link').css('color','rgba(1, 96, 82,.9)')
        }
        else{
            $('nav').removeClass('bg-light')
            $('.nav-link').addClass('text-white')
         
        }
    }

    fadeOutIn()
    $(window).scroll(function(){fadeOutIn()})

})