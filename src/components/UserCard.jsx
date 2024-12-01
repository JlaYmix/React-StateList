import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
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
        
        const ErrorName = name ? <p>Ім'я користувача: {name}</p> : <p>Ім'я користувача: відсутнє</p>;
        
        return (
        <div className={`user-card ${gender}`}>
            <p>Айді користувача: {id}</p>
            {ErrorName}
            <p>Гендер користувача: {gender}</p>

            <button onClick={this.toggleleFriendStatus}>{isFriend ? "Прибрати друга" : "Додати друга"}</button>
        </div>
        )
    }
}

export default UserCard;