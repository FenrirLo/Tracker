$(document).ready(function() {
  $("form#tracks").submit(function() {
    var nameInput = $("input#name").val();
    var who = parseInt($("#who").val());
    console.log('name:' + nameInput)
    console.log('who:' + who)
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

    var how = parseInt($("#how").val());
    console.log('how:' + how)
    var result;
    if (how === "1") {
      result = "#c";
    } else if (how === "2") {
      result = "#java";
    } else if (how === "3") {
      result = "#php";
    } else if (how === "4") {
      result = "#ruby";
    }

    var what = parseInt($("#what").val());
    console.log('what:' + what)
    var result;
    if (what === "1") {
      result = "#c";
    } else if (what === "2") {
      result = "#java";
    } else if (what === "3") {
      result = "#php";
    } else if (what === "4") {
      result = "#ruby";
    }


    $(".name").text(nameInput);

    event.preventDefault();

    $("#output").show();
  });
});
