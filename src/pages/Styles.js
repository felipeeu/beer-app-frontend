import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import  environment  from "../environment";
import {StylesList} from "../components/stylesBeerList"


//TODO Use propTypes

export const Styles = (props) => {
  return(
    
    <QueryRenderer
        environment={environment}
        query={graphql`
        query StylesQuery($groupName:String!) {
            styles(group: $groupName) {
                name
                abv
                ibu
                pair
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
