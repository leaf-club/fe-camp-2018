var wrap=document.querySelector(".wrapper");
var next=document.querySelector(".arrow_right");
var prev=document.querySelector(".arrow_left");

next.onclick=function(){
    next_pic();
}
prev.onclick=function(){
    prev_pic();
}


function next_pic(){
    var newLeft;

    if(wrap.style.left=="-1600px")
    {
        newLeft=0;
    }
    else
    {
        newLeft=parseInt(wrap.style.left)-400;
    }

    wrap.style.left = newLeft+"px";

    index++;
    if(index>4)
    {
        index=0;
    }

    showCurrentDot();
}

function prev_pic(){
    var newRight;
    if(wrap.style.left=="0px")
    {
        newRight=-1600
    }
    else
    {
        newRight=parseInt(wrap.style.left)+400;
    }
  
    wrap.style.left=newRight+"px";
    index--;
    if(index<0)
    {
        index=4;
    }

    showCurrentDot();
}


var timer=null;
function autoPlay(){
    timer=setInterval(function(){
        next_pic()
    },1000)
}
var container=document.querySelector(".container");
container.onmouseenter=function(){
    clearInterval(timer);
}
container.onmouseleave=function(){
    autoPlay();
}

var index=0;
var dots=document.getElementsByTagName("span");
function showCurrentDot(){
    for(var i=0,len=dots.length;i<len;i++)
    {
        dots[i].className="";
    }
    dots[index].className="on";
}



