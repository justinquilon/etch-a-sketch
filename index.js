const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.querySelectorAll(".tile").forEach((e) => e.remove());
  let number = prompt(
    "Please enter the number of Grid. Note: Not more than 100"
  );
  if (number < 1 || number > 100) {
    alert("Invalid Number! (Choose from 1 to 100)");
    console.log("Invalid Number");
  } else {
    createGame(number);
  }
});

const createGame = (gridNumber) => {
  const gridSize = gridNumber * gridNumber;

  container.setAttribute(
    "style",
    `width: ${10 * gridNumber}px; height: ${10 * gridNumber}px`
  );
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("tile");
    div.addEventListener("mouseover", () => {
      const color = ["#FFA62F", "#FFC96F", "#FFE8C8", "#ACD793"];
      div.setAttribute(
        "style",
        `background-color: ${color[Math.floor(Math.random() * 4)]}`
      );
    });
    container.appendChild(div);
  }
};

createGame(16);
