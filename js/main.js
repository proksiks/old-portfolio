$(function() {
  $(".header__burger").on("click", function() {
    $(".header__list").slideToggle();

    $(".header__link").on("click", function() {
      $(".header__list").hide();
    });
  });
  $(
    'a[href^="#home"],a[href^="#About"],a[href^="#portfolio"],a[href^="#service"],a[href^="#contact"],a[href^="#team"]'
  ).click(function() {
    let anchor = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(anchor).offset().top
      },
      600
    );
  });

  $(".portfolio__list_item button").click(function() {
    var get_id = this.id;
    var get_current = $(".portfolio__items ." + get_id);

    $(".portfolio__item")
      .not(get_current)
      .hide(500);
    get_current.show(500);
  });

  $(".portfolio_link").click(function() {
    $(".portfolio_link")
      .removeClass("portfolio_link_active")
      .addClass("portfolio_link_inactive");
    $(this)
      .removeClass("portfolio_link_inactive")
      .addClass("portfolio_link_active");
  });

  $("#showall").click(function() {
    $(".portfolio__item").show(500);
  });
});
