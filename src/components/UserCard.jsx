import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFriend: false,
        };
    }

    toggleleFriendStatus = () => {
        this.setState((prevState) => ({
            isFriend: !prevState.isFriend
        }));
    }

    render() {
        const { id, name, gender } = this.props;
        const { isFriend } = this.state;
        
        return (
        <div className={`user-card ${gender}`}>
            <p>Айді користувача: {id}</p>
            {name ? `Ім'я: ${name}` : "ім'я відсутнє"}
            <p>Гендер користувача: {gender}</p>

            <button onClick={this.toggleleFriendStatus}>{isFriend ? "Прибрати друга" : "Додати друга"}</button>
        </div>
        )
    }
}

export default UserCard;