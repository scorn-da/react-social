import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  const posts = [
    {
      id: '1',
      text: 'abc',
    },
    {
      id: '2',
      text: 'my text',
    },
    {
      id: '3',
      text: 'That\'s interesting',
    },
  ];
  return (
      <ul className={styles.posts}>
        {
          posts.map(post => <Post key={post.id} text={post.text}/>)
        }
      </ul>
  );
};

export default Posts;
