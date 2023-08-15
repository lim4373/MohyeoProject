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
    "등산 같이할 분들 모십니다~ 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 노인 등산 모임 안내 안녕하세요, 모혀입니다! 우리는 여러분을 위한 삶의 새로운 모험을 함께 떠나는 인증된 등산 모임을 운영하고 있습니다. 자연의 아름다움을 느끼며 건강을 증진하고 소중한 추억을 만들어보세요. 모임 소개, 저희 모혀는 노인분들께서 안전하고 즐겁게 산을 오르며 새로운 친구들을 만나고 자연과 소통할 수 있는 기회를 제공합니다. 누구나 참여할 수 있으며, 경험 있는 리더가 안내해드립니다. 등산 코스, 우리의 등산 코스는 다양한 난이도와 거리로 구성되어 있어 모든 참여자들이 즐겁고 안전하게 산을 탐험할 수 있습니다. 간단한 산책로 부터 자연의 경치를 한눈에 볼 수 있는 트레킹 코스까지 다양한 선택지가 있습니다. 모임 일정, 매주 토요일에 모여 다함께 등산을 즐기며 신선한 공기를 마시고 운동을 합니다. 모임은 오전 6시에 출발하여 오전 9시 반에 도착 예정입니다. 일정 및 장소, 날짜, 8월 20일 모임 장소, 수락산역 문의 및 신청 만약 더 많은 정보를 원하거나 참여 신청을 하고 싶으시면, 아래 연락처로 문의해주세요. 우리의 등산 모임에 참여하여 새로운 경험과 만남을 만들어보세요! 이메일, mohyeo@naver.com 전화번호, 010-0000-0000 자연을 사랑하고 건강한 삶을 추구하는 노인 여러분, 함께 산을 오르며 행복한 순간을 만들어봐요! #취미 #등산 #자연";

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
