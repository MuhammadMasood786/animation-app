import React from 'react';
import Car from '../Images/Car.gif';
import Sun from '../Images/Sun.gif';
import Ship from '../Images/Ship.gif';
import './Animation.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {
  //  For Car
  const { ref: foreground1Ref, getAnimation: fore1Animation } = useWebAnimations({
    keyframes: { transform: ['translateX(0)', 'translateX(200%)'] },
    timing: { duration: 2000, iterations: Infinity, },
    onReady: ({ animation }) => animation.currentTime = animation.effect.getTiming().duration / 2,
  });
  // For Ship
  const { ref: foreground2Ref, getAnimation: fore2Animation } = useWebAnimations({
    keyframes: { transform: ['translateX(0)', 'translateX(200%)'] },
    timing: { duration: 3000, iterations: Infinity, },
    onReady: ({ animation }) => animation.currentTime = animation.effect.getTiming().duration / 2,
  });
  // For Sun
  const { ref: foreground3Ref } = useWebAnimations({
    keyframes: { transform: ['translateX(0)', 'translateX(-100%)'] },
    timing: { duration: 3000, iterations: Infinity, },
    onReady: ({ animation }) => animation.currentTime = animation.effect.getTiming().duration / 2,
  });

  const speedUp = () => {
    fore1Animation().updatePlaybackRate(fore1Animation().playbackRate * 1.1);
    fore2Animation().updatePlaybackRate(fore2Animation().playbackRate * 1.1);
  }

  const speedDown = () => {
    if (fore1Animation().playbackRate > 0.4) {
      fore1Animation().updatePlaybackRate(fore1Animation().playbackRate * 0.9);
    }
    if (fore2Animation().playbackRate > 0.4) {
      fore2Animation().updatePlaybackRate(fore2Animation().playbackRate * 0.9);
    }
  }

  const play = () => {
    fore1Animation().play();
    fore2Animation().play();
  };

  const pause = () => {
    fore1Animation().pause();
    fore2Animation().pause();
  };

  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-primary mt-2" onClick={play} onTouchEnd={play} >Play</button>
        <button type="button" className="btn btn-outline-secondary mt-2" onClick={pause} onTouchEnd={pause}>Pause</button>
        <button type="button" className="btn btn-outline-danger mt-2" onClick={speedUp} onTouchEnd={speedUp}>Speed Up</button>
        <button type="button" className="btn btn-outline-warning mt-2" onClick={speedDown} onTouchEnd={speedDown}>Speed Down</button>
      </div>
      <div className="sun-div" ref={foreground3Ref}>
        <img src={Sun} alt="Sun" width={250} height={250} />
      </div>
      <div className=""  >
        <div className="ship-div" ref={foreground2Ref} >
          <img src={Ship} alt="Ship" width={250} height={250} />
        </div>
        <div className="car-div" ref={foreground1Ref} >
          <img src={Car} alt="Car" width={400} height={250} />
        </div>
      </div>
    </div>
  );
}

export default App;