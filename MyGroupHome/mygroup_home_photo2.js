var btn1 = document.getElementById("text_content1");
var btn2 = document.getElementById("text_content2");
var btn3 = document.getElementById("text_content3");
var btn4 = document.getElementById("text_content4");
var btn5 = document.getElementById("text_content5");
var btn6 = document.getElementById("text_content6");

var xbtn = document.getElementById("x-button");
var popup = document.getElementById("popup");
var content = document.getElementById("photoset");
var overlay = document.getElementById("overlay");

document.addEventListener("DOMContentLoaded", function () {
  btn1.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    content.src = "./img/photo1.png";
    content.style.width = "863px";
    content.style.height = "571px";
  });

  btn2.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    content.src = "./img/photo2.png";
    content.style.width = "863px";
    content.style.height = "571px";
  });

  btn3.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    content.src = "./img/photo3.png";
    content.style.width = "491px";
    content.style.height = "573px";
  });

  btn4.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    content.src = "./img/photo4.png";
    content.style.width = "863px";
    content.style.height = "571px";
  });

  btn5.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    content.src = "./img/photo5.png";
    content.style.width = "491px";
    content.style.height = "573px";
  });

  btn6.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    content.src = "./img/photo7.png";
    content.style.width = "863px";
    content.style.height = "571px";
  });

  xbtn.addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "none";
  });
});

var inviteBtn = document.getElementById("invite-button");

var invitePopup = document.getElementById("invite-popup");
var overlay = document.getElementById("overlay");

document.addEventListener("DOMContentLoaded", function () {
  inviteBtn.addEventListener("click", function () {
    invitePopup.style.display = "block";
  });
});
