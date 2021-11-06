import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e)=>{
        // console.log(e.target.value);
        setinputValue( e.target.value)
        
        // console.log('HandleInputChange llamado');se puso para pruebas

    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('no hay error');
        if( inputValue.trim().length > 2){

            // console.log('hecho');
            setCategories( cats=>[inputValue, ...cats]);
            setinputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes={
    //props requerida
    setCategories: PropTypes.func.isRequired
}
