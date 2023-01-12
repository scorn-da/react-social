import React from 'react';
import styles from 'src/components/Users/User/User.module.css';
import userIcon from 'src/assets/images/user_icon.svg';
import { NavLink } from "react-router-dom";
import { usersAPI } from "src/api/api";

const User = ({ user, follow, unfollow }) => {
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
            user.followed ?
              <button onClick={() => {
                usersAPI.unfollowUser(user.id).then((data) => {
                    if (data.resultCode === 0) {
                      unfollow(user.id)
                    }
                })
                unfollow(user.id);
              }}>Unfollow</button> :
              <button onClick={() => {
                usersAPI.followUser(user.id).then((data) => {
                  if (data.resultCode === 0) {
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
