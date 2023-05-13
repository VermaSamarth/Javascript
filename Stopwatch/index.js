// const timeDisplay = document.querySelector("#timeDisplay");
// const startButton = document.querySelector("#start");
// const pauseButton = document.querySelector("#pause");
// const resetButton = document.querySelector("#reset");

// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startButton.addEventListener("click",()=>{
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
//     }
// });

// pauseButton.addEventListener("click",()=>{
//     if(!paused){
//         paused = true;
//         elapsedTime = Date.now - startTime;
//         clearInterval(intervalId);
//     }
// });

// resetButton.addEventListener("click",()=>{
//     paused = true;
//     clearInterval(intervalId);
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = "00:00:00";
// });

// function updateTime(){
//     elapsedTime = Date.now() - startTime;
//     secs = Math.floor((elapsedTime/1000)%60);
//     mins = Math.floor((elapsedTime/(1000*60))%60);
//     hrs = Math.floor((elapsedTime/(1000*60*60))%60);

//     if(secs<10)
//         secs = padZeros(secs);
    
//     if(mins<10)
//         mins = padZeros(mins);

//     if(hrs<10)
//         hrs = padZeros(hrs);    

//     function padZeros(value){
//         return "0"+value;
//     }
        
//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
// }




// // const date = new Date(); 
// // console.log(Date.now());
// // console.log(date);
// // console.log(date.getMilliseconds());
// // console.log(date.getSeconds());
// // console.log(date.getMinutes());
// // console.log(date.getHours());

const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;

startButton.addEventListener("click",()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 10);
    }
});

pauseButton.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now - startTime;
        clearInterval(intervalId);
    }
});

resetButton.addEventListener("click",()=>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    ms = 0;
    timeDisplay.textContent = "00:00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    ms = Math.floor((elapsedTime/10)%100);
    secs = Math.floor((elapsedTime/1000)%60);
    mins = Math.floor((elapsedTime/(1000*60))%60);
    hrs = Math.floor((elapsedTime/(1000*60*60))%60);

    if(secs<10)
        secs = padZeros(secs);
    
    if(mins<10)
        mins = padZeros(mins);

    if(hrs<10)
        hrs = padZeros(hrs);    

    if(ms<10)
        ms = padZeros(ms);

    function padZeros(value){
        return "0"+value;
    }
        
    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${ms}`;
}



