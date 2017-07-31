import { QueryRenderer, graphql } from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  RecordSourceInspector,
} from 'relay-runtime';
import Location from './Location';

async function fetchQuery(operation, variables) {
  const response = await fetch(
    'https://mh67geuwe5.execute-api.eu-west-1.amazonaws.com/dev/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    },
  );

  return response.json();
}

const source = new RecordSource();
const inspector = new RecordSourceInspector(source);
const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(source),
});

export default () =>
  <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      query AppQuery {
        allLocations(search: "San") {
          edges {
            cursor
            node {
              ...Location
            }
          }
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (props) {
        const locations = props.allLocations.edges;
        return (
          <div>
            Loaded: {locations.length}
            <ol>
              {locations.map(({ node, cursor }) =>
                <Location data={node} key={cursor} />,
              )}
            </ol>
          </div>
        );
      } else {
        return <div>Loading</div>;
      }
    }}
  />;
