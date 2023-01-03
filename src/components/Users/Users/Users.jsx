import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';

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
        {usersPage?.users.map(user => <User key={user.id} user={user} follow={follow}
                                            unfollow={unfollow}/>)}
      </ul>
    }
  </section>)
}

export default Users;
