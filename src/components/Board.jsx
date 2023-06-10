import Square from './Square';

const Board = ({ square, handleClickedSquare, winningSquare }) => {
  const renderedSquare = position => {
    const isWinning = winningSquare.includes(position);
    return (
      <Square
        value={square[position]}
        onClick={() => handleClickedSquare(position)}
        isWinning={isWinning}
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
