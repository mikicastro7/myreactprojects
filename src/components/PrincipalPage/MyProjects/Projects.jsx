import React from 'react'
import Project from './Project'
import styles from './Project.module.css'

import MyTodoListImg from './ImgProject/MyTodoList.png'
import MyCommentsImg from './ImgProject/MyComments.png'
import MyFormsImg from './ImgProject/MyForms.png'

const Projects = () => {

    const MyTodoListDesc = "This project is my own Todo List made with Bootstrap modals and the backend is a Laravel API";
    const MyTodoListGit = "https://github.com/mikicastro7/mytodolist"
    const MyTodoListLink = "/myTodoList"

    const MyCommentsDesc = "In this project you can comment and rate my projects";
    const MyCommentsGit = "https://github.com/mikicastro7/mycomments-puntuation"
    const MyCommentsLink = "/myComments"

    const MyFormsDesc = "This projects it's like a google forms but it's called myForms";
    const MyFormsGit = "https://github.com/mikicastro7/myforms";
    const MyFormsLink = "/myForms";

    return (
        <div className={styles.projectsContianer}>
            <Project linkProject={MyTodoListLink} github={MyTodoListGit} description={MyTodoListDesc} title="MyTodoList" img={MyTodoListImg} />
            <Project linkProject={MyCommentsLink} github={MyCommentsGit} description={MyCommentsDesc} title="MyComments" img={MyCommentsImg} />
            <Project linkProject={MyFormsLink} github={MyFormsGit} description={MyFormsDesc} title="MyForms" img={MyFormsImg} />

        </div>
    )
}

export default Projects