//timer

let time = 1500; //25 mins
let timer = null;
let running = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const catImg = document.getElementById("cat-img");

function updateTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// initial state
updateTime();
catImg.src = "awake-cat-removebg-preview.png";

function startTimer() {
  if (running) return;

  running = true;
  catImg.src = "Sleeping_cat.png";

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateTime();
    } else {
      clearInterval(timer);
      running = false;
      catImg.src = "awake-cat-removebg-preview.png";
    }
  }, 1000);
}

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

//todo

const addTaskBtn = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(checkbox);
  li.appendChild(span);
  todoList.appendChild(li);

  taskInput.value = "";
}

//theme

const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  document.body.style.backgroundColor = color;
  
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (brightness < 128) {
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.color = "#000000";
  }
});
