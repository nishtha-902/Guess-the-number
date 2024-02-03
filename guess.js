let btn=document.querySelector(".btn")
let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
let btn3=document.querySelector(".btn3")
let msg=document.querySelector(".msg")
let input=document.querySelector("input")
let cnt=0
let randomno=Math.floor(Math.random()*101)
btn.addEventListener("click",function call(){
    

    if(input.value==randomno){
        btn1.innerText="Hurray !! You guessed it. Check your score"
        btn2.classList.remove("hide")
    }
    else if(input.value>randomno){
        btn1.innerText="Your number is bigger, please try again"
        cnt++
    }
    else if(input.value<randomno){
        btn1.innerText="Your number is smaller, please try again"
        cnt++
    }
})

btn2.addEventListener("click",()=>{
    btn2.innerText=`Your score is ${100-cnt}`
})

btn3.addEventListener("click",()=>{
    btn2.innerText="SCORE"
    btn1.innerText="Number must be range 1-100"
    input.value=""
    randomno=Math.floor(Math.random()*11)
    cnt=0
    btn2.classList.add("hide")
})