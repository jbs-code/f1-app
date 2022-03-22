import React, { useEffect } from 'react';
import { selectSeasonHelp } from '../helpers/selectSeasonHelp';
import useFetchSeason from '../hooks/useFetchSeason';
import './selectSeason.css';

function SelectSeason({ getSeason, season }) {
    const selectSeason = useFetchSeason();
    useEffect(() => {
        selectSeasonHelp();
    }, [])

    return (
        <div className='select-container'>
            <div className='select-season'>
                <button className='select-season__button'>{season} <i className='select-sesion-icon'></i></button>
                <ul className='select-season__ul select-season__ul--oculto'>
                    {
                        selectSeason?.map((season) => {
                            return <li className='select-season__li' key={season.season} onClick={getSeason}>{season.season}</li>
                        }).reverse()
                    }
                </ul>
            </div>
        </div>
    );
}

export default SelectSeason;
