let boxesBtn = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winAnnounce = document.querySelector("h2");
let newGameBtn = document.querySelector(".new-btn");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showWinner = (winner, DisableBtn) => {
  winAnnounce.innerText = `Congratulations, Winner is ${winner}`;
  for (const btn of DisableBtn) {
    btn.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxesBtn[pattern[0]].innerText;
    let pos2val = boxesBtn[pattern[1]].innerText;
    let pos3val = boxesBtn[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val, boxesBtn);
      }
    }
  }
};

boxesBtn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  winAnnounce.innerText = "";
  turnO = true;
  for (let btn of boxesBtn) {
    btn.innerText = "";
    btn.disabled = false;
  }
});
