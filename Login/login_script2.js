var maleButton = document.getElementById("maleBtn");
var femaleButton = document.getElementById("femaleBtn");
var nextButton = document.getElementById("Btn");
var nameInput = document.getElementById("Name");
var yearInput = document.getElementById("year");
var monthInput = document.getElementById("month");
var dayInput = document.getElementById("day");
var areaInput = document.getElementById("area");

document.addEventListener("DOMContentLoaded", function () {
  // 초기 상태로 남성 버튼이 선택된 것처럼 보이게 설정
  maleButton.classList.add("btnNonactivemale");
  femaleButton.classList.add("btnActivefemale");

  maleButton.addEventListener("click", function () {
    maleButton.classList.remove("btnNonactivemale");
    maleButton.classList.add("btnActivemale");
    femaleButton.classList.remove("btnActivefemale");
    femaleButton.classList.add("btnNonactivefemale");
    checkInputs();
  });

  femaleButton.addEventListener("click", function () {
    femaleButton.classList.remove("btnNonactivefemale");
    femaleButton.classList.add("btnActivefemale");
    maleButton.classList.remove("btnActivemale");
    maleButton.classList.add("btnNonactivemale");
    checkInputs();
  });

  function checkInputs() {
    var allInputsFilled =
      nameInput.value.trim() !== "" &&
      yearInput.value.trim() !== "" &&
      monthInput.value.trim() !== "" &&
      dayInput.value.trim() !== "" &&
      areaInput.value.trim() !== "";

    if (allInputsFilled) {
      nextButton.classList.remove("disabled");
      nextButton.classList.add("active");
    } else {
      nextButton.classList.remove("active");
      nextButton.classList.add("disabled");
    }
  }

  nameInput.addEventListener("input", checkInputs);
  yearInput.addEventListener("input", checkInputs);
  monthInput.addEventListener("input", checkInputs);
  dayInput.addEventListener("input", checkInputs);
  areaInput.addEventListener("input", checkInputs);

  nextButton.addEventListener("click", function () {
    if (
      nameInput.value.length > 0 &&
      yearInput.value.length > 0 &&
      monthInput.value.length > 0 &&
      dayInput.value.length > 0 &&
      areaInput.value.length > 0
    ) {
      window.location.href = "login3.html";
    }
  });
});
