const countEl=document.getElementById('count');
async function getCount(){
    const res=await fetch('https://api.countapi.xyz/hit/neha9849/nehascounter');
    const resObj=await res.json();
    countEl.innerText=resObj.value;
}
window.addEventListener('load',()=>{
    getCount();
})