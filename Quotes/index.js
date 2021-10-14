const nxtBtn=document.querySelector('button');
const quoteEl=document.getElementById('quoteTxt');
const authorEl=document.querySelector('small');
nxtBtn.addEventListener('click',()=>{
    getquotes();

})
async function getquotes(){
    let res= await fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "77ad6c4366msha0369e55adc7561p11f35fjsn4bbfe99766ea"
        }
    })
    let resObj=await res.json();
    let quote=resObj.content;
    let author=resObj.originator.name;
    quoteEl.innerText=quote;
    authorEl.innerText=` - ${author}`;
}
getquotes();

