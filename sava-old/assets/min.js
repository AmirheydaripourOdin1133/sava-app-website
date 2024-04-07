$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        rtl: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 520,
            settings: {
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });
 });


