import '../App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Counter() {
    const navigate = useNavigate();

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Counter has been incremented by 1!");
        console.log("New counter is ", counter);
    });




    return (
        <>
        <nav className="navbar">
            <ul>
                <li>
                    <button 
                        className='navButton'
                        onClick={() => {navigate("/")}}>
                    Grid creator
                    </button>
                </li>
            
            </ul>
        </nav>

      <div className="App">
        <h1>Counter</h1>
        <p>The counter is: {counter}</p>
        <button
          className="incrementButton"
          onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
    </>
  );
}
