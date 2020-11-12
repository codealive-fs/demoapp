import React, {useState} from 'react'
import {Message} from './Message';
import './App.css';

function App() {

  let [count, setCount] = useState(99);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time =  {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <button onClick={ () => setCount(++count)}>Update Counter</button>
      <button onClick={() => setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
