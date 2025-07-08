const btn = document.querySelector(".button")
const main = document.querySelector(".main")


const popUp = document.querySelector(".modal")
btn.addEventListener("click", ()=>{
    popUp.style.display = "block";
})


const crossBtn = document.querySelector(".cross")
crossBtn.addEventListener("click", ()=>{
    popUp.style.display = "none";
})
