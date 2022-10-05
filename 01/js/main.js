const questionWrap = document.querySelectorAll(".questionWrap")
console.log(questionWrap);

const btnWrap = document.querySelectorAll(".btnWrap");
console.log(btnWrap);

const lastQuizEvent = document.querySelectorAll(".lastQuizEvent");
console.log(lastQuizEvent);

const resultWrap = document.querySelector(".resultWrap");
console.log(resultWrap);

const resultDisplay = document.querySelector(".resultDisplay");
console.log(resultDisplay);


const lastBtn = btnWrap[2].children;

let result = 0;

function quiz1(num){
    switch(num){
        case 8:
            console.log("不正解");
            questionWrap[0].classList.add("erase");
            questionWrap[1].classList.remove("erase");
            console.log(result);
        break;
        case 9:
            console.log("不正解");
            questionWrap[0].classList.add("erase");
            questionWrap[1].classList.remove("erase");
            console.log(result);
        break;
        case 10:
            console.log("正解");
            result ++;
            questionWrap[0].classList.add("erase");
            questionWrap[1].classList.remove("erase");
            console.log(result);
        break;
    }
}

function quiz2(name){
    switch(name){
        case 'まりん':
            console.log("不正解");
            questionWrap[1].classList.add("erase");
            questionWrap[2].classList.remove("erase");
            console.log(result);
        break;
        case 'まゆ':
            console.log("不正解");
            questionWrap[1].classList.add("erase");
            questionWrap[2].classList.remove("erase");
            console.log(result);
        break;
        case 'らん':
            console.log("正解");
            questionWrap[1].classList.add("erase");
            questionWrap[2].classList.remove("erase");
            result ++;
            console.log(result);
        break;
    }
}

for(let i = 0; i < lastQuizEvent.length; i++){
    lastQuizEvent[i].addEventListener("click",()=>{
            const time = setTimeout(()=>{
            result ++;
            console.log(result);
            console.log("合格"); 
            questionWrap[2].classList.add("erase");
            resultWrap.classList.remove("erase");
            resultDisplay.innerHTML = `${result}問正解！`
            },20000)
            lastBtn[0].addEventListener("click",()=>{
                clearTimeout(time)
                questionWrap[2].classList.add("erase");
                console.log("残念");
                resultWrap.classList.remove("erase");
                resultDisplay.innerHTML = `${result}問正解！`
            });
            lastBtn[1].addEventListener("click",()=>{
                clearTimeout(time)
                questionWrap[2].classList.add("erase");
                console.log("残念");
                resultWrap.classList.remove("erase");
                resultDisplay.innerHTML = `${result}問正解！`
            });
            lastBtn[2].addEventListener("click",()=>{
                clearTimeout(time)
                questionWrap[2].classList.add("erase");
                console.log("残念");
                resultWrap.classList.remove("erase");
                resultDisplay.innerHTML = `${result}問正解！`
            });
    })
}

