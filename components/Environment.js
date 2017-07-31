import {
  Environment,
  Network,
  RecordSource,
  Store,
  RecordSourceInspector
} from 'relay-runtime';

import Location from './Location';
import Login from './Login';

async function fetchQuery(operation, variables) {
  const token = localStorage ? localStorage.getItem('token') : '';

  const response = await fetch(
    'https://mh67geuwe5.execute-api.eu-west-1.amazonaws.com/dev/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    }
  );

  return response.json();
}

const source = new RecordSource();

export const inspector = new RecordSourceInspector(source);

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(source)
});

export default environment;
