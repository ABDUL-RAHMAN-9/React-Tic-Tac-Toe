import React from 'react';
import Square from './Square.jsx';

export default function Board({ board, handleClick, winningLine })
{
    return (
        <div className='game-grid'>
            {board.map((cell, index) =>
            {
                const isWinningSquare = winningLine && winningLine.includes(index);
                return (
                    <Square
                        key={index}
                        value={cell}
                        onClick={() => handleClick(index)}
                        isWinningSquare={isWinningSquare}
                    />
                );
            })}
        </div>
    );
}