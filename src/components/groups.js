import React from 'react'
import {BeerGroupCard, Info ,Title} from '../styles/beerGroup'
import {Link} from 'react-router-dom'

export const Groups = ({groups}) => {

    //TODO  Solve LInk problem
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