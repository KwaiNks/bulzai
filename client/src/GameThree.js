
import { useState, useEffect } from 'react';
function GameThree(){

    const [randomNumber, setRandomNumber] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [score, setScore] = useState(0)

    function generateRandomNumbersOneToFour(){
        return  Math.floor(Math.random() * 4) + 1
        }

      useEffect(() => {
       setRandomNumber(generateRandomNumbersOneToFour)
       },[])

       function handleClick(e){
       if(e.target.getAttribute('id') == randomNumber){
         setCorrectAnswer(" Well Done! You Guessed Corrctly ")
         setScore( 25 )
       }
        else{
         setCorrectAnswer(" Better Luck Next Time ")
         setScore( 0 )
        }
       }

    return(
<div id="gamethree">
  <div id="1" className="divSquare" onClick={handleClick} ></div>
  <div id="2" className="divSquare" onClick={handleClick}  ></div>
  <div id="3" className="divSquare" onClick={handleClick} ></div>
  <div id="4" className="divSquare" onClick={handleClick} ></div>
   <div id="gamethreeDetails">
   {correctAnswer}
   <p></p>
   Your Score: { score }
   </div>
</div>
    )
}
export default GameThree