import React from 'react';
import styles from 'src/components/Users/User/User.module.css';
import userIcon from 'src/assets/images/user_icon.svg';
import { NavLink } from "react-router-dom";

const User = (props) => {
  const { user, follow, unfollow, followingInProgress } = props;
  return (
    <li className={styles.user}>
      <p>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small ?? userIcon} width="120" alt={`${user.name}'s profile`}/>
        </NavLink>
        <span>
          <b>
            <NavLink to={'/profile/' + user.id}>{user.name}</NavLink>
            {`${user.age ? ', ' + user.age : ''}`}
          </b>
          {
            user.followed?
              <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                unfollow(user.id);
              }}>Unfollow</button> :
              <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id);
              }}>Follow</button>
          }
        </span>
      </p>
    </li>
  );
};

export default User;
