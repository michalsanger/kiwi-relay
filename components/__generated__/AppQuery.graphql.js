/**
 * @flow
 * @relayHash a1b2fcc2bb50dec0e69385e36b0fe81a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {| |};
*/


/*
query AppQuery {
  ...LocationsList
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
      }
    ]
  },
  "text": "query AppQuery {\n  ...LocationsList\n}\n\nfragment LocationsList on RootQuery {\n  allLocations(search: \"San\") {\n    edges {\n      cursor\n      node {\n        ...Location\n      }\n    }\n  }\n}\n\nfragment Location on Location {\n  locationId\n  name\n  city {\n    ...City\n  }\n}\n\nfragment City on LocationArea {\n  name\n  slug\n}\n"
};

module.exports = batch;
