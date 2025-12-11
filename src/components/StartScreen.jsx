import React, { useState } from 'react';

export default function StartScreen({ onStart })
{
    const [mode, setMode] = useState('friend');
    const [p1Name, setP1Name] = useState('');
    const [p2Name, setP2Name] = useState('');

    const handleSubmit = () =>
    {
        onStart({
            mode,
            p1: p1Name || 'Player 1',
            p2: mode === 'cpu' ? 'AI Computer' : (p2Name || 'Player 2')
        });
    };

    return (
        <div className="start-screen">
            <h1 style={{ marginBottom: 0 }}>Tic Tac Toe</h1>

            <div className="mode-toggle">
                <button
                    className={`toggle-btn ${mode === 'friend' ? 'active' : ''}`}
                    onClick={() => setMode('friend')}
                >
                    vs Friend
                </button>
                <button
                    className={`toggle-btn ${mode === 'cpu' ? 'active' : ''}`}
                    onClick={() => setMode('cpu')}
                >
                    vs Computer
                </button>
            </div>

            <div className="input-group">
                <label>Player X Name</label>
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Enter name"
                    value={p1Name}
                    onChange={(e) => setP1Name(e.target.value)}
                    maxLength={10}
                />
            </div>

            {mode === 'friend' && (
                <div className="input-group">
                    <label>Player O Name</label>
                    <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter name"
                        value={p2Name}
                        onChange={(e) => setP2Name(e.target.value)}
                        maxLength={10}
                    />
                </div>
            )}

            <button className="start-btn" onClick={handleSubmit}>
                Start Game
            </button>
        </div>
    );
}