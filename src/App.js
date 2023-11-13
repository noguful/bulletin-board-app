import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './routes/Home';
import { ThreadNew } from './routes/ThreadNew';
import { ThreadPosts } from './routes/ThreadPosts';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className='title'>
          <Link to='/'>掲示板</Link>
        </h1>
        <p>
          <Link to='/thread/new'>スレッドをたてる</Link>
        </p>
      </header>
      <main className="contents">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/thread/new' element={ <ThreadNew /> } />
          <Route path='/thread/:threadId' element={ <ThreadPosts /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
