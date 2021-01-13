$(document).ready(function () {
  $("#submit-btn").click(() => {
    var category = $("#category-input").val();
    var path = "/table4queryoutput-" + category;
    if (category == "") {
      alert("Please fill up all the fields.");
    } else {
      $(location).attr("href", path);
    }
  });

  $("#back-btn").click(() => {
    $(location).attr("href", "/");
  });
});
