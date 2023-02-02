import { useState, useEffect } from "react"

function GameOne(){

  const [x,setX] = useState(null);
  const [y, setY] = useState(null);
  const [randomX, setRandomX] = useState(null);
  const [randomY, setRandomY] = useState(null);
  const [distance, setDistance] = useState(null);
  const [score, setScore] = useState(null);
  const MAXDISTANCE = 792;


  function generateRandomX(){
    let minX = 0;
    let maxX = 250;
    return Math.round(Math.random() * (maxX - minX)+ minX);
  }

  function generateRandomY(){
    let minY = 0;
    let maxY = 250;
    return Math.round(Math.random() * (maxY - minY) + minY);
  }

  function calculateDistance(){
    console.log(randomX, randomY, x , y);
    let distance = Math.pow((x-randomX), 2) + Math.pow((y-randomY), 2);
    console.log(distance);
    return Math.round(Math.sqrt(distance))
      
  }

  useEffect(() => {
   setRandomX(generateRandomX)
   setRandomY(generateRandomY)
  },[])

  function handleMouse(e){
    setX(e.clientX);
    setY(e.clientY);
    setDistance(calculateDistance)
    setScore(gamescore)
 }

 function gamescore(){
   const precision = (MAXDISTANCE - distance) / (MAXDISTANCE/ 100)
   return Math.round(precision)
 }

    return(
       <div>
        <div className="App" onClick={handleMouse} style={{width:560, height:560, textAlign:"center", backgroundColor:"green"}}>
     <div id="gameDetails">
     <h5>
    Your Guess: ({x} , {y})
     </h5>
      </div >
      {/* Target: ({randomX} , {randomY}) */}
      <p></p>
      Distance Between Guess and Target: {distance}
      <p></p>
      You score: {score}
      </div>
      </div> 
    )

}
export default GameOne