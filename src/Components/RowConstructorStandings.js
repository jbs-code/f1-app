import React from 'react'

function RowConstructorStandings({ constructor }) {
    return (
        <tr >
            <td >
                {constructor.position}
            </td>
            <td >
                {constructor.points}
            </td>
            <td >
                {constructor.wins}
            </td>
            <td >
                {constructor.constructor}
            </td>
        </tr>
    )
}

export default RowConstructorStandings