import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ThreadPosts = () => {

  const { threadId } = useParams();
  const [ posts, setPosts] = useState();

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${ threadId }/posts?offset=0`)
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  },[ threadId ]);

  const postList = posts?.posts;

  const listItems = postList?.map(post =>
    <li key={post.id} className="post-item">
      {post.post}
    </li>
  );

  return (
    <section>
      <h2>ポストタイトル</h2>
      <ul className="post-list">
        {listItems}
      </ul>
    </section>
  );
}
