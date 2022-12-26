import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';
import axios from "axios";

class Users extends React.Component {
  constructor (props) {
    super(props);

    axios('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
      this.props.setUsers(response.data.items);
    });
  }
  render = () => {
    return (<section>
      <ul className={styles.users}>
        {this.props.usersPage.users.map(user => <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow} />)}
      </ul>
      <button onClick={this.getUsers}>
        Show users
      </button>
    </section>)
  }
}

export default Users;
