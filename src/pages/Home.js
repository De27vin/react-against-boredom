import '../App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);





  return (
    <>


    <nav className='navbar'>
      <ul>
        <li>
          <button className='navButton' onClick={() => navigate("/counter")}>
          Counter
          </button>
        </li>
      </ul>
    </nav>
    </>
  )
}