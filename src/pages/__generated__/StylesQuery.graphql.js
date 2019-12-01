/**
 * @flow
 * @relayHash 3df008a2eb2363c2ff3f022aac16ae4b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StylesQueryVariables = {|
  groupName: string
|};
export type StylesQueryResponse = {|
  +styles: ?$ReadOnlyArray<?{|
    +name: string,
    +abv: string,
    +ibu: string,
    +pair: string,
  |}>
|};
export type StylesQuery = {|
  variables: StylesQueryVariables,
  response: StylesQueryResponse,
|};
*/


/*
query StylesQuery(
  $groupName: String!
) {
  styles(group: $groupName) {
    name
    abv
    ibu
    pair
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "groupName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "group",
    "variableName": "groupName"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "abv",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ibu",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pair",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StylesQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "styles",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Style",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StylesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "styles",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Style",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
    "name": "StylesQuery",
    "id": null,
    "text": "query StylesQuery(\n  $groupName: String!\n) {\n  styles(group: $groupName) {\n    name\n    abv\n    ibu\n    pair\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec4e2fe4d283c2b7d0fe8012e9a1fc51';
module.exports = node;
