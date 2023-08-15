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
    "은행 어플 사용 방법 같이 공부할 사람 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 디지털 뱅킹을 더 효율적으로 활용하고자 하는 분들을 위한 디지털 뱅킹 스터디 그룹에 여러분을 초대합니다! 이 모임은 다양한 은행 어플을 함께 공부하고 활용하는 시간을 제공합니다. 모임 목적, 디지털 뱅킹 스터디 그룹은 현대 사회에서 필수적인 디지털 뱅킹 기술을 배우고 익히며, 효율적인 뱅킹 서비스를 활용하는 데에 목적을 두고 있습니다. 은행 어플과 온라인 뱅킹을 더 편리하고 안전하게 활용하는 방법을 함께 공부해봅시다. 활동 내용, 은행 어플 사용법, 다양한 은행 어플의 기능과 사용법을 배우고 실제로 적용해보며 익힙니다. 계정 관리와 송금, 잔액 확인, 거래 내역 조회, 송금 등의 기능을 연습하며 더 효율적으로 자금을 관리하는 방법을 공유합니다. 보안 및 개인정보 관리, 디지털 뱅킹에서의 보안 및 개인정보 관리 방법에 대해 배우고 안전한 뱅킹 습관을 함께 만들어봅니다. 온라인 서비스 활용, 은행 어플 이외의 온라인 뱅킹 서비스와 결제 시스템 등 다양한 디지털 뱅킹 도구를 살펴보고 활용합니다. 참여 혜택, 디지털 뱅킹 능력 향상 효율적인 은행 업무 처리 안전한 뱅킹 습관 형성 뱅킹 서비스의 다양한 기능 활용 함께 공부하며 지식을 공유하는 기회 참여 방법, 이 모임에 참여하고 싶으신 분들은 디지털 뱅킹에 관심이 있으며 스마트폰을 다룰 줄 아신다면 언제든 환영합니다. 함께 디지털 뱅킹의 편리함을 배우고 활용해보세요! 일정 및 장소, 자유. 오후 4시.의정부 2동 문의 및 신청, 010.8888.8888 디지털 뱅킹 스터디 그룹에 참여하여 더 효율적으로 은행을 활용하고, 디지털 뱅킹의 장점을 누려보세요. 함께 배우고 나누는 디지털 뱅킹 스터디에 여러분을 초대합니다!";

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
