$(document).ready(function() {
  $("form#tracks").submit(function() {
    var nameInput = $("input#name").val();
    var who = parseInt($("#who").val());
    var result;
    if (who === "1") {
      result = "#c";
    } else if (who === "2") {
      result = "#java";
    } else if (who === "3") {
      result = "#php";
    } else if (who === "4") {
      result = "#ruby";
    }
    $(".name").text(nameInput);

    event.preventDefault();

    $("#output").show();
  });
});
