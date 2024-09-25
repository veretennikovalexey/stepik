document.getElementById("button_del").addEventListener("click", function () {
  let x = parseFloat(document.getElementById("inputX").value);
  let y = parseFloat(document.getElementById("inputY").value);

  let result = x / y;
  document.getElementById("span_del").textContent = result;
});

document.getElementById("button_rest").addEventListener("click", function () {
  let x = parseFloat(document.getElementById("inputX").value);
  let y = parseFloat(document.getElementById("inputY").value);

  let result = x % y;
  document.getElementById("span_rest").textContent = result;
});

document
  .getElementById("button_multiplication")
  .addEventListener("click", function () {
    let x = parseFloat(document.getElementById("inputX").value);
    let y = parseFloat(document.getElementById("inputY").value);

    let result = x * y;
    document.getElementById("span_multiplication").textContent = result;
  });

document.getElementById("button_minus").addEventListener("click", function () {
  let x = parseFloat(document.getElementById("inputX").value);
  let y = parseFloat(document.getElementById("inputY").value);

  let result = x - y;
  document.getElementById("span_minus").textContent = result;
});

document.getElementById("calculateBtn").addEventListener("click", function () {
  let x = parseFloat(document.getElementById("inputX").value);
  let y = parseFloat(document.getElementById("inputY").value);

  let sum = x + y;
  document.getElementById("result").textContent = sum;
});
