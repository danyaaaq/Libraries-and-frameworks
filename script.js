const keys = ["a", "s", "d", "f", "j", "k", "l", "q", "w", "e"];
let currentKeyIndex = 0;
const keyElement = document.querySelector("#key");
const newGameButton = document.querySelector("#new-game-btn");
keyElement.textContent = keys[currentKeyIndex];
document.addEventListener("keydown", event => {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    PNotify.success({
      text: "правильно",
      delay: 1000,
    });
    if (currentKeyIndex >= keys.length) {
      keyElement.textContent = "завершено";
      return;
    }
    keyElement.textContent = keys[currentKeyIndex];
  } else {
    PNotify.error({
      text: "x",
      delay: 1000,
    });
  }
});
document.addEventListener("keypress", event => {
  event.preventDefault();
});
newGameButton.addEventListener("click", () => {
  currentKeyIndex = 0;
  keyElement.textContent = keys[currentKeyIndex];
  PNotify.info({
    text: "заново",
    delay: 1000,
  });
});