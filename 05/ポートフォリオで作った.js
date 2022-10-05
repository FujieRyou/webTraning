{
    const topBtn = document.querySelector(".top-btn");
    console.log(topBtn);
    topBtn.onclick = () =>{
        window.scrollTo({
            top:0
        });
    };

    const worksNumber = document.querySelectorAll(".works-number");
    console.log(worksNumber);

    const worksList = document.querySelectorAll(".Works-list");
    console.log(worksList);

    // worksNumber.forEach((e)=>{
    //     console.log(e);
    // });
    // WorksList.forEach((i)=>{
    //     console.log(i);
    // });

    // for(let i = 0;i < worksList.length;i++){
    //     for(let e = 0;e < worksNumber.length;e++){
    //         worksList[i].addEventListener("click",()=>{
    //             if(worksNumber[i].classList.contains("lost") == true){
    //                 worksNumber[i].classList.remove("lost");
    //             }else{
    //                 console.log("ok");
    //             }
    //             if(worksNumber[!i].classList.contains("lost") == true){
    //                 console.log("ok");
    //             }else{
    //                 worksNumber[!i].classList.add("lost");
    //             }
    //         });
    //     }
    // }
    

    worksList[0].addEventListener("click",()=>{
        if(worksNumber[0].classList.contains("lost") == true){
            worksNumber[0].classList.remove("lost");
        }else{
            console.log("ok");
        }
        if(worksNumber[1].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[1].classList.add("lost");
        }
        if(worksNumber[2].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[2].classList.add("lost");
        }
        if(worksNumber[3].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[3].classList.add("lost");
        }
        if(worksNumber[4].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[4].classList.add("lost");
        }
    });
    worksList[1].addEventListener("click",()=>{
        if(worksNumber[0].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[0].classList.add("lost");
        }
        if(worksNumber[1].classList.contains("lost") == true){
            worksNumber[1].classList.remove("lost");
        }else{
            console.log("ok");
        }
        if(worksNumber[2].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[2].classList.add("lost");
        }
        if(worksNumber[3].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[3].classList.add("lost");
        }
        if(worksNumber[4].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[4].classList.add("lost");
        }
    });
    worksList[2].addEventListener("click",()=>{
        if(worksNumber[0].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[0].classList.add("lost");
        }
        if(worksNumber[1].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[1].classList.add("lost");
        }
        if(worksNumber[2].classList.contains("lost") == true){
            worksNumber[2].classList.remove("lost");
        }else{
            console.log("ok");
        }
        if(worksNumber[3].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[3].classList.add("lost");
        }
        if(worksNumber[4].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[4].classList.add("lost");
        }
    });
    worksList[3].addEventListener("click",()=>{
        if(worksNumber[0].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[0].classList.add("lost");
        }
        if(worksNumber[1].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[1].classList.add("lost");
        }
        if(worksNumber[2].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[2].classList.add("lost");
        }
        if(worksNumber[3].classList.contains("lost") == true){
            worksNumber[3].classList.remove("lost");
        }else{
            console.log("ok");
        }
        if(worksNumber[4].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[4].classList.add("lost");
        }
    });
    worksList[4].addEventListener("click",()=>{
        if(worksNumber[0].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[0].classList.add("lost");
        }
        if(worksNumber[1].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[1].classList.add("lost");
        }
        if(worksNumber[2].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[2].classList.add("lost");
        }
        if(worksNumber[3].classList.contains("lost") == true){
            console.log("ok");
        }else{
            worksNumber[3].classList.add("lost");
        }
        if(worksNumber[4].classList.contains("lost") == true){
            worksNumber[4].classList.remove("lost");
        }else{
            console.log("ok");
        }
    });















}