const input = document.getElementById("input");
const btn = document.getElementById("Submit");
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const min=1;
const max=6;
btn.onclick = function(){
    let n=input.value;
    // console.log(n);
    // document.getElementById("result1").textContent = n;
    let answer = [];
    let img = [];
    let sum=0;
    for(let i=1;i<=n;i++){
        let num=Math.floor(Math.random()*(max-min)+min);
        sum=sum+num;
        answer.push(num);
        img.push(`<img src="img/Alea_${num}.png" >`)
    }
    result1.textContent = `dice: ${answer} sum = ${sum}`;
    result2.innerHTML = img;
    for(let i=0;i<n;i++){
        
    }
    console.log(...answer);
}