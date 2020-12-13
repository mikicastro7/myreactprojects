import React from 'react'
import Project from './Project'
import styles from './Project.module.css'

import MyTodoListImg from './ImgProject/MyTodoList.png'

const Projects = () => {

    const MyTodoListDesc = "This project is my own Todo List made with Bootstrap modals and the backend is a Laravel API";
    const MyTodoListGit = "https://github.com/mikicastro7/mytodolist"
    const MyTodoListLink = "/myTodoList"

    return (
        <div className={styles.projectsContianer}>
            <Project linkProject={MyTodoListLink} github={MyTodoListGit} description={MyTodoListDesc} title="MyTodoList" img={MyTodoListImg} />
            
        </div>
    )
}

export default Projects