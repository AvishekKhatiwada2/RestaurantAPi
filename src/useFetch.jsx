import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token,myToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTc1Njc4NDUsImlzcyI6IkhpdGVjaEFQSUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSGl0ZWNoQVBJU2VydmljZVBvc3RNYW5DbGllbnQifQ.amJBJmY9Svb9bp97fbZfBZ0lAxwv0zeJtktSmc3FtqA');

    useEffect(() => {
        fetch(url,{
            method : 'GET',
            headers : { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'LicId' : '2622'
            }
        })
            .then (response => {
                if(!response.ok){
                    throw Error('Error While fetching Data. Status not Ok');
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, []);

    return ( 
        {data, error,loading}
     );
}
 
export default useFetch;