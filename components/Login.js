import React, { Component } from 'react';
import environment from './Environment';
import { QueryRenderer, graphql } from 'react-relay';
import UserInfo from './UserInfo';
import LoginButton from './LoginButton';

export default props => {
  if (props && props.currentUser) {
    return <UserInfo user={props.currentUser} />;
  }
  return <LoginButton />;
};
