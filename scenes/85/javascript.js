var randomRock;
let spaceW;
let spaceH;
var rockAmount;
rockAmount = 3;
function playAudio(audioClip) {
    new Audio(audioClip).play();

}

function remove($this) {
  var element = $this;
  var modal = document.getElementById("myModal");
  if(this == 'randomRock'){

  } else{
    rockAmount--;
  }
  element.remove();
  if (rockAmount == 0) {
    document.getElementById("speech").src = "./assets/speechBubble2.svg";
    playAudio('./assets/yippee-tbh.mp3')
    modal.style.display = "block";
  }

}

function Init(){
  spaceW = document.getElementById("background").height;
  spaceH = document.getElementById("background").width;
  document.getElementById("randomRock").style.top = Math.floor(Math.random() * spaceH) + "px";
  randomRock.style.left = Math.floor(Math.random() * spaceW) + "px";
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}