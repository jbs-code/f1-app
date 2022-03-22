import { useEffect, useState } from 'react'

function useFetchSeason() {
    const [season, setSeason] = useState(null);
    const url = 'http://ergast.com/api/f1/seasons.json?limit=500';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const res = data.MRData;
                const seasonArray = res.SeasonTable.Seasons;
                setSeason(seasonArray);
            });
    }, [url]);

    return season;
}

export default useFetchSeason
