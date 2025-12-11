import React, { useState, useEffect, useCallback } from 'react'
import Board from './Board.jsx'
import StartScreen from './StartScreen.jsx'

export default function TicTacToe()
{
    // Game State
    const [gameStatus, setGameStatus] = useState('menu');
    const [gameMode, setGameMode] = useState('friend');
    const [players, setPlayers] = useState({ x: 'Player 1', o: 'Player 2' });

    // Board State
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [scores, setScores] = useState({ x: 0, o: 0 });

    // Check Winner Logic
    const checkWinner = useCallback((currentBoard) =>
    {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombinations)
        {
            const [a, b, c] = combo;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c])
            {
                return { winner: currentBoard[a], line: combo };
            }
        }
        return null;
    }, []);

    const winInfo = checkWinner(board);
    const winner = winInfo?.winner;
    const isDraw = !winner && board.every(cell => cell);

    // --- CORE MOVE LOGIC ---
    const handleMove = useCallback((index) =>
    {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(newBoard);

        // Update scores
        const newWinInfo = checkWinner(newBoard);
        if (newWinInfo?.winner)
        {
            setScores(prev => ({
                ...prev,
                [newWinInfo.winner.toLowerCase()]: prev[newWinInfo.winner.toLowerCase()] + 1
            }));
        }

        setIsXTurn(!isXTurn);
    }, [board, isXTurn, winner, checkWinner]);

    // --- AI Logic ---
    const makeCpuMove = useCallback(() =>
    {
        if (winner || isDraw) return;

        // 1. Try to WIN
        for (let i = 0; i < 9; i++)
        {
            if (!board[i])
            {
                const tempBoard = [...board];
                tempBoard[i] = 'O';
                if (checkWinner(tempBoard)?.winner === 'O')
                {
                    handleMove(i);
                    return;
                }
            }
        }

        // 2. Block Player X
        for (let i = 0; i < 9; i++)
        {
            if (!board[i])
            {
                const tempBoard = [...board];
                tempBoard[i] = 'X';
                if (checkWinner(tempBoard)?.winner === 'X')
                {
                    handleMove(i);
                    return;
                }
            }
        }

        // 3. Pick Center
        if (!board[4])
        {
            handleMove(4);
            return;
        }

        // 4. Random
        const emptyIndices = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
        if (emptyIndices.length > 0)
        {
            const randomMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            handleMove(randomMove);
        }
    }, [board, winner, isDraw, handleMove, checkWinner]);

    // Effect for CPU
    useEffect(() =>
    {
        if (gameMode === 'cpu' && !isXTurn && !winner && !isDraw)
        {
            const timer = setTimeout(() =>
            {
                makeCpuMove();
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isXTurn, gameMode, winner, isDraw, makeCpuMove]);

    // --- HUMAN CLICK ---
    const handleSquareClick = (index) =>
    {
        if (board[index] || winner) return;
        if (gameMode === 'cpu' && !isXTurn) return;
        handleMove(index);
    };

    const startGame = (settings) =>
    {
        setGameMode(settings.mode);
        setPlayers({ x: settings.p1, o: settings.p2 });
        setGameStatus('playing');
        setBoard(initialBoard);
        setIsXTurn(true);
        setScores({ x: 0, o: 0 });
    };

    const resetGame = () =>
    {
        setBoard(initialBoard);
        setIsXTurn(true);
    };

    const goBackToMenu = () =>
    {
        setGameStatus('menu');
        setBoard(initialBoard);
        setIsXTurn(true);
    };

    return (
        <>
            {/* The Main UI */}
            {gameStatus === 'menu' ? (
                <StartScreen onStart={startGame} />
            ) : (
                <div className='board-container'>
                    <button className="back-btn" onClick={goBackToMenu}>←</button>

                    <h1>Tic Tac Toe</h1>

                    <div className="scoreboard">
                        <div className={`score-item ${isXTurn && !winner ? 'active-turn' : ''}`}>
                            <span className="score-label">{players.x} (X)</span>
                            <span className="score-value">{scores.x}</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">vs</span>
                        </div>
                        <div className={`score-item ${!isXTurn && !winner ? 'active-turn' : ''}`}>
                            <span className="score-label">{players.o} (O)</span>
                            <span className="score-value">{scores.o}</span>
                        </div>
                    </div>

                    <Board
                        board={board}
                        handleClick={handleSquareClick}
                        winningLine={winInfo?.line}
                    />

                    <div className='game-info'>
                        {winner && <div className='winner-text'>Winner: {winner === 'X' ? players.x : players.o}!</div>}
                        {isDraw && <div className='winner-text' style={{ color: '#888' }}>Draw Game</div>}

                        {(winner || isDraw) && (
                            <button className='reset-btn' onClick={resetGame}>
                                Play Again
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* THE FOOTER - Always visible */}
            <div className="developer-footer">
                © 2025 All rights reserved. Designed & Developed by <br />
                <a href="https://github.com/ABDUL-RAHMAN-9" target="_blank" rel="noreferrer" className="dev-name">
                    Abdul Rahman
                </a>
            </div>
        </>
    )
}