import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import  environment  from "../relay/environment";
import {Groups} from "./groups"


export const GroupsOfBeer = () => {
    return(

    <QueryRenderer
        environment={environment}
        query={graphql`
        query GroupsOfBeerQuery {
          groups {
            name
            description
          }
        }
      `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <Groups groups= {props.groups}/>
          );
        }}
      />
    )
}