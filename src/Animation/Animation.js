import React, {  } from 'react';
import Car from '../Images/Car.gif';
import Sun from '../Images/Sun.gif';
import Ship from '../Images/Ship.gif';
import './Animation.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {

  const {ref,getAnimation} = useWebAnimations({
    keyframes:[{
      transfrom: ["translate(1000px,0px)"]
    }],
    timing:{
      duration:1000,
      iterations:Infinity,
    },
  });
     
    const Play = () => {
      getAnimation().play();
    }

  return (
    <div>
      <button type="button" className="btn btn-primary mt-2" onClick={Play}>Play</button>
      <button type="button" className="btn btn-secondary mt-2">Pause</button>
      <button type="button" className="btn btn-warning mt-2">Speed Up</button>
      <button type="button" className="btn btn-danger mt-2">Jump</button>
      <div className="sun-div">
        <img src={Sun} alt="Sun" width={200} height={200} />
      </div>
      <div className="ship-div">
        <img src={Ship} alt="Ship" width={200} height={200} />
      </div>
      <div className="car-div" ref={ref}>
        <img src={Car} alt="Car" width={350} height={250} />
      </div>
    </div>
  );
}

export default App;