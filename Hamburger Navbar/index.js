const openMenu = document.getElementById("open");
const closeMenu=document.getElementById('close');
const menuList = document.getElementById("menuList");
openMenu.addEventListener("click", () => {
  menuList.classList.add("show");
});
closeMenu.addEventListener("click",()=>{
    menuList.classList.remove("show");
})
