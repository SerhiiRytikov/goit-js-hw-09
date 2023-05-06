// імпортуємо бібліотеку flatpickr
import flatpickr from 'flatpickr';
// підкулючаємо CSS бібліотеки
import 'flatpickr/dist/flatpickr.min.css';
// імпортуємо бібліотеку notiflix
import Notiflix from 'notiflix';

// доступ до інпуту, лічильників часу та кнопки стврт
const input = document.querySelector('#datetime-picker');
const dateDays = document.querySelector('[data-days]');
const dateHours = document.querySelector('[data-hours]');
const dateMinutes = document.querySelector('[data-minutes]');
const dateSeconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('button[data-start]');

// змінна для запуску та зупинки інтервалу
let intervalId = null;

// змінна options з календарем з тз
const options = {
  enableTime: true, // Вмикає засіб вибору часу
  time_24hr: true, // Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  defaultDate: new Date(), // Встановлює початкові вибрані дати
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure(
        'Please choose a date in the future Будь ласка виберіть дату в майбутньому'
      );
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// запускає таймер
startBtn.addEventListener('click', startTimer);

function startTimer() {
  startBtn.disabled = true;
  intervalId = setInterval(timer, 1000);
}

// функція таймеру обратного відліку
function timer() {
  const timeDiff = new Date(input.value) - Date.now();
  if (timeDiff <= 0) {
    clearInterval(intervalId);
  } else {
    // console.log(convertMs(timeDiff));

    dateDays.textContent = addLeadingZero(convertMs(timeDiff).days.toString());
    dateHours.textContent = addLeadingZero(
      convertMs(timeDiff).hours.toString()
    );
    dateMinutes.textContent = addLeadingZero(
      convertMs(timeDiff).minutes.toString()
    );
    dateSeconds.textContent = addLeadingZero(
      convertMs(timeDiff).seconds.toString()
    );
  }
}
//* додає до цифр таймера одне число 0
function addLeadingZero(value) {
  return value.padStart(2, '0');
}
