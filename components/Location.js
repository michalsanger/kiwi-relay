import { createFragmentContainer, graphql } from 'react-relay';

const Location = ({ data }) =>
  <li key={data.locationId}>
    {data.name}
  </li>;

export default createFragmentContainer(
  Location,
  graphql`
    fragment Location on Location {
      locationId
      name
    }
  `,
);
