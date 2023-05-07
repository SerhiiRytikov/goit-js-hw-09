//* ===============================
//* функція зміни рандом кольора
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//* ===============================
//* доступ до кнопок та боді(для зміни кольору боді)
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true; //* деактивує кнопку stop при завантаженні сторінки
const body = document.querySelector('body');

//* змінна для запуску та зупинки інтервалу (з конспекту)
let timerId = null;

//* запускає таймер та зміну кольору фону боді з інтервалом 1 секунда (1000 міллісекунд)
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  //* деактивує кнопку start та активує кнопку stop при запусканні таймеру
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

//* зупиняє таймер
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  //* деактивує кнопку stop та активує кнопку start після зупинки таймеру
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
