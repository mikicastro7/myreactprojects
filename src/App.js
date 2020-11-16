import './App.css';
import { Route } from 'react-router-dom';

import LoginRegister from './containers/LoginRegister/LoginRegister'
import PrincipalPage from './containers/PrincipalPage/PrincipalPage'


function App() {
  return (
      <div>
        <Route path="/" exact component={PrincipalPage} />
        <LoginRegister />
      </div>
  );
}

export default App;
