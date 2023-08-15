function startSectionSpeech(sectionId, text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const section = document.getElementById(sectionId);

  // 음성이 끝난 후에 섹션을 강조 표시하거나 다른 동작을 수행할 수 있습니다.
  utterance.onend = function () {
    section.style.backgroundColor = "yellow"; // 예시로 배경색을 변경합니다.
  };

  // 음성 재생
  speechSynthesis.speak(utterance);
}

document.getElementById("sound").addEventListener("click", function () {
  const sectionId = "sound";
  const text =
    "키오스크 사용 도와드릴께요! 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 노인을 위한 키오스크 사용 안내 안녕하세요,  편리하고 빠른 서비스 이용을 위해 키오스크를 사회에서는 도입하고 있습니다. 키오스크는 간단한 터치로 여러 가지 서비스를 이용할 수 있는 장치입니다. 아직 기기가 미숙한 당신에게 편리한 이용 방법을 알려드리겠습니다. 터치로 간편하게 키오스크는 화면에 터치로 선택하는 방식으로 동작합니다. 화면에 나타나는 메뉴를 손가락으로 누르기만 하면 됩니다. 복잡한 절차 없이 간단하게 이용할 수 있습니다. 음성 안내 지원 키오스크는 음성 안내 기능을 지원합니다. 화면에 나타나는 내용을 음성으로 들을 수 있어서 시각적으로 불편하신 분들도 편리하게 이용하실 수 있습니다. 사용 방법, 키오스크 앞으로 가서 화면을 확인해주세요. 원하는 메뉴를 터치해주세요. 안내에 따라 필요한 정보를 입력하세요. 결제가 필요한 경우 결제 방법을 선택하고 마침 버튼을 눌러주세요. 영수증이나 확인 메시지가 나올 때까지 기다려주세요. 노인분들께서도 쉽게 키오스크를 이용하실 수 있도록 모혀는 적극적으로 지원하고 있습니다. 불편함 없이 편리한 서비스 이용을 경험해보세요!";

  startSectionSpeech(sectionId, text);
});

// 아래는 팝업창 js

var btn = document.getElementById("right");
var ment = document.getElementById("greet");
var btn2 = document.getElementById("confirm");
var btn3 = document.getElementById("confirm2");
var popup = document.getElementById("popup");
var popup2 = document.getElementById("popup2");
var x = document.getElementById("x");

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", function () {
    popup.style.display = "block";
  });

  btn2.addEventListener("click", () => {
    popup.style.display = "none";
    popup2.style.display = "block";
  });

  btn3.addEventListener("click", () => {
    popup2.style.display = "none";
    btn2.classList.remove("active");
    btn2.classList.add("disabled");
    btn2.disabled = true;

    ment.value = null;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  x.addEventListener("click", () => {
    popup.style.display = "none";

    btn2.classList.remove("active");
    btn2.classList.add("disabled");
    btn2.disabled = true;

    ment.value = null;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function checkInputs() {
    var InputsFilled = ment.value.trim() !== "";

    if (InputsFilled) {
      btn2.classList.remove("disabled");
      btn2.classList.add("active");
      btn2.disabled = false;
    } else {
      btn2.classList.remove("active");
      btn2.classList.add("disabled");
      btn2.disabled = true;
    }
  }

  ment.addEventListener("input", checkInputs);
});
