/**
 * @flow
 * @relayHash 643514cfcf530eefe318f49f107e0cc9
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
    +img: string,
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
    img
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
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "img",
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
          (v5/*: any*/),
          (v6/*: any*/)
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
          (v6/*: any*/),
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
    "text": "query StylesQuery(\n  $groupName: String!\n) {\n  styles(group: $groupName) {\n    name\n    abv\n    ibu\n    pair\n    img\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f0540d05ee52b7f48a8d990811d8b49';
module.exports = node;
