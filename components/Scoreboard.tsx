import React from 'react';

interface ScoreboardProps {
  score: number;
  isGameOver: boolean;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, isGameOver }) => (
  <div>
    <h1>Score: {score} km</h1>
    {isGameOver && <h2>Game Over!</h2>}
  </div>
);

export default Scoreboard;
