const showCount = document.getElementById('showCount');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');

decrease.addEventListener('click', () => {
    showCount.innerText = Number(showCount.innerText) - 1;
});

increase.addEventListener('click', () => {
    showCount.innerText = Number(showCount.innerText) + 1;
}
);

reset.addEventListener('click', () => {
    showCount.innerText = 0;
});