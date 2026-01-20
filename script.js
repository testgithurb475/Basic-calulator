let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
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

function percentage() {
  if (display.value !== "") {
    display.value = eval(display.value) / 100;
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}