import Confetti from "react-confetti";
export default function Congratulation(props){
  return (
    <>
      <h1>Congratulations</h1>
      <Confetti 
        numberOfPieces={200} 
        recycle={false} />
      <button className="restart-button" onClick={props.restartGame}>Restart Game</button>
    
    
    </>
  )
}