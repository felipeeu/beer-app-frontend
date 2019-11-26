import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro'
import {QueryRenderer} from 'react-relay';


import environment from './environment'



class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
        query AppQuery {
       groups{
            name 
        }
    }  
      `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            console.log("ERROR >>>>: ",error)
            // return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>Hello World!</div>;
          // return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}

export default App;