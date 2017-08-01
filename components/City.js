import { createFragmentContainer, graphql } from 'react-relay';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {
  subItem: {
    marginLeft: '10px'
  }
};

const City = ({ data }) => {
  if (!data) return null;
  return (
    <List>
      <ListItem>
        <ListItemText primary={`City: ${data.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Slug: ${data.slug}`} />
      </ListItem>
    </List>
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
