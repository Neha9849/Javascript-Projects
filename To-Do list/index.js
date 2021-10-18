const addBtn = document.getElementById("addBtn");
const wrapper = document.querySelector(".wrapper");
const addInputEl = document.getElementById("addInput");
const deleteEl=document.getElementsByTagName("i");
let inputValue;
//add button event
addBtn.addEventListener("click", () => {
  if(inputValue.trim().length!=0){
    let itemsArray=JSON.parse(localStorage.getItem('array'));
    itemsArray.push(inputValue);
     localStorage.setItem("array",JSON.stringify(itemsArray));
    addItem();
      addInputEl.value="";
  }  
});
//oninput event
addInputEl.addEventListener("input", function inputValueFxn(e) {
  inputValue = e.target.value;
});
// add item function
function addItem(){
  const getArray=JSON.parse(localStorage.getItem("array"));
  const elToAddIndex=getArray.length-1;
  const elToAdd=getArray[elToAddIndex];
    const div = document.createElement("div");
    div.innerHTML = `<div class="container itemsWrapper" id="${elToAddIndex}">
    <div class="container item">
        <span>${elToAdd}</span>
        <i class="far fa-trash-alt"  onclick="deleteItem(${elToAddIndex})"></i>
    </div>
    </div>`;
      wrapper.appendChild(div);  
}
//delete item function
function deleteItem(id){
  const itemsArray=JSON.parse(localStorage.getItem("array"));
    itemsArray[id]=null;
    localStorage.setItem("array",JSON.stringify(itemsArray));
   const elToDel=document.getElementById(id);
   elToDel.classList.add('elToDel');
}
//onload get from storage
window.addEventListener("load",()=>{
  if(localStorage.array==undefined){
    const sample=["sample task"];
    localStorage.setItem("array",JSON.stringify(sample));
  }
  else{
    let elToLoad=[];
    elToLoad=JSON.parse(localStorage.getItem("array"));
    elToLoad.map((item,i)=>{
      if(item!=null && item!="sample task"){
        const div = document.createElement("div");
        div.innerHTML = `<div class="container itemsWrapper" id="${i}">
        <div class="container item">
            <span>${item}</span>
            <i class="far fa-trash-alt"  onclick="deleteItem(${i})"></i>
        </div>
        </div>`;
          wrapper.appendChild(div);  
      }
    })

  }
  
 
})


