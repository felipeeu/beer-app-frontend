/**
 * @flow
 * @relayHash 26c42b0623d6d56a9d813430ba7d30f4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StylesOfBeerQueryVariables = {|
  groupName: string
|};
export type StylesOfBeerQueryResponse = {|
  +styles: ?$ReadOnlyArray<?{|
    +name: string,
    +abv: string,
    +ibu: string,
    +pair: string,
    +img: string,
  |}>
|};
export type StylesOfBeerQuery = {|
  variables: StylesOfBeerQueryVariables,
  response: StylesOfBeerQueryResponse,
|};
*/


/*
query StylesOfBeerQuery(
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
    "name": "StylesOfBeerQuery",
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
    "name": "StylesOfBeerQuery",
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
    "name": "StylesOfBeerQuery",
    "id": null,
    "text": "query StylesOfBeerQuery(\n  $groupName: String!\n) {\n  styles(group: $groupName) {\n    name\n    abv\n    ibu\n    pair\n    img\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7a8ff246c2540c15bf197ec60d054ddd';
module.exports = node;
