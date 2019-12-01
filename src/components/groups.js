import React from 'react'
import {BeerGroupCard, Info ,Title} from '../styles/beerGroup'


export const Groups = ({groups}) => {

return(
    groups.map((group, idx) => {
        return <BeerGroupCard key ={idx}>
        <Title>{group.name}</Title>
        <Info>{group.description}</Info>
        </BeerGroupCard>
    })
)
}