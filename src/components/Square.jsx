import React from 'react';

const Square = ({ value, onClick, isDisabled }) =>
{
    return (
        <>
            <button
                onClick={onClick}
                disabled={isDisabled} // Disables button after win
                style={
                    {
                        width: '100px',
                        height: '100px',
                        fontSize: '2rem',
                        textAlign: 'center',
                        cursor: isDisabled ? 'not-allowed' : 'pointer'
                    }}>
                {value}
            </button>
        </>
    );
};

export default Square;