function CreateGrid(boxRowCount = 16) {
    let domGrid = document.getElementById("grid");
    let domRow = document.createElement("div");
    domRow.classList.add("row");
    let domPixel = document.createElement("div");
    domPixel.classList.add("pixel");
    
    for (let i = 0; i < boxRowCount; i++) {
        domRow.appendChild(domPixel.cloneNode(true));
    }
    for (let j = 0; j < boxRowCount; j++) {
        domGrid.appendChild(domRow.cloneNode(true));
    }
    let domPixels = document.getElementsByClassName("pixel");
    [...domPixels].forEach((pixel) => {
        pixel.addEventListener("mouseover", function()  {
            pixel.style.backgroundColor = 'red';
        });
    });
}

function GetGridSize() {
    let gridSize;
    do {
      gridSize =  window.prompt("Input Grid Size (1-100)")
    } while (!Number.isInteger(+gridSize) || gridSize <= 0 || gridSize > 100)
    let domGrid = document.getElementById("grid");
    domGrid.replaceChildren();
    CreateGrid(+gridSize);
}


window.onload = event => CreateGrid();