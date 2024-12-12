function genrate ( length, lowerpresent, upperpresent, symbolopresent, numberpresent){
    let upper="abcdefghijklmopqrstuvwxyz";
    let lower = "ABCDEFGHIJKLMNOPQRSHUVWXYZ";
    let symbol = "!@#$";
    let number = "1234567890";
    let posible ="";


    posible += Lowerpresent ? upper :"";
    posible += upperpresent ? lower :"";
    posible += symbolopresent ? symbol :"";
    posible += numberpresent ? number :"";

    if(length == 0){
        console.log("the length is zero.");
    }
    let password = "";
    for(let i=0 ; i<length ; i++){
        let ch = posible[Math.floor(Math.random()*posible.length)];
        password=password+ch;
    }
    console.log(password);
    // console.log(posible);
}


const Length = 5;
const Lowerpresent = true;
const Upperpresent = true;
const Symbolopresent = true;
const Numberpresent = true;
genrate( Length, Lowerpresent, Upperpresent, Symbolopresent ,Numberpresent);
