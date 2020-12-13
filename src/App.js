import './App.css';
import { Route } from 'react-router-dom';

import LoginRegister from './containers/LoginRegister/LoginRegister'
import PrincipalPage from './containers/PrincipalPage/PrincipalPage'
import MyTodoList from './containers/MyTodoList/MyTodoList'
import Logout from './containers/LoginRegister/Logout'

function App() {
  return (
      <div>
        <Route path="/" exact component={PrincipalPage} />
        <LoginRegister />
        <Route path="/myTodoList" exact component={MyTodoList} />
        <Route path="/logout" exact component={Logout} />
      </div>
  );
}

export default App;
