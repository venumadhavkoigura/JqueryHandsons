$(document).ready(function () {
  $("#par")
    .find("span")
    .hover(
      function () {
        $(this).css("background-color", "bisque");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );

  $(".searchWord").css({
    "font-style": "italic",
    "text-shadow": "2px 2px pink",
    "font-weight": "bold",
  });

  $('#schbtn').click(function(){
      console.log('clicked');
     var text= $('#searchbox').val();
     console.log(text);
     var p=$('#par');
     console.log(p);
  })
});