const gameBoard = document.querySelector("#gameBoard");
const gameInfo = document.querySelector('#gameInfo');
const cells = ["","","","","","","","","",];
let playTurn = "circle";

gameInfo.textContent = 'Circle goes first';

function board ()
{
    cells.forEach((_cell, index) =>
    {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index
        cellElement.addEventListener("click", addSymbol);
        gameBoard.append(cellElement);
    })
}

board();

function addSymbol (e)
{
    console.log("clicked", e.target);
    const cellSymbol = document.createElement("div");
    cellSymbol.classList.add(playTurn);
    playTurn = playTurn === "circle" ? "cross" : "circle";
    gameInfo.textContent = "Now it is " + playTurn +"'s turn !";
    e.target.removeEventListener("click", addSymbol);

    e.target.append(cellSymbol);
}
