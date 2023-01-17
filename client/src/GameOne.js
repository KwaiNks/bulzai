import { useState } from "react"

function GameOne(){
  const [x,setX] = useState(null);
  const [y, setY] = useState(null);


  function generateRandomX(){
    let minX = 0;
    let maxX = 550;
    return (Math.random() * (maxX - minX) + minX);
  }

  function generateRandomY(){
    let minY = 0;
    let maxY = 550;
    return (Math.random() * (maxY - minY) + minY);
  }

function handleMouse(e){
   setX(e.clientX);
   setY(e.clientY);
  console.log(e.clientX, e.clientY);
}

    return(
       <div>
        <div className="App" onClick={handleMouse} style={{width:500, height:500, textAlign:"center", backgroundColor:"green"}}>
     <h5>
    Position Clicked: ({x} , {y})
     </h5>
      </div >
      Generated Cordinate: ({()=>generateRandomX} , {generateRandomY})
      </div>
    )

}
export default GameOne