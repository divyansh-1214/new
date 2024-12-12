const input = document.getElementById("input");
const cf =document.getElementById("cf");
const fc =document.getElementById("fc");
const submit =document.getElementById("submit");

submit.onclick = function(){
    let temp = Number(input.value);
    if(cf.checked){
        let ans=(9/5*temp)+32;
        document.getElementById("result").textContent = ans;
    }else{
        let ans = (5/9)*(temp-32);
        document.getElementById("result").textContent = ans;
    }
}
