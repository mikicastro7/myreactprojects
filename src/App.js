import './App.css';
import { Route } from 'react-router-dom';

import LoginRegister from './containers/LoginRegister/LoginRegister'
import PrincipalPage from './containers/PrincipalPage/PrincipalPage'
import MyTodoList from './containers/MyTodoList/MyTodoList'
import Logout from './containers/LoginRegister/Logout'
import MyComments from './containers/MyComments/MyCommentProjects'

import MyFormsPanel from './containers/MyForms/MyFormsPanel'
import MyFormsEdit from './containers/MyForms/MyFormsEdit'
import MyFormsRespond from './containers/MyForms/MyFormsRespond'
import MyFormsResponsesPanel from './containers/MyForms/MyFormsResponsesPanel'
import MyFormsResponsesWatch from './containers/MyForms/MyFormsWatch'

function App() {
  return (
      <div>
        <Route path="/" exact component={PrincipalPage} />
        <LoginRegister />
        <Route path="/myTodoList" exact component={MyTodoList} />
        <Route path="/myComments" exact component={MyComments} />
        <Route path="/myComments/:name" exact component={MyComments} />
        <Route path="/logout" exact component={Logout} />

        <Route  path={"/myForms"} exact component={() => <MyFormsPanel  />}  />
        <Route  path={"/myForms/editForm/:id"} exact component={() => <MyFormsEdit  />}  />
        <Route  path={"/myForms/respondForm/:key"} exact component={() => <MyFormsRespond  />}  />
        <Route  path={"/myForms/responses"} exact component={() => <MyFormsResponsesPanel  />}  />
        <Route  path={"/myForms/responses/watch/:id"} exact component={() => <MyFormsResponsesWatch  />}  />
      </div>
  );
}

export default App;
