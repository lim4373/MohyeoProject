var inputsection = document.getElementById('popup-input');
var btn = document.getElementById('button2');
var btn2 = document.getElementById('confirm');

var inviteBtn = document.getElementById('button1');


var popup = document.getElementById('popup');
var invitePopup = document.getElementById('invite-popup');
var overlay = document.getElementById('overlay');

document.addEventListener('DOMContentLoaded', function () {

    function checkInputs() {
        var allInputsFilled = inputsection.value.trim() !== '';

        if (allInputsFilled) {
            btn2.classList.remove('disabled');
            btn2.classList.add('active');
            btn2.disabled = false;
        } else {
            btn2.classList.remove('active');
            btn2.classList.add('disabled');
            btn2.disabled = true;
        }
    }

    inputsection.addEventListener('input', checkInputs);

    btn.addEventListener('click', function () {
        overlay.style.display = "block";
        popup.style.display = 'block';
        btn2.disabled = true;
        btn2.classList.remove('active');
        btn2.classList.add('disabled');
    });

    btn2.addEventListener('click', () => {
        overlay.style.display = "none";
        popup.style.display = 'none';
        inputsection.value = null;
    });

    inviteBtn.addEventListener('click', function () {
        invitePopup.style.display = 'block';
    });

});


