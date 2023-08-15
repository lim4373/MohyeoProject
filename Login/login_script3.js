document.addEventListener("DOMContentLoaded", function () {
  var checkMaster = document.getElementById("Btn1");
  var check1 = document.getElementById("Btn2");
  var check2 = document.getElementById("Btn3");
  var finalBtn = document.getElementById("finalBtn");

  function updateButtons() {
    var allChecked = checkMaster.classList.contains("checkActive");
    var check1Checked = check1.classList.contains("checkActive");
    var check2Checked = check2.classList.contains("checkActive");

    if (allChecked && (check1Checked || check2Checked)) {
      finalBtn.classList.remove("disabled");
      finalBtn.classList.add("active");
      finalBtn.disabled = false;
    } else {
      finalBtn.classList.remove("active");
      finalBtn.classList.add("disabled");
      finalBtn.disabled = true;
    }
  }

  checkMaster.addEventListener("click", function () {
    toggleButtonState(checkMaster);
    toggleButtonState(check1);
    toggleButtonState(check2);
    updateButtons();
  });

  check1.addEventListener("click", function () {
    toggleButtonState(check1);
    updateCheckMaster();
    updateButtons();
  });

  check2.addEventListener("click", function () {
    toggleButtonState(check2);
    updateCheckMaster();
    updateButtons();
  });

  function toggleButtonState(button) {
    if (button.classList.contains("checkDisabled")) {
      button.classList.remove("checkDisabled");
      button.classList.add("checkActive");
    } else {
      button.classList.remove("checkActive");
      button.classList.add("checkDisabled");
    }
  }

  function updateCheckMaster() {
    if (
      check1.classList.contains("checkActive") &&
      check2.classList.contains("checkActive")
    ) {
      checkMaster.classList.remove("checkDisabled");
      checkMaster.classList.add("checkActive");
    } else {
      checkMaster.classList.remove("checkActive");
      checkMaster.classList.add("checkDisabled");
    }
  }

  updateButtons(); // Initialize button states

  finalBtn.addEventListener("click", function () {
    if (finalBtn.disabled === false) {
      window.location.href = "login4.html";
    }
  });
});
