import React, {useReducer} from 'react';
import './App.css';

const reducer = (state, {type, payload }) => {};



function App() {
  const [counter,setCounter] = useReducer(reducer,0);

  return (
    <div className="App">
      Counter: {dispatch, counter};
      <div>
        <button onClick={() => dispatch({ type:"DECREMENT", payload:1})}> 
          -
        </button>

        <button onClick={() => dispatch({ type:"INCREMENT", payload:100})}> 
          +
        </button>
      </div>
    </div>
  );
}

export default App;