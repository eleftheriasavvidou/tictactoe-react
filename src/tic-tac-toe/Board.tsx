import React from 'react'
import './style.css'

// Board Types
type BoardProps = {
    // An array and each column is also an array
    board: Array<Array<string | null>>,
    // Function when a square is clicked
    handleClick: (row:number, col:number) => void;

}

//Functional Component
export const Board = ({board, handleClick}: BoardProps) => {
  return (
    <div className='board'>
        {board.map((row, rowIndex) => (
            /*Map a row with a column */
            <div key={rowIndex} className='board-row'>
               {row.map((square, squareIndex) => (
                    <button key={squareIndex} className='square' onClick={() => handleClick(rowIndex, squareIndex)}>
                       {square} 
                    </button>

            ))} 
                
            </div>

        ))}
    </div>
  )
}