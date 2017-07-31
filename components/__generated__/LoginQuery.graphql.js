/**
 * @flow
 * @relayHash 63bde72e7d56f115a8ecd9a8443829fa
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LoginQueryResponse = {|
  +currentUser: ?{| |};
|};
*/


/*
query LoginQuery {
  currentUser {
    ...UserInfo_user
    id
  }
}

fragment UserInfo_user on Identity {
  id
  email
  lastName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserInfo_user",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LoginQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "LoginQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "email",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lastName",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query LoginQuery {\n  currentUser {\n    ...UserInfo_user\n    id\n  }\n}\n\nfragment UserInfo_user on Identity {\n  id\n  email\n  lastName\n}\n"
};

module.exports = batch;
