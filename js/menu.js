const back = document.querySelector(".back")
const menu = document.querySelector(".menu-navegacion")
const gt = document.querySelector(".gt")
console.log(menu)
console.log(back)

back.addEventListener("click",()=>{
    menu.classList.toggle("spread")
})
window.addEventListener("click",e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != back){
        menu.classList.toggle("spread")
    }
})
gt.addEventListener("click",()=>{
    gt.classList.toggle("gt2")
})

const check2 = document.querySelector(".lenguageES")
check2.addEventListener("click",()=>{
    if(check2.classList!=="lenguageEN"){
        location.href="index.html"}
    
})


   