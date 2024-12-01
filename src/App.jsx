import UserCard from './components/UserCard';
import UserList from './components/UserList-L/UserList';
import React from 'react';

class App extends React.Component {
  render() {
    
    const users = [
      { id: 1, name: "Іван", gender: "male", age: 25 },
      { id: 2, name: "Олена", gender: "female", age: 30 },
      { id: 3, name: "Петро", gender: "male", age: 35 },
    ];

    return (
      <div>
        <h1>Мій додаток</h1>

        {/* Відображення окремих карток користувачів */}
        <div> 
          <h2>Окремі картки</h2>
          <UserCard id="1" name="" gender="male" />
          <UserCard id="2" name="Антон" gender="male" />
          <UserCard id="3" name="" gender="female" />
          <UserCard id="4" name="Гість" gender="other" />
        </div>

        {/* Відображення списку користувачів */}
        <div>
          <h2>Список користувачів</h2>
          <UserList users={users}/>
        </div>
      </div>
    );
  }
}

export default App;