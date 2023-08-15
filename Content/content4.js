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
    "수락산에서는 함께 모혀! 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 재테크에 관심 있는 여러분들을 위한 재테크 마스터클래스 모임에 참여하세요! 이 모임은 금융 지식을 공유하고 함께 배우며 더 나은 재정 건강을 위한 노력을 하기 위한 기회를 제공합니다. 모임 목적, 재테크 마스터클래스는 금융적 지식을 확장하고 투자, 저축, 부동산, 주식 등 다양한 재테크 전략에 대해 배우며 서로의 경험과 지식을 나누기 위해 만들어진 모임입니다. 더 나은 재정 미래를 위해 함께 공부하고 성장해보세요! 활동 내용, 투자 전략 공유, 다양한 투자 방법과 전략에 대해 공유하고 토론합니다. 주식, 채권, 펀드, 부동산 등 다양한 옵션을 살펴보며 서로의 관점을 나눕니다. 재테크 워크샵, 주기적으로 재테크 워크샵을 개최하여 실제 케이스 스터디와 함께 실용적인 재테크 스킬을 배웁니다. 금융 교육 세미나, 금융 전문가를 초청하여 투자, 세금, 재무 관리 등에 관한 세미나를 진행합니다. 최신 정보와 동향을 배우며 더 나은 재무 계획을 세울 수 있습니다. 경험 공유와 토론, 멤버들의 경험을 공유하고 서로의 질문에 답하며 함께 토론합니다. 다양한 시각을 통해 더 나은 결정을 내릴 수 있습니다. 재테크 책 읽기 모임, 재테크와 금융에 관한 책을 함께 읽고 분석하는 모임을 운영합니다. 책을 통한 지식 습득과 토론을 통해 배우고 성장하세요. 참여 혜택, 실용적인 재테크 지식 습득 투자와 금융 분야에서의 자신감 향상 경제적 안정과 재정 건강 관리 능력 향상 금융 전문가와의 교류와 네트워킹 기회 서로의 경험과 지식 공유를 통한 성장 참여 방법, 이 모임에 참여하고 싶은 분들은 금융에 대한 기본적인 이해와 호기심만 가져오시면 됩니다. 함께 배우고 성장하는 재테크 모임에서 더 나은 재정 미래를 위한 준비를 시작해보세요! 일정 및 장소, 자유. 오후 6시. 온라인 문의 및 신청, 010-9999-0000 재테크 마스터클래스 모임에 참여하여 더 나은 재정 건강과 미래를 위한 준비를 시작해보세요. 함께 배우고 성장하는 모임에 여러분을 초대합니다!";

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
