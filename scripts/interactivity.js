$(document).ready(function () {
  var slides= [
    "images/showcase1.jpg",
    "images/showcase2.jpg",
    "images/showcase3.jpg",
    "images/showcase4.jpg",
    "images/showcase5.jpg",
    "images/showcase6.jpg",
  ];

  var index = 0;

  $("#slide_left").on("click", function() {
    if (index == 0){
      index = 5;
      $("#slideshowPhoto").attr("src",slides[index]);
    }else{
      index = index - 1;
      $("#slideshowPhoto").attr("src",slides[index]);
    }
  })

  $("#slide_right").on("click", function() {
    if (index == 5){
      index = 0;
      $("#slideshowPhoto").attr("src",slides[index]);
    }else{
      index = index + 1;
      $("#slideshowPhoto").attr("src",slides[index]);
    }
  })
    $('.content').hide();
    $('.expander').click(function () {
        $(this).parent().next().slideToggle(200);
    });
    $('.content').slideUp(200);
});
