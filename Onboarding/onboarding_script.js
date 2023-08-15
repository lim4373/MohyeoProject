// index.html의 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const divRootLink = document.querySelector("#div_root a");
  const content = document.querySelector("#div_left");
  const images = document.querySelectorAll("img");
  const divRight = document.querySelector("#div_right");

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

// 버튼 클릭 이벤트 리스너 등록
document
  .getElementById("section1Button")
  .addEventListener("click", function () {
    const sectionId = "section1";
    const text =
      "다양한 사람들과 함께 배워가는 모임 공간, 모혀입니다. 취미가 있거나, 새롭게 만들거나, 새로운 것을 공부하거나, 공유하거나 모두와 함께 배움의 공간을 만들어 보세요!";

    startSectionSpeech(sectionId, text);
  });
