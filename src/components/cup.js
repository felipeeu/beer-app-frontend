import React from 'react'
import cupImage from '../images/beer_cup.png'
import {Link} from 'react-router-dom' 


export const Cup = () => (
    <Link to={'/home'}>
            <img src = {cupImage}/>
    </Link>
 )
 
