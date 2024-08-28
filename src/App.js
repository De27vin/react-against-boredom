import './App.css';
import { useEffect, useState } from 'react';


export default function Home() {

  const [counter, setCounter] = useState(0);

  useEffect( () => {
    console.log("Counter has been incremented by 1!");
    console.log("New counter is ", counter);


  })



  return (
    <div className="App">
      <h1>Counter</h1>
      <p>The counter is: {counter}</p>
      <button className='incrementButton' onClick={() => setCounter(counter + 1)}>+1</button>

    </div>
  );
}
