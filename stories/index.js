import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import LocationsList from '../components/LocationsList.js';
import Location from '../components/Location.js';
import StubContainer from 'react-storybooks-relay-container';
import City from '../components/City.js';

storiesOf('Locations', module)
  .add('LocationsList', () => {
    const props = {
      data: {
        allLocations: {
          edges: [
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
              node: {
                locationId: 'SAN',
                name: 'San Diego International',
                city: {
                  slug: 'san-diego-california-united-states',
                  name: 'San Diego',
                },
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
              node: {
                locationId: 'san-diego_ca_us',
                name: 'San Diego',
                city: null,
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
              node: {
                locationId: 'san-francisco_ca_us',
                name: 'San Francisco',
                city: null,
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
              node: {
                locationId: 'SFO',
                name: 'San Francisco International',
                city: {
                  slug: 'san-francisco-california-united-states',
                  name: 'San Francisco',
                },
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              node: {
                locationId: 'san-juan_pr_pr',
                name: 'San Juan',
                city: null,
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjU=',
              node: {
                locationId: 'saint-petersburg_ru',
                name: 'Saint Petersburg',
                city: null,
              },
            },
          ],
        },
      },
    };

    return <StubContainer Component={LocationsList} props={props} />;
  })
  .add('Location', () => {
    const props = {
      data: {
        locationId: 'SAN',
        name: 'San Diego International',
        city: { slug: 'san-diego-california-united-states', name: 'San Diego' },
      },
    };
    return <Location {...props} />;
  })
  .add('City', () =>
    <City {...{ data: { name: 'Prague', slug: 'prague-cz' } }} />,
  );
