import { QueryRenderer, graphql } from 'react-relay';
import environment from './Environment';
import LocationsList from './LocationsList';
import Login from './Login';

export default () =>
  <div>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          ...LocationsList
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (props) {
          return (
            <div>
              <LocationsList data={props} />
            </div>
          );
        } else {
          return <div>Loading</div>;
        }
      }}
    />
    <Login />
  </div>;
