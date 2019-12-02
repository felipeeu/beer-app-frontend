import React from 'react'
import {BeerStylesCard, Data} from '../styles/beerStyles'


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
            </Data>
            <img src ={style.img} alt= 'beerimage'/>
            </BeerStylesCard>
        )
    })
  
)
}