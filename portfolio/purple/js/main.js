$(document).ready(function() {
  $(function() {
    $(".burger").click(function() {
      $(".burger").toggleClass("active");
      $(this).toggleClass("inactive");
    });
    $(".burger").on("click", function() {
      $(".nav__list").slideToggle(500);
    });
    $(".nav__link").on("click", function() {
      $(".nav__list").fadeOut(150);
    });
  });
});
