let buttons =document.querySelectorAll(".numbuttons button");
let card2 = document.querySelector(".card2");
let card = document.querySelector(".card")
let span = document.querySelector("span");
// let submit = document.getElementsByClassName(".submit");
console.log(buttons)

Array.from(buttons).forEach(btns =>{
    btns.addEventListener("click",e =>{
        const rating = e.target.textContent
        span.textContent = rating;
        card2.classList.remove("hide")
        card.classList.add("hide")
    })
    
})