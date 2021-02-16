const year = document.querySelector('#year');
const month = document.querySelector('#month');
const date = document.querySelector('#date');
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const timestamp = document.querySelector('#timestamp');
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');

function humanDateToEpoch() {
    const y = parseFloat(year.value) || 0;
    const m = parseFloat(month.value) - 1 || 0;
    const d = parseFloat(date.value) || 0;
    const h = parseFloat(hour.value) || 0;
    const minV = parseFloat(min.value) || 0;
    const s = parseFloat(sec.value) || 0;
    const outputDate = new Date(y, m, d, h, minV, s);
    output1.value = outputDate.getTime() / 1000.0;
}

btn1.addEventListener('click', humanDateToEpoch);
humanDateToEpoch();

function epochToHumanDate() {
    const ts = parseInt(timestamp.value, 10) || 0;
    const dateVal = new Date(ts * 1000);
    output2.value = dateVal.toLocaleString();
}

btn2.addEventListener('click', epochToHumanDate);
epochToHumanDate();

const clockHour = document.querySelector('.clock-hour');
const clockMin = document.querySelector('.clock-min');
const clockSec = document.querySelector('.clock-sec');

setInterval(() => {
    const clockDate = new Date();
    const secRotate = (clockDate.getSeconds() / 60) * 360 - 90;
    const minRotate = (clockDate.getMinutes() / 60) * 360 - 90;
    const hourRotate = (clockDate.getHours() / 12) * 360 - 90;
    clockSec.style.transform = `rotate(${secRotate}deg)`;
    clockMin.style.transform = `rotate(${minRotate}deg)`;
    clockHour.style.transform = `rotate(${hourRotate}deg)`;
}, 1000);

const unixTime = document.querySelector('.async-time');
setInterval(() => {
    const unixDate = new Date();
    unixTime.innerHTML = Math.floor(unixDate.getTime() / 1000);
}, 1000);
