import React from 'react';
import './Leaderboard.css'; 

const Leaderboard = () => {
  const players = [
    // samples
    { rank: 1, name: "Player 1", score: 100 },
    { rank: 2, name: "Player 2", score: 90 },
    { rank: 3, name: "Player 3", score: 80 },
    { rank: 4, name: "Player 4", score: 70 },
    { rank: 5, name: "Player 5", score: 60 }
  ];

  return (
    <div>
      <h1 className="title">Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th className="rank">Rank</th>
            <th className="player">Player</th>
            <th className="score">Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
