// code here, goodluck!!
"use strict";

// ===============================
// Challenge 3: Interactive Calculator & Data Analyzer
// ===============================

const prompt = require("prompt-sync")({ sigint: true });

// Fungsi untuk validasi input angka ===

function getValidNumberInput(promptMessage) {
  while (true) {
    const input = prompt(promptMessage);
    const number = Number(input);

    if (!isNaN(number)) {
      return number;
    } else {
      console.log("Input tidak valid. Masukkan angka yang benar.");
    }
  }
}

// Fungsi untuk validasi operator ===

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  while (true) {
    const operator = prompt(promptMessage).trim();
    if (validOperators.includes(operator)) {
      return operator;
    } else {
      console.log(
        "Operator tidak valid. Gunakan salah satu: +, -, *, /, %, **"
      );
    }
  }
}

// Fungsi aritmatika dasar ===

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// Program utama kalkulator ===

while (true) {
  console.log("\n=== Kalkulator Interaktif ===");

  // Input angka & operator
  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const operator = getValidOperatorInput(
    "Masukkan operator (+, -, *, /, %, **): "
  );
  const num2 = getValidNumberInput("Masukkan angka kedua: ");

  // Hitung berdasarkan operator ===
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  console.log(`\n Hasil: ${result}`);

  // Analisis tipe data & nilai hasil ====

  if (typeof result === "number") {
    // Positif, negatif, nol
    if (result > 0) console.log("Angka positif");
    else if (result < 0) console.log("Angka negatif");
    else console.log("Angka nol");

    // Integer atau float
    if (Number.isInteger(result)) console.log("Bilangan bulat");
    else console.log(" Bilangan desimal");

    // Genap atau ganjil (hanya kalau integer)
    const evenOdd = Number.isInteger(result)
      ? result % 2 === 0
        ? "Genap"
        : "Ganjil"
      : "Tidak bisa ditentukan (desimal)";
    console.log(` Jenis: ${evenOdd}`);

    // Contoh penggunaan logical operators
    if (result > 0 && result % 2 === 0) {
      console.log("Angka ini positif DAN genap!");
    }
  } else if (typeof result === "string") {
    console.log(`Pesan error: ${result}`);
  } else {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  // Tanya apakah mau lanjut ====

  const again = prompt("\nIngin menghitung lagi? (yes/no): ").toLowerCase();
  if (again === "no") {
    console.log("Terima kasih sudah menggunakan kalkulator ini!");
    break;
  }
}
