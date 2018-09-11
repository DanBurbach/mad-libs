$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1Input = $("input#adjective1").val();
    var adjective2Input = $("input#adjective2").val();
    var animal1Input= $("input#animal1").val();
    var roomInput = $("input#room").val();
    var verbpast1Input = $("input#verbpast1").val();
    var verb1Input = $("input#verb1").val();
    var person1Input = $("input#person1").val();
    var nounInput = $("input#noun").val();
    var liquidInput = $("input#liquid").val();
    var verbendingInput = $("input#verbending").val();
    var bodypartInput = $("input#bodypart").val();
    var pluralnounInput = $("input#pluralnoun").val();
    var noun2Input = $("input#noun2").val();

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
