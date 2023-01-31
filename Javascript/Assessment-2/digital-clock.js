let ms = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let interval;

window.onload = () => {
    buttonTime.click();
}

let clock = document.createElement('div');
clock.setAttribute('class', 'clock')

document.querySelector('.container').appendChild(clock);

let clockOptions = document.createElement('div')
clockOptions.setAttribute('class', 'clock__options')

clock.appendChild(clockOptions);

let buttonStopwatch = document.createElement('button');
buttonStopwatch.setAttribute('class', 'clock__options__button clock__options__button--stopwatch');
buttonStopwatch.innerText = "Stopwatch";
buttonStopwatch.addEventListener('click', () => {
    for (let i=0; i<clockFunctionButtons.length; i++) {
        clockUiTime.classList.remove("show");
        clockUiTime.classList.add("hidden");
        clockUiStopwatch.classList.remove("hidden");
        clockUiStopwatch.classList.add("show");
        clockFunctionButtons[i].disabled = false;
    }
})

let buttonTime = document.createElement('button');
buttonTime.setAttribute('class', 'clock__options__button clock__options__button--time');
buttonTime.innerText = "Clock";
buttonTime.addEventListener('click', () => {
    console.log("hi")
    clockUiStopwatch.classList.remove("show");
    clockUiStopwatch.classList.add("hidden");
    clockUiTime.classList.remove("hidden");
    clockUiTime.classList.add("show");
    for (let i=0; i<clockFunctionButtons.length; i++) {
        clockFunctionButtons[i].disabled = true;
    }
})

clockOptions.appendChild(buttonStopwatch);
clockOptions.appendChild(buttonTime);

let clockUi = document.createElement('div');
clockUi.setAttribute('class', 'clock__ui');
clock.appendChild(clockUi);

let clockUiStopwatch = document.createElement('div');
clockUiStopwatch.setAttribute('class', 'clock__ui__stopwatch');

let hours = document.createElement('div')
hours.setAttribute('class', 'hours');
hours.innerText = hrs;

let minutes = document.createElement('div');
minutes.setAttribute('class', 'minutes');
minutes.innerText = min;


let seconds = document.createElement('div');
seconds.setAttribute('class', 'seconds');
seconds.innerText = sec;


let millSeconds = document.createElement('div');
millSeconds.setAttribute('class', 'millSeconds');
millSeconds.innerText = ms;


clockUiStopwatch.appendChild(hours);
clockUiStopwatch.appendChild(minutes);
clockUiStopwatch.appendChild(seconds);
clockUiStopwatch.appendChild(millSeconds);


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

let clockFunctionButtons = document.getElementsByClassName('clock__functions__button');
console.log(clockFunctionButtons)

let buttonStart = document.createElement('button');
buttonStart.setAttribute('class', 'clock__functions__button clock__functions--start');
buttonStart.innerText = "Start";
buttonStart.addEventListener('click', () => {
    interval = setInterval(startTimer,10);
})

let buttonStop = document.createElement('button');
buttonStop.setAttribute('class', 'clock__functions__button clock__functions--stop');
buttonStop.innerText = "Stop";
buttonStop.addEventListener('click', () => {
    clearInterval(interval);
})

let buttonReset = document.createElement('button');
buttonReset.setAttribute('class', 'clock__functions__button clock__functions--reset');
buttonReset.innerText = "Reset";
buttonReset.addEventListener('click', () => {
    ms = 0;
    sec = 0;
    min = 0;
    hrs = 0;
    hours.innerText = 00;
    minutes.innerText = 00;
    seconds.innerText = 00;
    millSeconds.innerText = 00;
})

clockFunctions.appendChild(buttonStart);
clockFunctions.appendChild(buttonStop);
clockFunctions.appendChild(buttonReset);


function startTimer() {
    ms+=10;
    millSeconds.innerText = ms;

    if(ms == 1000){
        ms = 0;
        sec++;

        seconds.innerText = sec;
        console.log("sec", sec)

        if(sec == 60){
            sec = 0;
            min++;
            
            minutes.innerText = min;
            console.log("min", min)

            if(min == 60){
                min = 0;
                hrs++;
                
                hours.innerText = hrs;
                console.log("hrs", hrs)
            }
        }
    }
}





