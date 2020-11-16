import React from 'react';
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

import { Route } from 'react-router-dom';

const LoginRegister = () => {
    return (
        <div>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
        </div>
    )
}

export default LoginRegister