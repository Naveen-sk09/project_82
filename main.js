var me="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=5;
canvas.addEventListener("mousedown",md);
function md(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    
}
canvas.addEventListener("mousemove",mv);
function mv(e){
    currentx = e.clientX-canvas.offsetLeft;
currenty = e.clientY- canvas.offsetTop;
if (me=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
lastx=currentx;
lasty=currenty;
}
canvas.addEventListener("mouseup",mu);
function mu(e){
    me="mouseup";
}
canvas.addEventListener("mouseLeave",ml);
function ml(e){
    me="mouseLeave";
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
