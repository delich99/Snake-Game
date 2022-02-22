import { update as updateSnake,
         draw as drawSnake,
         snakeSpeed,
        getSnakeHead,
        snakeIntersection } from '/snake.js';
import { outsideGrid } from '/grid.js'
let lastRenderTime = 0;
let gameOver = false;
const playBoard = document.getElementById('playBoard')
import { update as updateFood, draw as drawFood } from "./food.js";

//imported functions from snake.js
function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    playBoard.innerHTML = ''
    drawSnake(playBoard)
    drawFood(playBoard)
}

//update function that updates every half second
function main(currentTime) {
    if (gameOver) {
      if (confirm('You have lost. Press ok to restart.')) {
          window.location = '/'
      }
      return
    }
    window.requestAnimationFrame(main); //this line of code must be first to aways update the game
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //calculation of time since last render update divided so we get seconds instead of miliseconds
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
    
    
    lastRenderTime = currentTime;

     update();
     draw();
}
window.requestAnimationFrame(main); //a line of code to start the game loop

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}