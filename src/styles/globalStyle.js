import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  body{
    background: #EFEFEF; 
  }
  #root{
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex; 
    flex-direction:column;     
  
  }
`;



