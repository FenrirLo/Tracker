$(document).ready(function() {
  $("form#tracks").submit(function() {
    var nameInput = $("input#name").val();
    // var quote = add(who, how, what).val();
    var who = parseInt($("#who").val());
    var what = parseInt($("#what").val());
    var how = parseInt($("#how").val());
    console.log('name:' + nameInput)
    console.log('who:' + who)
    console.log('how:' + how)
    console.log('what:' + what)
    var result;
  //   if (who === "1") {
  //     result = "#c";
  //   } else if (who === "2") {
  //     result = "#java";
  //   } else if (who === "3") {
  //     result = "#php";
  //   } else if (who === "4") {
  //     result = "#ruby";
  // }

    $(".name").text(nameInput);
    // $("#result").text(quote);

    event.preventDefault();

    $("#output").show();
  });
});
