// let num=0;
// document.getElementById("decrease").onclick = function(){
//     num=num-1;
//     document.getElementById("zero").textContent = num;
// }
// document.getElementById("reset").onclick = function(){
//     num=0;
//     document.getElementById("zero").textContent = num;
// }
// document.getElementById("increase").onclick = function(){
//     num=num+1;
//     document.getElementById("zero").textContent = num;
// }
 
const D = document.getElementById("decrease");
const R=document.getElementById("reset");
const I=document.getElementById("increase");
let num=0;
D.onclick = function(){
    num=num-1;
    document.getElementById("zero").textContent = num;
}
R.onclick = function(){
    num=0;
    document.getElementById("zero").textContent = num;
}
I.onclick = function(){
    num=num+1;
    document.getElementById("zero").textContent = num;
}