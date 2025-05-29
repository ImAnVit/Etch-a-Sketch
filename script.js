const container = document.getElementById('container');
let gridSize = 16; // Changed to let as it might be updated by user input, though createGrid uses its parameter

const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    // Clear existing grid if any
    container.innerHTML = ''; 

    // Calculate the size of each square based on the container size
    // The container is 512px wide/high as defined in CSS
    // We subtract 2px for the container's own border (1px on each side)
    const containerDimension = 512 - 2;
    const squareSize = containerDimension / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        // Set square size via JS to ensure they fit perfectly
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; // Or any color you prefer
        });
        container.appendChild(square);
    }
}

createGrid(gridSize);

resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (squares per side, max 100):", gridSize);
    if (newSize !== null) { // Check if prompt was cancelled
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            gridSize = newSize; // Update the global gridSize if needed for other features, though createGrid uses its parameter
            createGrid(newSize);
        } else if (newSize !== null) { // Avoid alert if prompt was cancelled
            alert("Invalid size. Please enter a number between 1 and 100.");
        }
    }
});
