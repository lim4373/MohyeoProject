var section1 = document.getElementById('section1-input');
var section2 = document.getElementById('section2-input');
var section3 = document.getElementById('section3-input');
var section4 = document.getElementById('section4-input');
var btn = document.getElementById('button2');
var btn2 = document.getElementById('confirm-button');
var inviteBtn = document.getElementById('button1');
var invitePopup = document.getElementById('invite-popup');
var popup = document.getElementById('popup');
var overlay = document.getElementById("overlay");

document.addEventListener('DOMContentLoaded', function () {

    function checkInputs() {
        var allInputsFilled = section1.value.trim() !== '' &&
            section2.value.trim() !== '' &&
            section3.value.trim() !== '' &&
            section4.value.trim() !== '';

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

    section1.addEventListener('input', checkInputs);
    section2.addEventListener('input', checkInputs);
    section3.addEventListener('input', checkInputs);
    section4.addEventListener('input', checkInputs);




});


document.addEventListener('DOMContentLoaded', function () {

    btn.addEventListener('click', function () {
        btn2.classList.remove('active');
            btn2.classList.add('disabled');
            btn2.disabled = true;
        popup.style.display = 'block';
        overlay.style.display = 'block';

    });

    btn2.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        section1.value = null;
        section2.value = null;
        section3.value = null;
        section4.value = null;
    });


    inviteBtn.addEventListener('click', function () {
        invitePopup.style.display = 'block';
    });

});
