import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import  environment  from "../relay/environment";
import {StylesList} from "./stylesBeerList"


//TODO Use propTypes

export const StylesOfBeer = (props) => {
  return(
    
    <QueryRenderer
        environment={environment}
        query={graphql`
        query StylesOfBeerQuery($groupName:String!) {
            styles(group: $groupName) {
                name
                abv
                ibu
                pair
                img
            }
        }
      `}
        variables={{groupName: props.match.params.groupName }} 
        render={({error, props}) => {
          
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
           <StylesList styles={props.styles}/>
          );
        }}
      />
    )
}
