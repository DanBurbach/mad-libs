$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1 = $("input#adjective1").val();
    var adjective2 = $("input#adjective2").val();
    var animal1= $("input#animal1").val();
    var room = $("input#room").val();
    var verbpast1 = $("input#verbpast1").val();
    var verb1 = $("input#verb1").val();
    var person1 = $("input#person1").val();
    var noun = $("input#noun").val();
    var liquid = $("input#liquid").val();
    var verbending = $("input#verbending").val();
    var bodypart = $("input#bodypart").val();
    var pluralnoun = $("input#pluralnoun").val();
    var noun2 = $("input#noun2").val();

    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".animal1").text(animal1Input);
    $(".room").text(roomInput);
    $(".verbpast1").text(verbpast1Input);
    $(".verb1").text(verb1Input);
    $(".person1").text(person1Input);
    $(".noun").text(nounInput);
    $(".liquid").text(liquidInput);
    $(".verbending").text(verbendingInput);
    $(".bodypart").text(bodypartInput);
    $(".pluralnoun").text(pluralnounInput);
    $(".noun2").text(noun2Input);

    $("#story").show();

    event.preventDefault();
  });
});
