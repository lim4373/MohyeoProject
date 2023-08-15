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
    "영어 청년 멘토링 하러 모혀! 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 영어를 함께 배우고 싶은 노인분들을 위한 실용 영어 멘토링 프로그램에 모여주세요! 이 모임은 영어를 쉽고 재미있게 배우며, 동시에 젊은 세대와 교류하고 소통하는 특별한 기회를 제공합니다. 우리 모임은 노인분들이 일상 생활에서 유용한 영어 표현과 회화 스킬을 습득하실 수 있도록 돕는 것을 목표로 합니다 더불어, 영어를 통한 다양한 문화 교류와 친목을 즐기며 새로운 친구들을 만날 수 있는 기회를 제공합니다.활동 내용, 주제별 대화, 각 모임에서는 일상 생활에서 자주 사용되는 주제들에 대한 영어 대화를 진행합니다. 여행, 음식, 취미 등 다양한 주제를 선택하여 함께 대화하며 영어 실력을 향상시킵니다.실용 영어 표현 학습, 노인분들이 실생활에서 자주 사용하는 영어 표현과 구문을 배우고 연습합니다. 일상적인 상황에서 자신감 있게 영어로 의사소통할 수 있는 능력을 키워드립니다.문화 체험과 공유, 멘티들끼리 다양한 문화를 공유하고 경험합니다. 자신의 문화와 관습을 소개하고, 멘토와 함께 영어로 표현하는 방법을 배웁니다. 게임과 엔터테인먼트, 영어 학습을 게임과 엔터테인먼트를 통해 즐겁게 진행합니다. 퀴즈, 토론, 영화 감상 등을 통해 영어 실력을 높이며 즐거운 시간을 보내요! 멘토와의 상담 시간, 영어 학습에 관한 궁금한 점이나 피드백을 멘토와 나누는 시간을 가집니다. 개인적인 학습 목표를 설정하고 도움을 받을 수 있는 기회를 제공합니다. 참여 혜택,일상 영어 능력 향상 다양한 문화와 사람들과의 교류 새로운 친구들과의 만남 재미있는 게임과 활동 영어 멘토의 도움과 지원 참여 방법, 이 모임에 참여하고자 하는 노인분들은 단지 열정과 호기심만 가져오시면 됩니다. 함께 즐겁게 영어를 배우며 소중한 경험을 나누는 시간을 함께 만들어보세요! 일정 및 장소, 매주 수요일. 오후 5시. 온라인 문의 및 신청, 010-9999-0000 우리의 실용 영어 멘토링으로 함께 영어를 배우며 더욱 더 넓은 세상을 열어보세요. 노인분들의 참여를 환영합니다!";

  startSectionSpeech(sectionId, text);
});

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
