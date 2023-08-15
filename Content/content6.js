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
    "독서 모임 같이해요 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 책을 사랑하고 함께 나누는 즐거움을 느끼는 여러분들을 위한 글로벌 독서 여행 모임에 초대합니다! 이 모임은 다양한 장르의 책을 읽으며 생각을 공유하고 함께 성장하는 특별한 시간을 만들어드립니다. 모임 목적, 글로벌 독서 여행은 다양한 저자와 문화를 통해 세계 각지의 이야기에 다가가며, 독서를 통한 인사이트와 통찰을 함께 나누기 위해 시작되었습니다. 서로의 관점을 넓히고 새로운 아이디어를 얻으며, 독서의 즐거움을 함께 누려보세요. 활동 내용, 책 읽기와 분석, 주기적으로 선정된 책을 읽고 모임에서 각자의 생각과 감상을 나눕니다. 책의 주요 내용과 흥미로운 부분을 함께 분석하며 토론합니다. 문학 퀴즈 및 토론, 각 독서 세션마다 재미있는 문학 퀴즈와 토론 주제를 준비하여 다양한 시각과 관점에서 책을 바라보고 분석합니다. 저자와의 만남 및 강연, 저자와의 온라인 강연이나 대화를 통해 책의 배경 이야기나 저자의 의도를 더 깊이 이해하고 질문할 수 있는 기회를 제공합니다. 문화 교류와 요리 체험, 읽은 책의 배경이나 문화를 이해하기 위해 관련 요리를 체험하고 함께 맛보며 문화 교류를 즐깁니다. 글쓰기 워크샵, 독서를 통해 영감을 받아 자신만의 글을 쓰는 워크샵을 개최합니다. 참여자들끼리 글을 나누고 서로의 작품을 공유합니다. 참여 혜택, 다양한 장르와 저자의 책을 읽고 이해하는 기회 다양한 관점과 아이디어를 나누며 자신의 시야를 확장 책을 통해 인사이트를 얻고 생각의 깊이를 키움 문학 퀴즈와 토론을 통한 즐거운 지식 습득 글쓰기와 문화 체험을 통한 창의력 발휘 참여 방법, 이 모임에 관심이 있으신 분들은 단지 책을 좋아하고 함께 나누는 것에 열정을 가지시면 됩니다. 글로벌 독서 여행에서 함께 세계를 여행하는 즐거움을 누려보세요! 일정 및 장소 날짜,평일 아무때나 모임 장소, 용현동 문의 및 신청 010-8684-8684 글로벌 독서 여행에 참여하여 책의 세계로 여행하고, 서로의 생각과 감상을 나누며 새로운 문학적 경험을 만끽해보세요. 독서의 즐거움과 인사이트를 함께 나누는 모임에 여러분을 초대합니다!";
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
