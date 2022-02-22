import { onSnake, expandSnake } from "/snake.js"
import { randomGridPos } from '/grid.js';

let food = getRandomFoodPos()
const expansionRate = 2

export function update(){
    if (onSnake(food) ){
        expandSnake(expansionRate)
        food = getRandomFoodPos()
    }
}

export function draw(playBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    playBoard.appendChild(foodElement)
}

function getRandomFoodPos() {
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPos()
    }
    return newFoodPos
}