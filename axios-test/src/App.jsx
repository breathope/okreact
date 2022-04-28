import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([]);

  async function getData() {
    const res = await axios.get('https://restapi.okdevtest.net/people');
    console.log(res.data._embedded.people);
    setList(res.data._embedded.people);
  }

  useEffect( () => {
    getData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <ul>
          {list.map( (item, index) => (
            <li key={index}>{item.firstName}</li>
          ))}
        </ul>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
