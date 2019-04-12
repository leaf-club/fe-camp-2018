//取得dom（document、object、modal）元素
var btn=document.getElementById("btn");
var mask=document.getElementById("mask");
var confirm= document.getElementById("confirm");
var cance =document.getElementById("cancel");
var modal=document.getElementById("wrapper");
var X=document.getElementById("X");

btn.onclick=function(){
    modal.classList.add("show");/*不直接改变样式，而是把改变的样式写进一个类里面，然后在js中加进去*/
    mask.style.display="block";/*直接改变样式*/
}
confirm.onclick=function(){
    modal.classList.remove("show");
    mask.style.display="none";
}
cancel.onclick=function(){
    modal.classList.remove("show");
    mask.style.display="none";
}
X.onclick=function(){
    modal.classList.remove("show");
    mask.style.display="none";
}

