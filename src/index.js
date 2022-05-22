let html = $("html");

html.mousemove(function(e) {
  let x = e.pageX - $(this).offset().left - $(this).width() / 2;
  let y = e.pageY - $(this).offset().top - $(this).height() / 2;

  $("*[data-mouse-parallax]").each(function() {
    let factor = parseFloat($(this).data("mouse-parallax"));
    x = -x * factor / 2;
    y = -y * factor / 2;

    $(this).css({ transform: "translate3d( " + x + "px, " + y + "px, 0 )" });
  });
});

html.mouseleave(function(e) {
    let target = $(e.target);

    if( !target.is("div.layer")) {
$("*[data-mouse-parallax]").each(function() {
    $(this).css({ transform: "translate3d( 0px, 0px, 0 )" });
});
      e.stopPropagation();


    }
});