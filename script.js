// var submit = document.querySelector("button");
// submit.addEventListener("click", function(){
//     console.log("HI");
// })


const submission = document.querySelector("#main")
const response = document.querySelector(".response-page")

const rating_numbers = document.querySelectorAll(".numbers")
const response_rating = document.getElementById("response_rating")
const rating  = document.getElementById("rating")

const btn = document.querySelector("button")
var flag = 0


btn.addEventListener("click", function(){
    response.classList.remove("hidden")
    submission.style.display = "none"
    console.log(flag);
})


rating_numbers.forEach(function(onClickNumber){
    onClickNumber.addEventListener("click", function(){
        response_rating.innerHTML = onClickNumber.innerHTML
    })
})

