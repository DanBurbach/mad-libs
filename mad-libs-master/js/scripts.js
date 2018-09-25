$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["adjective1", "adjective2", "animal1", "room", "verbpast1", "verb1", "person1", "noun", "liquid", "verbending", "bodypart", "pluralnoun", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
