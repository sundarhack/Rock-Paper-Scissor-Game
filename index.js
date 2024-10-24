let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");

let user=document.querySelector(".user")
let machine=document.querySelector(".machine")

let winModal=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");

console.log(computer);

let play=document.querySelector(".play");

let random=Math.floor(Math.random()*3);

let ruleBtn=document.querySelector(".btn-rule")
let rulemodal=document.querySelector(".rule-modal");
let ruleimg=document.querySelector(".rule-img");


let computerScore = JSON.parse(localStorage.getItem("computerScore")) || 0;
let computerScoreElem = document.getElementById("computer-score");
computerScoreElem.innerText = computerScore;


let score=JSON.parse(localStorage.getItem("score"))
let scoreElem=document.getElementById("score");
if(score){
    scoreElem.innerText=score;
}

let count=0;


con.forEach((element, index) => {
    element.addEventListener("click", ()=> {
        user.style.opacity="1";
        con.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show")
        setTimeout(() => {
            machine.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display="block";
                computer[random].classList.add("right");

            }, 500);
           
        }, 500);

        setTimeout(() => {

            if(random==index){
                winModal.style.display="grid";
                winner.innerText="TIE UP"
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                winModal.style.display="grid";
                winner.innerText="YOU WIN";
                count=score;
                count++;
                scoreElem.innerText=count;
                localStorage.setItem("score", JSON.stringify(count));

            } else{

                winModal.style.display="grid";
                winner.innerText="YOU LOST";

                computerScore++; // Increment computer score
                computerScoreElem.innerText = computerScore; // Update display
                localStorage.setItem("computerScore", JSON.stringify(computerScore)); // Store it
            }
        }, 1500);
    })
});

play.addEventListener("click", ()=>{
    window.location.reload();
})


ruleBtn.addEventListener("click", ()=>{
    rulemodal.style.display="flex";
    setTimeout(() => {
        ruleimg.style.transform="translateY(0)";
    }, 500);
})

let close=document.querySelector(".close");
close.addEventListener("click", ()=>{
    ruleimg.style.transform="translateY(-200%)";
    setTimeout(() => {
        rulemodal.style.display="none";
    }, 400);
})