const generateFood = () => {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
};

const board = document.getElementById('game-board');
let snake = [{ x: 10, y: 10 }];
const gridSize = 20;
let food = generateFood();
let direction = 'up';

const draw = () => {
  board.innerHTML = '';
  drawSnake();
  drawFood();
};

const drawSnake = () => {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
};

const createGameElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const setPosition = (element, position) => {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
};

const drawFood = () => {
  const foodElement = createGameElement('div', 'food');
  setPosition(foodElement, food);
  board.appendChild(foodElement);
};

const moveSnake = () => {
  const head = { ...snake[0] };
  switch (direction) {
    case 'right':
      head.x++;
      break;
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
  }
  snake.unshift(head);
  snake.pop();
};

setInterval(() => {
  moveSnake();
  draw();
}, 200);
