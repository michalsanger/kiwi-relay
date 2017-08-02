/**
 * @flow
 * @relayHash 2843b40eb84d718d048c8a280c5fd219
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +currentUser: ?{| |};
|};
*/


/*
query AppQuery {
  ...LocationsList
  currentUser {
    ...UserInfo_user
    id
  }
}

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

fragment UserInfo_user on Identity {
  id
  email
  lastName
}

fragment Location on Location {
  locationId
  name
  city {
    ...City
  }
}

fragment City on LocationArea {
  name
  slug
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsList",
        "args": null
      },
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
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "search",
            "value": "San",
            "type": "String"
          }
        ],
        "concreteType": "LocationConnection",
        "name": "allLocations",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LocationEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "name": "node",
                "plural": false,
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "slug",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allLocations{\"search\":\"San\"}"
      },
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
  "text": "query AppQuery {\n  ...LocationsList\n  currentUser {\n    ...UserInfo_user\n    id\n  }\n}\n\nfragment LocationsList on RootQuery {\n  allLocations(search: \"San\") {\n    edges {\n      cursor\n      node {\n        ...Location\n      }\n    }\n  }\n}\n\nfragment UserInfo_user on Identity {\n  id\n  email\n  lastName\n}\n\nfragment Location on Location {\n  locationId\n  name\n  city {\n    ...City\n  }\n}\n\nfragment City on LocationArea {\n  name\n  slug\n}\n"
};

module.exports = batch;
