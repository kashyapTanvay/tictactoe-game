const StatusMessage = ({ square, winner, isXNext }) => {
  const noMovesLeft = square.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Congratulations{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
          has won the Game.
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          {' '}
          It is a Draw : <span className="text-green"> X </span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div className="status-message">{renderStatusMessage()}</div>
    </>
  );
};

export default StatusMessage;
