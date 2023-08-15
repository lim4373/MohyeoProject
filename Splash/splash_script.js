// 로고 크기와 위치를 조정하는 함수
function adjustLogo() {
  const logoContainer = document.getElementById("logo-container");
  const logoVideo = document.getElementById("logo");

  // 로고의 가로와 세로 비율 계산
  const logoWidth = logoVideo.videoWidth;
  const logoHeight = logoVideo.videoHeight;
  const logoAspectRatio = logoWidth / logoHeight;

  // 창의 가로 비율 계산
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowAspectRatio = windowWidth / windowHeight;

  // 비디오 크기 조정
  if (windowAspectRatio > logoAspectRatio) {
    logoVideo.style.width = "auto";
    logoVideo.style.height = "100%";
  } else {
    logoVideo.style.width = "100%";
    logoVideo.style.height = "auto";
  }
}

// 창 크기가 변경될 때 비디오를 조정
window.addEventListener("resize", adjustLogo);

// 페이지 로드 시 비디오를 조정
document.addEventListener("DOMContentLoaded", function () {
  adjustLogo();
});
