import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ threads, setthreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
    .then(res => res.json())
    .then(data => {
      setthreads(data)
    })
  },[])

  const listItems = threads.map(thread =>
    <li key={thread.id}>
      {thread.title}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>掲示板</p>
        <ul>
          {listItems}
        </ul>
      </header>
    </div>
  );
}

export default App;
