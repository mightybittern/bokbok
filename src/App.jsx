import { useState } from 'react';
import viteLogo from '/coq-inu-coin-svg.svg';
import './App.scss';
import Dialog from './components/dialog/dialog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dialog">
        <Dialog />
        <nav>
          <ul>
            <li>home</li>
            <li>gallery</li>
            <li>about us</li>
            <li>find us</li>
          </ul>
        </nav>
      </div>
      <img src="./coq-inu-coin-svg.svg" alt="doggo"></img>
      <h1>coq-inu-coin</h1>
      <p>stay tuned</p>
    </>
  );
}

export default App;
