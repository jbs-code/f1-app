import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    // const url = 'https://ergast.com/api/f1/current/driverStandings.json';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, [url]);
    

    return data;
}

export default useFetch