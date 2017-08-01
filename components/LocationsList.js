import { createFragmentContainer, graphql } from 'react-relay';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Location from './Location';

const styles = {
  header: {
    textAlign: 'center',
    padding: '10px 0 5px 0'
  },
  container: {
    margin: '100px auto 0 auto',
    maxWidth: 400
  },
  list: {
    width: '100%'
  }
};

const LocationsList = ({ data }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Paper style={styles.header} elevation={4}>
          <Typography type="display1" gutterBottom>
            Locations
          </Typography>
          <Typography type="subheading" gutterBottom>
            Loaded: {data.allLocations.edges.length}
          </Typography>
        </Paper>
      </div>
      <div className={styles.list}>
        <List>
          {data.allLocations.edges.map(({ node, cursor }) =>
            <Location data={node} key={cursor} />
          )}
        </List>
      </div>
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
  `
);
