import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {

    handleFormSubmit({ email, password }) {
        this.props.signInUser({ email, password });
    }

    renderField(field) {
        return(
            <div>
                <input { ...field.input } type={ field.type } className="form-control" />
            </div>
        );
    }

    renderMessage() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! </strong> { this.props.errorMessage }
                </div>
            );
        }
    }
    
    render() {

        const { handleSubmit } = this.props; // handleSubmit is a helper from redux-form
        
        return(
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                <fieldset className="form-group">
                    <label htmlFor="">Email:</label>
                    <Field type="email" name="email" component={ this.renderField } />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="">Password:</label>
                    <Field type="password" name="password" component={ this.renderField } />
                </fieldset>

                { this.renderMessage() }
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

const signInForm = reduxForm({ form: 'signin' })(SignIn);
export default connect(mapStateToProps, actions)(signInForm);