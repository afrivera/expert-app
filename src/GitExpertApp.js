import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = ({ defaultCategories=[]}) => {

    // const categories = ['One Punchs', 'Samurai X', 'Dragon Ball'];
    const [Categories, setCategories] = useState(defaultCategories);

    // const handleAdd =()=>{
    //     //agregar un elemento a un arreglo
    //     // setCategories( [...Categories, 'Pokemon']); otra forma
    //     setCategories( cats=>[...cats, 'Pokemon']);
    // }
    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    /* Categories.map( category  =>{
                        //el key no puede ser el indice
                        return <li key={category}> {category}</li>;
                    }) */
                    Categories.map( category =>(
                        <GifGrid
                            key={category}
                            category ={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}


