import React from 'react';
import User from "src/components/Users/User/User";
import styles from 'src/components/Users/Users/Users.module.css';
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsers(response.data.totalCount);
    });
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render = () => {
    const numberOfPages = Math.ceil(this.props.totalUsers / this.props.pageSize);
    const pages = [];
    for(let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }

    return (<section>
      <ul>
        {pages.map(page => {
          return (
            <button className={this.props.currentPage === page && styles.selected } onClick={() => {
              this.onPageChanged(page)
            }}>{page}</button>
          )
        })}
      </ul>
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
