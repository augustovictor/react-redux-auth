import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        const users = this.props.users;
        if(users) {
            return(
                <ul>
                    { 
                        _.map(users, user => {
                            return <li key={ user._id }>{ user._id }</li>
                        })
                    }
                </ul>
            );
        }
    }

    render() {
        return(
            <div>
                List of users
                { this.renderUsers() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.auth.users };
}

export default connect(mapStateToProps, actions)(Feature);