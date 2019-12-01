import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import  environment  from "../environment";
import {Groups} from "../components/groups"


export const Home = () => {
    return(

    <QueryRenderer
        environment={environment}
        query={graphql`
        query HomeQuery {
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