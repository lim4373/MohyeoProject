// 모임 만들기 화면의 버튼

// var buttons1 = document.getElementsByClassName("button1");

// function handleClick1(event) {
//   for (var i = 0; i < buttons1.length; i++) {
//     buttons1[i].classList.remove("clicked");
//   }

//   event.target.classList.add("clicked");
// }

// function init1() {
//   for (var i = 0; i < buttons1.length; i++) {
//     buttons1[i].addEventListener("click", handleClick1);
//   }
// }

// init1();

// var buttons2 = document.getElementsByClassName("button2");

// function handleClick2(event) {
//   for (var i = 0; i < buttons2.length; i++) {
//     buttons2[i].classList.remove("clicked");
//   }

//   event.target.classList.add("clicked");
// }

// function init2() {
//   for (var i = 0; i < buttons2.length; i++) {
//     buttons2[i].addEventListener("click", handleClick2);
//   }
// }

// init2();

var buttons = document.querySelectorAll(".button1, .button2");

function handleClick(event) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }

  event.target.classList.add("clicked");
}

function init() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
  }
}

init();
