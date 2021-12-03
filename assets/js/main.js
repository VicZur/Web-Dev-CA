
  


// var slideIndex = 0;
// showSlides(slideIndex);

// // Next/previous controls
//     function plusSlides(n) {
//       clearTimeout(timer);
//       showSlides(slideIndex += n);
//     }

// function showSlides(slideIndex) {
//   var i;
//   var slides = document.getElementsByClassName("galway-slides");
//   //var dots = document.getElementsByClassName("dot");


//  // if (n > slides.length) {slideIndex = 1}
//   //if (n < 1) {slideIndex = slides.length}

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   //for (i = 0; i < dots.length; i++) {
//   //dots[i].className = dots[i].className.replace(" active", "");

//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   timer = setTimeout(showSlides, 3000); // Change image every 3 seconds
// };

// var slideIndex = 0;
// showSlides();


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var j;
//   var slides = document.getElementsByClassName("galway-slides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  

//   for (j = 0; j < dots.length; j++) {
//    dots[j].className = dots[j].className.replace(" active", "");


//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// };


$(document).ready(function(){


  $("#about-dropdown").hover(function(){
    $("#about-dropdown-content").finish().slideDown('fast');
    }, function(){
      var toElem = $(event.toElement);
      if (toElem != "#about-dropdown-content") {
        $("#about-dropdown-content").finish().slideUp('fast'); 
    }
    }
  );

    $("#explore-dropdown").hover(function(){
    $("#explore-dropdown-content").finish().slideDown('fast');
    }, function(){
      var toElem = $(event.toElement);
      if (toElem != "#explore-dropdown-content") {
        $("#explore-dropdown-content").finish().slideUp('fast'); 
    }
    }
  );




//display scroll to top butotn if 200 px from top
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('#scroll-top-btn').fadeIn();
    } else {
      $('#scroll-top-btn').fadeOut();
    }
  });

  $('#scroll-top-btn').click(function(){
    $('html, body').animate({scrollTop : 0},600);
    return false;
  });

});

var slideIndex = 1;
showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("galway-slides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    };


















    

