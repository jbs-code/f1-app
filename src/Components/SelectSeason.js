import React, { useEffect } from 'react';
import { selectSeasonHelp } from '../helpers/selectSeasonHelp';
import useFetch from '../hooks/useFetch';

function SelectSeason({ getSeason, season }) {
    const url = 'https://ergast.com/api/f1/seasons.json?limit=500';
    const data = useFetch(url);
    const selectSeason = data?.MRData.SeasonTable.Seasons;

    useEffect(() => {
        selectSeasonHelp();
    }, [])

    return (
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
    );
}

export default SelectSeason;
