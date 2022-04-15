import React, { useState, useEffect } from 'react'
import { gsapTable } from '../../helpers/gsapHelper';
import useFetch from '../../hooks/useFetch';
import RowDriverStandings from '../RowDriverStandings';
import SelectSeason from '../SelectSeason';

function ChampDrivers() {
    const [season, setSeason] = useState('current');

    const url = `https://ergast.com/api/f1/${season}/driverStandings.json`;
    const data = useFetch(url);
    const driverStandings = data?.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    const getSeason = (e) => {
        setSeason(e.target.innerText);
    }

    useEffect(() => {
        gsapTable();
      }, []);

    return (
        <div className='drivers'>
            <SelectSeason getSeason={getSeason} season={season} />

            {
                !data && <h1 className='msg-buscando text-shadow'>Buscando...</h1>
            }

            <table className="tableDriverStandings">
                <tbody>
                    <tr>
                        <th className='text-shadow'>Posición</th>
                        <th className='text-shadow'>Piloto</th>
                        <th className='text-shadow'>Equipo</th>
                        <th className='text-shadow'>Puntos</th>
                        <th className='text-shadow row-wins'>Victorias</th>
                    </tr>
                    {
                        driverStandings?.map(d =>
                            <RowDriverStandings
                                key={d.Driver.driverId}
                                driver={
                                    {
                                        driverId: d.Driver.driverId,
                                        position: d.position,
                                        driver: `${d.Driver.givenName} ${d.Driver.familyName}`,
                                        points: d.points,
                                        wins: d.wins,
                                        team: d.Constructors[0]?.name
                                    }
                                }
                            />)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ChampDrivers