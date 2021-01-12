import React from 'react'
import Header from '../Headers/PrincipalPageHeader'

import Project from './Project/Project'
import styles from './Projects.module.css'
import { connect } from 'react-redux';

function Projects(props) {
    return (
        <div>
            <Header isauth={!!props.token}/>
            <div className={styles.projects}>
                {props.projects.map(ctrl => {
                    return <Project key={ctrl.id} projectName={ctrl.name}></Project>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        token: state.auth.access_token
    }
}

export default connect( mapStateToProps, null )(Projects)
