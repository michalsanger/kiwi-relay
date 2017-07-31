import { createFragmentContainer, graphql } from 'react-relay';

const City = ({ data }) => {
  if (!data) return null;
  return (
    <ul>
      <li>
        City: {data.name}
      </li>
      <li>
        Slug: {data.slug}
      </li>
    </ul>
  );
};

export default createFragmentContainer(
  City,
  graphql`
    fragment City on LocationArea {
      name
      slug
    }
  `
);
