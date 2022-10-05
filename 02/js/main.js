const uploadFile = document.querySelector(".js-upload-file")
console.log(uploadFile);

const plfImg = document.querySelector(".plfImg")
console.log(plfImg);

uploadFile.addEventListener("click",()=>{
    console.log(uploadFile.value);
})

uploadFile.addEventListener("change",(e)=>{
    const reader = new FileReader();
    reader.onload = function(e){
        plfImg.setAttribute("src",e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
})

