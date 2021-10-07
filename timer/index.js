const start = document.getElementById("start");
const reset = document.getElementById("reset");
const editbtn=document.getElementById('edit');
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
let min = 1;
let sec = 0;
//start function
function starttimer(ih,im,is){
  ih=Number(ih);
  im=Number(im);
  is=Number(is);
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
      resettimer();
    }
  }, 1000);
}
//reset function
function resettimer() {
    clearInterval(timer);
    secbox.innerHTML = String(sec).padStart(2,'0');
    minbox.innerHTML =String(min).padStart(2,'0'); 
    hrbox.innerHTML = String(hr).padStart(2,'0');
}
//start
start.addEventListener("click",()=>{
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
  hr=0;min=0;sec=0;
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
  settimer.classList.remove("settimer-active");
  secbox.innerHTML = String(sec).padStart(2,'0');
  minbox.innerHTML =String(min).padStart(2,'0'); 
  hrbox.innerHTML = String(hr).padStart(2,'0');
});
//on edit btn click
editbtn.addEventListener('click',()=>{
  hr=0; min=0; sec=0;
  settimer.classList.add('settimer-active');
})

