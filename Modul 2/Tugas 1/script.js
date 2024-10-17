let displayValue = "";
let lastInputWasOperator = false;

function appendNumber(number) {
  if (displayValue === "0" && number !== ".") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  lastInputWasOperator = false; // Angka baru, bukan operator
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === "") return; // Jangan tambahkan operator di awal

  if (lastInputWasOperator) {
    // Jika input sebelumnya adalah operator, ganti operator terakhir
    displayValue = displayValue.slice(0, -3) + ` ${operator} `;
  } else {
    // Tambahkan operator baru dengan spasi di kiri dan kanan
    displayValue += ` ${operator} `;
  }

  lastInputWasOperator = true; // Tandai bahwa input terakhir adalah operator
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  lastInputWasOperator = false;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = formatNumber(displayValue) || "0";
}

function formatNumber(value) {
  // Pisahkan bagian angka dan operator untuk pemformatan angka
  return value
    .split(" ")
    .map((part) => {
      // Jika bagian tersebut adalah angka, format dengan pemisah ribuan
      return !isNaN(part) && part !== ""
        ? Number(part).toLocaleString("id-ID")
        : part;
    })
    .join(" ");
}

function calculate() {
  try {
    // Ganti simbol pangkat dengan operator Javascript
    let expression = displayValue.replace(/\^/g, "**");

    // Evaluasi ekspresi
    let result = eval(expression);

    // Tampilkan hasil
    displayValue = result.toString();
    lastInputWasOperator = false; // Hasil bukan operator
    updateDisplay();
  } catch (error) {
    alert("Ekspresi tidak valid");
  }
}
