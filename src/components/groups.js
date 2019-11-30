import React from 'react'
import {BeerGroup} from '../styles/beerGroup'


export const Groups = ({groups}) => {

return(
    groups.map((group, idx) => {
        return <BeerGroup key ={idx}>{group.name}</BeerGroup>
    })
)
}