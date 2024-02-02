
const circles=document.querySelectorAll(".circle");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const progress=document.getElementById("progress");

let CurrentActive=1;
function update(){
    circles.forEach((element,index)=>{
        if(index<CurrentActive){
            element.classList.add("active")
        }
        else{
            element.classList.remove("active")
        }
    })

    const actives=document.querySelectorAll(".active")
    // console.log(actives.length)
    let percent=((actives.length-1)/(circles.length-1))*100+"%";
    progress.style.width=percent;

    if(CurrentActive<=1){
        prev.disabled=true
    }
    else if(CurrentActive>=4){
        next.disabled=true

    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }

    

}


next.addEventListener("click",()=>{
    CurrentActive++;
    if (CurrentActive>circles.length){
        CurrentActive=circles.length;
    }
    update()


})
prev.addEventListener("click",()=>{
    CurrentActive--;
    if(CurrentActive<1){
        CurrentActive=1;

    }
    update()

})



