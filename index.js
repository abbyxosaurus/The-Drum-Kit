var numberOfButtons = document.querySelectorAll(".drum").length;
// detecting random beats
document.querySelector(".random-beat").addEventListener("click", function(){
  this.classList.add("pressed-beat-generator");
  let numberOfRandomBeats = 30;
  let randomPlayer = setInterval(function(){
    const randomNoteArrayIndex = Math.floor(
      Math.random() * (numberOfButtons + 1)
    );
    const selectedNote = document.querySelectorAll("button")[randomNoteArrayIndex];

    makeSound(selectedNote.innerHTML);
    buttonAnimation(selectedNote.innerHTML);

    numberOfRandomBeats--;

    if (numberOfRandomBeats === 0){
      clearInterval(randomPlayer);
      this.classList.remove("pressed-beat-generator");
    }
  }, 120);
});

// to detect which button has been clicked
for (var i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
// to detect key presses frm the keyboard
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(buttonInnerHtml);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
