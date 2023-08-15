// index3.html의 애니메이션은 다른 페이지로 넘어갈 때 버튼을 누르기 때문에 굳이 안 만들어도 됨

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

document
  .getElementById("section3Button")
  .addEventListener("click", function () {
    const sectionId = "section3";
    const text = "모두 모혀, 여기로 모혀!";

    startSectionSpeech(sectionId, text);
  });
