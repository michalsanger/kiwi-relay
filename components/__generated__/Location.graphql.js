/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Location = {|
  +locationId: ?string;
  +name: ?string;
  +city: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Location",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "locationId",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LocationArea",
      "name": "city",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "City",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Location"
};

module.exports = fragment;
