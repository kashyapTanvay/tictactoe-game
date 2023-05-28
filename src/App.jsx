import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(square);

  const handleClickedSquare = clickedPosition => {
    if (square[clickedPosition] || winner) {
      return;
    }

    setSquare(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXNext(prev => !prev);
  };
  return (
    <>
      <div className="app">
        <StatusMessage square={square} winner={winner} isXNext={isXNext} />
        <Board square={square} handleClickedSquare={handleClickedSquare} />
      </div>
    </>
  );
}

export default App;
