import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export const ThreadPosts = () => {

  const { threadId } = useParams();
  const [ posts, setPosts] = useState();

  const fetchData = () => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${ threadId }/posts?offset=0`)
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }

  useEffect(() => {
    fetchData();
  },[ threadId ]);

  const postList = posts?.posts;

  const listItems = postList?.map(post =>
    <li key={post.id} className="post-item">
      {post.post}
    </li>
  );

  const textAreaRef = useRef(null);

  const handleClick = () => {

    const data = {
      post: textAreaRef.current?.value,
    }

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/ce67b37a-d805-4695-aa06-39c2cd62e560/posts`, {
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
      fetchData();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <section className='post-wrapper'>
      <h2>ポストタイトル</h2>
      <div className='post-contents'>
        <ul className="post-list">
          {listItems}
        </ul>
        <div className='post-form'>
          <form>
            <textarea name="name" className='post-textarea' placeholder='投稿しよう！' rows='4' ref={textAreaRef} />
            <button type="button" className='button button-post' onClick={handleClick}>投稿</button>
          </form>
        </div>
      </div>
    </section>
  );
}
