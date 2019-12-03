import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'


 const BeerGroupCard = styled.button`
  display: flex;
  align-items: center;
  width: 50vw;
  height:30vh;
  margin: 10px;
  padding: 10px;
  background-color:#faf0e6;
  color: #495057;
  border: 2px;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
 const Info = styled.span`
  padding: 20px;
  overflow:auto;
`;

const Title = styled.h1`
  color:red;
`;


export const Groups = ({groups}) => {

return(
    groups.map((group, idx) => {
        return (
            <Link key ={idx} to={`/${group.name}`} style= {{textDecoration: 'none'}}>
                <BeerGroupCard >
                    <Title>{group.name}</Title>
                    <Info>{group.description}</Info>
                </BeerGroupCard>
            </Link>
        )
    })
)
}