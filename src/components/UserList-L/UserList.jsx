import React, { Component } from 'react';
import UserCard from '../UserCard';

class UserList extends Component {
    state = { 
        users: [
            { id: 1, name: "Іван", gender: "male", age: 25 },
            { id: 2, name: "Олена", gender: "female", age: 30 },
            { id: 3, name: "Петро", gender: "male", age: 35 },
        ],
    } 
    render() {
        const { users } = this.state;
        const userListCard = users.map((user) => (
            <UserCard 
                key={user.id}
                id={user.id}
                name={user.name}
                gender={user.gender}
            />
        ));
        
        return (
            <div>
                {userListCard}
            </div>
        )
    }
}

export default UserList;