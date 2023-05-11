import React, { useState } from 'react'
import { Board } from './Board'
import './style.css'


type BoardArray = Array<Array<string | null>>;


export const TicTacToe = () => {

  // Initial State of Board - 3 rows 3 colums

  const initialBoard = Array.from({length: 3}, () => Array.from({length:3}, () => null))

  // State of the board
  const [board, setBoard] = useState<BoardArray>(initialBoard)

  // State of the player
  const [player, setPlayer] = useState<string>('X')

  const[xIsNext, setxIsNext] = useState<boolean>(false)

  const[winner, setWinner] = useState<string | null>(null)

  const [isTie, setIsTie] = useState<boolean>(false)

  const calculateWinner = (board: BoardArray): string | null => {
    //Possible solutions
    const lines = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (a && a === b && a === c) {
        return a;
      }
    }

    return null;
  }

  const handleOnClick = (row: number, col: number) => {
    //If winner is not null or cell is not null
    if(board[row][col] || winner){
      return;
    }

    const updatedBoard = board.map((newRow, rowIndex) => 
    newRow.map((square, squareIndex) => 
    rowIndex === row && squareIndex === col ? player : square))

    setBoard(updatedBoard) 

    //Check if winner
    setWinner(calculateWinner(updatedBoard))


    if(xIsNext) {
      setPlayer('X')

    } else {
      setPlayer('O')
      // Iterate to check if null values
      const hasNullValue = updatedBoard.some((row) => row.some((square => square === null)))
      // If there is no winner and all cells are filled
      if(!winner && !hasNullValue) {
        setIsTie(true)
        return;
      }
    }
    setxIsNext(!xIsNext)

  }

  let pstatus: string;

  if(winner) {
    pstatus = 'Winner is player: ' + winner;
  } else {
    pstatus = 'Next Player: ' + (xIsNext ? 'O' : 'X');
    if(isTie) {
      pstatus = 'It is a draw';
    }
  }


  const restartGame = () => {
    setBoard(initialBoard)
    setPlayer('X')
    setxIsNext(false)
    setWinner(null)
    setIsTie(false)
  }

  return (
    <div className='game'>
      <div className='pstatus'>{pstatus}</div>
      <Board board = {board} handleClick={handleOnClick} />
      <button className='restart' type='button' onClick={restartGame}>Start New Game</button>
      
    </div>
  )
}
