import React, { Component } from 'react';
import environment from './Environment';
import { QueryRenderer, graphql } from 'react-relay';
import UserInfo from './UserInfo';
import LoginButton from './LoginButton';

export default () =>
  <QueryRenderer
    environment={environment}
    query={graphql`
      query LoginQuery {
        currentUser {
          ...UserInfo_user
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return (
          <div>
            {error.message}
          </div>
        );
      } else if (props && props.currentUser) {
        return <UserInfo user={props.currentUser} />;
      }
      return <LoginButton />;
    }}
  />;
