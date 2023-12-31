import { Link } from 'react-router-dom';
import { useRef } from 'react';

export const ThreadNew = () => {

  const inputRef = useRef(null);

  const handleClick = () => {

    const data = {
      title: inputRef.current?.value,
    };

    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <section>
      <h2>スレッド新規作成</h2>
      <div className='thread-new'>
        <form>
          <input type="text" name="name" className='thread-new-input' placeholder='スレッドタイトル' ref={inputRef} />
          <div className='thread-new-action'>
            <p>
              <Link to='/'>Topに戻る</Link>
            </p>
            <button type="button" className='button' onClick={handleClick}>作成</button>
          </div>
        </form>
      </div>
    </section>
  );
}
