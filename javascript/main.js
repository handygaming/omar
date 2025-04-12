let age = document.querySelector("span");
setTimeout(function(){
    let count = setInterval(() => {
        if(age.textContent != 16){
            age.textContent++;
        }else{
            clearInterval(count)
        }
    }, 100);
},2000)