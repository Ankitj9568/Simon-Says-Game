let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let hScore=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        else{
            
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="rgb(216, 187, 191)";
            },200);
            reset();
        }
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    if(hScore<=level){
        hScore=level;
        h2.innerHTML=`Game over!Your score is <b>${level}</b> <br>Your highest score is <b>${hScore}</b> <br>Press any key to reset.`;
    }
    else{
        h2.innerHTML=`Game over!Your score is <b>${level}</b> <br>Your highest score is <b>${hScore}</b> <br>Press any key to reset.`; 
    }
    gameSeq=[];
    userSeq=[];
    level=0;
}
