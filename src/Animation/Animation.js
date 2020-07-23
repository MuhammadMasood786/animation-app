import React from 'react';
import Car from '../Images/Car.gif';
import Sun from '../Images/Sun.gif';
import Ship from '../Images/Ship.gif';
import './Animation.css';
// import useWebAnimations from "@wellyshen/use-web-animations";


function App() {

  // const { ref:figure } = useWebAnimations({
  //   keyframes: {
  //     transform: ['translateX(600px)']
  //   },
  //   timing: {
  //     duration: 3000,
  //     iterations: Infinity
  //   }
  // });


  return (
    <div>
      <button type="button" className="btn btn-primary mt-2" >Play</button>
      <button type="button" className="btn btn-secondary mt-2">Pause</button>
      <button type="button" className="btn btn-warning mt-2">Speed Up</button>
      <button type="button" className="btn btn-danger mt-2">Jump</button>
      <div className="sun-div">
        <img src={Sun} alt="Sun" width={250} height={250} />
      </div>
      <div className="" >
        <div className="ship-div">
          <img src={Ship} alt="Ship" width={250} height={250} />
        </div>
        <div className="car-div">
          <img src={Car} alt="Car" width={400} height={250} />
        </div>
      </div>
    </div>
  );
}

export default App;