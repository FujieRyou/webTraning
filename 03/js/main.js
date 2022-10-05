const apiData = document.querySelector(".API__data")
const user = document.querySelector(".user")
const apiBtn = document.querySelectorAll(".API__btn")
console.log(apiBtn);
const url = "https://jsonplaceholder.typicode.com/posts";


// for(let i = 0;i <= apiBtn.length;i++){
//     apiBtn[i].addEventListener(("click",()=>{
//         console.log();
//     }))
// }

apiBtn.forEach((e,i) =>{
    console.log(i);
    e.addEventListener("click",()=>{
        apiData.innerHTML = ``
        if(i === 0){
            fetch(url + `?id=1&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9&id=10`)
            .then(res => res.json())
            .then(data => {
                data.forEach((e,i)=>{
                    apiData.innerHTML +=`
                    <div class="user">
                    <h2>${e.id}</h2>
                    <p>${e.title}</p>
                    </div>
                    `
                })
            })
        }else{
            fetch(url + `?id=${i}1&id=${i}2&id=${i}3&id=${i}4&id=${i}5&id=${i}6&id=${i}7&id=${i}8&id=${i}9&id=${i+1}0`)
            .then(res => res.json())
            .then(data =>{
                data.forEach((e,i)=>{
                    apiData.innerHTML +=`
                    <div class="user">
                    <h2>${e.id}</h2>
                    <p>${e.title}</p>
                    </div>
                    `
                })
            })
        }
    })
})



fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    // data.forEach(element => {
    //     console.log(element.id);
    //     user.innerHTML += `<h2> ${element.id} </h2>`
    //     user.innerHTML += `<p> ${element.title} </p>`
    // });

    data.forEach(element => {
    });

})






