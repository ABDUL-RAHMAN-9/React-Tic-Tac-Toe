# Tic-Tac-Toe Game in React

A simple Tic-Tac-Toe game built using React. This project demonstrates the use of React state management, component-based design, and event handling.

## Features
- Play as X or O in a 3x3 grid.
- Dynamic turn-based gameplay.
- Detects a winner or a draw automatically.
- Reset functionality to start a new game.

## Project Structure
  ```
tic-tac-toe/
│── src/
│   │── components/
│   │   │── TicTacToe.jsx  # Main game logic component
│   │   │── Board.jsx      # Renders the game board
│   │   │── Square.jsx     # Represents individual game cells
│   │── App.jsx           # Main application component
│   │── index.jsx         # Entry point
│   │── index.html        # Main HTML file
│── package.json         # Dependencies and scripts
│── .gitignore           # Files to exclude from Git tracking
│── README.md            # Project documentation
│── index.css           # Global styles
```

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/YOUR_USERNAME/tic-tac-toe.git
    ```

2. Navigate to the project directory:
    ```
    cd tic-tac-toe
    ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage
- Click on any empty cell to mark your move.
- The game alternates turns between Player X and Player O.
- If a player completes a winning combination, the winner is displayed.
- If all cells are filled without a winner, the game ends in a draw.
- Click the Reset Game button to start a new round.


## Technologies Used
- React
- JavaScript (ES6)
- CSS for styling

## License
This project is licensed under the MIT License.


   
