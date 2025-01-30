
let gameSeq = [];
let userSeq = [];
let btns =["red", "yellow","green","skyblue"];
let h3 = document.querySelector("h3");
let start = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game started");
        start = true;
        levelUp();
    }

});
function gameFlash(btn){
            btn.classList.add("flash");
            setTimeout(function(){
            btn.classList.remove("flash");
            },250);
}
function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
        btn.classList.remove("userflash");
        },250);
    }
    

function levelUp(){
    userSeq =[];
    level++;
            h3.innerText = `Level ${level}`;

            let randIdx = Math.floor(Math.random()*3);
            let randcolor = btns[randIdx];
            let randBtn = document.querySelector(`.${randcolor}`);
            gameSeq.push(randcolor);
            console.log(gameSeq);
            gameFlash(randBtn);
}
function checkAns(Idx){
         
          
                if(userSeq[Idx] === gameSeq[Idx]){
                    if(userSeq.length === gameSeq.length){
                       setTimeout(levelUp,1000);
                       
                    }
                   
                }else{
                   h3.innerHTML = `Game Over Your Score was <b> ${level} </b> <br>Press any key to start.`;
                   document.querySelector("body").style.backgroundColor ="red";
                   setTimeout(function(){
                    document.querySelector("body").style.backgroundColor = "white";
                   },1000);
                 
                   Reset();
                }

        };


function btnpress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnpress);
}

function Reset(){
    start = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}
