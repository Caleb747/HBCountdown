// ! for the countdown
function updateCountdown(targetDateTime) {
    const targetTime = new Date(targetDateTime).getTime();

    let timer = setInterval(function() {
      const now = new Date().getTime();
      let timeRemaining = targetTime - now;
  
      let daysRemaining = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
      let hoursRemaining = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      let minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
      let secondsRemaining = Math.floor((timeRemaining % (60 * 1000)) / 1000);
  
      document.getElementById('time').innerHTML = `${daysRemaining}d ${hoursRemaining}hrs ${minutesRemaining}min ${secondsRemaining}sec <br> To See What Is HERE`;

  
      if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById('time').innerHTML = "Countdown complete!";
        alert("Time is up \nLet's go")
        window.location.href = "firework/index.html"
      }
    }, 1000);

    
  }
  
  // Example: Start the countdown to January 15, 2024, at 12:30 PM
  updateCountdown("2024-01-16T02:54:00");

function fun() {
    document.getElementById("backgroundSong").play()
    document.getElementById("timer").style.display = "flex"
    document.getElementById("bt").style.display = "none"
    prompt("Hello Lawrencia")
    alert("I'm box \nI'm here to assist you \nIf you have any question please ask Caleb")
    setTimeout(() => {
      confirm(`Time is not yet up \nYou can wait and listen to the background music or \nYou can come back later (Use the same link to come back) `)
    }, 3000);
    
}

function ver() {
  let phoneSize = window.innerWidth
  if(phoneSize > 360 || phoneSize < 360){
    window.location.href = "end.html"
  }
}
ver()








