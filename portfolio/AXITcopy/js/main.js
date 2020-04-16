$(function() {
  $(".slider__body").slick({
    vertical: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('a[href^="#"]').click(function() {
    let anchor = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(anchor).offset().top - 70
      },
      600
    );
  });
  $(".navigation__burger").on("click", function() {
    $(".navigation_list").slideToggle();
  });
  wow = new WOW({
    mobile: false,
  });
  wow.init();
});
