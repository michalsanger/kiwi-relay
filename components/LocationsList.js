import { createFragmentContainer, graphql } from 'react-relay';
import Location from './Location';

const LocationsList = ({ data }) =>
  <ol>
    {data.edges.map(({ node, cursor }) =>
      <Location data={node} key={cursor} />,
    )}
  </ol>;

export default createFragmentContainer(
  LocationsList,
  graphql`
    fragment LocationsList on RootQuery {
      LocationsList: allLocations(search: "San") {
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
