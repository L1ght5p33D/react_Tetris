import React from 'react';
import Tetris from './components/Tetris';

const App = () => (
  <div className="App">
    <Tetris />

{/* 
    <div id="rx_notes">
     
     
     https://reactjs.org/docs/hooks-reference.html
     
     Hooks are a new addition in React 16.8. They let you use state and other React 
     features without writing a class. 
     useState returns a state object player and setPlayer setter to update it.
ex
const [player, setPlayer] = useState(
     useState
const [state, setState] = useState(initialState);
Returns a stateful value, and a function to update it.

During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

setState(newState);
During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

A common use case is to access a child imperatively:
  const inputEl = useRef(null);
Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
   
    </div> */}
  </div>
);

export default App;
