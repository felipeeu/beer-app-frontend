import React from "react";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import  environment  from "../environment";



export const Styles = () => {
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
         variables={{groupName: "ale" }} //TODO indicar a variavel do grupo
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
            console.log("PROPS", props)
          return (
            // <Groups groups= {props.groups}/>
          <div>Testando styles</div>
          );
        }}
      />
    )
}