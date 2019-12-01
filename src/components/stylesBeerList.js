import React from 'react'
import {BeerStylesCard} from '../styles/beerStyles'


export const StylesList = ({styles}) => {

   
return(
    styles.map((style,idx)=>{
        return(
            <BeerStylesCard key= {idx}>
            <span>
            Estilo: {style.name}
            </span>
            <span>
            Graduação alcoólica: {style.abv}
            </span>
            <span>
            Índice de amargor: {style.ibu}
            </span>
            <span>
            Harmonizações: {style.pair}
            </span>
            </BeerStylesCard>
        )
    })
  
)
}