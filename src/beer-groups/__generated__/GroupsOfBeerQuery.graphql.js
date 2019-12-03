/**
 * @flow
 * @relayHash df0a3d15977808cf128fd15a0677661d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GroupsOfBeerQueryVariables = {||};
export type GroupsOfBeerQueryResponse = {|
  +groups: ?$ReadOnlyArray<?{|
    +name: string,
    +description: string,
  |}>
|};
export type GroupsOfBeerQuery = {|
  variables: GroupsOfBeerQueryVariables,
  response: GroupsOfBeerQueryResponse,
|};
*/


/*
query GroupsOfBeerQuery {
  groups {
    name
    description
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GroupsOfBeerQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "GroupsOfBeerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "groups",
        "storageKey": null,
        "args": null,
        "concreteType": "Group",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "GroupsOfBeerQuery",
    "id": null,
    "text": "query GroupsOfBeerQuery {\n  groups {\n    name\n    description\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '08574343d7e19726f9a3070f72cbfe01';
module.exports = node;
