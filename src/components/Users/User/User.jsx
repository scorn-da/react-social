import React from 'react';
import styles from 'src/components/Users/User/User.module.css';
import userIcon from 'src/assets/images/user_icon.svg';
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = ({ user, follow, unfollow }) => {
  console.log(user)
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
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                    headers: {
                      'API_KEY': '89d414f2-0dbc-4866-90b0-d7b723fefc70',
                    }
                  }).then((response) => {
                    if (response.data.resultCode === 0) {
                      unfollow(user.id)
                    }
                })
                unfollow(user.id);
              }}>Unfollow</button> :
              <button onClick={() => {
                axios.post(`https://cors-anywhere.herokuapp.com/https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API_KEY': '89d414f2-0dbc-4866-90b0-d7b723fefc70',
                  }
                }).then((response) => {
                  if (response.data.resultCode === 0) {
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
