var wordcontainer = document.querySelector(".wordcontainer");
var startgame = document.querySelector("#startGame");
var listEl = document.querySelector("#boxs");
var timerEl = document.getElementById('time');

var word = 'millisecond';
var words = word.split('');

startgame.addEventListener("click", countdown);


for (var i = 0;i<words.length;i++){ 
    createBox(i);
} 

document.addEventListener('keydown', function (event){
  for (var i = 0;i<words.length;i++){ 
    if(event.key == words[i] || event.key == words[i].toUpperCase() )
      putletter(words[i],i); 
  } 
});



function createBox(idname){ 
    var div = document.createElement("div");//element 
    div.setAttribute("id" , idname);
    div.setAttribute("class" , "box"); 
    listEl.appendChild(div); 
    var btn = document.createElement("button");
    btn.innerHTML = "Submit";
    btn.type = "submit";
    btn.name = "formBtn";
    document.body.appendChild(btn);
} 

function putletter(singleword,idname){ 
  var div = document.getElementById(idname);
  div.textContent = singleword; 
} 

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  timerEl.textContent = "times is over";
}

