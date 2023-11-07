import { useState, useEffect } from 'react';

export const Home = () => {

  const [ threads, setthreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
    .then(res => res.json())
    .then(data => {
      setthreads(data)
    })
  },[]);

  const listItems = threads.map(thread =>
    <li key={thread.id} className="thread-item">
      {thread.title}
    </li>
  );

  return (
    <section>
      <h2>新着スレッド</h2>
      <ul className="thread-list">
        {listItems}
      </ul>
    </section>
  );
}
