// Counter
const increment = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const counterValue = document.querySelector(".counter span");
let count = 0;

increment.addEventListener("click", (e) => {
  count = counterValue.textContent++;
  console.log(count);
});
decrementBtn.addEventListener("click", decrement);
function decrement() {
  counterValue.textContent = count;
  count--;
}
reset.addEventListener("click", (e) => {
  counterValue.textContent = 0;
  count = 0;
  console.log(count);
});
