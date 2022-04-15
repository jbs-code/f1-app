import React, { useEffect } from 'react'
import { gsapHome } from '../../helpers/gsapHelper';

const img = require.context('../../assets');

function Home() {
    useEffect(() => {
      gsapHome();
    }, [])
    
    return (
        <div className='home'>
            <h1 className='home-title text-shadow'>Entérate de los resultados de la Fórmula 1</h1>
            <picture className='home-img'>
                <img src={img('./f1-img.png')} alt="f1-img" />
            </picture>
        </div>
    )
}

export default Home