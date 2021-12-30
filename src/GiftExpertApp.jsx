import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './components/AddCategory';
import TraerGift from './components/TraerGift';

const GiftExpertApp = () => {

    const [Categorias, setCategorias] = useState([])

    const AgregarCategoria = () => {
        setCategorias( [...Categorias, 'Samurai X'] );
    }

    return(
        <>
        <h1>GiftApp</h1>        
        <hr/>
        <AddCategory setCategorias = { setCategorias }></AddCategory>
        <br/>
        <br/>
        <div>
            {                 
               Categorias.map( Cate => ( <TraerGift key = { Cate } Category = { Cate }></TraerGift> ) )  
            }
        </div>

        </>
            )

}

export default GiftExpertApp;