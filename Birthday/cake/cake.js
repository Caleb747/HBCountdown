alert("Let's make a cake for you \nHold on")
setTimeout(() => {
    alert("Your cake is ready! \nMake a wish \nTap OK when you are done ")
    
}, 9_000);

setTimeout(() => {
    let con = confirm("Your wish has been sent to heaven")
    if(con){
        window.location.href = "../birthdayCard/index.html"
    }
    
}, 11_000);
