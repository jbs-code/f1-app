import React from 'react'

function RowDriverStandings({driver}) {
    return (
        <tr >
            <td >
                {driver.position}
            </td>
            <td >
                {driver.driver}
            </td>
            <td >
                {driver.team}
            </td>
            <td >
                {driver.points}
            </td>
            <td >
                {driver.wins}
            </td>
        </tr>
    );
}

export default RowDriverStandings
