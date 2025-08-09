let time = 1500;
let timer;
let running = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const catImg = document.getElementById("cat-img");

function updateTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

catImg.src = "awake-cat-removebg-preview.png"

function startTimer() {
  if (!running) {
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateTime();
      } else {
        clearInterval(timer);
        running = false;
      }
    }, 1000);
    running = true;
    catImg.src = "Sleeping_cat.png";
  }
}

//got this part from gpt. please dont ask me
document.getElementById("color-picker").addEventListener("input", (e) => {
  const color = e.target.value;
  document.body.style.backgroundColor = color;

  // Calculate brightness to decide text color
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (brightness < 128) {
    document.body.style.color = "white"; // dark bg → light text
  } else {
    document.body.style.color = "black"; // light bg → dark text
  }
});


function pauseTimer() {
  clearInterval(timer);
  running = false;
  catImg.src = "awake-cat-removebg-preview.png";
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  updateTime();
  running = false;
  catImg.src = "awake-cat-removebg-preview.png";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

document.getElementById("add-task").addEventListener("click", () => {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" /> ${taskText}`;
    document.getElementById("todo-list").appendChild(li);
    taskInput.value = "";
  }
});

document.getElementById("color-picker").addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});
