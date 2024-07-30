var bottom = document.querySelector(".bottom");
var hitnum=0;
var score=0;
var tl=gsap.timeline();
var loading = document.querySelector(".loader")
var start = document.querySelector(".rules button");
// var sfxbtn = document.querySelector(".rules #sfx");
var restart =document.querySelector(".elem #restart");
const audioStart = new Audio("assets/start.wav");
const audioLose = new Audio("assets/lose.wav");
const audioClick = new Audio("assets/bubbleclick.wav");
const bgm = new Audio("assets/bgm.wav");    
    bgm.play();



// window.onloadstart.playbgm();






restart.addEventListener("click",function(){
    bgm.play();
    location.reload(true);
})

start.addEventListener("click",function(){
    audioStart.play()
    loading.innerHTML=``;
    timer();
    loader();
})


function loader(){
    bgm.play();
    tl.to(".loader h1",{
        scale:1,
        opacity:0,
        duration:1,
    })
    tl.to(".rules h2",{
        scale:1,
        opacity:0,
        delay:-2,
        duration:1,
    })
    tl.to(".rules button",{
        scale:1,
        opacity:0,
        delay:-2,
        duration:1,
    })

    tl.to(".loader",{
        height:"0%",
        duration:1.5,
        ease: "power4",
    })
    
}



function randomBubbles(){
    var clutter= "";
    for(var i=0;i<208;i++){
        clutter +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    bottom.innerHTML=clutter;
    
};

function timer(){
    var timer =61;
    var stop = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(stop);
            audioLose.play()
            bottom.innerHTML=`<h1>Game Over</h1>`;

        }
       
    },1000)
}

function Hit(){
    hitnum=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent= hitnum;

}

function mechanism(){
    bottom.addEventListener("click", function(find){
        var getbubble = Number(find.target.textContent);
        if(hitnum===getbubble){
            audioClick.play()
            Hit();
            randomBubbles();
            increaseScore();

        }
    })
}

function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

mechanism();
Hit();

randomBubbles();