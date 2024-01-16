(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
  openB = $('open'),
  closeB = $('close'),
  timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();



const style = document.querySelector(".text p style");
const card = document.querySelector(".front face back face");


script = `
On this special day, I wish your heart as much joy as you have brought to mine.
You're an extraordinary soul, turning ordinary days into something remarkable ever unknowingly.
May this day fill your year with love, laughter and unforgettable moments.
May unexpected joys and delightful surprises find you as fast as light reaches an object.
A bottle of drink will do, cheer to celebrating you, the incredible person who is capturing my heart.
Happy Birthday, SEYIRAM LAWRENCIA.
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 90);


setTimeout(() => {
  alert("I wonder what is here \nTap on the small red square with white arrow")
}, 2000);

setInterval(() => {
  let readCard = prompt("Are you done reading?")

  switch (readCard.toLowerCase()) {
    case "yes":
      let con = confirm("Amazing!!! \nLet's see what is next")
      if(con){
        window.location.href = "../jelleyFishGame/index.html"
      }
      break;
    case "yh":
      alert("Amazing!!! \nLet's see what is next")
      window.location.href = "../jelleyFishGame/index.html"
      break;
    case "no":
      alert("I will ask you again in 50 seconds time \nKeep reading.")
      break;

  }
}, 52_000);