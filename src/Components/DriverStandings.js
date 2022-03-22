import React, { useState } from 'react';
import useFetchDriverStandings from '../hooks/useFetchDriverStandings';
import RowDriverStandings from './RowDriverStandings';
import SelectSeason from './SelectSeason';

function DriverStandings() {

    const [season, setSeason] = useState('current')
    const driverStandings = useFetchDriverStandings(season);

    const getSeason = (e) => {
        setSeason(e.target.innerText);
    }

    return (
        <>
        <header className="header"><h1>Campeonato de pilotos</h1></header>
            

            <SelectSeason getSeason={getSeason} season={season} />

            <table className="tableDriverStandings">
                <tbody>
                    <tr>
                        <th>Posición</th>
                        <th>Piloto</th>
                        <th>Equipo</th>
                        <th>Puntos</th>
                        <th>Victorias</th>
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
        </>
    );
}

export default DriverStandings
