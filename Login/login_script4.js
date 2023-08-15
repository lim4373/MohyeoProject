document.addEventListener("DOMContentLoaded", function () {
  var finalBtn = document.getElementById("finalBtn");

  finalBtn.addEventListener("click", function () {
    if (finalBtn.disabled === false) {
      window.location.href = "../Home/groups_home.html";
    }
  });
});
