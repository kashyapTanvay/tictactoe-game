import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));

  const handleClickedSquare = clickedPosition => {
    setSquare(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return 'X';
        }
        return squareValue;
      });
    });
  };

  const renderedSquare = position => {
    return (
      <Square
        value={square[position]}
        onClick={() => handleClickedSquare(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderedSquare(0)}
        {renderedSquare(1)}
        {renderedSquare(2)}
      </div>
      <div className="board-row">
        {renderedSquare(3)}
        {renderedSquare(4)}
        {renderedSquare(5)}
      </div>
      <div className="board-row">
        {renderedSquare(6)}
        {renderedSquare(7)}
        {renderedSquare(8)}
      </div>
    </div>
  );
};

export default Board;
