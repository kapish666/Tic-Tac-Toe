import { useState } from 'react'
import './App.css'
import Sq from './Sq'
import CalculateWinner from "./CalculateWinner"

function App({xIsNext,square,onPlay}) {

  function handleClick(i){
    if (square[i] || CalculateWinner(square)) {
      return;
    }
    const nextSq=square.slice()
    if(xIsNext){
      nextSq[i]="X"
    }
    else{
      nextSq[i]="O"
    }
    onPlay(nextSq);
  }
  
  const winner=CalculateWinner(square)
  let status;
  if(winner){
    status="winner "+ winner;
  }
  else
  status="Next player:"+(xIsNext?"X":"O");
  return(
    <div className="text-center">
    <div className='status'>{status}</div>
      <div className="gap-2 flex m-1">
        {/* the name of fucntion used in sq line below this i.e onSqclick has to be same as is used in the component */}
      <Sq value={square[0]} onSqClick={() => handleClick(0)}/>
      <Sq value={square[1]} onSqClick={() => handleClick(1)}/>
      <Sq value={square[2]} onSqClick={() => handleClick(2)}/>
      </div>
      <div className="gap-2 flex m-1">
      <Sq value={square[3]} onSqClick={() => handleClick(3)}/>
      <Sq value={square[4]} onSqClick={() => handleClick(4)}/>
      <Sq value={square[5]} onSqClick={() => handleClick(5)}/>
      </div>
      <div className="gap-2 flex m-1">
      <Sq value={square[6]} onSqClick={() => handleClick(6)}/>
      <Sq value={square[7]} onSqClick={() => handleClick(7)}/>
      <Sq value={square[8]} onSqClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

export default App
