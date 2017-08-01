import { createFragmentContainer, graphql } from 'react-relay';
import Location from './Location';

const LocationsList = ({ data }) => {
  return (
    <div>
      Loaded: {data.allLocations.edges.length}
      <ol>
        {data.allLocations.edges.map(({ node, cursor }) =>
          <Location data={node} key={cursor} />,
        )}
      </ol>
    </div>
  );
};

export default createFragmentContainer(
  LocationsList,
  graphql`
    fragment LocationsList on RootQuery {
      allLocations(search: "San") {
        edges {
          cursor
          node {
            ...Location
          }
        }
      }
    }
  `,
);
