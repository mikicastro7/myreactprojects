import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PrincipalPageHeader.module.css';

const LoginRegisterHeader = () => {
    return (
        <nav className={styles.principalNav}>
            <Link className={`${styles.noUnder} ${styles.baner}`} to='/'>MyProjects</Link>
            <div className={styles.logRe}>
                <Link className={styles.login} to='/login'>Login</Link>
                <Link className={styles.register} to='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default LoginRegisterHeader