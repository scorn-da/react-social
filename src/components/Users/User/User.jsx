import React from 'react';
import styles from 'src/components/Users/User/User.module.css';
import userIcon from 'src/assets/images/user_icon.svg';
import { NavLink } from "react-router-dom";
import { usersAPI } from "src/api/api";

const User = (props) => {
  const { user, follow, unfollow, followingInProgress, toggleFollowingProgress } = props;
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
          {/*<i>{`${user.location.country}, ${user.location.city}`}</i>
          <i>{user.onlineStatus}</i>
          <i>{user.following}</i>*/}
          {
            user.followed?
              <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                toggleFollowingProgress(true, user.id);
                usersAPI.unfollowUser(user.id).then((data) => {
                    if (data.resultCode === 0) {
                      toggleFollowingProgress(false, user.id);
                      unfollow(user.id);
                    }
                });
              }}>Unfollow</button> :
              <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                toggleFollowingProgress(true, user.id);
                usersAPI.followUser(user.id).then((data) => {
                  if (data.resultCode === 0) {
                    toggleFollowingProgress(false, user.id);
                    follow(user.id);
                  }
                })
              }}>Follow</button>
          }
        </span>
      </p>
    </li>
  );
};

export default User;
