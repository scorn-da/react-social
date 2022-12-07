import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = ({posts}) => {

  return (
    <ul className={styles.posts}>
      {
        posts.map(post => <Post key={post.id} text={post.text}/>)
      }
    </ul>
  );
};

export default Posts;
