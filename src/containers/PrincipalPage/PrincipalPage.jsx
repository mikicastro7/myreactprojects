import React, { Component } from 'react'
import Header from '../../components/Headers/PrincipalPageHeader'
import { connect } from 'react-redux';

import Projects from '../../components/PrincipalPage/MyProjects/Projects'

class PrincipalPage extends Component {
    render() {
        return (
        <div>
            <Header isauth={this.props.token}></Header>
            <Projects />
        </div>
        )
    }
    
}

const mapStateToProps = state => {
    return{
        token: state.auth.access_token !== null
    }
  }


export default connect( mapStateToProps, null )( PrincipalPage );