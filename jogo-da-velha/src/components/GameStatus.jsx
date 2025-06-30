import React from 'react';

const GameStatus = ({ winner, xIsNext }) => {
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  return <div className="game-status">{status}</div>;
};

export default GameStatus;