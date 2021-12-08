import { useReducer } from "react";
import "./App.css";

const initialState = { startEngine: false, gear: 0, speed: 0 };

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(previousState, action) {
 
      switch (action.type) {
        case "Start": 
          if (previousState.startEngine === false) return { gear: 0, speed: 0 }; 
          return { ...previousState, startEngine: !previousState.startEngine }  
        case "GearUp":
          if (previousState.gear === 5) { 
            return { ...previousState, gear: 5 }
           }
          return { ...previousState, gear: previousState.gear + 1 }     
        case "GearDown":
          if (previousState.gear === 0) { 
            return { ...previousState, gear: 0 }
           }
          return { ...previousState, gear: previousState.gear - 1 }     
        case "SpeedUp":
          if (previousState.speed === 250) {
            return { ...previousState, speed: 250 }
          }
          return { ...previousState, speed: previousState.speed + 1 } 
        case "SpeedDown":
          if (previousState.speed === 0) {
            return { ...previousState, speed: 0 }
          }
          return { ...previousState, speed: previousState.speed - 1 }
        default:
          return previousState;
      }
    }

    console.log(state.startEngine);

    return (
      <div>
        <button className={ state.startEngine ? "startButton" : "stoppedButton" } onClick={ () => dispatch({ type: "Start" }) }>{ state.startEngine ? "Stop Engine" : "Start Engine" }</button>
        <br />
        <button className="gear" onClick={ () => dispatch({ type: "GearUp"}) }>Gear up</button>
        <button className="gear" onClick={ () => dispatch({ type: "GearDown"}) }>Gear down</button>
        <br />
        <button className="speed" onClick={ () => dispatch({ type: "SpeedUp"}) }>Accelerate</button>
        <button className="speed" onClick={ () => dispatch({ type: "SpeedDown"}) }>Decelerate</button>
        <hr />
        <h2>
          { state.startEngine ? "Engine is started" : "Start your engine" }
        </h2>
        <p>
          Gear is: { state.gear }
        </p>
        <p>
          Acceleration is: { state.speed }
        </p>
      </div>
    )
}

export default App;
