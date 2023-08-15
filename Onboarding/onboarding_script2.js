// index2.html의 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const divRootLink = document.querySelector("#div_root a");
  const content = document.querySelector("#div_left");
  const images = document.querySelectorAll("img");
  const divRight = document.querySelector("#div_right2");

  divRootLink.addEventListener("click", function (event) {
    event.preventDefault();

    // 애니메이션 추가 (현재 페이지 내용 및 이미지 사라짐)
    content.style.animation = "fadeOutUp 0.5s ease-in-out forwards";
    images.forEach(function (img) {
      img.style.animation = "fadeOutUp 0.5s ease-in-out forwards";
    });
    divRight.style.animation = "fadeOutUp 0.5s ease-in-out forwards";

    setTimeout(function () {
      const nextPageUrl = divRootLink.getAttribute("href");
      window.location.href = nextPageUrl;
    }, 500);
  });
});

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
  .getElementById("section2Button")
  .addEventListener("click", function () {
    const sectionId = "section2";
    const text =
      "보기 편한 구조와 음성 서비스를 통한 쉬운 접근성으로 편리한 이용을 제공합니다";

    startSectionSpeech(sectionId, text);
  });
