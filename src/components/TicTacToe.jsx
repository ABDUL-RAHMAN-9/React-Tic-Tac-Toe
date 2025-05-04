import React, { useState } from 'react'
import Board from './Board.jsx'

export default function TicTacToe()
{
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const playerX = 'X';
    const playerO = 'O';

    const checkWinner = (board) =>
    {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let combo of winningCombinations)
        {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c])
            {
                return board[a];  // Returns winner (X or O)
            }
        }
        return board.every(cell => cell) ? 'Draw' : null;
    };

    const winner = checkWinner(board); // Determine if game is won

    const handleClick = (index) =>
    {
        if (board[index] || winner)
        {
            return; // Prevents clicking after win
        }
        const newBoard = [...board];
        newBoard[index] = isXTurn ? playerX : playerO;

        setBoard(newBoard);
        setIsXTurn(!isXTurn);

    };

    const resetGame = () =>
    {
        setBoard(initialBoard);
        setIsXTurn(true);
    }

    return (
        <div className='board'>
            <h1>Tic-Tac-Toe</h1>
            <Board board={board} handleClick={handleClick} winner={winner} />
            <h2>{winner ? (winner === "Draw" ? "It's a Draw!" : `Winner: ${(winner)}`) : `Current Turn: ${isXTurn ? playerX : playerO}`}</h2>
            <button onClick={resetGame} >Reset Game</button>
        </div>
    )
}

