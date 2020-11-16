import React from 'react'
import { Link } from 'react-router-dom';
import styles from './LoginRegisterHeader.module.css';

const LoginRegisterHeader = () => {
    return (
        <nav className={styles.principalNav}>
            <Link className={`${styles.noUnder} ${styles.baner}`} to='/'>MyProjects</Link>
        </nav>
    )
}

export default LoginRegisterHeader