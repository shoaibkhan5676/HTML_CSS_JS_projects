const open= document.getElementById("open");
const close= document.getElementById("close");
const container =document.querySelector(".container");

open.addEventListener("click",()=>{
    container.classList.add("spin")
})
close.addEventListener("click",()=>{
    container.classList.remove("spin")
})




