// $(document).ready(function () {

//     $('.carousel').carousel({
//         interval: 10000
//     })

//     var $number = $('.item').length;
   

//     setInterval(function(){
 
//     var $number = $('.item').length;
        
//     if ($('.active').hasClass('element1')) {
//         $('.changed1').html($number);
//     }

//     else if ($('.active').hasClass('element2')) {
//         $('.changed1').html($number - 3);
//     }
//     else if ($('.active').hasClass('element3')) {
//         $('.changed1').html($number - 2);
//     }
//     else if ($('.active').hasClass('element4')) {
//         $('.changed1').html($number - 1);
//     }
//     }, 100);

//     setInterval(function(){
 
//         var $number = $('.item').length;
            
//         if ($('.active').hasClass('element1')) {
//             $('.changed2').html($number - 2);
//         }
    
//         else if ($('.active').hasClass('element2')) {
//             $('.changed2').html($number - 1);
//         }
//         else if ($('.active').hasClass('element3')) {
//             $('.changed2').html($number);
//         }
//         else if ($('.active').hasClass('element4')) {
//             $('.changed2').html($number - 3);
//         }
//         }, 100);
// });

$(document).ready(function () {

  // Initialize the carousel
  $('.carousel').carousel({
    interval: 10000 // slide every 10 seconds
  });

  // Get total number of slides
  var totalSlides = $('.carousel .item').length;
  $('.length').text('/ ' + totalSlides);

  // Function to update the slide numbers
  function updateSlideNumbers() {
    var currentIndex = $('.carousel .item.active').index() + 1; // get current slide (1-based)
    $('.changed1, .changed2').text(currentIndex);
  }

  // Initial set when page loads
  updateSlideNumbers();

  // Update numbers every time the slide changes
  $('#myCarousel').on('slid.bs.carousel', function () {
    updateSlideNumbers();
  });

});