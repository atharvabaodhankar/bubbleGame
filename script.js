function createBubble() {
  var bubbleArr = "";

  for (var i = 1; i <= 100; i++) {
    let RandomInt = Math.floor(Math.random() * 10);
    bubbleArr += `<span class="bubble">${RandomInt}</span>`;
  }
  document.querySelector("#lower").innerHTML = bubbleArr;
}

function Timer() {
  let TimerBox = document.querySelector("#timeBox");
  let t = 60;
  var timeFunction = setInterval(() => {
    if (t > 0) {
      t--;
      TimerBox.textContent = t;
    } else {
        clearInterval(timeFunction);

        document.querySelector("#lower").style.justifyContent = "center";
        document.querySelector("#lower").style.flexDirection = "column";
        document.querySelector("#lower").innerHTML = `<h1>GAME OVER</h1> <br> <h1>Score : ${score}</h1>  <button class="button" onclick="location.reload()" >Restart</button>`;
       
    }
  }, 1000);
}
var hitInt = 0;
function newHit()
{
    hitInt = Math.floor(Math.random() * 10);
    document.querySelector("#hitBox").textContent = hitInt;
}
var score = 0;
function increaseScore()
{
    score++;
    document.querySelector("#scoreBox").textContent = score;

}

document.querySelector("#lower").addEventListener("click",(dets)=> {
    let tempNum = parseInt(dets.target.textContent);
    if (tempNum == hitInt)
    {
        increaseScore();
        newHit();
        createBubble();
    }
})


document.querySelector("#startBtn").onclick = () => {
    document.querySelector("#lower").innerHTML = "";
    createBubble();
    Timer();
    newHit();
}


