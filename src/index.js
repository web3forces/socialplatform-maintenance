$("body").mousemove(function(e) {
  let x = e.pageX - $(this).offset().left - $(this).width() / 6;
  let y = e.pageY - $(this).offset().top - $(this).height() / 6;

  $("*[data-mouse-parallax]").each(function() {
    let factor = parseFloat($(this).data("mouse-parallax"));
    x = -x * factor;
    y = -y * factor;

    $(this).css({ transform: "translate3d( " + x + "px, " + y + "px, 0 )" });
  });
});