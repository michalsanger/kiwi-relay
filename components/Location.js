import { createFragmentContainer, graphql } from 'react-relay';
import City from './City';

const Location = ({ data }) => {
  return (
    <li key={data.locationId}>
      {data.name}
      <City data={data.city} />
    </li>
  );
};

export default createFragmentContainer(
  Location,
  graphql`
    fragment Location on Location {
      locationId
      name
      city {
        ...City
      }
    }
  `
);
