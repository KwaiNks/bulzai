import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function GameTwo(){

    const [randomNumber, setRandomNumber] = useState(0)
    const [selectedValue, setSelectedValue] = useState(0)
    const [accuracy, setAccuracy] = useState(null);

    useEffect(() => {
       setRandomNumber(generateRandomNumbersOneToTen)
       },[])

    function preventHorizontalKeyboardNavigation(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
        }
      }


      function valuetext(value) {
        return `${value}`;
      }

      function handleUserSelectedValue(e, newValue){
       setSelectedValue(newValue)
       console.log(newValue)
       setAccuracy(calculateAccuracy)
      }

      function generateRandomNumbersOneToTen(){
       return Math.floor(Math.random() * 10) + 1
      }

      function calculateAccuracy(){

        return (100 - Math.abs(randomNumber - selectedValue) * 10) + " % Accurate";
      }
      
      const marks = [
        {
          value: 1,
          label: '1',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 3,
          label: '3',
        },
        {
            value: 4,
            label: '4',
          },
          {
            value: 5,
            label: '5',
          },
          {
            value: 6,
            label: '6',
          },
          {
            value: 7,
            label: '7',
          },
          {
            value: 8,
            label: '8',
          },
          {
            value: 9,
            label: '9',
          },
          {
            value: 10,
            label: '10',
          },
      ];
      

    return(
        <>
<Box id="gametwo" sx={{ height: 300 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        defaultValue={0}
        onChange={handleUserSelectedValue}
        value={selectedValue}
        getAriaValueText={valuetext}
        aria-label="Temperature"
        valueLabelDisplay="on"
        min={1}
        max={10}
        marks={marks}
        step={1}
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
<p></p>
Your Accuracy: {accuracy}
<p></p>
Your Score: {(100 - Math.abs(randomNumber - selectedValue) * 10)}
    </Box>

   
   {/* Correct Answer: {randomNumber} */}

    </>
    )
    }
export default GameTwo