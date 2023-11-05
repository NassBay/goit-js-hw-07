function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
