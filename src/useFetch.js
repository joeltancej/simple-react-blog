import { useState, useEffect } from "react";

const useFetch = (url) => {

    // Calling this data so it can be reused for other functionalities
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    console.log(err);
                    setIsPending(false);
                });
        }, 1500)
    }, [url]);

    return { data, isPending, error }
}
 
export default useFetch;