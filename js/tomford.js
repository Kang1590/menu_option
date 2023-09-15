$(document).ready(function () {
  // 작은병 마우스 오버
  $("#small button").mouseover(function () {
    const x = $(this).children().attr("src");
    const y = $(this).children().attr("alt");
    console.log(x + "\n" / y);
    $("#big").attr({ src: x, alt: y });
  });
}); ////all end
