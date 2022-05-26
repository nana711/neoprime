$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
   $('nav.globalMenuSp ul li a').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').removeClass('active');
        } else {
            $('.globalMenuSp').addClass('active');
        }
   });
     $('nav.globalMenuSp ul li a').click(function() {
        $(".hamburger").removeClass('active');
    });
});


/* ハンバーガー */

$('.fade').slick({
 dots: true,
  infinite: true,
  speed: 500,
  fade: true,
    cssEase: 'linear',
  autoplay: true
});

/* slick */
