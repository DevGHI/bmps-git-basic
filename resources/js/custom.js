(function ($) {
  "use strict";
  $(document).ready(function () {
    // Page preloader
    $("#fakeloader").fakeLoader({
      timeToHide: 1000,
      zIndex: "999999", //Default zIndex
      bgColor: "#ffffff",
      spinner: "spinner1",
    });
    // show body after site load
    $("body").show();

    //Top Courses Section , Isotopes JS
    $(window).on("load", function () {
      $(".all-course").isotope({});
      $("#isotope-filters").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $(".all-course").isotope({ filter: filterValue });
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
      });
    });

    //   learning-path Carousel (slick )

    $(".learning-path").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: '<i class="fas fa-angle-right"></i>',
      prevArrow: '<i class="fas fa-angle-left"></i>',
      focusOnSelect: true,
      easing: "linear",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    //   Testimonial Carousel (slick )
    $(".testimonial").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: '<i class="fas fa-angle-right"></i>',
      prevArrow: '<i class="fas fa-angle-left"></i>',
      focusOnSelect: true,
      easing: "linear",
    });

    //Related Course Slider (Slick)
    $(".related-course").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: '<i class="fas fa-angle-right"></i>',
      prevArrow: '<i class="fas fa-angle-left"></i>',
      focusOnSelect: true,
      easing: "linear",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Magnific Js

    $(".portfolio").magnificPopup({
      delegate: "a", // child items selector, by clicking on it popup will open
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    // Book Page Portfolio item
    $(document).ready(function () {
      $(".radio-group .radio").click(function () {
        $(".radio").addClass("gray");
        $(this).removeClass("gray");
      });

      $(".plus-minus .plus").click(function () {
        var count = $(this).parent().prev().text();
        $(this)
          .parent()
          .prev()
          .html(Number(count) + 1);
      });

      $(".plus-minus .minus").click(function () {
        var count = $(this).parent().prev().text();
        $(this)
          .parent()
          .prev()
          .html(Number(count) - 1);
      });
    });
  }); // End load document
})(jQuery);

// Aos Animation for home page
AOS.init({
  once: true,
});
