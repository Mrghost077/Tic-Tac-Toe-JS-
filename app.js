const gameBoard = document.querySelector("#gameBoard");
const gameInfo = document.querySelector('#gameInfo');
const cells = ["","","","","","","","","",];

gameInfo.textContent = 'Circle goes first';

function board ()
{
    cells.forEach((cell, index) =>
    {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        
        gameBoard.append(cellElement);
    })
}

board();
