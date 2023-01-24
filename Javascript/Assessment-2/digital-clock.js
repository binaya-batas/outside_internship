let clock = document.createElement('div');
clock.setAttribute('class', 'clock')

document.querySelector('.container').appendChild(clock);

let clockOptions = document.createElement('div')
clockOptions.setAttribute('class', 'clock__options')

clock.appendChild(clockOptions);

let buttonStopwatch = document.createElement('button');
buttonStopwatch.setAttribute('class', 'clock__options__button clock__options__button--stopwatch');
buttonStopwatch.innerText = "Stopwatch";

let buttonTime = document.createElement('button');
buttonTime.setAttribute('class', 'clock__options__button clock__options__button--time');
buttonTime.innerText = "Clock";

clockOptions.appendChild(buttonStopwatch);
clockOptions.appendChild(buttonTime);

let clockUi = document.createElement('div');
clockUi.setAttribute('class', 'clock__ui');
clock.appendChild(clockUi);

let clockUiStopwatch = document.createElement('div');
clockUiStopwatch.setAttribute('class', 'clock__ui__stopwatch');

let clockUiTime = document.createElement('div');
clockUiTime.setAttribute('class', 'clock__ui__time');
//Get current time	
setInterval(function() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    clockUiTime.innerText = time;
}, 1000)

clockUi.appendChild(clockUiStopwatch);
clockUi.appendChild(clockUiTime);

let clockFunctions = document.createElement('div');
clockFunctions.setAttribute('class', 'clock__functions');
clock.appendChild(clockFunctions);

let buttonStart = document.createElement('button');
buttonStart.setAttribute('class', 'clock__functions__button clock__functions--start');
buttonStart.innerText = "Start";

let buttonStop = document.createElement('button');
buttonStop.setAttribute('class', 'clock__functions__button clock__functions--stop');
buttonStop.innerText = "Stop";

let buttonReset = document.createElement('button');
buttonReset.setAttribute('class', 'clock__functions__button clock__functions--reset');
buttonReset.innerText = "Reset";

clockFunctions.appendChild(buttonStart);
clockFunctions.appendChild(buttonStop);
clockFunctions.appendChild(buttonReset);



