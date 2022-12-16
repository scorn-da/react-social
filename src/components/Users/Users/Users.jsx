import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';

const Users = ({ usersPage, follow, unfollow, setUsers }) => {
  const { users } = usersPage;

  const onShowClick = () => {
    setUsers();
  }

  return (
    <section>
      <ul className={styles.users}>
        {users.map(user => <User key={user.id} user={user} follow={follow} unfollow={unfollow} />)}
      </ul>
      <button onClick={onShowClick}>
        Show users
      </button>
    </section>
  );
};

export default Users;
