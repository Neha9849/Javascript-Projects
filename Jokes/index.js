const btn= document.querySelector('button');
const video=document.getElementById('video');
const qnEl=document.getElementById('qn');
const ansEl=document.getElementById('ans');
async function getjokes(){
    let res=await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
    let resObj=await res.json();
    console.log(resObj.setup,resObj.delivery)
    qnEl.innerText=resObj.setup;
    ansEl.innerText=resObj.delivery;
    let qnSpeech=new SpeechSynthesisUtterance(resObj.setup);
    let ansSpeech=new SpeechSynthesisUtterance(resObj.delivery);
    speechSynthesis.speak(qnSpeech);
    speechSynthesis.speak(ansSpeech);
    video.stop();
    
}
btn.addEventListener('click',()=>{
    video.play()
    getjokes();

})