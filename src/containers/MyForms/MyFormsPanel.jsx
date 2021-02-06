import React, { Component } from 'react'
import Header from '../../components/Headers/PrincipalPageHeader';
import FormPanelElements from '../../components/MyForms/FormPanelElements/FormPanelElements'
import Axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class MyFormsPanel extends Component {
  state = {
    forms: []
  }

  componentDidMount() {
    Axios.get('form_question')
      .then(response => {
        this.setState({ forms: response.data.forms })
      })
  }

  AddFormHandler = () => {
    let formElements = [{
      id: 1,
      formType: "input",
      formLabel: "First question",
      value: "",
      require: true,
    }]
    Axios({
      method: 'post',
      url: 'form_question',
      data: {
        title: "New form",
        description: "This is a new form edit it",
        form_elements: JSON.stringify(formElements)
      }
    }).then(response => {
      const newForm = {
        id: response.data.form_question.id,
        title: response.data.form_question.title,
        description: response.data.form_question.description,
        updated_at: response.data.form_question.updated_at,
        created_at: response.data.form_question.created_at,
        form_key: response.data.form_question.form_key
      }
      this.setState({
        forms: [...this.state.forms, newForm]
      })
    });
  }

  DeleteFormHandler = (id) => {
    this.setState({
      forms: this.state.forms.filter(form =>
        form.id !== id
      )
    })
    Axios.delete('form_question/' + id)
  }

  CopiFormHandler = (id) => {
    Axios({
      method: 'post',
      url: 'form_question/copy/' + id,
    }).then(response => {
      const newForm = {
        id: response.data.form_question.id,
        title: response.data.form_question.title,
        description: response.data.form_question.description,
        updated_at: response.data.form_question.updated_at,
        created_at: response.data.form_question.created_at
      }
      this.setState({
        forms: [...this.state.forms, newForm]
      })
    })
  }

  render() {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.token
    return (
      <div>
        {this.props.token === null ?
          <Redirect to="/login"></Redirect>
          :
          <React.Fragment>
            <Header isauth={!!this.props.token}></Header>
            <FormPanelElements
              forms={this.state.forms}
              AddFormHandler={this.AddFormHandler}
              DeleteFormHandler={this.DeleteFormHandler}
              copiFormHandler={this.CopiFormHandler}
            />
          </React.Fragment>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.access_token,
    name: state.auth.name
  }
}

export default connect(mapStateToProps, null)(MyFormsPanel)

