function solve() {
  const button = document
    .querySelector(".btn")
    .addEventListener("click", checker);

  const para = document.querySelector(".text");

  function checker(e) {
    const word = e.target.parentElement.children[0].value;

    const reversed = word.split("").reverse().join("");
    console.log(reversed);
    if (word === reversed) {
      para.textContent = "True, the added word is a palindrome";
    } else {
      para.textContent = "False, the added word is not a palindrome";
    }
  }
}
