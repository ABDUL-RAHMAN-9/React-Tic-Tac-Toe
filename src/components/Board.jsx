import React from 'react';
import Square from './Square.jsx';

export default function Board({ board, handleClick, winner })
{
    return (
        <>
            <div className='gameBoard'>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 100px)',
                    gap: '10px'
                }}>
                    {board.map((cell, index) => (
                        <Square
                            key={index}
                            value={cell}
                            onClick={() => handleClick(index)}
                            isDisabled={winner} // Disables buttons when game

                        />
                    ))}
                </div>
            </div>
        </>
    );
}