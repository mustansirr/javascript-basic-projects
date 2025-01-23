const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const background = document.querySelector('body');
const button = document.getElementById('btn');
const hexText = document.querySelector('.color');
button.style.backgroundColor = "white";
button.style.color = "black";
button.addEventListener('click', (e) => {
    const randomColor = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[randomColor];
    hexText.textContent = colors[randomColor];
})  