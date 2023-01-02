function diceroll() {
    const gifElement = document.querySelector('#gif1');
    const button = document.querySelector('#rollbut');
    const mincePie = Math.floor(Math.random() * 20) + 1;

    button.style.display = 'none';

    gifElement.setAttribute('src', `img/gif/D20_${mincePie}.gif`);

    setTimeout(() => {
        button.style.display = 'block';
    }, 2000);
}
