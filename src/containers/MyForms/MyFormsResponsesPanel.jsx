import React, { Component } from 'react'
import Axios from 'axios';

import style from './MyFormsResponsesPanel.module.css'
import FormResponseElement from '../../components/MyForms/FormResponsesPanel/FormResponseElement'
import Header from '../../components/Headers/PrincipalPageHeader'
import PanelHeader from '../../components/MyForms/FormPanelElements/PanelHeader/PanelHeader'

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class MyFormsResponsesPanel extends Component {

    state = {
        forms: []
    }

    componentDidMount() {
        Axios.get('form_response/respondedForms')
            .then(response => {
                this.setState({ forms: response.data.forms })
            })
    }

    DeleteFormHandler = (id) => {
        this.setState({
            forms: this.state.forms.filter(form =>
                form.id !== id
            )
        })
        Axios.delete('form_response/delete/' + id)
    }

    render() {
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.token
        return (
            <div>
                {this.props.token === null ?
                    <Redirect to="/login"></Redirect>
                    :
                    <React.Fragment>
                        <Header isauth={!!this.props.token} />
                        <PanelHeader />
                        <div className={style.container}>
                            {this.state.forms.map(ele => {
                                return <FormResponseElement
                                    id={ele.id}
                                    key={ele.id}
                                    title={ele.title}
                                    created_at={ele.created_at}
                                    description={ele.description}
                                    checked={ele.checked}
                                    DeleteFormHandler={this.DeleteFormHandler}
                                />
                            })}
                        </div>
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

export default connect(mapStateToProps, null)(MyFormsResponsesPanel)