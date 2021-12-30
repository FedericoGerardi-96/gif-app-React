import React, { useEffect, useState } from 'react'
import { PeticionHttpGift } from '../helpers/ObtenerGif'

export const useAxionData = ( Category ) => {
    const [ state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        PeticionHttpGift( Category )
        .then( (img) => {
            setState( {
                data: img,
                loading: false
            } );            
        } );   
    }, [])


    return state;
}