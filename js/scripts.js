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


    if ("#who" + "#how" + "#what" === 3) {
      $("#c").show();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    } else if (who + how + what === 6) {
      r$("#c").hide();
      $("#java").show();
      $("#php").hide();
      $("#ruby").hide();
    } else if (who + how + what === 9) {
      $("#c").hide();
      $("#java").hide();
      $("#php").show();
      $("#ruby").hide();;
    } else if (who + how + what === 12) {
      $("#c").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").show();;
    }

    $(".name").text(nameInput);

    event.preventDefault();
console.log('output')
    $("#output").show();
  });
});
