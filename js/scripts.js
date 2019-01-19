$(document).ready(function() {
  $("form#tracks").submit(function() {
    var nameInput = $("input#name").val();
    var who = parseInt($("#who").val());
    var what = parseInt($("#what").val());
    var how = parseInt($("#how").val());
    var motive = parseInt($("#motive").val());
    var nick = parseInt($("#nick").val());

    if (who + what + how + motive + nick >= 5) {
      $("#c").show();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (who + what + how+ motive + nick >= 10) {
      $("#c").hide();
      $("#java").show();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (who + what + how+ motive + nick >= 15) {
      $("#c").hide();
      $("#java").hide();
      $("#php").show();
      $("#ruby").hide();
    }
    if (who + what + how+ motive + nick >= 20) {
      $("#c").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").show();
    }

    $(".name").text(nameInput);
        $("#output").show();

    event.preventDefault();
  });
});
