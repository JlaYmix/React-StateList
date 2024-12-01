import React, { Component } from 'react';
import UserCard from '../UserCard';

class UserList extends Component {
    render() {
        const { users } = this.props;

        const UserListCard = users.map((user) => (
            <UserCard 
            key={user.id}
            id={user.id}
            name={user.name}
            gender={user.gender}
            />
        ));

        return (
        <div className='user-list'>
            {UserListCard}
        </div>
        )
    }
}

export default UserList;