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
    "캘리그라피 공부할 사람 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 아름다운 캘리그라피의 세계에 참여하고 싶은 분들을 위한  캘리그라피 모임에 여러분을 초대합니다! 이 모임은 섬세한 펜 움직임을 통해 예술적인 글씨를 만들어가며 창의성을 발휘하는 시간을 제공합니다. 모임 목적, 캘리그라피를 배우고 연습하며 창의적인 글씨 작업을 함께 나누고자 하는 분들을 위해 만들어진 모임입니다. 아름다운 글씨 예술을 통해 자신의 감성을 표현하고 발전시키는 것을 목표로 합니다. 활동 내용, 기본 캘리그라피 기술, 다양한 펜과 종이를 사용하여 기본적인 캘리그라피 기술을 배우고 연습합니다. 다양한 스타일 탐구, 서체와 스타일을 변화시켜 다양한 캘리그라피 작업을 시도하며 자신만의 특색을 찾아봅니다. 문자와 디자인 결합, 단어나 문장을 아름답게 디자인하여 포스터, 카드, 초대장 등 다양한 작품을 만들어봅니다. 작품 전시와 공유, 자신의 작품을 전시하고 다른 참여자들과 나누는 시간을 가지며 서로에게 영감을 줍니다. 참여 혜택, 캘리그라피 기술 향상 창의성과 예술적 표현 능력 발전 아름다운 글씨 예술을 통한 감정 표현 다양한 캘리그라피 스타일 탐구 예술적인 커뮤니티와의 교류와 공유 참여 방법, 이 모임에 참여하고 싶으신 분들은 캘리그라피에 관심이 있으며 글쓰기와 예술을 즐기는 분들을 대상으로 모집합니다. 함께 아름다운 글씨 예술을 만들며 창의성을 표현해보세요! 일정 및 장소, 평일 아무때나 자유 . 용현동 문의 및 신청, 010.8888.8888 모임에 참여하여 예술적인 캘리그라피의 세계를 탐험하고, 창의성을 표현하며 아름다운 글씨 예술을 만들어보세요. 서로의 작품을 나누고 함께 성장하는 캘리그라피 모임에 여러분을 초대합니다!";

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
