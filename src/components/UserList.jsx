import React, { Component } from 'react';
import UserCard from './UserCard.jsx';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [
                { id: 1, name: "Іван", gender: "male" },
                { id: 2, name: "Олена", gender: "female" },
                { id: 3, name: "Петро", gender: "male" },
            ],
        };
    }
    render() {
        const UserListCard = this.state.user.map((user) => (
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