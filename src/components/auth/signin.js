import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {

    handleFormSubmit({ email, password }) {
        console.log(email, ' ', password);
    }

    renderField(field) {
        return(
            <div>
                <input { ...field.input } type={ field.type } className="form-control" />
            </div>
        );
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
                    <label htmlFor="">Email:</label>
                    <Field type="password" name="password" component={ this.renderField } />
                </fieldset>

                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin', // Where the data of this form will be stored in state
    fields: ['email','password'] // Gives us access to this.props.email and this.props.password
})(SignIn);