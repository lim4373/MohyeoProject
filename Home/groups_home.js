// Group3_카테고리 버튼
var button = document.getElementsByClassName("button");

function handleClick(event) {
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("clicked");
  }

  event.target.classList.add("clicked");

  // 이미지 변경 로직 추가
  var category = event.target.textContent.trim();
  changeImages(category);
}

function init() {
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", handleClick);
  }
  button[0].classList.add("clicked");
}

init();

// 이미지 변경 함수
function changeImages(category) {
  var images = {
    전체: [
      { src: "./img/41.png", link: "../Content/content13.html" },
      { src: "./img/42.png", link: "../Content/content14.html" },
      { src: "./img/43.png", link: "../Content/content15.html" },
      { src: "./img/44.png", link: "../Content/content16.html" },
      // 다른 이미지와 링크도 추가
    ],
    취미: [
      { src: "./img/81.png", link: "../Content/content13.html" },
      { src: "./img/82.png", link: "../Content/content15.html" },
      { src: "./img/83.png", link: "../Content/content16.html" },
      { src: "./img/84.png", link: "#" },
      // 다른 이미지와 링크도 추가
    ],
    관람: [
      { src: "./img/71.png", link: "#" },
      { src: "./img/72.png", link: "#" },
      { src: "./img/73.png", link: "#" },
      { src: "./img/74.png", link: "#" },
      // 다른 이미지와 링크도 추가
    ],
    공부: [
      { src: "./img/91.png", link: "#" },
      { src: "./img/92.png", link: "../Content/content15.html" },
      { src: "./img/93.png", link: "#" },
      { src: "./img/94.png", link: "#" },
      // 다른 이미지와 링크도 추가
    ],
    귀농: [
      { src: "./img/101.png", link: "#" },
      { src: "./img/102.png", link: "#" },
      { src: "./img/103.png", link: "#" },
      { src: "./img/104.png", link: "#" },
      // 다른 이미지와 링크도 추가
    ],
    운동: [
      { src: "./img/111.png", link: "../Content/content13.html" },
      { src: "./img/112.png", link: "#" },
      { src: "./img/113.png", link: "#" },
      { src: "./img/114.png", link: "#" },
      // 다른 이미지와 링크도 추가
    ],
  };

  var imageIds = [
    "img41",
    "img42",
    "img43",
    "img44",
    "img71",
    "img72",
    "img73",
    "img74",
    "img81",
    "img82",
    "img83",
    "img84",
    "img91",
    "img92",
    "img93",
    "img94",
    "img101",
    "img102",
    "img103",
    "img104",
    "img111",
    "img112",
    "img113",
    "img114",
  ];

  var imageContainers = document.getElementsByClassName("group3imgs");

  var imageSources = images[category];

  // 이미지 개수와 imageIds 배열의 길이를 비교하여 처리합니다.
  for (var i = 0; i < Math.min(imageIds.length, imageSources.length); i++) {
    var image = imageContainers[i].querySelector("img");
    var link = imageContainers[i].querySelector("a");

    if (image && link) {
      // 이미지 엘리먼트가 존재하는 경우에만 처리합니다.
      image.src = imageSources[i].src;
      link.href = imageSources[i].link;
    }
  }
}
