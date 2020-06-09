const windowHeight = $(window).height();
const mainHeight = $(document).height();

$(window).on("scroll", function (event) {
  let ratioHeight = ($(this).scrollTop() / (mainHeight - windowHeight)) * 100;
  if ($(this).scrollTop() > 0) {
    if ($("#header").hasClass("header-top")) {
      $("#header").removeClass("header-top");
      $("#header").addClass("header-stick");
      $("#header-choice").removeClass("header-option-choose");
      $("#header-choice").addClass("header-option-choose-stick");
      $(".header-option-item").addClass("header-option-stick");
      $(".header-option-item").removeClass("header-option-top");
    }
  } else {
    if ($("#header").hasClass("header-stick")) {
      $("#header").removeClass("header-stick");
      $("#header").addClass("header-top");
      $("#header-choice").removeClass("header-option-choose-stick");
      $("#header-choice").addClass("header-option-choose");
      $(".header-option-item").removeClass("header-option-stick");
      $(".header-option-item").addClass("header-option-top");
    }

    ratioHeight = 0;
  }

  $("#progress-bar").css("width", ratioHeight + "%");
});

$("#search-icon").click(function () {
  $("#search-banner").removeClass("disable");
});

$("#search-banner-off").click(function () {
  $("#search-banner").addClass("disable");
});

$("#user-icon").click(function () {
  $("#user-option").toggle("disable");
});

$("#bag-icon").click(function () {
  $("#bag-item").toggle("disable");
});
