const min=1;
const max=10;
let ans = Math.floor((Math.random()*(max-min))+min);
console.log(ans)
let input;
do{
    input=window.prompt(`Enter number b/w ${min} and ${max}`);
    if(isNaN(input) || input<min || input >max){
        console.log(`enter vlaid number`);
    }
    if(input>ans){
        console.log("answer is smaller than your anwer")
    }else if(input<ans){
        console.log(`number is gratter than your answer`)
    }
}while(input!=ans)
console.log("you win")