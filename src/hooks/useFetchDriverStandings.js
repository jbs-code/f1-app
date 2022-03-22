import { useEffect, useState } from 'react'

function useFetchDriverStandings(season = 'current') {
    const [data, setData] = useState(null);
    const url = `https://ergast.com/api/f1/${season}/driverStandings.json`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const driversList = data?.MRData.StandingsTable.StandingsLists[0];
                const driverStandings = driversList?.DriverStandings;
                setData(driverStandings);
            });
    }, [url]);

    return data;
}

export default useFetchDriverStandings;
