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
    <li key={thread.id} className="thread-item">
      {thread.title}
    </li>
  );

  return (
    <div className="app">
      <header className="header">
        <h1>掲示板</h1>
        <p>
          <a href="/">スレッドをたてる</a>
        </p>
      </header>
      <main className="contents">
        <section>
          <h2>新着スレッド</h2>
          <ul className="thread-list">
            {listItems}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
