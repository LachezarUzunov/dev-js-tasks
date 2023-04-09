function solve() {
  document
    .querySelector(".first__input")
    .addEventListener("click", onFirstSelect);

  document
    .querySelector(".second__input")
    .addEventListener("click", onSecondSelect);

  const firstSpan = document.querySelector(".if");
  const secondSpan = document.querySelector(".so");

  function onFirstSelect(e) {
    if (e.target.value === "f_true") {
      firstSpan.textContent = "Ако ме изберат за премиер";
    } else {
      firstSpan.textContent = "Ако не ме изберат за премиер";
    }
  }

  function onSecondSelect(e) {
    if (e.target.value === "s_true") {
      secondSpan.textContent = "ще построя магистрала";
    } else {
      secondSpan.textContent = "няма да построя нова магистрала";
    }
  }
}
