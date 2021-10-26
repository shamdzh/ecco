$(document).ready(function(){
    $('.wrapper').slick();

    $('.posts__box').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:"<i class='far fa-arrow-alt-circle-left a-left control-c prev slick-prev'></i>",
      nextArrow:"<i class='far fa-arrow-alt-circle-right a-right control-c next slick-next'></i>"
    });

  });

