var inputContainer = document.getElementById("IDKey");
var inputElement2 = document.getElementById("Key");
var inputElement = document.getElementById("Num");
var buttonElement = document.getElementById("codeBtn");

document.addEventListener("DOMContentLoaded", function () {
  var buttonElement = document.getElementById("myButton");
  buttonElement.disabled = true;
});

function checkInput() {
  if (inputElement.value.length > 0) {
    buttonElement.disabled = false;
    buttonElement.classList.remove("disabled");
    buttonElement.classList.add("active");
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.remove("active");
    buttonElement.classList.add("disabled");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  buttonElement.addEventListener("click", function () {
    if (inputContainer.style.display === "none") {
      inputContainer.style.display = "block";
      buttonElement.textContent = "다음";
      buttonElement.disabled = true;
      buttonElement.classList.remove("active");
      buttonElement.classList.add("disabled");
    }
    // else {
    //     inputContainer.style.display = 'none';
    //     buttonElement.textContent = '다음';
    // }
    if (inputElement2.value.length > 0 && inputElement.value.length > 0) {
      buttonElement.disabled = false;
      buttonElement.classList.remove("disabled");
      buttonElement.classList.add("active");
    } else {
      buttonElement.disabled = true;
      buttonElement.classList.remove("active");
      buttonElement.classList.add("disabled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  buttonElement.addEventListener("click", function () {
    if (inputElement2.value.length > 0 && inputElement.value.length > 0) {
      // 여기서 페이지 리다이렉션을 수행합니다.
      window.location.href = "login2.html";
    }
  });
});
