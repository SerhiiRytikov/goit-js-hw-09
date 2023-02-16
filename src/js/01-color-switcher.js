//* ===============================
//* функція зміни рандом кольора
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//* ===============================
//* доступ до кнопок та боді(для зміни кольору боді)
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

//* змінна для запуску та зупинки інтервалу (з конспекту)
let timerId = null;

//* запускає таймер та зміну кольору фону боді з інтервалом 1 секунда (1000 міллісекунд)
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  //* деактивує кнопку start (disabled)
  startBtn.setAttribute('disabled', true);
});

//* зупиняє таймер
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  //* видаляє деактивацію з кнопки start (disabled)
  startBtn.removeAttribute('disabled');
  //* деактивує кнопку stop (disabled) як на відео з тз
  stopBtn.setAttribute('disabled', true);
});
