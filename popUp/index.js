const openbtn=document.getElementById("open");
const closebtn=document.getElementById("close");
const popup=document.getElementById("pc");
openbtn.addEventListener('click',()=>{
    popup.classList.add('active') ;   
})
closebtn.addEventListener('click',()=>{
    popup.classList.remove('active');
})

