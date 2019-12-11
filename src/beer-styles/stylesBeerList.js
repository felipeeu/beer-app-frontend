import React from 'react'


import styled from "styled-components";

 const BeerStylesCard= styled.div`

  /* display: flex;
  flex-direction:column; */
  align-items: center;
  /* width: 50vw;
  height:auto;
  margin: 10px;*/
  padding: 10px; 
  margin-top:10px;
  background-color:#faf0e6;
  color: #495057;
  border: 2px;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

 const Data = styled.div`
  display: grid;
`;


export const StylesList = ({styles}) => {

   
return(
    styles.map((style,idx)=>{
        return(
            <BeerStylesCard key= {idx}>
            <Data>
            <span>
            <b>Estilo:</b> {style.name}
            </span>
            <span>
            <b>Graduação alcoólica:</b> {style.abv} %
            </span>
            <span>
            <b>Índice de amargor:</b> {style.ibu} IBU
            </span>
            <span>
            <b>Harmonizações:</b> {style.pair}
            </span>
            <img src ={style.img} alt= 'beerimage'/>
            </Data>
            </BeerStylesCard>
        )
    })
  
)
}