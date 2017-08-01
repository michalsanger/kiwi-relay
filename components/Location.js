import { createFragmentContainer, graphql } from 'react-relay';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import City from './City';

const Location = ({ data }) => {
  return (
    <Card key={data.locationId}>
      <CardContent>
        <Typography type="headline" component="h2">
          {data.name}
        </Typography>

        <Typography component="div">
          <City data={data.city} />
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{ flex: '1 1 auto' }} />
        <Button color="primary" dense>
          Learn More
        </Button>
      </CardActions>
    </Card>
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
