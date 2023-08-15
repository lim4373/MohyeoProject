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
    "생활 영어 도전할 어르신들! 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 영어를 배우고 싶은 분들이 모여 새로운 언어의 세계를 탐험하며, 영어로 소통하고 이해하는 데에 목적을 두고 있습니다. 다양한 주제를 통해 더 나은 영어 실력과 자신감을 기를 수 있는 기회를 제공합니다. 활동 내용, 주제별 토론, 다양한 주제에 관해 영어로 토론하고 의견을 나누며 언어 스킬을 향상시킵니다. 영어 영화 및 드라마 관람, 영어 영화와 드라마를 함께 감상하며 자연스럽게 언어 실력을 향상시킵니다. 문화 교류, 다양한 국적의 참여자들과 함께 문화 교류를 통해 더 깊은 이해와 친목을 도모합니다. 단어 및 문법 학습, 새로운 어휘와 문법을 배우고 함께 연습하며 언어 능력을 향상시킵니다. 참여 혜택, 영어 실력 향상과 자신감 기르기 다양한 주제로 인한 지식 확장 영어로 자유롭게 의사소통하는 능력 향상 다문화적인 친목과 국제 네트워킹 기회 유익하고 즐거운 스터디 그룹 활동 참여 방법, 이 모임에 참여하고 싶으신 분들은 영어에 관심이 있으며, 언어를 배우고 나누는 데에 열정을 가지시면 언제든 환영합니다. 함께 영어의 세계를 탐험하며 새로운 경험을 즐겨보세요! 일정 및 장소, 매주 토요일 오후 6시 온라인 문의 및 신청, 010-8888-8888 이 모임에 참여하여 영어를 더 깊이 탐험하고, 함께 배우며 영어를 통한 연결의 기회를 만끽해보세요. 다양한 주제와 친구들과 함께 하는 유익한 시간을 함께해보세요!";

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
