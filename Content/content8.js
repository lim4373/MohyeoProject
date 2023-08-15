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
    "수락산에서는 함께 모혀! 가입버튼은 좌측 붉은 버튼을 눌러 주시기 바랍니다. 안녕하세요, 음악을 사랑하고 연주하는 분들을 위한 하모니 뮤직 모임에 여러분을 초대합니다! 이 모임은 다양한 악기와 음악 장르를 즐기며 함께 연주하고 음악의 매력을 함께 나누는 공간입니다. 모임 목적, 하모니 뮤직 모임은 음악을 연주하고 나누는 즐거움을 경험하며, 음악을 통한 감정 표현과 팀워크를 발전시키기 위한 목적을 가지고 있습니다. 함께 연주하며 음악으로 사회적 경험과 연결고리를 만들어보세요. 활동 내용, 악기 연주 연습, 다양한 악기 연주자들이 함께 모여 서로의 연주를 나누고 피드백을 주고받으며 더 나은 연주 실력을 향상시킵니다. 그룹 연주와 협업, 그룹으로 음악을 연주하며 협업과 조화를 경험하고, 각자의 역할과 파트를 분담하여 공연을 준비합니다. 음악 공유와 감상, 각자 선호하는 음악을 공유하고 함께 감상하는 시간을 가집니다. 음악에 대한 이야기를 통해 서로의 관심을 나눕니다. 작곡과 창작 활동, 자신만의 음악을 만들고 연주하는 창작 활동을 통해 음악적 창의성을 개발하고 나만의 스타일을 찾아봅니다. 참여 혜택, 음악 연주 실력 향상과 음악적 감각 개발 다양한 악기와 음악 장르의 경험 팀워크와 협업 능력 강화 음악을 통한 감정 표현과 자기 표현의 기회 음악을 사랑하는 친구들과의 만남과 소셜 네트워킹 참여 방법, 이 모임에 참여하고 싶으신 분들은 음악을 연주하거나 관심이 있으신 분들을 대상으로 모집합니다. 함께 연주하며 음악의 매력을 느껴보세요! 일정 및 장소, 매주 화요일 오후 5시 온라인 문의 및 신청, 010-8781-3146 하모니 뮤직 모임에 참여하여 함께 연주하고 음악을 나누며, 음악의 감동과 환희를 누려보세요. 음악으로 소통하며 더욱 깊은 인연을 만들어가는 모임에 여러분을 초대합니다!";

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
