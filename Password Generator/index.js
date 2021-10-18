const inputEl=document.querySelector(".input");
const btn=document.querySelector(".btn");
const iconEl=document.querySelector(".iconWrapper");
btn.addEventListener("click",()=>{
    let output="";
    for (let i = 0; i <12; i++) {
        output=output+String.fromCharCode(Math.ceil((126-33)*Math.random())+33); 
    }
    inputEl.value=output;
    
})
iconEl.addEventListener("click",()=>{
    inputEl.select();
    document.execCommand("copy");
})
