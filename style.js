$(".pageSelectorItem").on("click", function () {
  $(".pageSelectorItem").removeClass("activeItem");
  $(this).addClass("activeItem");
});

$(".menuItem").on("click", function () {
  $(".pageSelectorItem").removeClass("activeItem");
  $(".pageSelectorItem").addClass("activeItem");
});
