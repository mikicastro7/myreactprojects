import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Headers/LoginRegisterHeader'
import styles from './Login.module.css';
import * as actions from '../../store/actions/index';

class Login extends Component {
    state = {
        Username: '',
        Password: '',
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.Username, this.state.Password );
    }
    
    render() {
        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p style={{color:"red"}}>{this.props.error}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to="/" />
        }
        return (
            <div>
                <Header></Header>
                <div className={styles.centerForm}>
                    <div className={styles.topBar}>
                        <div className={styles.topBarContainer}>
                            <p className={styles.login}>Login</p>
                        </div>
                        <div className={styles.topBarContainer}>
                            <Link to="/register" className={styles.noUn}><p className={styles.register}>Register</p></Link>
                        </div>
                    </div>
                    <div className={styles.bodyForm}>
                        <h3 className={styles.formTitle}>Welcome login</h3>
                        {authRedirect}
                        {errorMessage}
                        <form onSubmit={this.submitHandler}>
                            <label className={styles.formLabel}>Username</label>
                            <input onChange={(event) => this.setState({Username: event.target.value})} placeholder="Username" className={styles.formInput} type="text"/>
                            <label style={{marginTop : "20px"}} className={styles.formLabel}>Password</label>
                            <input onChange={(event) => this.setState({Password: event.target.value})} placeholder="Password"  className={styles.formInput} type="password"/>
                            <button className={styles.formButton}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        error: state.auth.error,
        isAuth: state.auth.access_token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( name, password ) => dispatch( actions.auth( name, password ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );