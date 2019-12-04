$(document).ready(function(){
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

    // form validation //
    $("#apply_form").on("submit", function() {
        var formValid = true;

    if ($("#name").prop("validity").valid ) {
        $(".name_error").addClass("hidden");
    } else {
        $("#name_error").removeClass("hidden");
            formValid = false;
    }

    if ($("#year").prop("validity").valid ) {
        $(".year_error").addClass("hidden");
    } else {
        $("#year_error").removeClass("hidden");
            formValid = false;
    }

    if ($("#cals").is(':checked') || $("#coe").is(':checked') || $("#aap").is(':checked') || $("#ilr").is(':checked') || $("#hoe").is(':checked') || $("#johnson").is(':checked')){

        $(".college_error").addClass("hidden");
    } else {
        $("#college_error").removeClass("hidden");
            formValid = false;
    }

    if ($("#motivation").prop("validity").valid ) {
        $(".motivation_error_noinput").addClass("hidden");
    } else if ($("#motivation").prop("validity").valid ) {
        $(".motivation_error_shortinput").addClass("hidden");
    } else {
        $("#motivation_error_noinput").removeClass("hidden");
            formValid = false;
        $("#motivation_error_shortinput").removeClass("hidden");
            formValid = false;
    }

    if ($("#president").is(':checked') || $("#pubicity").is(':checked') || $("#treasury").is(':checked') || $("#logistics").is(':checked') || $("#social").is(':checked')){

        $(".position_error").addClass("hidden");
    } else {
        $("#position_error").removeClass("hidden");
            formValid = false;
    }

    if ($("#reason").prop("validity").valid ) {
        $(".reason_error_noinput").addClass("hidden");
    } else if ($("#motivation").prop("validity").valid ) {
        $(".reason_error_shortinput").addClass("hidden");
    } else {
        $("#reason_error_noinput").removeClass("hidden");
            formValid = false;
        $("#reason_error_shortinput").removeClass("hidden");
            formValid = false;
    }
      return formValid
  })
})
