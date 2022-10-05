const worksNumber = document.querySelectorAll(".works-number");

const worksList = document.querySelectorAll(".Works-list");


worksList.forEach((e,i)=>{
    worksNumber.forEach((content,num)=>{
        e.addEventListener("click",()=>{
            if(content.classList.contains("lost") == true && i == num){
                content.classList.remove("lost")
            }else if(content.classList.contains("lost") == false && i == num){
                console.log("ok");
            }else if(content.classList.contains("lost") == false && i !== num){
                content.classList.add("lost")
            }
        })
    })
})