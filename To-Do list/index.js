const addBtn = document.getElementById("addBtn");
const wrapper = document.querySelector(".wrapper");
const addInputEl = document.getElementById("addInput");
const deleteEl=document.getElementsByTagName("i");
let inputValue = "";
let index=0;
let itemsArray=[];
//add button event
addBtn.addEventListener("click", () => {
//    itemsArray.push(inputValue);
//    console.log(itemsArray)
//    localStorage.setItem("array",itemsArray);
//    console.log(localStorage);
//    console.log(typeof(localStorage.getItem("array")))
//    let arrayfrmLS=localStorage.getItem("array").split(",");
//    console.log(arrayfrmLS);
  addItem();
    addInputEl.value="";
});
//oninput event
addInputEl.addEventListener("input", function inputValueFxn(e) {
  inputValue = e.target.value;
});
// add item function
function addItem(){
  const div = document.createElement("div");
  div.innerHTML = `<div class="container itemsWrapper" id="${index}">
<div class="container item">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt"  onclick="deleteItem(${index})"></i>
</div>
</div>`;
  wrapper.appendChild(div);
  index++;
}
//delete item function
function deleteItem(id){
    index--;
    itemsArray.pop(id);
    localStorage.setItem("array",itemsArray);
    console.log(itemsArray);
    console.log(localStorage)
   const elToDel=document.getElementById(id);
   elToDel.classList.add('elToDel');

}

