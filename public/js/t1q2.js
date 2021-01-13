
$(document).ready(function () {
    $("#submit-btn").click(() => {
        var day_input = $("#day_input").val();
        var path = "/table1query2output-" + day_input;
        if ( day_input == "")
        {
            alert("Please fill up all the fields.");
        }
        else
        {
            $(location).attr("href", path);
        }
    });

    $("#back-btn").click(() => {
      $(location).attr("href", "/");
    });
});
