const gameBoard = document.querySelector("#gameBoard");
const gameInfo = document.querySelector('#gameInfo');
const cells = ["","","","","","","","","",];
let playTurn = "circle";

gameInfo.textContent = 'Circle goes first !';

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

    calculateScore();

}

function calculateScore ()
{
    const allSquares = document.querySelectorAll(".square");
    const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    winningCombinations.forEach(array =>{
       const circleWin =  array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("circle"));

            if (circleWin)
                {
                    gameInfo.textContent = "Circle Wins the Game !!!"
                    /* once the game is ended (a symbol wins) we have to stop the game from proceeding anymore
                    for that we will have to remove event listeners from allthe square which wont work. so instaed
                    we clone square and place it above the existing square so the game would end*/

                    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
                }
        })

        winningCombinations.forEach(array =>{
            const crossWin =  array.every(cell => 
                 allSquares[cell].firstChild?.classList.contains("cross"));
     
                 if (crossWin)
                     {
                         gameInfo.textContent = "Cross Wins the Game !!!";
                         allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
                     }
             })
        
       
}

