let display = document.getElementById("display");
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* Memory Functions */
function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.value += memory;
}

function memoryAdd() {
  memory += Number(display.value) || 0;
}

function memorySubtract() {
  memory -= Number(display.value) || 0;
}

/* Keyboard Support */
document.addEventListener("keydown", function(event) {
  if ((event.key >= 0 && event.key <= 9) || "+-*/.%()".includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  }
});
 
