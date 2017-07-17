import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.signOutUser();
    }

    render() {
        return(
            <div>
                <h3>See ya!</h3>
            </div>
        );
    }
}

export default connect(null, actions)(SignOut);