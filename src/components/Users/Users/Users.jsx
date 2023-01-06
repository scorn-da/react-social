import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';
import { NavLink } from "react-router-dom";

const Users = ({ props, onPageChanged }) => {
  const { totalUsers, pageSize, currentPage, usersPage, follow, unfollow } = props;
  const numberOfPages = Math.ceil(totalUsers / pageSize);
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (<section>
    <ul>
      {pages.map(page => {
        return (
          <button key={page} className={currentPage === page ? styles.selected : undefined} onClick={() => {
            onPageChanged(page)
          }}>{page}</button>
        )
      })}
    </ul>
    {
      usersPage?.users &&
      <ul className={styles.users}>
        {usersPage?.users.map(user => {
          return (
            <NavLink to={'/profile/' + user.id } key={user.id}>
              <User user={user} follow={follow}
                    unfollow={unfollow}/>
            </NavLink>
          )
        })}
      </ul>
    }
  </section>)
}

export default Users;
