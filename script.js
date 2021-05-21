let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os botoes são os mesmos
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 200)
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// para quem perdeu
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\n Clique INICIAR para jogar novamente.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    //alert('Bem-vindo ao Genius. Iniciando novo jogo');
    score = 0;
    order = [];

    nextLevel();
}

//green.addEventListener('click', click(0));
//red.addEventListener('click', click(1));
//yellow.addEventListener('click', click(2));
//blue.addEventListener('click', click(3));

//eventos de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//playGame();