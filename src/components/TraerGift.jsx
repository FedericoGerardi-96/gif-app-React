import React from 'react'
import  { Button, Form, Card }  from  'react-bootstrap' ;
import { useAxionData } from '../hooks/useAxionData';
import { MostrarGift } from './MostrarGift';
import Spinner from 'react-bootstrap/Spinner'

const TraerGift = ({ Category }) => {


    const { data:Images, loading } = useAxionData( Category );

    return (
        <>
            <h1> { Category } </h1>   
            <Card >                
                { loading &&  <Spinner animation="border" variant="success" /> }
                <div className="Imagenes">                    
                    {
                        Images.map( img  => ( <MostrarGift key = { img.id } { ...img } ></MostrarGift> ))
                    }
                </div>             
            </Card>
      

            
        </>
    )
}

export default TraerGift;
