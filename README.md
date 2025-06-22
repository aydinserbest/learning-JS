# JavaScript Learning Snippets

## 🧠 Project Overview

This repository contains a curated collection of beginner-friendly **JavaScript code snippets** written as part of a hands-on learning process.  
Each example is written in plain JavaScript and focuses on core concepts such as variables, functions, strings, operators, user input, and logic building.

All examples are organized in the `examples/` folder and loaded via a single `index.html` file for browser-based testing using **Live Server**.

---

## 📁 Project Structure

```
learning-JS/
├── index.html                      # HTML file to load and test snippets
├── loveScore.html                 # UI-based love score calculator (HTML)
└── examples/                       # JavaScript example files
    ├── bmiCalculator.js
    ├── capitalizeFunction.js
    ├── capitalizeNameInput.js
    ├── dogAgeCalculator.js
    ├── evenOddPromptCheck.js
    ├── functionIntro.js
    ├── greetingAlert.js
    ├── incrementDecrementExamples.js
    ├── lifeInWeeksCalculator.js
    ├── milkAndChangeCalculator.js
    ├── milkCalculatorWithObject.js
    ├── milkDeliveryPath.js
    ├── milkPurchaseCalculator.js
    ├── modularMilkCalculator.js
    ├── modulusAndEvenOddCheck.js
    ├── stringCaseConversion.js
    ├── stringLengthProperty.js
    ├── stringSliceExamples.js
    ├── tweetLengthChecker.js
    ├── validatedDogAgeCalculator.js
    ├── validatedSumOfTwoNumbers.js
    ├── loveScoreWithNumberGeneration.js
    ├── numberGeneration.js
    
```

---

## 💡 Topics Covered

- Variables and data types  
- String methods (`slice`, `length`, `toUpperCase`, `toLowerCase`, etc.)  
- Arithmetic operations and modulus usage  
- Conditional logic and control flow (`if`, `while`)  
- User interaction with `prompt()` and `alert()`  
- Functions with parameters and return values  
- Object return patterns  
- Input validation using `isNaN()`  
- Use of `Math.floor()`, `Math.pow()`, and other built-in methods  
- **Random number generation with `Math.random()`**  
- **Building interactive HTML + JavaScript projects (e.g., love score calculator)**    

---

## 🚀 How to Run Locally

> All examples are designed to run in a **browser environment** using `Live Server`.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/learning-JS.git
cd learning-JS
```

### 2. Open in VS Code and Run Live Server

- Open the project folder in VS Code  
- Make sure [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is installed  
- Right-click `index.html` → **"Open with Live Server"**

### 3. Enable a Snippet You Want to Run

In `index.html`, go to the `<script>` section. Uncomment the script you want to test:

```html
<!-- Active -->
<script src="examples/greetingAlert.js"></script>

<!-- Inactive -->
<!-- <script src="examples/bmiCalculator.js"></script> -->
<!-- <script src="examples/capitalizeFunction.js"></script> -->
```

Only one snippet should be active at a time to avoid prompt/alert overlap.

---

## ✨ Sample Snippets

### `bmiCalculator.js`

```js
function bmiCalculator(weight, height) {
  return Math.round(weight / Math.pow(height, 2));
}
console.log(bmiCalculator(65, 1.8)); // → 20
```

---

### `capitalizeFunction.js`

```js
function capitalize(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
}
const input = prompt("What is your name?");
alert("Hello, " + capitalize(input));
```

---

### `numberGeneration.js`

```js
var n = Math.floor(Math.random() * 6) + 1;
console.log(n); // → 1 to 6 (like a dice roll)
```

---

## 📌 Notes

- This is a **learning project** built with plain JavaScript.  
- No build tools, no dependencies — just `.html` and `.js` files.  
- Examples with `prompt()` and `alert()` must be run in a **browser**, not Node.js.

---
