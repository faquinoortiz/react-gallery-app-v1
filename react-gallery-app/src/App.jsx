import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'

import apiKey from './config';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Fetching the Flickr API Key here to make API requests
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {

        console.log(data);
      
      })
      .catch(error => {
        console.error('API request error:', error);
      });
    }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
