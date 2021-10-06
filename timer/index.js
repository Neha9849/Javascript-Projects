const start = document.getElementById("start");
const reset = document.getElementById("reset");
const hrbox = document.getElementById("hr");
const minbox = document.getElementById("min");
const secbox = document.getElementById("sec");
const audio = document.getElementById("audio");
const timeupwrapper = document.getElementById("tup");
const okbtn = document.getElementById("ok-btn");
const timebox = document.getElementById("timebox");
const settimer = document.getElementById("set-timer");
const setbtn = document.getElementById("set-btn");
const hi = document.getElementById("hr-i");
const mi = document.getElementById("min-i");
const si = document.getElementById("sec-i");
let hr = 0;
let min = 0;
let sec = 10;
//start function
function starttimer(ih,im,is){
  console.log(ih,im,is);
  ts = is + im * 60 + ih * 3600;
  tm = is * (1 / 60) + im + ih * 60;
  th = is * (1 / 3600) + im * (1 / 60) + ih;
  timer = setInterval(function () {
    ts--;
    tm = tm - 1 / 60;
    th = th - 1 / 3600;
    secbox.innerHTML = String(Math.floor(ts % 60)).padStart(2, "0");
    minbox.innerHTML = String(Math.floor(tm % 60)).padStart(2, "0");
    hrbox.innerHTML = String(Math.floor(th)).padStart(2, "0");
    if (ts == 0) {
      timeupwrapper.classList.add("timeup-active");
      audio.play();
    }
  }, 1000);
}
//reset function
function resettimer() {
  ts = sec + min * 60 + hr * 3600;
  tm = sec * (1 / 60) + min + hr * 60;
  th = sec * (1 / 3600) + min * (1 / 60) + hr;
  secbox.innerHTML = String(Math.floor(ts % 60)).padStart(2, "0");
  minbox.innerHTML = String(Math.floor(tm % 60)).padStart(2, "0");
  hrbox.innerHTML = String(Math.floor(th)).padStart(2, "0");
  clearInterval(timer);
}
//start
start.addEventListener("click",( )=>{
    starttimer(hr,min,sec);
});
////reset
reset.addEventListener("click", resettimer);
//stop alarm
okbtn.addEventListener("click", () => {
  timeupwrapper.classList.remove("timeup-active");
  audio.pause();
  resettimer();
});
//edit timer
timebox.addEventListener('click',()=>{
  settimer.classList.add('settimer-active');

})
//on-input
hi.addEventListener('input',()=>{
  hr=hi.value;
})
mi.addEventListener('input',()=>{
  min=mi.value;
})
si.addEventListener('input',()=>{
  sec=si.value;
})
//set btn on click
setbtn.addEventListener("click", () => {
  starttimer(hr,min,sec);
  settimer.classList.remove("settimer-active");
});
