const circles=document.querySelectorAll(".circle");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const progress=document.getElementById("progress")
let ClickPoint=1;

function updateprogress(){
    circles.forEach((element,index)=>{
        if(index<ClickPoint){
            element.classList.add("active")
        }
        else{
            element.classList.remove("active")
        }
    })
 
    let widthPercent=((ClickPoint-1)/(circles.length-1))*100+"%";
    progress.style.width=widthPercent;



    if(ClickPoint>3){
        next.disabled=true;
    }
    else if(ClickPoint<=1){
        prev.disabled=true
    }
    else{
        next.disabled=false;
        prev.disabled=false;
    }


}


next.addEventListener("click",()=>{
    ClickPoint++;
    if(ClickPoint>circles.length){
        ClickPoint=circles.length
    }
    updateprogress()
})
prev.addEventListener("click",()=>{
    ClickPoint--;
    if(ClickPoint<1){
        ClickPoint=1;
    }
    updateprogress()
})






