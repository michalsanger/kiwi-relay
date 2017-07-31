import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class UserInfo extends Component {
  render() {
    return (
      <div>
        Logged in as: {this.props.user.lastName}
      </div>
    );
  }
}

export default createFragmentContainer(
  UserInfo,
  graphql`
    fragment UserInfo_user on Identity {
      id
      email
      lastName
    }
  `
);
