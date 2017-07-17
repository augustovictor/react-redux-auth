import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

    handleFormSubmit({ name, email, password }) {
        this.props.signUpUser({ name, email, password });
    }

    renderField(field) {
        const { error, touched } = field.meta;
        return (
            <div>
                <input { ...field.input } type={ field.type } className="form-control" />
                { touched && error && <span className="text-danger">{ error }</span> }

            </div>
        );
    }

    renderMessages() {
        if(this.props.errorMessage) {
            console.log(this.props.errorMessage);
            return <i>We got errors.</i>
        }
    }
    
    render() {
        const { handleSubmit } = this.props;

        return(
            <div>
                <h1>Sign up</h1>
                <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                    <fieldset className="form-group">
                        <label htmlFor="">Name</label>
                        <Field type="name" name="name" component={ this.renderField } />
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="">Email</label>
                        <Field type="email" name="email" component={ this.renderField } />
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="">Password</label>
                        <Field type="password" name="password" component={ this.renderField } />
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="">Confirm password</label>
                        <Field type="password" name="passwordConfirm" component={ this.renderField } />
                    </fieldset>

                    { this.renderMessages() }

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if(formProps.password !== formProps.passwordConfirm) errors.password = 'Passwords must match.';

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const signupForm = reduxForm({ form: 'signup', validate })(SignUp);
export default connect(mapStateToProps, actions)(signupForm);