import React from 'react'
import cupImage from './beer_cup.png'
import {Link} from 'react-router-dom' 


export const Cup = () => (
    <Link to={'/groups'}>
            <img src = {cupImage}/>
    </Link>
 )
 
