import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Project.module.css'


const Project = (props) => {
    return (
            <div className={styles.projectContainer}>
                <img className={styles.image} alt="mytodolist" src={props.img}/>
                <h2 className={styles.projectTitle}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
                <div className={styles.links}>
                    <a className={styles.link} href={props.github}>Github Code</a>
                    <Link className={styles.link} to={props.linkProject}>Live Project</Link>
                </div>
            </div>
    )
}

export default Project