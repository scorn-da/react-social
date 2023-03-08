import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';
import Pagination from "src/components/common/Pagination/Pagination";

export const Users = (props) => {
  const { follow, unfollow, totalUsers, pageSize, usersPage, currentPage, onPageChanged, followingInProgress, toggleFollowingProgress } = props;

  return (<section>
    <Pagination totalUsers={totalUsers} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
    {
      usersPage &&
      <ul className={styles.users}>
        {usersPage.map(user => {
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
