import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  //   Array(9).fill(null) intiliaze the array of length 9 and fill with null

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "winner:" + winner;
  } else {
    status = "player turn:" + (x ? "x" : "o");
  }

  const handleClick = (i) => {
    const squares = square.slice();
    if (squares[i] === null) {
      squares[i] = x ? "x" : "o";
      setSquare(squares);
      setX(!x);
    } else {
      return squares[i];
    }
  };
  const renderSquare = (i) => {
    // sending the position of square through props
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else {
        return null;
      }
    }
  }

  return (
    <div className="board">
      <div className="board-row">
        {/* representing Position of the square */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {status}
    </div>
  );
};

export default Board;
