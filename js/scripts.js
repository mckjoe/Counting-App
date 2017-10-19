

$(document).ready(function() {
  $("#first").click(function(event) {
    $("#hideMe").show();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#input").submit(function(event) {
    var number1 = parseInt($("#count-to").val());
    var number2 = parseInt($("#count-by").val());

    for (var index = 0; index <= number1; index += number2) {
      // alert(index);
      // console.log(index);
      $("ul").append("<li>" + index);
      $("#index-print").show();
   }


    event.preventDefault();
  });
});
