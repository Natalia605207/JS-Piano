const pianoKeys = document.querySelectorAll(".key");
const keyName = document.querySelectorAll(".key-name");
volumeInput = document.querySelector("#volumeRange-input");
showKeysInput = document.querySelector("#showKeys-input");

let allKeys = [],
audio = new Audio(`assets/a.wav`);

const playSound = (key) => {
  audio.src = `assets/${key}.wav`;
  audio.play();

  const chosenKey = document.querySelector(`[data-key="${key}"]`); 
  chosenKey.classList.add("active"); 
  setTimeout(() => {
    chosenKey.classList.remove("active");
  }, 100);
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playSound(key.dataset.key));
});

const changeVolume = (e) => {
  audio.volume = e.target.value;
}

const showKeys = () => {
  keyName.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
  if(allKeys.includes(e.key)) playSound(e.key);
}

showKeysInput.addEventListener("click", showKeys);
volumeInput.addEventListener("input", changeVolume);
document.addEventListener("keydown", pressedKey);