import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      identity {
        id
        lastName
      }
      isLoggedIn
      token
    }
  }
`;

function commit(environment, email, password) {
  const variables = {
    email,
    password,
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      console.log('Success!', response);
      if (localStorage) {
        localStorage.setItem('token', response.login.token);
      }
      return response;
    },
    updater: proxyStore => {
      const login = proxyStore.getRootField('login');
      const identity = login.getLinkedRecord('identity');
      proxyStore.get('client:root').setLinkedRecord(identity, 'currentUser');
    },
    onError: err => console.error(err),
  });
}

export default { commit };
