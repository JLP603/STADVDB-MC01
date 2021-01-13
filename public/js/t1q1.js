

$(document).ready(function () {
  $("#submit-btn").click(() => {
    var ctime = $("#checkin-time").val();

    var path = "/table1query1output-" + ctime;
    if (ctime == ""||ctime =="0") {
      alert("Please fill up all the fields.");
    } else {
      $(location).attr("href", path);
    }
  });

  $("#back-btn").click(() => {
    $(location).attr("href", "/");
  });
});
