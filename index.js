
const display =document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsestime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        startTime = Date.now() - elapsestime;
        timer = setInterval(update,10);
        isrunning = true
    }
    
}
start();
function stop(){

    if(isrunning){
        clearInterval(timer);
        elapsestime = Date.now() - startTime;
        isrunning = false;
    }
}

function reset(){
    clearInterval(timer)
    startTime = 0;
    elapsestime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const currentTime = Date.now();
    elapsestime = currentTime -startTime
    let hours = Math.floor(elapsestime / (1000 * 60 *60));
    let min = Math.floor(elapsestime / (1000 * 60) % 60);
    let sec = Math.floor(elapsestime / (1000) % 60);
    let msec = Math.floor(elapsestime % (1000) / 10);

    hours = String(hours).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    msec = String(msec).padStart(2,"0");
    display.textContent = `${hours}:${min}:${sec}:${msec}`
}