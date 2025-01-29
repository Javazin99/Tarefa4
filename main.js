function primary() {
    const title = document.getElementById('title');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    title.style.color = newColor;
}