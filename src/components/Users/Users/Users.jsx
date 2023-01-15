import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';

export const Users = (props) => {
  const { follow, unfollow, totalUsers, pageSize, usersPage, currentPage, onPageChanged, followingInProgress, toggleFollowingProgress } = props;
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
            onPageChanged(page);
          }}>{page}</button>
        )
      })}
    </ul>
    {
      usersPage?.users &&
      <ul className={styles.users}>
        {usersPage?.users.map(user => {
          return (
            <User user={user} follow={follow}
                  unfollow={unfollow} key={user.id} followingInProgress={followingInProgress} toggleFollowingProgress={toggleFollowingProgress} />
          )
        })}
      </ul>
    }
  </section>)
}

export default Users;
