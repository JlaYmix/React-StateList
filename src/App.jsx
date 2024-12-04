import UserCard from './components/UserCard';
import UserList from './components/UserList-L/UserList';
import React from 'react';

class App extends React.Component {
  render() {
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
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;