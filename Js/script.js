let order = [];
let clickkedOrder = [];
let score = 0;

/*
    0 - VERDE
    1 - VERMELHO
    2 - AMARELO
    3 - AZUL
*/

const blue = document.querySelector('Blue');
const red = document.querySelector('red');
const yellow = document.querySelector('yellow');
const green = document.querySelector('green');

let shuffleOrder = () => {
    let colorOrder = Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementeColor = creaateElement(order[i]);
        lightColor(elementeColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout{() => {
        number.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}