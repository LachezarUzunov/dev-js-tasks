function solve() {
  const button = document
    .querySelector(".btn")
    .addEventListener("click", checker);

  const para = document.createElement("p");
  function checker(e) {
    const word = e.target.parentElement.children[0].value;

    const reversed = word.split("").reverse().join();

    if (word === reversed) {
      para.textContent = "True, the added word is a palindrome";
    } else {
      para.textContent = "False, the added word is not a palindrome";
    }
  }
}
