import React /* { useEffect, useState } */ from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GigGridItem } from './GigGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs( category );

    // //para que no se dispare de nuevo la petición
    // useEffect( ()=>{
    //     getGifs( category )
    //         .then(setImages);
    // }, [ category ])

    

    // getGifs();
    return (
        <>
            <h3 className= "animate__animated animate__fadeIn">{ category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {/* <h2>{count }</h2> */}
                {/* <button onClick={ ()=>setCount(count + 1)}>count</button> */}
                {/* <ol>
                    {
                        images.map( img=>(
                            <li key={img.id}>{img.title}</li>
                        ))
                    }
                </ol> */}
                {
                    images.map(img =>(
                        <GigGridItem 
                            key={img.id}
                            {... img}    
                        />
                    ))
                }
               
            </div>
        
        </>
    )
}

GifGrid.propTypes= {
    category: PropTypes.string.isRequired
}
