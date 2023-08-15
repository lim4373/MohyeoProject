var section1 = document.getElementById('section1_write');
var section2 = document.getElementById('section2_write');
var section3 = document.getElementById('section3_write');
var section4 = document.getElementById('section4_write');
var section5 = document.getElementById('section5_write');
var btn = document.getElementById('finalBtn');
var btn2 = document.getElementById('confirm');
var popup = document.getElementById('popup');

document.addEventListener('DOMContentLoaded', function () {

    function checkInputs() {
        var allInputsFilled = section1.value.trim() !== '' &&
            section2.value.trim() !== '' &&
            section3.value.trim() !== '' &&
            section4.value.trim() !== '' &&
            section5.value.trim() !== '';

        if (allInputsFilled) {
            btn.classList.remove('disabled');
            btn.classList.add('active');
            btn.disabled = false;
        } else {
            btn.classList.remove('active');
            btn.classList.add('disabled');
            btn.disabled = true;
        }
    }

    section1.addEventListener('input', checkInputs);
    section2.addEventListener('input', checkInputs);
    section3.addEventListener('input', checkInputs);
    section4.addEventListener('input', checkInputs);
    section5.addEventListener('input', checkInputs);

    btn.addEventListener('click', function () {
        if (btn.disabled === false) {
            // window.location.href = '#';
            popup.style.display = 'block';
        }
    });

    btn2.addEventListener('click', () => {
        popup.style.display = 'none';
      });

});
