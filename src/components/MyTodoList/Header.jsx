import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="headercontainer">
                <Link className="headerMyProjects" to="/">MyProjects</Link>
                <h1 className="headerTitle">MyTodolist</h1>
            </div>
        )
    }
}
