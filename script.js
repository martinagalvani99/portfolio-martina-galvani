$(() => {
    $("#menu-button").on("click", function () {
      $("#menu, #menu-button").toggleClass("is-active");
    });
  });