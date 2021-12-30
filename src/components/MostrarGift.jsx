import React from 'react'
import 'animate.css';

export const MostrarGift = ({ id, title, url }) => {
    return (
        <div className="image animate__animated animate__fadeIn animate__delay-2s">            
                <img alt =  { title }  src = { url } ></img>
                <img alt =  { title }  src = { url } ></img>
        </div>
    )
}
