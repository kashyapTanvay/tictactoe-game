import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

function App() {
  const [history, setHistory] = useState([
    { square: Array(9).fill(null), isXNext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.square);

  console.log({ history, currentMove });

  const handleClickedSquare = clickedPosition => {
    if (gamingBoard.square[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.square.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        square: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <>
      <div className="app">
        <h1>Tic Tac Toe</h1>
        <StatusMessage winner={winner} gamingBoard={gamingBoard} />
        <Board
          square={gamingBoard.square}
          handleClickedSquare={handleClickedSquare}
        />
        <h2>Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </>
  );
}

export default App;
