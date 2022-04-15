import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import RowConstructorStandings from '../RowConstructorStandings';
import SelectSeason from '../SelectSeason';
import { gsapTable } from '../../helpers/gsapHelper';

//Comparte los mismos estilos de la table del componente ChampDrivers.
function ChampConstructors() {
  const [season, setSeason] = useState('current');

  const url = `https://ergast.com/api/f1/${season}/constructorStandings.json`;
  const data = useFetch(url);
  const constructors = data?.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings;

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

      {
        (season < 1958) && <h1 className='msg-buscando text-shadow'>No hay información de este año.</h1>
      }
      <table className="tableDriverStandings">
        <tbody>
          <tr>
            <th className='text-shadow'>Posición</th>
            <th className='text-shadow'>Puntos</th>
            <th className='text-shadow'>Victorias</th>
            <th className='text-shadow'>Constructor</th>
          </tr>
          {
            constructors?.map(d =>
              <RowConstructorStandings
                key={d.Constructor.constructorId}
                constructor={
                  {
                    position: d.position,
                    points: d.points,
                    wins: d.wins,
                    constructor: d.Constructor.name
                  }
                }
              />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ChampConstructors