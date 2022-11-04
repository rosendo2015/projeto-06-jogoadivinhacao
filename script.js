/* 1º pegar os botões*/
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
const error = document.querySelector('.error');
let xAttempts = 1;

//eventos
btnTry.addEventListener('click', hendleTryClick);
btnReset.addEventListener('click', hendleResetClick);
document.addEventListener('keypress', pressEnter);

//função callback
function hendleTryClick(event) {
    event.preventDefault();
    error.classList.add('hide')
    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Parabéns, você acertou em ${xAttempts} tentativas`;
    }
    attemptInvalid();
    inputNumber.value = "";
    xAttempts++;

}

function hendleResetClick() {
    toggleScreen()
    xAttempts = 1
    document.location.reload();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function pressEnter(e) {

    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        hendleResetClick()
    }
}

function attemptInvalid() {

    if ((inputNumber.value == "") || (inputNumber.value < 0) || (inputNumber.value != Number(inputNumber.value))) {
        --xAttempts;
        error.classList.remove('hide');
    }
    return false
}

