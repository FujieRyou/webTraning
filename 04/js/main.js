const apiData = document.querySelector(".api_data")
console.log(apiData);

const apiBtn = document.querySelector(".api_btn")
console.log(apiBtn);

const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";

fetch(url)
.then(res => res.json())
.then(data => {
    apiData.innerHTML = ""
    data.forEach((e,i) => {
        apiData.innerHTML += `
        <div class="api_data__content">
            <p>${e.title}</p>
            <img src="${e.thumbnailUrl}">
        </div>
        `;
        let apiDataContent = document.querySelectorAll(".api_data__content")
        console.log(apiDataContent);
        apiDataContent.forEach((c,i) =>{
            console.log(i);
            c.animate({
                opacity: [0,1],
            },{
                delay: 100 * i,
                duration: 500,
                fill:"forwards"
            })
        })
    });
})



