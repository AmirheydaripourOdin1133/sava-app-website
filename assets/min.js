// Comments box
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


//  Logo 
 $(document).ready(function(){
  $('.brand').slick({
    arrows: true,
    cssEase: 'linear',
    rtl: true,
    dots: false,
    infinite: true,
    speed: 301,
    autoplay: true,
    autoplaySpeed: 2100,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
const toggles = document.querySelectorAll(".act");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("active");
  });
})


// Limited Post Type 

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.limited-text');

  elements.forEach(element => {
      const maxLength = 100; // حداکثر تعداد کاراکترها
      const text = element.innerText;
      
      if (text.length > maxLength) {
          const trimmedText = text.substring(0, maxLength) + '...';
          element.innerText = trimmedText;
      }
  });
});


// Email marketing

document.getElementById('emailForm').addEventListener('submit', function(event) {
  const emailInput = document.getElementById('emailInput');
  const emailValue = emailInput.value;

  if (!isValidEmail(emailValue)) {
      showError('لطفا یک ایمیل معتبر وارد کنید.');
  } else {
      showSuccess('ایمیل معتبر است: ');
  }

  printToConsole(emailValue);

  event.preventDefault();
});

function isValidEmail(email) {
  // اعتبارسنجی ایمیل
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(message));

  const form = document.getElementById('emailForm');
  form.insertBefore(errorDiv, form.childNodes[0]);
}

function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success';
  successDiv.appendChild(document.createTextNode(message));

  const form = document.getElementById('emailForm');
  form.insertBefore(successDiv, form.childNodes[0]);
}

function printToConsole(value) {
  console.log('مقدار ورودی: ' + value);
}



//  Menu Right


$(document).ready(function(){
  $('#mobileMenuIcon').click(function(){

      $('.mobileMenuParent').addClass('mobMenuContainerDisplayer');
      $('.mobileMenuOverlay').addClass('mobileMenuOverlayDisplayer');
  });
  $('.mobileMenuOverlay').click(function(){
      $('.mobileMenuParent').removeClass('mobMenuContainerDisplayer');
      $('.mobileMenuOverlay').removeClass('mobileMenuOverlayDisplayer');
      $('.mobileMenuIcon span:nth-child(1)').removeClass('mobileFirstSpan');
      $('.mobileMenuIcon span:nth-child(2)').removeClass('mobileSecondSpan');
      $('.mobileMenuIcon span:nth-child(3)').removeClass('mobileThirdSpan');
      $('.menu-mobile-container .menu-item-has-children>ul').removeClass('mobSubMenuDisplayer');
  });
  $('.menu-mobile-container .menu-item-has-children').click(function(){
      $(this).find('>ul').toggleClass('mobSubMenuDisplayer');
      $(this).toggleClass('openMobileListMenu');
      $(this).siblings().find('>ul').removeClass('mobSubMenuDisplayer');
      $(this).siblings('.openMobileListMenu').toggleClass('openMobileListMenu');
      $(".menu-mobile-container .menu-item-has-children>ul").click(function(e) {
          e.stopPropagation();
      });
      $(this).children('a').click(function(e) {
          e.stopPropagation();
      });
  });
});