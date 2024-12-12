
function updatetime(){
    const time = new Date();
    const hour = time.getHours().toString().padStart(2,0);
    const min = time.getMinutes().toString().padStart(2,0);
    const sec = time.getSeconds().toString().padStart(2,0);
    const ctime = hour+":"+min+":"+sec;
    console.log(ctime);
    
    document.getElementById("clock").textContent=ctime
}

updatetime();
setInterval(updatetime,1000);