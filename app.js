const guess = Math.floor(Math.random() * 101); //random number
var sum = 0;  //for attemps
const check = document.getElementById("check"); 
const reset = document.getElementById("reset");
const info = document.getElementById("info");
const span = document.getElementById("span");  //attemps info

check.addEventListener("click", e => {
 
    sum ++;   
    span.innerHTML = `Number of attemps : ${sum}`;
    
    while(true){
    
        const enterNumber = document.getElementById("number").value;
     
        
        if(enterNumber ==guess){  
            info.innerHTML="Congratulations...";
            break;
        }
        else if(enterNumber<guess){
            info.innerHTML="Enter larger number...";  
            break;

        }
        else if(enterNumber>guess){
            info.innerHTML = "Enter smaller number...";
            number.innerHTML = ""; 
            break;
        }
        
       
    }
   
});

reset.onclick = function() {
    location.reload();
}


