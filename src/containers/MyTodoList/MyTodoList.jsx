import React, { Component } from 'react'

import Header from "../../components/MyTodoList/Header";
import AddTodoButton from "../../components/MyTodoList/AddTodo/AddTodoButton"
import Todos from "../../components/MyTodoList/Todos"
import './myTodo.css'
import Axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class MyTodoList extends Component {
  state = {
    todos:[]
  }
  

  componentDidMount() {
    Axios.get('userTodos')
      .then(response => {
        this.setState({todos : response.data.todo})
      })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          
          Axios({
            method: 'patch',
            url: 'todo/' + id,
            data: {
              completed : !todo.completed,
              title : todo.title,
              description : todo.description,
              priority : todo.priority
            }
          });
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  editTodo = (id, title, description, priority) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          Axios({
            method: 'patch',
            url: 'todo/' + id,
            data: {
              title : title,
              description : description,
              priority : priority
            }
          });
            todo.title = title
            todo.description = description
            todo.priority = priority
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => 
        todo.id !== id
      )
    })
    Axios.delete('todo/' + id)

  }

  addTodo = (title, description, priority) => {
    Axios({
      method: 'post',
      url: '/todo',
      data: {
        title : title,
        description : description,
        priority : priority,
        completed : false,
      }
    }).then(response =>{
      const newTodo = {
        id : response.data.todo.id,
        title: title,
        description: description,
        priority: priority,
        completed: false,
        created_at : response.data.todo.created_at
      }
      this.setState({
        todos : [...this.state.todos, newTodo]
      })
    });

    
    
  }


  render() {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.token 
    
    return (
      
      <div>
        {this.props.token === null ?
          <Redirect to="/login"></Redirect>
        : 
        <React.Fragment>
          <Header></Header>
          <AddTodoButton AddTodo={this.addTodo}></AddTodoButton>
          <Todos EditTodo={this.editTodo} DeleteTodo={this.deleteTodo} MarkComplete={this.markComplete} Todos={this.state.todos}></Todos>
        </React.Fragment>
        }
        
        
        
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{
      token: state.auth.access_token
  }
}

export default connect( mapStateToProps, null )(MyTodoList)