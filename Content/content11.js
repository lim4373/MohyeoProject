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
    "피아노, 배워보실래요? 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 피아노 연주를 사랑하는 분들을 위한 Piano Harmony 모임에 여러분을 초대합니다! 이 모임은 피아노를 통해 음악을 나누고 배우며, 함께 음악을 만들어가는 즐거운 시간을 제공합니다. 모임 목적, Piano Harmony는 피아노 연주자들과 음악 애호가들이 모여 음악적인 소통과 교류를 통해 피아노 연주 실력을 향상시키고, 창의성을 발휘하는 데에 목적을 두고 있습니다. 활동 내용, 연주와 리사이틀, 각자의 연주를 나누고 음악을 듣고 피드백을 주고받는 리사이틀 시간을 갖습니다. 앙상블 연습, 그룹으로 피아노 앙상블을 연습하며 협업과 조화를 배우고, 함께 음악을 조화롭게 만들어봅니다. 음악 감상 및 분석, 다양한 음악 작품을 듣고 분석하여 음악적 통찰력을 높이는 시간을 가집니다. 작곡 및 편곡 활동, 자신만의 음악을 만들어보거나 기존 곡을 편곡하여 새로운 아이디어를 탐구합니다. 참여 혜택, 피아노 연주 실력 향상 음악적 감각과 표현 능력 개발 음악 작품의 분석과 이해 앙상블과 협업 능력 강화 음악을 통한 감정 표현과 창의성 발휘  참여 방법, 이 모임에 참여하고 싶으신 분들은 피아노 연주에 관심이 있으며, 연주하거나 감상하는 것을 즐기는 분들을 대상으로 모집합니다. 함께 음악을 나누고 만들어가는 즐거움을 누려보세요! 일정 및 장소, 매주 화,수 오후 4시 온라인문의 및 신청. 010-9999-8888 Piano Harmony에 참여하여 피아노 연주의 아름다움을 나누고, 함께 음악을 만들며 즐거움을 느껴보세요. 음악으로 소통하며 새로운 음악적 경험을 만끽하는 모임에 여러분을 초대합니다!";

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
