import UserList from './components/UserList-L/UserList';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Мій додаток</h1>
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