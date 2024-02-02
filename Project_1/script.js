
const panels=document.querySelectorAll(".panel");

function RemoveActiveClasses(){
    panels.forEach((element)=>{
        element.classList.remove('active')
    })

}


panels.forEach((element)=>{
    element.addEventListener("click",()=>{
        RemoveActiveClasses()
        element.classList.add("active")
    })
})




