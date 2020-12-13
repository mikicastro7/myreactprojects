import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../Headers/LoginRegisterHeader'
import styles from './Register.module.css';
import * as actions from '../../store/actions/index';

class Register extends Component {
    state = {
        Username: '',
        Password: '',
        ConfirmPassword: ''
    }
    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.Username, this.state.Password, this.state.ConfirmPassword );
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
                            <Link to="/login" className={styles.noUn}><p className={styles.login}>Login</p></Link>
                        </div>
                        <div className={styles.topBarContainer}>
                            <p className={styles.register}>Register</p>
                        </div>
                    </div>
                    <div className={styles.bodyForm}>
                        <h3 className={styles.formTitle}>Welcome register</h3>
                        {errorMessage}
                        {authRedirect}
                        <form onSubmit={this.submitHandler}>
                            <label className={styles.formLabel}>Username</label>
                            <input onChange={(event) => this.setState({Username: event.target.value})} placeholder="Username" className={styles.formInput} type="text"/>
                            <label style={{marginTop : "20px"}} className={styles.formLabel}>Password</label>
                            <input onChange={(event) => this.setState({Password: event.target.value})} placeholder="Password"  className={styles.formInput} type="password"/>
                            <label style={{marginTop : "20px"}} className={styles.formLabel}>Password confimartion</label>
                            <input onChange={(event) => this.setState({ConfirmPassword: event.target.value})} placeholder="Password confirmation"  className={styles.formInput} type="password"/>
                            <button className={styles.formButton}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuth: state.auth.access_token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( name, password, confirmPassword ) => dispatch( actions.auth( name, password, confirmPassword ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Register );