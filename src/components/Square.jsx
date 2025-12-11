import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) =>
{
    let className = "square";
    if (value === 'X') className += " x";
    if (value === 'O') className += " o";
    if (isWinningSquare) className += " winner";

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={value !== null}
        >
            {value}
        </button>
    );
};

export default Square;