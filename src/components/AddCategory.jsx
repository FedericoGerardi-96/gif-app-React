import React, { useState } from 'react'
import  { Button, Form }  from  'react-bootstrap' ;
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {

    const [Value, setValue] = useState('');

    const ModificarValue = (e) =>{        
        setValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const agregarCategoria = () => {
        setCategorias( Categorias => [ Value, ...Categorias ] );
    }

    return (
        <form onSubmit = { handleSubmit }>
               <Form.Control 
               type="text" 
               placeholder="Nombre..." 
               value = { Value }
               onChange = { ModificarValue }
               /> 
               <br/>
               <Button onClick= { agregarCategoria }  variant="primary">Agregar</Button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;